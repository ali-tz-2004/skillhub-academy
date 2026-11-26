import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  BookOpen,
  Cloud,
  Network,
  Server,
  ShieldCheck,
  GraduationCap,
  Users,
  Zap,
  Clock3,
  Star,
  CheckCircle2,
  Play,
  Code2,
} from "lucide-react";

import styles from "./page.module.scss";
import DomainShell, { type DomainLink } from "../components/DomainShell";

const domainLinks: DomainLink[] = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/network/courses", label: "دوره‌های آموزشی" },
  { href: "/network#categories", label: "دسته‌بندی‌ها" },
  { href: "/network/instructors", label: "اساتید" },
  { href: "/network#about", label: "درباره ما" },
  { href: "/network#contact", label: "تماس با ما" },
];

const categories = [
  {
    title: "شبکه و زیرساخت",
    description: "از مفاهیم پایه شبکه تا مسیریابی و سوئیچینگ",
    icon: Network,
    courses: "۳ دوره",
  },
  {
    title: "امنیت شبکه",
    description: "محافظت از شبکه و زیرساخت های اطلاعاتی",
    icon: ShieldCheck,
    courses: "۱ دوره",
  },
  {
    title: "سرور و مجازی سازی",
    description: "مدیریت سرور و پیاده سازی زیرساخت مجازی",
    icon: Server,
    courses: "۲ دوره",
  },
  {
    title: "رایانش ابری",
    description: "لینوکس، داکر و ورود به دنیای DevOps",
    icon: Cloud,
    courses: "۱ دوره",
  },
];

const courses = [
  {
    title: "آموزش جامع CCNA",
    category: "شبکه و زیرساخت",
    level: "مقدماتی تا متوسط",
    duration: "۶۰ ساعت",
    students: "۸۵ هنرجو",
    price: "۵,۰۰۰,۰۰۰",
    rating: "۴.۹",
    color: "blue",
    slug: "ccna",
    icon: Network,
  },
  {
    title: "آموزش میکروتیک MTCNA",
    category: "شبکه و زیرساخت",
    level: "متوسط",
    duration: "۳۵ ساعت",
    students: "۹۵ هنرجو",
    price: "۳,۲۰۰,۰۰۰",
    rating: "۴.۸",
    color: "purple",
    slug: "mikrotik",
    icon: Network,
  },
  {
    title: "مبانی امنیت شبکه",
    category: "امنیت شبکه",
    level: "مقدماتی",
    duration: "۳۵ ساعت",
    students: "۷۰ هنرجو",
    price: "۳,۲۰۰,۰۰۰",
    rating: "۴.۹",
    color: "green",
    slug: "network-security",
    icon: ShieldCheck,
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: "مدرسین متخصص",
    description: "یادگیری زیر نظر متخصصان و افراد باتجربه حوزه فناوری",
  },
  {
    icon: BookOpen,
    title: "آموزش پروژه محور",
    description: "تبدیل دانش تئوری به مهارت های کاربردی با تمرین عملی",
  },
  {
    icon: Users,
    title: "پشتیبانی آموزشی",
    description: "همراهی و راهنمایی هنرجویان در طول مسیر یادگیری",
  },
  {
    icon: Zap,
    title: "آمادگی ورود به بازار کار",
    description: "تمرکز بر مهارت هایی که در محیط واقعی کار کاربرد دارند",
  },
];

const steps = [
  {
    number: "01",
    title: "انتخاب مسیر",
    text: "حوزه مورد علاقه خود را انتخاب کنید.",
  },
  {
    number: "02",
    title: "یادگیری تخصصی",
    text: "با برنامه آموزشی اصولی پیش بروید.",
  },
  {
    number: "03",
    title: "اجرای پروژه",
    text: "دانش خود را در پروژه های واقعی آزمایش کنید.",
  },
  {
    number: "04",
    title: "ورود به بازار کار",
    text: "برای شروع مسیر حرفه ای آماده شوید.",
  },
];

