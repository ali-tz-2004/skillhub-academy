import { notFound } from "next/navigation";
import {
  Award,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  MapPin,
  Monitor,
  Star,
  UserRound,
  Users,
} from "lucide-react";
import { courses, getCourse } from "../../../data/courses";
import {
  courseDetails,
  sampleFaqs,
  sampleReviews,
} from "../../../data/courseDetails";
import styles from "./page.module.scss";
import BackLink from "@/app/components/BackLink";

const numberFormat = new Intl.NumberFormat("fa-IR");
const ratingFormat = new Intl.NumberFormat("fa-IR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

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
  const details = courseDetails[slug];

  if (!course || !details) notFound();

  const deliveryIcon = course.deliveryMode.includes("آنلاین") ? Monitor : MapPin;
  const DeliveryIcon = deliveryIcon;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <BackLink href="/network/courses">بازگشت به فهرست دوره‌ها</BackLink>
          <span className={styles.badge}>{course.category}</span>
          <h1>{course.title}</h1>
          <p>{course.description}</p>

          <div className={styles.meta}>
            <span>
              <Clock3 size={17} aria-hidden="true" />
              {course.duration}
            </span>
            <span>
              <Star size={17} fill="currentColor" aria-hidden="true" />
              {ratingFormat.format(course.rating)} از ۵
            </span>
            <span>
              <DeliveryIcon size={17} aria-hidden="true" />
              {course.deliveryMode}
            </span>
            <span>سطح: {course.level}</span>
          </div>
        </div>
      </section>

      <div className={styles.sampleNotice}>
        اطلاعات کلاس‌ها، مدرس، گواهی، پرداخت و دیدگاه‌ها در این صفحه برای نمایش رابط کاربری نمونه هستند.
      </div>

      <div className={styles.content}>
        <div className={styles.main}>
          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <BookOpen size={20} aria-hidden="true" />
              <h2>معرفی دوره</h2>
            </div>
            <p className={styles.bodyText}>{details.extraDescription}</p>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <CheckCircle2 size={20} aria-hidden="true" />
              <h2>سرفصل‌های دوره</h2>
            </div>
            <ul className={styles.syllabus}>
              {course.learn.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={19} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <Award size={20} aria-hidden="true" />
              <h2>پیش‌نیاز و گواهی</h2>
            </div>
            <div className={styles.infoColumns}>
              <div>
                <h3>پیش‌نیازها</h3>
                <ul className={styles.simpleList}>
                  {details.prerequisites.map((prerequisite) => (
                    <li key={prerequisite}>{prerequisite}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>گواهی پایان دوره</h3>
                <p className={styles.bodyText}>{details.certificate}</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <CalendarDays size={20} aria-hidden="true" />
              <h2>کلاس‌های فعال</h2>
            </div>
            <div className={styles.classGrid}>
              {details.activeClasses.map((activeClass) => (
                <article className={styles.classCard} key={activeClass.title}>
                  <h3>{activeClass.title}</h3>
                  <span>
                    <CalendarDays size={16} aria-hidden="true" />
                    شروع {activeClass.startDate}
                  </span>
                  <span>
                    <Users size={16} aria-hidden="true" />
                    {activeClass.days}
                  </span>
                  <span>
                    <Clock3 size={16} aria-hidden="true" />
                    {activeClass.time}
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <UserRound size={20} aria-hidden="true" />
              <h2>مدرس دوره</h2>
            </div>
            <div className={styles.instructorCard}>
              <span className={styles.instructorIcon} aria-hidden="true">
                <UserRound size={23} />
              </span>
              <div>
                <h3>{details.instructor}</h3>
                <p>{details.instructorDescription}</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <h2>پرسش‌های متداول</h2>
            </div>
            <div className={styles.faqList}>
              {sampleFaqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionTitle}>
              <Star size={20} aria-hidden="true" />
              <h2>دیدگاه هنرجویان</h2>
              <span className={styles.averageRating}>
                <Star size={15} fill="currentColor" aria-hidden="true" />
                {ratingFormat.format(course.rating)}
              </span>
            </div>
            <div className={styles.reviewGrid}>
              {sampleReviews.map((review, index) => (
                <article className={styles.reviewCard} key={`${review.name}-${index}`}>
                  <div className={styles.reviewHeader}>
                    <strong>{review.name}</strong>
                    <span>
                      <Star size={14} fill="currentColor" aria-hidden="true" />
                      {numberFormat.format(review.rating)}
                    </span>
                  </div>
                  <p>{review.comment}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className={styles.sidebar}>
          <div className={`${styles.visual} ${styles[course.color]}`}>
            <span>{course.icon}</span>
            <small>{course.category}</small>
          </div>
          <div className={styles.sidebarContent}>
            <span className={styles.priceLabel}>شهریهٔ کل دوره</span>
            <strong className={styles.price}>{course.price} تومان</strong>
            <div className={styles.sideMeta}>
              <span>
                <Clock3 size={16} aria-hidden="true" />
                {course.duration}
              </span>
              <span>
                <DeliveryIcon size={16} aria-hidden="true" />
                {course.deliveryMode}
              </span>
              <span>
                <BadgeCheck size={16} aria-hidden="true" />
                {details.certificate}
              </span>
            </div>
            <button className={styles.enrollButton} type="button" disabled>
              ثبت‌نام (به‌زودی)
            </button>
            <div className={styles.paymentOptions}>
              <span>
                <CreditCard size={17} aria-hidden="true" />
                روش‌های پرداخت (نمایشی)
              </span>
              <button type="button" disabled>درگاه بانکی</button>
              <button type="button" disabled>دیجی‌پی</button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
