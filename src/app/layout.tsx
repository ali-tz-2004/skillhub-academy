import type { Metadata } from "next";
import "./globals.scss";
import "react-multi-date-picker/styles/layouts/prime.css";

export const metadata: Metadata = {
  title: {
    default: "SkillHub Academy | آموزش تخصصی",
    template: "%s | SkillHub Academy",
  },
  description:
    "آموزش تخصصی فناوری شبکه، حقوق و مدیریت با تمرکز بر مهارت های عملی و ورود به بازار کار.",
  applicationName: "SkillHub Academy",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "SkillHub Academy",
    title: "SkillHub Academy | آموزش تخصصی",
    description: "مسیر یادگیری مهارت های تخصصی و ورود به بازار کار.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
