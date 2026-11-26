import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  MessageCircle,
  UserRound,
} from "lucide-react";
import { getKnowledgeArticle, knowledgeArticles } from "../../../data/knowledgeArticles";
import styles from "./page.module.scss";
import BackLink from "@/app/components/BackLink";

export function generateStaticParams() {
  return knowledgeArticles.map((article) => ({ slug: article.slug }));
}

export default async function KnowledgeArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);

  if (!article) notFound();

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <BackLink href="/network/knowledge">بازگشت به پایگاه دانش</BackLink>
          <span className={styles.category}>{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <div className={styles.articleMeta}>
            <span>
              <UserRound size={16} aria-hidden="true" />
              {article.author}
            </span>
            <span>
              <CalendarDays size={16} aria-hidden="true" />
              انتشار: {article.publishedAt}
            </span>
            <span>{article.readTime} مطالعه</span>
          </div>
        </div>
      </section>

      <div className={styles.content}>
        <article className={styles.article}>
          <div className={styles.articleIcon} aria-hidden="true">
            {article.icon}
          </div>
          <p className={styles.sampleNotice}>
            این مقاله و اطلاعات نویسنده و دیدگاه‌ها برای نمایش نمونه هستند.
          </p>
          <div className={styles.articleText}>
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <section className={styles.comments} aria-labelledby="comments-heading">
          <div className={styles.commentsHeading}>
            <div>
              <span>گفت‌وگوی خوانندگان</span>
              <h2 id="comments-heading">دیدگاه‌ها</h2>
            </div>
            <span className={styles.commentCount}>
              <MessageCircle size={16} aria-hidden="true" />
              {article.comments.length} دیدگاه نمونه
            </span>
          </div>

          <div className={styles.commentList}>
            {article.comments.map((comment, index) => (
              <article className={styles.comment} key={`${comment.author}-${index}`}>
                <div className={styles.commentAvatar} aria-hidden="true">
                  {comment.author.slice(0, 1)}
                </div>
                <div>
                  <div className={styles.commentMeta}>
                    <strong>{comment.author}</strong>
                    <time>{comment.date}</time>
                  </div>
                  <p>{comment.text}</p>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.commentNotice}>
            ثبت دیدگاه در نسخهٔ نمایشی فعال نیست.
          </p>
        </section>

        <BackLink href="/network/knowledge">
          <ArrowLeft size={16} aria-hidden="true" /> بازگشت به فهرست مقاله‌ها
        </BackLink>
      </div>
    </main>
  );
}
