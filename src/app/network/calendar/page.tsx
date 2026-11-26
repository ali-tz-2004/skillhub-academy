import { CalendarDays } from "lucide-react";
import { categories, courses } from "../../data/courses";
import { courseDetails } from "../../data/courseDetails";
import styles from "./page.module.scss";
import BackLink from "@/app/components/BackLink";
import CalendarCourseList from "./CalendarCourseList";

const courseGroups = categories
  .map((category, index) => ({
    category,
    id: `category-${index}`,
    courses: courses
      .filter((course) => course.category === category)
      .map((course) => ({
        ...course,
        ...courseDetails[course.slug],
      })),
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
        <CalendarCourseList groups={courseGroups} />
      </section>
    </main>
  );
}
