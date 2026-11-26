export type Course = {
  id: number;
  slug: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  deliveryMode: "حضوری" | "آنلاین" | "حضوری و آنلاین";
  students: number;
  price: string;
  description: string;
  learn: string[];
  icon: string;
  color: string;
};

export const categories = [
  "شبکه و زیرساخت",
  "امنیت شبکه",
  "سرور و مجازی سازی",
  "رایانش ابری",
];

export const courses: Course[] = [
  {
    id: 1,
    slug: "network-plus",
    title: "دوره جامع شبکه و +Network",
    category: "شبکه و زیرساخت",
    level: "مقدماتی",
    duration: "40 ساعت",
    rating: 4.7,
    deliveryMode: "حضوری و آنلاین",
    students: 120,
    price: "3,500,000",
    description:
      "آشنایی با مفاهیم شبکه، تجهیزات، پروتکل ها و اصول راه اندازی شبکه های کامپیوتری.",
    learn: [
      "مدل OSI و TCP/IP",
      "آدرس دهی IP و زیرشبکه بندی",
      "آشنایی با تجهیزات شبکه",
      "عیب یابی مقدماتی شبکه",
    ],
    icon: "🌐",
    color: "blue",
  },
  {
    id: 2,
    slug: "ccna",
    title: "آموزش تخصصی CCNA",
    category: "شبکه و زیرساخت",
    level: "متوسط",
    duration: "60 ساعت",
    rating: 4.9,
    deliveryMode: "حضوری و آنلاین",
    students: 85,
    price: "5,000,000",
    description:
      "یادگیری مفاهیم مسیریابی، سوئیچینگ و پیکربندی تجهیزات شبکه سیسکو.",
    learn: [
      "پیکربندی روتر و سوئیچ سیسکو",
      "مسیریابی ایستا و پویا",
      "VLAN و Trunking",
      "مبانی امنیت و خدمات شبکه",
    ],
    icon: "🔗",
    color: "purple",
  },
  {
    id: 3,
    slug: "mikrotik",
    title: "آموزش میکروتیک MTCNA",
    category: "شبکه و زیرساخت",
    level: "متوسط",
    duration: "35 ساعت",
    rating: 4.8,
    deliveryMode: "آنلاین",
    students: 95,
    price: "3,200,000",
    description:
      "راه اندازی و مدیریت شبکه با روترهای میکروتیک، از پیکربندی پایه تا مدیریت پهنای باند.",
    learn: [
      "آشنایی با RouterOS و Winbox",
      "فایروال و NAT",
      "مدیریت پهنای باند و کیفیت سرویس",
      "راه اندازی Hotspot و VPN",
    ],
    icon: "📡",
    color: "orange",
  },
  {
    id: 4,
    slug: "network-security",
    title: "مبانی امنیت شبکه",
    category: "امنیت شبکه",
    level: "مقدماتی",
    duration: "35 ساعت",
    rating: 4.9,
    deliveryMode: "آنلاین",
    students: 70,
    price: "3,200,000",
    description:
      "آشنایی با تهدیدات امنیتی، اصول محافظت از شبکه و روش های پیشگیری.",
    learn: [
      "انواع تهدیدات و حملات",
      "فایروال و کنترل دسترسی",
      "امن سازی تجهیزات شبکه",
      "مبانی رمزنگاری",
    ],
    icon: "🛡️",
    color: "green",
  },
  {
    id: 5,
    slug: "windows-server",
    title: "مدیریت Windows Server",
    category: "سرور و مجازی سازی",
    level: "متوسط",
    duration: "50 ساعت",
    rating: 4.7,
    deliveryMode: "حضوری",
    students: 80,
    price: "4,200,000",
    description:
      "نصب، پیکربندی و مدیریت سرورهای ویندوزی شامل Active Directory و سرویس های شبکه.",
    learn: [
      "نصب و پیکربندی Windows Server",
      "Active Directory و Group Policy",
      "DNS و DHCP",
      "مدیریت کاربران و دسترسی ها",
    ],
    icon: "🖥️",
    color: "yellow",
  },
  {
    id: 6,
    slug: "virtualization",
    title: "مجازی سازی با VMware و Hyper-V",
    category: "سرور و مجازی سازی",
    level: "پیشرفته",
    duration: "40 ساعت",
    rating: 4.8,
    deliveryMode: "آنلاین",
    students: 55,
    price: "4,800,000",
    description:
      "طراحی و پیاده سازی زیرساخت مجازی برای سازمان ها با تمرکز بر کار عملی.",
    learn: [
      "نصب و راه اندازی هایپروایزر",
      "مدیریت ماشین های مجازی",
      "ذخیره سازی و شبکه مجازی",
      "تهیه نسخه پشتیبان و بازیابی",
    ],
    icon: "🗄️",
    color: "pink",
  },
  {
    id: 7,
    slug: "linux-network",
    title: "لینوکس برای مدیران شبکه",
    category: "رایانش ابری",
    level: "متوسط",
    duration: "45 ساعت",
    rating: 4.6,
    deliveryMode: "آنلاین",
    students: 65,
    price: "3,900,000",
    description:
      "یادگیری لینوکس و سرویس های شبکه، پایه ای برای ورود به دنیای DevOps و رایانش ابری.",
    learn: [
      "دستورات و مدیریت سیستم لینوکس",
      "راه اندازی سرویس های شبکه",
      "مبانی اسکریپت نویسی",
      "آشنایی با داکر و رایانش ابری",
    ],
    icon: "🐧",
    color: "blue",
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