export default function Home() {
  return (
    <DomainShell
      name="فناوری شبکه"
      description="مسیری برای یادگیری مهارت‌های تخصصی و ساختن آینده‌ای حرفه‌ای در دنیای فناوری."
      homeHref="/network"
      courseHref="/network/courses"
      links={domainLinks}
    >
      <main className={styles.main}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>
              <span className={styles.pulse} />
              آکادمی تخصصی آموزش فناوری
            </span>

            <h1>
              آینده حرفه ای خودت رو
              <br />
              از <span>اینجا</span> شروع کن
            </h1>

            <p>
              مهارت های مورد نیاز دنیای فناوری رو یاد بگیر، دانش خودت رو به
              تجربه تبدیل کن و برای ساختن آینده شغلی متفاوت آماده شو.
            </p>

            <div className={styles.heroActions}>
              <Link href="/network/courses" className={styles.primaryButton}>
                مشاهده دوره های آموزشی
                <ArrowLeft size={18} />
              </Link>

              <a href="#about" className={styles.secondaryButton}>
                <Play size={17} />
                آشنایی با مجموعه
              </a>
            </div>

            <div className={styles.heroTrust}>
              <div className={styles.avatarGroup}>
                <span>ع</span>
                <span>م</span>
                <span>س</span>
                <span>+</span>
              </div>
              <div>
                <strong>یادگیری با هدف پیشرفت</strong>
                <small>مسیرت رو با مهارت شروع کن</small>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualMain}>
              <div className={styles.visualTop}>
                <span>SKILLHUB / LEARNING</span>
                <span className={styles.onlineDot} />
              </div>

              <div className={styles.visualIcon}>
                <GraduationCap size={76} strokeWidth={1.2} />
              </div>

              <div className={styles.visualCode}>
                <span>01</span>
                <span>LEARN</span>
                <span>02</span>
                <span>BUILD</span>
                <span>03</span>
                <span>GROW</span>
              </div>
            </div>

            <div className={styles.floatingCard}>
              <span className={styles.floatingIcon}>
                <CheckCircle2 size={22} />
              </span>
              <div>
                <strong>یادگیری هدفمند</strong>
                <small>قدم به قدم تا تخصص</small>
              </div>
            </div>

            <div className={styles.floatingTag}>
              <Code2 size={17} />
              Learn & Build
            </div>
          </div>
        </div>

        <div className={styles.heroBottom}>
          <div className={styles.container}>
            <span>یادگیری</span>
            <span className={styles.heroBottomLine} />
            <span>تجربه</span>
            <span className={styles.heroBottomLine} />
            <span>تخصص</span>
            <span className={styles.heroBottomLine} />
            <span>آینده</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.section} id="categories">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <h2>مسیر یادگیری خودت رو انتخاب کن</h2>
              <p>در حوزه مورد علاقه ات قدم بردار و مهارت های جدید بساز.</p>
            </div>
            <Link href="/network/courses" className={styles.textLink}>
              همه دوره ها <ArrowLeft size={17} />
            </Link>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  href="/network/courses"
                  className={styles.categoryCard}
                  key={category.title}
                >
                  <div className={styles.categoryTop}>
                    <span className={styles.categoryIcon}>
                      <Icon size={25} />
                    </span>
                    <ArrowUpLeft size={19} />
                  </div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span className={styles.categoryCount}>
                    {category.courses}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <h2>دوره های پرطرفدار</h2>
              <p>
                با دوره های تخصصی، مهارت های مورد نیاز بازار کار رو یاد بگیر.
              </p>
            </div>
            <Link href="/network/courses" className={styles.textLink}>
              مشاهده همه <ArrowLeft size={17} />
            </Link>
          </div>

          <div className={styles.courseGrid}>
            {courses.map((course) => (
              <article className={styles.courseCard} key={course.slug}>
                <div
                  className={`${styles.courseImage} ${styles[course.color]}`}
                >
                  <span>{course.category}</span>
                  <div className={styles.courseImageIcon}>
                    <course.icon size={55} />
                  </div>
                  <span className={styles.courseRating}>
                    <Star size={14} fill="currentColor" /> {course.rating}
                  </span>
                </div>

                <div className={styles.courseBody}>
                  <h3>{course.title}</h3>

                  <div className={styles.courseMeta}>
                    <span>
                      <Clock3 size={15} /> {course.duration}
                    </span>
                    <span>
                      <Users size={15} /> {course.students}
                    </span>
                  </div>

                  <div className={styles.courseLevel}>{course.level}</div>

                  <div className={styles.courseFooter}>
                    <div>
                      <small>شهریه دوره</small>
                      <strong>
                        {course.price} <small>تومان</small>
                      </strong>
                    </div>
                    <Link
                      href={`network/courses/${course.slug}`}
                      className={styles.courseButton}
                      aria-label={`مشاهده دوره ${course.title}`}
                    >
                      <ArrowLeft size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.section} id="about">
        <div className={styles.container}>
          <div className={styles.benefitLayout}>
            <div className={styles.benefitIntro}>
              <h2>
                فقط یاد نگیر؛
                <br />
                <span>مهارت بساز.</span>
              </h2>
              <p>
                هدف ما ارائه آموزش هایی است که فراتر از مطالب تئوری باشند.
                یادگیری باید به تجربه، تخصص و توانایی حل مسئله تبدیل شود.
              </p>
              <Link href="/network/courses" className={styles.primaryButton}>
                شروع یادگیری <ArrowLeft size={18} />
              </Link>
            </div>

            <div className={styles.benefitGrid}>
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div className={styles.benefitCard} key={benefit.title}>
                    <span>
                      <Icon size={26} />
                    </span>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Steps */}
      <section className={styles.stepsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <h2>از یادگیری تا ورود به بازار کار</h2>
              <p>یک مسیر مشخص برای ساختن آینده حرفه ای خودت داشته باش.</p>
            </div>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <div className={styles.stepCard} key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div>
              <h2>اولین قدم رو برای آینده ات بردار.</h2>
              <p>دوره مناسب خودت رو پیدا کن و مسیر یادگیری رو شروع کن.</p>
            </div>
            <Link href="/network/courses" className={styles.ctaButton}>
              مشاهده دوره ها <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>

      </main>
    </DomainShell>
  );
}
