import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  Monitor,
} from "lucide-react";
import { categories, courses } from "../../data/courses";
import { courseDetails } from "../../data/courseDetails";
import styles from "./page.module.scss";
import BackLink from "@/app/components/BackLink";

const courseGroups = categories
  .map((category, index) => ({
    category,
    id: `category-${index}`,
    courses: courses.filter((course) => course.category === category),
  }))
  .filter((group) => group.courses.length > 0);

export default function CourseCalendarPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <BackLink href="/network">بازگشت به صفحهٔ شبکه</BackLink>
          <span className={styles.eyebrow}>
            <CalendarDays size={17} aria-hidden="true" />
            برنامهٔ برگزاری دوره‌ها
          </span>
          <h1>تقویم دوره‌ها</h1>
          <p>
            زمان‌بندی کلاس‌های آموزشی شبکه را بر اساس دسته‌بندی بررسی کنید.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <p className={styles.sampleNotice}>
          تاریخ‌ها و ساعت‌های این تقویم نمونه هستند و برای نمایش طراحی درج شده‌اند.
        </p>

        <nav className={styles.categoryNav} aria-label="دسته‌بندی دوره‌ها">
          {courseGroups.map((group) => (
            <a href={`#${group.id}`} key={group.id}>
              {group.category}
            </a>
          ))}
        </nav>

        {courseGroups.map((group) => (
          <section className={styles.categorySection} id={group.id} key={group.id}>
            <div className={styles.sectionHeading}>
              <span>{group.category}</span>
              <h2>برنامهٔ کلاس‌ها</h2>
            </div>

            <div className={styles.courseGrid}>
              {group.courses.map((course) => {
                const details = courseDetails[course.slug];
                const DeliveryIcon = course.deliveryMode.includes("آنلاین")
                  ? Monitor
                  : MapPin;

                return (
                  <article className={styles.courseCard} key={course.slug}>
                    <div className={styles.courseHeading}>
                      <span className={styles.courseIcon} aria-hidden="true">
                        {course.icon}
                      </span>
                      <div>
                        <span className={styles.level}>{course.level}</span>
                        <h3>{course.title}</h3>
                      </div>
                    </div>

                    <div className={styles.courseMeta}>
                      <span>
                        <Clock3 size={16} aria-hidden="true" />
                        {course.duration}
                      </span>
                      <span>
                        <DeliveryIcon size={16} aria-hidden="true" />
                        {course.deliveryMode}
                      </span>
                    </div>

                    <div className={styles.classList}>
                      {details.activeClasses.map((activeClass) => (
                        <div className={styles.classSchedule} key={activeClass.title}>
                          <strong>{activeClass.title}</strong>
                          <span>
                            <CalendarDays size={15} aria-hidden="true" />
                            شروع {activeClass.startDate}
                          </span>
                          <span>{activeClass.days}</span>
                          <span>{activeClass.time}</span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.courseFooter}>
                      <div>
                        <span>پیش‌نیاز</span>
                        <p>{details.prerequisites.join("، ")}</p>
                      </div>
                      <div>
                        <span>شهریه</span>
                        <strong>{course.price} تومان</strong>
                      </div>
                    </div>

                    <Link
                      className={styles.detailLink}
                      href={`/network/courses/${course.slug}`}
                    >
                      جزئیات دوره <ArrowLeft size={16} aria-hidden="true" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}
