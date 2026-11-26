"use client";

import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
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
  const [selectedStart, setSelectedStart] = useState<DateObject | null>(null);
  const [selectedEnd, setSelectedEnd] = useState<DateObject | null>(null);
  const startDay = selectedStart?.toJulianDay() ?? null;
  const endDay = selectedEnd?.toJulianDay() ?? null;
  const hasDateFilter = startDay !== null || endDay !== null;

  function toPersianDate(date: string) {
    const latinDigits = date.replace(/[۰-۹]/g, (digit) =>
      String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)),
    );

    return new DateObject({
      date: latinDigits,
      calendar: persian,
      locale: persian_fa,
    });
  }

  function formatPersianDate(date?: DateObject | null) {
    return date?.format("YYYY/MM/DD").replace(/[0-9]/g, (digit) =>
      persian_fa.digits[Number(digit)],
    );
  }

  const visibleGroups = groups
    .map((group) => ({
      ...group,
      courses: group.courses
        .map((course) => ({
          ...course,
          activeClasses: hasDateFilter
            ? course.activeClasses.filter(
                (activeClass) => {
                  const classDay = toPersianDate(activeClass.startDate).toJulianDay();
                  return (
                    (startDay === null || classDay >= startDay) &&
                    (endDay === null || classDay <= endDay)
                  );
                },
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
        <div className={styles.dateFilterHeading}>
          <CalendarDays size={19} aria-hidden="true" />
          <div>
            <h2>فیلتر بر اساس تاریخ</h2>
            <p>بازهٔ موردنظر را با تقویم شمسی انتخاب کنید.</p>
          </div>
        </div>
        <div className={styles.dateRangeFields}>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            digits={persian_fa.digits}
            format="YYYY/MM/DD"
            value={selectedStart}
            maxDate={selectedEnd || undefined}
            onChange={(date) => setSelectedStart(date)}
            calendarPosition="bottom-right"
            className="network-calendar-picker"
            zIndex={30}
            render={(_value, openCalendar) => (
              <button
                type="button"
                className={styles.dateRangeTrigger}
                onClick={openCalendar}
                aria-label="تغییر تاریخ شروع"
              >
                <span className={styles.dateRangeValue}>
                  <small>از تاریخ</small>
                  <strong>{formatPersianDate(selectedStart) || "انتخاب کنید"}</strong>
                </span>
                <CalendarDays size={17} aria-hidden="true" />
              </button>
            )}
          />
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            digits={persian_fa.digits}
            format="YYYY/MM/DD"
            value={selectedEnd}
            minDate={selectedStart || undefined}
            onChange={(date) => setSelectedEnd(date)}
            calendarPosition="bottom-right"
            className="network-calendar-picker"
            zIndex={30}
            render={(_value, openCalendar) => (
              <button
                type="button"
                className={styles.dateRangeTrigger}
                onClick={openCalendar}
                aria-label="تغییر تاریخ پایان"
              >
                <span className={styles.dateRangeValue}>
                  <small>تا تاریخ</small>
                  <strong>{formatPersianDate(selectedEnd) || "انتخاب کنید"}</strong>
                </span>
                <CalendarDays size={17} aria-hidden="true" />
              </button>
            )}
          />
        </div>
        {hasDateFilter && (
          <button
            type="button"
            className={styles.clearDateRange}
            onClick={() => {
              setSelectedStart(null);
              setSelectedEnd(null);
            }}
          >
            پاک کردن تاریخ
          </button>
        )}
        <span className={styles.resultCount} aria-live="polite">
          {hasDateFilter
            ? `${visibleCourseCount} دوره در بازهٔ انتخابی`
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
