import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { Suspense } from "react";
import CurrentYear from "./CurrentYear";
import MobileMenu from "./MobileMenu";
import styles from "./DomainShell.module.scss";

export type DomainLink = {
  href: string;
  label: string;
};

type DomainShellProps = {
  name: string;
  description: string;
  homeHref: string;
  courseHref: string;
  links: DomainLink[];
  children: React.ReactNode;
};

export default function DomainShell({
  name,
  description,
  homeHref,
  courseHref,
  links,
  children,
}: DomainShellProps) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href={homeHref} className={styles.logo}>
            <span className={styles.logoIcon} aria-hidden="true">
              <GraduationCap size={25} />
            </span>
            <span>
              <strong>SkillHub</strong>
              <small>{name}</small>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="منوی اصلی">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href={courseHref} className={styles.headerButton}>
            مشاهدهٔ دوره‌ها <ArrowLeft size={16} aria-hidden="true" />
          </Link>
          <MobileMenu links={links} />
        </div>
      </header>

      {children}

      <footer className={styles.footer} id="contact">
        <div className={styles.container}>
          <div className={styles.footerMain}>
            <div className={styles.footerAbout}>
              <Link href={homeHref} className={styles.logo}>
                <span className={styles.logoIcon} aria-hidden="true">
                  <GraduationCap size={25} />
                </span>
                <span>
                  <strong>SkillHub</strong>
                  <small>{name}</small>
                </span>
              </Link>
              <p>{description}</p>
            </div>

            <div>
              <h2>دسترسی سریع</h2>
              {links.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div>
              <h2>حوزه‌های آموزشی</h2>
              <Link href="/network">فناوری شبکه</Link>
              <Link href="/law">حقوق</Link>
              <Link href="/management">مدیریت</Link>
            </div>

            <div>
              <h2>ارتباط با ما</h2>
              <p>شماره تماس: به‌زودی</p>
              <p>آدرس: به‌زودی</p>
              <p>ایمیل: به‌زودی</p>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>
              © <Suspense fallback={null}><CurrentYear /></Suspense> SkillHub Academy
            </span>
            <span>طراحی شده برای یادگیری و پیشرفت</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
