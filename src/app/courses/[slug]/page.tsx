import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock3, Users } from "lucide-react";
import { courses, getCourse } from "../../data/courses";
import styles from "./page.module.scss";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) notFound();

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href="/courses" className={styles.back}>
            <ArrowRight size={16} />
            بازگشت به دوره ها
          </Link>

          <span className={styles.badge}>{course.category}</span>
          <h1>{course.title}</h1>
          <p>{course.description}</p>

          <div className={styles.meta}>
            <span>
              <Clock3 size={17} />
              {course.duration}
            </span>
            <span>
              <Users size={17} />
              {course.students} دانشجو
            </span>
            <span>سطح: {course.level}</span>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.main}>
          <h2>در این دوره یاد می گیرید</h2>
          <ul>
            {course.learn.map((item) => (
              <li key={item}>
                <CheckCircle2 size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className={styles.sidebar}>
          <div className={`${styles.visual} ${styles[course.color]}`}>
            {course.icon}
          </div>
          <div className={styles.price}>
            <small>شهریه دوره</small>
            <strong>{course.price} تومان</strong>
          </div>
          <button type="button" disabled>
            ثبت نام (به زودی)
          </button>
        </aside>
      </section>
    </main>
  );
}
