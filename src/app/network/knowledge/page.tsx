import Link from "next/link";
import { ArrowLeft, BookOpen, CalendarDays, MessageCircle, UserRound } from "lucide-react";
import { knowledgeArticles } from "../../data/knowledgeArticles";
import styles from "./page.module.scss";
import BackLink from "@/app/components/BackLink";

export default function KnowledgeBasePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <BackLink href="/network">بازگشت به صفحهٔ شبکه</BackLink>
          <span className={styles.eyebrow}>
            <BookOpen size={17} aria-hidden="true" />
            مقاله‌ها و راهنماهای آموزشی
          </span>
          <h1>پایگاه دانش شبکه</h1>
          <p>
            مقاله‌های آموزشی را بخوانید و تجربه‌ها و پرسش‌هایتان را در دیدگاه‌ها با ما در میان بگذارید.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.sectionHeading}>
          <div>
            <span>مطالب آموزشی</span>
            <h2>تازه‌ترین مقاله‌ها</h2>
          </div>
          <p>{knowledgeArticles.length} مقالهٔ نمونه</p>
        </div>

        <p className={styles.sampleNotice}>
          مقاله‌ها، نویسندگان، تاریخ‌ها و دیدگاه‌های این بخش برای نمایش نمونه هستند.
        </p>

        <div className={styles.articleGrid}>
          {knowledgeArticles.map((article) => (
            <article className={styles.articleCard} key={article.slug}>
              <div className={styles.articleVisual} aria-hidden="true">
                <span>{article.icon}</span>
                <span className={styles.category}>{article.category}</span>
              </div>
              <div className={styles.articleBody}>
                <div className={styles.articleMeta}>
                  <span>
                    <CalendarDays size={15} aria-hidden="true" />
                    {article.publishedAt}
                  </span>
                  <span>{article.readTime} مطالعه</span>
                </div>
                <h3>
                  <Link href={`/network/knowledge/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className={styles.excerpt}>{article.excerpt}</p>
                <div className={styles.articleFooter}>
                  <span>
                    <UserRound size={15} aria-hidden="true" />
                    {article.author}
                  </span>
                  <span>
                    <MessageCircle size={15} aria-hidden="true" />
                    {article.comments.length} دیدگاه
                  </span>
                </div>
                <Link
                  className={styles.readLink}
                  href={`/network/knowledge/${article.slug}`}
                >
                  خواندن مقاله <ArrowLeft size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
