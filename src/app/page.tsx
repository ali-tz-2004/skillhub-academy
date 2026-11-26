import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  GraduationCap,
  Network,
  Scale,
} from "lucide-react";
import styles from "./page.module.scss";

const fields = [
  {
    title: "فناوری شبکه",
    description: "شبکه، زیرساخت، امنیت و فناوری اطلاعات",
    icon: Network,
    href: "/network",
    color: "blue",
  },
  {
    title: "حقوق",
    description: "آموزش های تخصصی حوزه حقوق",
    icon: Scale,
    href: "/law",
    color: "purple",
  },
  {
    title: "مدیریت",
    description: "مهارت های مدیریتی و کسب و کار",
    icon: BriefcaseBusiness,
    href: "/management",
    color: "green",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <span className={styles.logo}>
          <span className={styles.logoIcon}>
            <GraduationCap size={25} />
          </span>
          <span>
            <strong>SkillHub</strong>
            <small>ACADEMY</small>
          </span>
        </span>

        <h1>
          حوزه آموزشی خودت رو
          <span> انتخاب کن</span>
        </h1>
        <p className={styles.intro}>
          مسیر یادگیری موردنظرت رو انتخاب کن و قدم اول رو بردار.
        </p>
        <p className={styles.accountLinks}>
          <span>هنرجوی SkillHub هستید؟</span>
          <Link href="/login">ورود</Link>
          <Link href="/register">ثبت‌نام</Link>
        </p>

        <div className={styles.grid}>
          {fields.map((field) => {
            const Icon = field.icon;
            const content = (
              <>
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={34} />
                </span>
                <h2>{field.title}</h2>
                <p>{field.description}</p>
                {field.href ? (
                  <span className={styles.action}>
                    مشاهدهٔ دوره‌ها <ArrowLeft size={17} aria-hidden="true" />
                  </span>
                ) : (
                  <span className={styles.soon}>به‌زودی</span>
                )}
              </>
            );

            return field.href ? (
              <Link
                href={field.href}
                className={`${styles.card} ${styles[field.color]}`}
                key={field.title}
                aria-label={`ورود به حوزهٔ ${field.title}`}
              >
                {content}
              </Link>
            ) : (
              <div
                className={`${styles.card} ${styles[field.color]} ${styles.disabled}`}
                aria-disabled="true"
                key={field.title}
                aria-label={`حوزهٔ ${field.title}، به‌زودی`}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
