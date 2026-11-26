import Link from "next/link";
import { ArrowLeft, ArrowRight, GraduationCap, ShieldCheck } from "lucide-react";
import styles from "./AuthPage.module.scss";

type AuthPageProps = {
  mode: "login" | "register";
};

export default function AuthPage({ mode }: AuthPageProps) {
  const isLogin = mode === "login";

  return (
    <main className={styles.page}>
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <Link className={styles.brand} href="/">
        <span className={styles.brandIcon} aria-hidden="true">
          <GraduationCap size={24} />
        </span>
        <span>
          <strong>SkillHub</strong>
          <small>ACADEMY</small>
        </span>
      </Link>

      <section className={styles.card} aria-labelledby="auth-title">
        <Link href="/" className={styles.backLink}>
          <ArrowRight size={17} aria-hidden="true" />
          بازگشت به انتخاب حوزه
        </Link>

        <div className={styles.heading}>
          <span className={styles.headingIcon} aria-hidden="true">
            {isLogin ? <ShieldCheck size={24} /> : <GraduationCap size={24} />}
          </span>
          <span className={styles.eyebrow}>حساب کاربری SkillHub</span>
          <h1 id="auth-title">{isLogin ? "ورود به حساب" : "ساخت حساب کاربری"}</h1>
          <p>
            {isLogin
              ? "شماره تماس و کد تأیید را وارد کنید."
              : "اطلاعات خود را برای ساخت حساب وارد کنید."}
          </p>
        </div>

        <form className={styles.form} aria-label={isLogin ? "فرم ورود" : "فرم ثبت‌نام"}>
          {isLogin ? (
            <>
              <div className={styles.field}>
                <label htmlFor="login-phone">شمارهٔ تماس</label>
                <input
                  id="login-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="مثلاً ۰۹۱۲۱۲۳۴۵۶۷"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="verification-code">کد تأیید</label>
                <input
                  id="verification-code"
                  name="verificationCode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  placeholder="کد تأیید را وارد کنید"
                />
              </div>
              <button className={styles.secondaryButton} type="button">
                دریافت کد تأیید
              </button>
              <button className={styles.primaryButton} type="button">
                ورود به حساب <ArrowLeft size={17} aria-hidden="true" />
              </button>
            </>
          ) : (
            <>
              <div className={styles.nameFields}>
                <div className={styles.field}>
                  <label htmlFor="first-name">نام</label>
                  <input id="first-name" name="firstName" type="text" autoComplete="given-name" placeholder="نام" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="last-name">نام خانوادگی</label>
                  <input id="last-name" name="lastName" type="text" autoComplete="family-name" placeholder="نام خانوادگی" />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="national-id">کد ملی</label>
                <input
                  id="national-id"
                  name="nationalId"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="کد ملی"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="register-phone">شمارهٔ تماس</label>
                <input
                  id="register-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="مثلاً ۰۹۱۲۱۲۳۴۵۶۷"
                />
              </div>
              <button className={styles.primaryButton} type="button">
                ساخت حساب کاربری <ArrowLeft size={17} aria-hidden="true" />
              </button>
            </>
          )}
        </form>

        <p className={styles.switchPrompt}>
          {isLogin ? "هنوز حساب کاربری ندارید؟" : "قبلاً حساب ساخته‌اید؟"}{" "}
          <Link href={isLogin ? "/register" : "/login"}>
            {isLogin ? "ثبت‌نام کنید" : "وارد شوید"}
          </Link>
        </p>
      </section>

      <p className={styles.demoNote}>
        این فرم‌ها نمایشی هستند و اطلاعات واردشده ذخیره یا بررسی نمی‌شوند.
      </p>
    </main>
  );
}
