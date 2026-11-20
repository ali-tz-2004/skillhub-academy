"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Clock3,
  Users,
  ArrowLeft,
  BookOpen,
  SlidersHorizontal,
} from "lucide-react";
import styles from "./page.module.scss";
import { categories as courseCategories, courses } from "../../data/courses";
import BackLink from "@/app/components/BackLink";

const categories = ["همه دوره ها", ...courseCategories];

const levels = ["همه سطوح", "مقدماتی", "متوسط", "پیشرفته"];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("همه دوره ها");
  const [level, setLevel] = useState("همه سطوح");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "همه دوره ها" || course.category === category;

      const matchesLevel = level === "همه سطوح" || course.level === level;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [search, category, level]);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <BackLink href="/network">بازگشت</BackLink>
          <span className={styles.eyebrow}>
            <BookOpen size={16} />
            مسیر یادگیری شما از اینجا شروع می شود
          </span>

          <h1>
            دوره های آموزشی
            <span> برای آینده ای حرفه ای</span>
          </h1>

          <p>
            با شرکت در دوره های تخصصی، مهارت های مورد نیاز بازار کار را یاد
            بگیرید و مسیر شغلی خود را بسازید.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>آموزش هدفمند</span>
            <h2>همه دوره های آموزشی</h2>
            <p>دوره مورد نظر خود را پیدا و مسیر یادگیری تان را انتخاب کنید.</p>
          </div>

          <span className={styles.resultCount}>
            {filteredCourses.length} دوره
          </span>
        </div>

        <div className={styles.filters}>
          <div className={styles.searchBox}>
            <Search size={20} />
            <input
              type="text"
              placeholder="جستجوی نام دوره..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.filterItem}>
            <SlidersHorizontal size={18} />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterItem}>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              {levels.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredCourses.length > 0 ? (
          <div className={styles.courseGrid}>
            {filteredCourses.map((course) => (
              <article className={styles.courseCard} key={course.id}>
                <div
                  className={`${styles.courseVisual} ${styles[course.color]}`}
                >
                  <span className={styles.courseIcon}>{course.icon}</span>
                  <span className={styles.categoryBadge}>
                    {course.category}
                  </span>
                </div>

                <div className={styles.courseBody}>
                  <span className={styles.level}>{course.level}</span>

                  <h3>{course.title}</h3>
                  <p>{course.description}</p>

                  <div className={styles.courseMeta}>
                    <span>
                      <Clock3 size={16} />
                      {course.duration}
                    </span>
                    <span>
                      <Users size={16} />
                      {course.students} دانشجو
                    </span>
                  </div>

                  <div className={styles.courseFooter}>
                    <div className={styles.price}>
                      <strong>{course.price}</strong>
                      <small>تومان</small>
                    </div>

                    <Link href={`/network/courses/${course.slug}`}>
                      مشاهده دوره
                      <ArrowLeft size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <Search size={36} />
            <h3>دوره ای پیدا نشد!</h3>
            <p>عبارت جستجو یا فیلترهای انتخاب شده را تغییر دهید.</p>
          </div>
        )}
      </section>
    </main>
  );
}
