export type CourseClass = {
  title: string;
  startDate: string;
  days: string;
  time: string;
};

export type CourseDetail = {
  certificate: string;
  prerequisites: string[];
  instructor: string;
  instructorDescription: string;
  extraDescription: string;
  activeClasses: CourseClass[];
};

export const courseDetails: Record<string, CourseDetail> = {
  "network-plus": {
    certificate: "گواهی داخلی پایان دوره (نمونه)",
    prerequisites: ["آشنایی مقدماتی با کار با رایانه"],
    instructor: "مدرس دوره پس از نهایی‌شدن برنامه معرفی می‌شود",
    instructorDescription: "اطلاعات مدرس این دوره در نسخهٔ نهایی تکمیل خواهد شد.",
    extraDescription:
      "این دوره برای آشنایی گام‌به‌گام با مفاهیم شبکه و تمرین مباحث پایه طراحی شده است.",
    activeClasses: [
      {
        title: "کلاس آنلاین",
        startDate: "۱۴۰۵/۱۰/۱۵",
        days: "شنبه و دوشنبه",
        time: "۱۸:۰۰ تا ۲۰:۰۰",
      },
    ],
  },
  ccna: {
    certificate: "گواهی داخلی پایان دوره (نمونه)",
    prerequisites: ["آشنایی با مفاهیم پایهٔ شبکه", "گذراندن دورهٔ مقدماتی شبکه پیشنهاد می‌شود"],
    instructor: "مدرس دوره پس از نهایی‌شدن برنامه معرفی می‌شود",
    instructorDescription: "اطلاعات مدرس این دوره در نسخهٔ نهایی تکمیل خواهد شد.",
    extraDescription:
      "تمرکز دوره بر مفاهیم مسیریابی و سوئیچینگ و تمرین سناریوهای شبکه است.",
    activeClasses: [
      {
        title: "کلاس حضوری",
        startDate: "۱۴۰۵/۱۰/۲۰",
        days: "یکشنبه و سه‌شنبه",
        time: "۱۷:۰۰ تا ۲۰:۰۰",
      },
    ],
  },
  mikrotik: {
    certificate: "گواهی داخلی پایان دوره (نمونه)",
    prerequisites: ["آشنایی مقدماتی با مفاهیم شبکه"],
    instructor: "مدرس دوره پس از نهایی‌شدن برنامه معرفی می‌شود",
    instructorDescription: "اطلاعات مدرس این دوره در نسخهٔ نهایی تکمیل خواهد شد.",
    extraDescription:
      "در این دوره با تنظیمات پرکاربرد RouterOS و مدیریت سرویس‌های روتر آشنا می‌شوید.",
    activeClasses: [
      {
        title: "کلاس آنلاین",
        startDate: "۱۴۰۵/۱۰/۲۲",
        days: "شنبه و دوشنبه",
        time: "۱۹:۰۰ تا ۲۱:۰۰",
      },
    ],
  },
  "network-security": {
    certificate: "گواهی داخلی پایان دوره (نمونه)",
    prerequisites: ["آشنایی مقدماتی با شبکه و سیستم‌عامل"],
    instructor: "مدرس دوره پس از نهایی‌شدن برنامه معرفی می‌شود",
    instructorDescription: "اطلاعات مدرس این دوره در نسخهٔ نهایی تکمیل خواهد شد.",
    extraDescription:
      "مباحث امنیت شبکه با مثال‌های آموزشی و راهکارهای پیشگیرانه مرور می‌شوند.",
    activeClasses: [
      {
        title: "کلاس آنلاین",
        startDate: "۱۴۰۵/۱۰/۲۵",
        days: "یکشنبه و چهارشنبه",
        time: "۱۸:۰۰ تا ۲۰:۰۰",
      },
    ],
  },
  "windows-server": {
    certificate: "گواهی داخلی پایان دوره (نمونه)",
    prerequisites: ["آشنایی با مفاهیم پایهٔ شبکه و ویندوز"],
    instructor: "مدرس دوره پس از نهایی‌شدن برنامه معرفی می‌شود",
    instructorDescription: "اطلاعات مدرس این دوره در نسخهٔ نهایی تکمیل خواهد شد.",
    extraDescription:
      "مباحث مدیریت سرور با تمرکز بر سرویس‌های متداول شبکه و مدیریت کاربران ارائه می‌شود.",
    activeClasses: [
      {
        title: "کلاس حضوری",
        startDate: "۱۴۰۵/۱۰/۲۷",
        days: "شنبه و دوشنبه",
        time: "۱۶:۰۰ تا ۱۹:۰۰",
      },
    ],
  },
  virtualization: {
    certificate: "گواهی داخلی پایان دوره (نمونه)",
    prerequisites: ["آشنایی با شبکه و مفاهیم پایهٔ سرور"],
    instructor: "مدرس دوره پس از نهایی‌شدن برنامه معرفی می‌شود",
    instructorDescription: "اطلاعات مدرس این دوره در نسخهٔ نهایی تکمیل خواهد شد.",
    extraDescription:
      "مفاهیم مجازی‌سازی با تمرکز بر طراحی و مدیریت زیرساخت‌های آزمایشگاهی بررسی می‌شوند.",
    activeClasses: [
      {
        title: "کلاس آنلاین",
        startDate: "۱۴۰۵/۱۱/۰۱",
        days: "یکشنبه و سه‌شنبه",
        time: "۱۸:۰۰ تا ۲۱:۰۰",
      },
    ],
  },
  "linux-network": {
    certificate: "گواهی داخلی پایان دوره (نمونه)",
    prerequisites: ["آشنایی مقدماتی با رایانه و شبکه"],
    instructor: "مدرس دوره پس از نهایی‌شدن برنامه معرفی می‌شود",
    instructorDescription: "اطلاعات مدرس این دوره در نسخهٔ نهایی تکمیل خواهد شد.",
    extraDescription:
      "این دوره مفاهیم پایهٔ لینوکس و کاربرد آن در راه‌اندازی سرویس‌های شبکه را پوشش می‌دهد.",
    activeClasses: [
      {
        title: "کلاس آنلاین",
        startDate: "۱۴۰۵/۱۱/۰۳",
        days: "شنبه و چهارشنبه",
        time: "۱۹:۰۰ تا ۲۱:۰۰",
      },
    ],
  },
};

export const sampleFaqs = [
  {
    question: "آیا برای شرکت در این دوره پیش‌نیاز لازم است؟",
    answer: "پیش‌نیازهای پیشنهادی در بخش اطلاعات دوره نمایش داده شده‌اند.",
  },
  {
    question: "کلاس به چه شکل برگزار می‌شود؟",
    answer: "شیوهٔ برگزاری هر کلاس در کارت زمان‌بندی همان دوره آمده است.",
  },
  {
    question: "آیا پس از پایان دوره گواهی دریافت می‌کنم؟",
    answer: "اطلاعات گواهی این صفحه نمونه است و جزئیات نهایی پس از تأیید آموزشگاه اعلام می‌شود.",
  },
];

export const sampleReviews = [
  {
    name: "هنرجوی نمونه",
    rating: 5,
    comment: "توضیحات دوره روشن و مسیر یادگیری منظم بود.",
  },
  {
    name: "هنرجوی نمونه",
    rating: 4,
    comment: "تمرین‌های دوره به درک بهتر مباحث کمک کردند.",
  },
];
