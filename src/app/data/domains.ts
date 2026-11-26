export type DomainCoursePreview = {
  title: string;
  category: string;
  description: string;
  href?: string;
};

export type DomainHomeContent = {
  homeHref: string;
  name: string;
  description: string;
  introduction: string;
  categories: string[];
  latestCourses: DomainCoursePreview[];
  bestSellingCourses: DomainCoursePreview[];
  popularCourses: DomainCoursePreview[];
  services: string[];
  consultation: string;
  courseHref: string;
  links: { href: string; label: string }[];
};

const networkCourses: DomainCoursePreview[] = [
  {
    title: "دوره جامع شبکه و +Network",
    category: "شبکه و زیرساخت",
    description: "آشنایی با مفاهیم پایه، تجهیزات و پروتکل‌های شبکه.",
    href: "/network/courses/network-plus",
  },
  {
    title: "آموزش تخصصی CCNA",
    category: "شبکه و زیرساخت",
    description: "یادگیری مسیریابی، سوئیچینگ و پیکربندی تجهیزات سیسکو.",
    href: "/network/courses/ccna",
  },
  {
    title: "آموزش میکروتیک MTCNA",
    category: "شبکه و زیرساخت",
    description: "پیکربندی روتر و مدیریت سرویس‌های شبکه با RouterOS.",
    href: "/network/courses/mikrotik",
  },
  {
    title: "مبانی امنیت شبکه",
    category: "امنیت شبکه",
    description: "آشنایی با تهدیدها و اصول محافظت از شبکه.",
    href: "/network/courses/network-security",
  },
  {
    title: "مدیریت Windows Server",
    category: "سرور و مجازی‌سازی",
    description: "مدیریت سرویس‌ها و کاربران در محیط Windows Server.",
    href: "/network/courses/windows-server",
  },
];

const networkLinks = [
  { href: "/", label: "انتخاب حوزه" },
  { href: "/network/courses", label: "همهٔ دوره‌ها" },
  { href: "/network/calendar", label: "تقویم دوره‌ها" },
  { href: "#categories", label: "دسته‌بندی‌ها" },
  { href: "/network/instructors", label: "مدرسین" },
  { href: "#services", label: "خدمات آموزشی" },
  { href: "#consultation", label: "مشاوره" },
  { href: "#contact", label: "تماس با ما" },
];

const lawCourses: DomainCoursePreview[] = [
  {
    title: "آشنایی با حقوق قراردادها",
    category: "حقوق خصوصی",
    description: "مروری آموزشی بر مفاهیم و اصول پایهٔ قراردادها.",
  },
  {
    title: "مبانی حقوق کسب‌وکار",
    category: "حقوق تجارت",
    description: "آشنایی مقدماتی با موضوعات حقوقی مرتبط با کسب‌وکار.",
  },
  {
    title: "مهارت‌های تنظیم اسناد حقوقی",
    category: "مهارت‌های حقوقی",
    description: "آشنایی با ساختار و نگارش نمونه اسناد حقوقی.",
  },
];

const managementCourses: DomainCoursePreview[] = [
  {
    title: "اصول مدیریت پروژه",
    category: "مدیریت پروژه",
    description: "آشنایی با برنامه‌ریزی و پیگیری مراحل یک پروژه.",
  },
  {
    title: "مهارت‌های مدیریت منابع انسانی",
    category: "منابع انسانی",
    description: "مروری بر مفاهیم پایهٔ جذب، توسعه و همراهی کارکنان.",
  },
  {
    title: "مبانی برنامه‌ریزی کسب‌وکار",
    category: "کسب‌وکار",
    description: "آشنایی مقدماتی با هدف‌گذاری و برنامه‌ریزی کسب‌وکار.",
  },
];

function makeSampleGroups(courses: DomainCoursePreview[]) {
  return {
    latestCourses: courses,
    bestSellingCourses: [...courses].reverse(),
    popularCourses: [courses[1], courses[0], courses[2]],
  };
}

