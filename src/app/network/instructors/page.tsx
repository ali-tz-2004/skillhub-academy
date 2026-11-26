import {
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  ArrowLeft,
  Award,
} from "lucide-react";
import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import BackLink from "@/app/components/BackLink";

const instructors = [
  {
    id: 2,
    name: "محمد احمدی",
    role: "مدرس امنیت شبکه",
    experience: "۶ سال تجربه",
    courses: 3,
    description:
      "فعال در حوزه امنیت شبکه و تست نفوذ با تمرکز بر آموزش عملی و سناریوهای واقعی سازمانی.",
    skills: ["Network Security", "Firewall", "Kali Linux", "Wireshark"],
    initials: "م ا",
    image: "/images/instructors/02.webp",
    color: "purple",
  },
  {
    id: 3,
    name: "رضا کریمی",
    role: "مدرس سرور و رایانش ابری",
    experience: "۷ سال تجربه",
    courses: 3,
    description:
      "متخصص مدیریت سرور و مجازی سازی با تجربه پیاده سازی زیرساخت در سازمان ها و آموزش پروژه محور.",
    skills: ["Windows Server", "VMware", "Linux", "Docker"],
    initials: "ر ک",
    image: "/images/instructors/03.jpg",
    color: "green",
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: "تخصص و دانش",
    description: "آموزش توسط افراد متخصص و آشنا با نیازهای بازار کار",
  },
  {
    icon: BriefcaseBusiness,
    title: "تجربه عملی",
    description: "انتقال تجربه های واقعی و کاربردی در کنار آموزش تئوری",
  },
  {
    icon: BookOpen,
    title: "آموزش هدفمند",
    description: "تمرکز بر مهارت هایی که در مسیر شغلی شما موثر هستند",
  },
];

export default function InstructorsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <BackLink href="/network">بازگشت</BackLink>

          <span className={styles.eyebrow}>
            <GraduationCap size={18} />
            تیم آموزشی ما
          </span>

          <h1>
            یادگیری از متخصصان،
            <span> شروع یک مسیر حرفه ای</span>
          </h1>

          <p>
            با راهنمایی مدرسان متخصص و باتجربه، مهارت های مورد نیاز خود را یاد
            بگیرید و برای ورود به بازار کار آماده شوید.
          </p>
        </div>
      </section>

      <section className={styles.instructorsSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>تیم ما</span>
            <h2>با مدرسان ما آشنا شوید</h2>
            <p>
              افرادی که دانش و تجربه خود را برای رشد حرفه ای شما به اشتراک می
              گذارند.
            </p>
          </div>

          <span className={styles.instructorCount}>
            {instructors.length} مدرس
          </span>
        </div>

        <div className={styles.instructorGrid}>
          {instructors.map((instructor) => (
            <article className={styles.instructorCard} key={instructor.id}>
              <div
                className={`${styles.instructorVisual} ${styles[instructor.color]}`}
              >
                <div className={styles.avatar}>
                  {instructor.image ? (
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      width={100}
                      height={100}
                    />
                  ) : (
                    instructor.initials
                  )}
                </div>
                <span className={styles.experience}>
                  <Award size={15} />
                  {instructor.experience}
                </span>
              </div>

              <div className={styles.instructorBody}>
                <h3>{instructor.name}</h3>
                <span className={styles.role}>{instructor.role}</span>

                <p>{instructor.description}</p>

                <div className={styles.skills}>
                  {instructor.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <span>
                    <BookOpen size={16} />
                    {instructor.courses} دوره آموزشی
                  </span>

                  <button
                    type="button"
                    aria-label={`مشاهده اطلاعات ${instructor.name}`}
                    title="اطلاعات بیشتر به زودی"
                    disabled
                  >
                    <ArrowLeft size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.benefitsHeader}>
          <span className={styles.sectionLabel}>چرا ما؟</span>
          <h2>تجربه یادگیری متفاوت</h2>
          <p>
            هدف ما فقط آموزش مفاهیم نیست؛ بلکه آماده سازی شما برای استفاده از
            مهارت ها در دنیای واقعی است.
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div className={styles.benefitCard} key={benefit.title}>
                <div className={styles.benefitIcon}>
                  <Icon size={26} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <h2>آماده شروع مسیر یادگیری هستید؟</h2>
          <p>دوره مناسب خود را انتخاب کنید و قدم اول را بردارید.</p>
        </div>

        <Link href="/network/courses">
          مشاهده دوره ها
          <ArrowLeft size={18} />
        </Link>
      </section>
    </main>
  );
}
