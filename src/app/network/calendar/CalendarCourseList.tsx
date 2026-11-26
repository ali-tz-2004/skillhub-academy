"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MapPin,
  Monitor,
} from "lucide-react";
import { Course } from "../../data/courses";
import { CourseClass } from "../../data/courseDetails";
import styles from "./page.module.scss";

type CalendarCourse = Course & {
  activeClasses: CourseClass[];
  prerequisites: string[];
};

type CourseGroup = {
  category: string;
  id: string;
  courses: CalendarCourse[];
};

export default function CalendarCourseList({
  groups,
}: {
  groups: CourseGroup[];
}) {
  const [selectedDate, setSelectedDate] = useState("");
  const dates = Array.from(
    new Set(
      groups.flatMap((group) =>
        group.courses.flatMap((course) =>
          course.activeClasses.map((activeClass) => activeClass.startDate),
        ),
      ),
    ),
  ).sort();

  const visibleGroups = groups
    .map((group) => ({
      ...group,
      courses: group.courses
        .map((course) => ({
          ...course,
          activeClasses: selectedDate
            ? course.activeClasses.filter(
                (activeClass) => activeClass.startDate === selectedDate,
              )
            : course.activeClasses,
        }))
        .filter((course) => course.activeClasses.length > 0),
    }))
    .filter((group) => group.courses.length > 0);

  const visibleCourseCount = visibleGroups.reduce(
    (count, group) => count + group.courses.length,
    0,
  );

  return (
    <>
      <div className={styles.dateFilter}>
        <label htmlFor="calendar-date">مشاهدهٔ دوره‌ها در تاریخ شروع</label>
        <div className={styles.dateFilterControl}>
          <CalendarDays size={18} aria-hidden="true" />
          <select
            id="calendar-date"
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
          >
            <option value="">همهٔ تاریخ‌ها</option>
            {dates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
        <p>با انتخاب تاریخ، دوره‌هایی را می‌بینید که کلاسشان همان روز شروع می‌شود.</p>
        <span className={styles.resultCount} aria-live="polite">
          {selectedDate
            ? `${visibleCourseCount} دوره در ${selectedDate}`
            : `${visibleCourseCount} دوره در همهٔ تاریخ‌ها`}
        </span>
      </div>

      <nav className={styles.categoryNav} aria-label="دسته‌بندی دوره‌ها">
        {visibleGroups.map((group) => (
          <a href={`#${group.id}`} key={group.id}>
            {group.category}
          </a>
        ))}
      </nav>

      {visibleGroups.length > 0 ? (
        visibleGroups.map((group) => (
          <section className={styles.categorySection} id={group.id} key={group.id}>
            <div className={styles.sectionHeading}>
              <span>{group.category}</span>
              <h2>برنامهٔ کلاس‌ها</h2>
            </div>

            <div className={styles.courseGrid}>
              {group.courses.map((course) => {
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
                      {course.activeClasses.map((activeClass) => (
                        <div
                          className={styles.classSchedule}
                          key={`${activeClass.title}-${activeClass.startDate}`}
                        >
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
                        <p>{course.prerequisites.join("، ")}</p>
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
        ))
      ) : (
        <p className={styles.emptyState} role="status">
          برای این تاریخ کلاسی برنامه‌ریزی نشده است.
        </p>
      )}
    </>
  );
}
