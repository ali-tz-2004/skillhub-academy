import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.box}>
        <span className={styles.icon}>
          <SearchX size={44} />
        </span>

        <span className={styles.code}>404</span>
        <h1>صفحه مورد نظر پیدا نشد</h1>
        <p>
          ممکنه آدرس اشتباه باشه یا این بخش هنوز آماده نشده باشه. می تونی به
          صفحه اصلی برگردی یا دوره های آموزشی رو ببینی.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primary}>
            بازگشت به صفحه اصلی
            <ArrowLeft size={18} />
          </Link>
          <Link href="/network/courses" className={styles.secondary}>
            دوره های آموزشی
          </Link>
        </div>
      </div>
    </main>
  );
}
