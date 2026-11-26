import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import DomainShell, { type DomainLink } from "./DomainShell";
import styles from "./ComingSoonDomain.module.scss";

type ComingSoonDomainProps = {
  name: string;
  description: string;
  homeHref: string;
};

export default function ComingSoonDomain({
  name,
  description,
  homeHref,
}: ComingSoonDomainProps) {
  const links: DomainLink[] = [
    { href: "/", label: "انتخاب حوزه" },
    { href: "#courses", label: "دوره‌ها" },
    { href: "#about", label: "درباره این حوزه" },
    { href: "#contact", label: "تماس با ما" },
  ];

  return (
    <DomainShell
      name={name}
      description={description}
      homeHref={homeHref}
      courseHref="#courses"
      links={links}
    >
      <main className={styles.main}>
        <section className={styles.hero} id="about">
          <span className={styles.icon} aria-hidden="true">
            <BookOpen size={30} />
          </span>
          <span className={styles.eyebrow}>SkillHub Academy</span>
          <h1>آموزش تخصصی {name}</h1>
          <p>{description}</p>
          <span className={styles.status}>این بخش در حال آماده‌سازی است</span>
        </section>

        <section className={styles.courses} id="courses">
          <div>
            <span className={styles.sectionLabel}>مسیر یادگیری</span>
            <h2>دوره‌های {name}</h2>
            <p>اطلاعات دوره‌ها پس از آماده‌شدن این حوزه در این بخش قرار می‌گیرد.</p>
          </div>
          <Link href="/" className={styles.backLink}>
            بازگشت به انتخاب حوزه <ArrowLeft size={17} aria-hidden="true" />
          </Link>
        </section>
      </main>
    </DomainShell>
  );
}
