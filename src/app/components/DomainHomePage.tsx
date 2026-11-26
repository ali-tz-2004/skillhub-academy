import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Headset,
  Layers3,
} from "lucide-react";
import type { DomainHomeContent, DomainCoursePreview } from "../data/domains";
import DomainShell from "./DomainShell";
import styles from "./DomainHomePage.module.scss";

type DomainHomePageProps = {
  content: DomainHomeContent;
};

const courseSections = [
  { id: "latest-courses", title: "آخرین دوره‌ها", key: "latestCourses" },
  { id: "best-selling-courses", title: "دوره‌های پرفروش", key: "bestSellingCourses" },
  { id: "popular-courses", title: "دوره‌های محبوب", key: "popularCourses" },
] as const;

function CourseCard({ course }: { course: DomainCoursePreview }) {
  const card = (
    <>
      <span className={styles.courseCategory}>{course.category}</span>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      {course.href ? (
        <span className={styles.cardAction}>
          جزئیات دوره <ArrowLeft size={16} aria-hidden="true" />
        </span>
      ) : (
        <span className={styles.sampleLabel}>نمونهٔ نمایشی</span>
      )}
    </>
  );

  return course.href ? (
    <Link className={styles.courseCard} href={course.href}>
      {card}
    </Link>
  ) : (
    <article className={styles.courseCard}>{card}</article>
  );
}

export default function DomainHomePage({ content }: DomainHomePageProps) {
  return (
    <DomainShell
      name={content.name}
      description={content.description}
      homeHref={content.homeHref}
      courseHref={content.courseHref}
      links={content.links}
    >
      <main className={styles.main}>
        <section className={styles.hero} id="about">
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <GraduationCap size={18} aria-hidden="true" />
              مسیر یادگیری {content.name}
            </span>
            <h1>{content.description}</h1>
            <p>{content.introduction}</p>
            <Link className={styles.primaryButton} href={content.courseHref}>
              مشاهدهٔ دوره‌ها <ArrowLeft size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <BookOpen size={82} strokeWidth={1.2} />
            <span>LEARN / BUILD / GROW</span>
          </div>
        </section>

        <section className={styles.section} id="categories">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>مسیرهای آموزشی</span>
            <h2>دسته‌بندی‌های {content.name}</h2>
            <p>حوزه‌ای را که می‌خواهید در آن یاد بگیرید انتخاب کنید.</p>
          </div>
          <div className={styles.categoryGrid}>
            {content.categories.map((category) => (
              <Link
                className={styles.categoryCard}
                href={content.courseHref}
                key={category}
              >
                <Layers3 size={22} aria-hidden="true" />
                <span>{category}</span>
                <ArrowLeft size={17} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>

        <p className={styles.sampleNotice}>
          فهرست دوره‌ها و برچسب‌های فروش و محبوبیت در این نسخه برای نمایش رابط کاربری نمونه هستند.
        </p>

        {courseSections.map((section) => (
          <section className={styles.courseSection} id={section.id} key={section.id}>
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>{content.name}</span>
              <h2>{section.title}</h2>
              <p>چند نمونه از مسیرهای یادگیری این حوزه.</p>
            </div>
            <div className={styles.courseGrid}>
              {content[section.key].map((course, index) => (
                <CourseCard course={course} key={`${course.title}-${index}`} />
              ))}
            </div>
          </section>
        ))}

        <section className={styles.services} id="services">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>همراه مسیر یادگیری</span>
            <h2>خدمات آموزشی</h2>
          </div>
          <div className={styles.serviceGrid}>
            {content.services.map((service) => (
              <article className={styles.serviceCard} key={service}>
                <span className={styles.serviceIcon} aria-hidden="true">
                  <BookOpen size={21} />
                </span>
                <h3>{service}</h3>
              </article>
            ))}
          </div>
          {content.assessment && (
            <div className={styles.assessmentBlock}>
              <div className={styles.assessmentHeading}>
                <span className={styles.eyebrow}>ارزیابی و گواهینامه</span>
                <h3>آزمون‌ها و گواهینامه‌های داخلی</h3>
              </div>
              <div className={styles.assessmentGrid}>
                <article className={styles.assessmentCard}>
                  <span className={styles.assessmentIcon} aria-hidden="true">
                    <ClipboardCheck size={22} />
                  </span>
                  <div>
                    <h4>{content.assessment.exam.title}</h4>
                    <p>{content.assessment.exam.description}</p>
                    <ul>
                      {content.assessment.exam.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
                <article className={styles.assessmentCard}>
                  <span className={styles.assessmentIcon} aria-hidden="true">
                    <BadgeCheck size={22} />
                  </span>
                  <div>
                    <h4>{content.assessment.certificate.title}</h4>
                    <p>{content.assessment.certificate.description}</p>
                    <ul>
                      {content.assessment.certificate.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
              <p className={styles.assessmentNote}>{content.assessment.note}</p>
            </div>
          )}
        </section>

        <section className={styles.consultation} id="consultation">
          <span className={styles.consultIcon} aria-hidden="true">
            <Headset size={26} />
          </span>
          <div>
            <span className={styles.eyebrow}>مشاورهٔ آموزشی</span>
            <h2>برای انتخاب مسیر مناسب راهنمایی بگیرید.</h2>
            <p>{content.consultation}</p>
          </div>
          <Link href="#contact" className={styles.consultButton}>
            راه‌های ارتباطی <ArrowLeft size={17} aria-hidden="true" />
          </Link>
        </section>
      </main>
    </DomainShell>
  );
}