export const domainHomeContent: Record<string, DomainHomeContent> = {
  network: {
    homeHref: "/network",
    name: "فناوری شبکه",
    description:
      "یادگیری مهارت‌های تخصصی شبکه، زیرساخت و امنیت برای ساختن مسیر حرفه‌ای در دنیای فناوری.",
    introduction:
      "از مفاهیم پایه تا مدیریت زیرساخت، مسیرهای آموزشی متناسب با علاقه و سطح خود را پیدا کنید.",
    categories: ["شبکه و زیرساخت", "امنیت شبکه", "سرور و مجازی‌سازی", "رایانش ابری"],
    latestCourses: networkCourses.slice(0, 3),
    bestSellingCourses: [networkCourses[1], networkCourses[2], networkCourses[3]],
    popularCourses: [networkCourses[1], networkCourses[3], networkCourses[0]],
    services: [
      "دوره‌های آموزشی در حوزهٔ شبکه و زیرساخت",
      "آموزش مهارت‌های امنیت شبکه",
      "مسیرهای یادگیری سرور و رایانش ابری",
    ],
    consultation:
      "برای انتخاب مسیر آموزشی متناسب با هدف و سطح خود، با آموزشگاه تماس بگیرید.",
    courseHref: "/network/courses",
    links: networkLinks,
  },
  law: {
    homeHref: "/law",
    name: "حقوق",
    description:
      "مسیر یادگیری موضوعات حقوقی و مهارت‌های کاربردی برای توسعهٔ دانش حرفه‌ای.",
    introduction:
      "با مسیرهای آموزشی حقوق خصوصی، حقوق تجارت و مهارت‌های حقوقی آشنا شوید.",
    categories: ["حقوق خصوصی", "حقوق تجارت", "مهارت‌های حقوقی"],
    ...makeSampleGroups(lawCourses),
    services: [
      "دوره‌های آموزشی موضوعی حقوق",
      "آشنایی با مهارت‌های کاربردی حقوقی",
      "راهنمایی برای انتخاب مسیر یادگیری",
    ],
    consultation:
      "برای دریافت راهنمایی دربارهٔ دوره‌های این حوزه، با آموزشگاه تماس بگیرید.",
    courseHref: "#latest-courses",
    links: [
      { href: "/", label: "انتخاب حوزه" },
      { href: "#latest-courses", label: "دوره‌ها" },
      { href: "#categories", label: "دسته‌بندی‌ها" },
      { href: "#services", label: "خدمات آموزشی" },
      { href: "#consultation", label: "مشاوره" },
      { href: "#contact", label: "تماس با ما" },
    ],
  },
  management: {
    homeHref: "/management",
    name: "مدیریت",
    description:
      "یادگیری مهارت‌های مدیریتی و کسب‌وکار برای رشد فردی و حرفه‌ای.",
    introduction:
      "مسیرهای آموزشی مدیریت پروژه، منابع انسانی و برنامه‌ریزی کسب‌وکار را بررسی کنید.",
    categories: ["مدیریت پروژه", "منابع انسانی", "کسب‌وکار"],
    ...makeSampleGroups(managementCourses),
    services: [
      "دوره‌های مهارت‌محور مدیریت و کسب‌وکار",
      "آموزش مفاهیم مدیریت پروژه",
      "راهنمایی برای انتخاب مسیر یادگیری",
    ],
    consultation:
      "برای دریافت راهنمایی دربارهٔ دوره‌های این حوزه، با آموزشگاه تماس بگیرید.",
    courseHref: "#latest-courses",
    links: [
      { href: "/", label: "انتخاب حوزه" },
      { href: "#latest-courses", label: "دوره‌ها" },
      { href: "#categories", label: "دسته‌بندی‌ها" },
      { href: "#services", label: "خدمات آموزشی" },
      { href: "#consultation", label: "مشاوره" },
      { href: "#contact", label: "تماس با ما" },
    ],
  },
};
