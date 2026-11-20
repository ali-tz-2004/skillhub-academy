export type Course = {
  id: number;
  slug: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  students: number;
  price: string;
  description: string;
  learn: string[];
  icon: string;
  color: string;
};

export const courses: Course[] = [
  {
    id: 1,
    slug: "network-plus",
    title: "دوره جامع شبکه و +Network",
    category: "شبکه و زیرساخت",
    level: "مقدماتی",
    duration: "40 ساعت",
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
    slug: "web-design",
    title: "طراحی وب با HTML و CSS",
    category: "برنامه نویسی",
    level: "مقدماتی",
    duration: "30 ساعت",
    students: 160,
    price: "2,500,000",
    description:
      "شروع مسیر طراحی وب با یادگیری ساختار صفحات و طراحی رابط کاربری.",
    learn: [
      "ساختار صفحات با HTML",
      "استایل دهی با CSS",
      "طراحی ریسپانسیو",
      "پیاده سازی یک پروژه واقعی",
    ],
    icon: "💻",
    color: "orange",
  },
  {
    id: 4,
    slug: "javascript",
    title: "برنامه نویسی JavaScript",
    category: "برنامه نویسی",
    level: "متوسط",
    duration: "45 ساعت",
    students: 95,
    price: "3,800,000",
    description: "یادگیری زبان JavaScript و مفاهیم اصلی برنامه نویسی در وب.",
    learn: [
      "مبانی زبان و ساختار داده ها",
      "کار با DOM و رویدادها",
      "برنامه نویسی ناهمگام",
      "ساخت پروژه تعاملی",
    ],
    icon: "⚡",
    color: "yellow",
  },
  {
    id: 5,
    slug: "network-security",
    title: "مبانی امنیت شبکه",
    category: "امنیت",
    level: "مقدماتی",
    duration: "35 ساعت",
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
    id: 6,
    slug: "ai-basics",
    title: "مبانی هوش مصنوعی",
    category: "هوش مصنوعی",
    level: "مقدماتی",
    duration: "25 ساعت",
    students: 110,
    price: "2,900,000",
    description: "آشنایی با مفاهیم هوش مصنوعی، یادگیری ماشین و کاربردهای آن.",
    learn: [
      "مفاهیم پایه هوش مصنوعی",
      "انواع یادگیری ماشین",
      "کار با داده",
      "کاربردهای عملی در صنعت",
    ],
    icon: "🤖",
    color: "pink",
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
