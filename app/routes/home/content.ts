import achievementFacultyImage from "~/assets/achievement-biomedical-faculty.webp";
import campusStoryImage from "~/assets/campus-story-overview.webp";
import eventBatteryImage from "~/assets/event-battery-maintenance-training.webp";
import eventBlastingImage from "~/assets/event-controlled-blasting-workshop.webp";
import eventSteamImage from "~/assets/event-steam-power-plant-training.webp";
import heroImage from "~/assets/hero-campus-overview.webp";
import newsAthleticsImage from "~/assets/news-athletics-olympiad.webp";
import newsStaffImage from "~/assets/news-staff-meeting.webp";
import newsJournalImage from "~/assets/news-sustainable-energy-journal.webp";
import { HUT_LINKS } from "~/lib/site-links";

/*===== Types =====*/

export type Story = {
  id: string;
  category: string;
  title: string;
  summary: string;
  /** Jalali date as written text; update by hand when the news changes. */
  date?: string;
  image: string;
  imageAlt: string;
  /** The image contains text (a poster or flyer): never lay text over it, and crop it from the top. */
  poster?: boolean;
  /** News and achievements link to the portal until their permanent pages exist. */
  href: string;
};

/*===== Page Meta =====*/

export const PAGE_TITLE = "دانشگاه صنعتی همدان | دانش، فناوری، آینده";
export const PAGE_DESCRIPTION =
  "پایگاه اطلاع‌رسانی دانشگاه صنعتی همدان؛ اخبار و اطلاعیه‌ها، تقویم آموزشی، پژوهش و فناوری، خدمات دانشجویی و سامانه‌های دانشگاه.";

/*===== Hero =====*/

export const HERO = {
  image: heroImage,
  imageAlt: "نمای دانشگاه صنعتی همدان در دامنه کوه‌های الوند",
  kicker: "دانش، فناوری، آینده",
  lead: "جایی برای یادگیری، پژوهش و ساختن. از ایده‌های امروز، تا دنیای فردا.",
  notice: { label: "اطلاع‌رسانی آموزشی", text: "تقویم آموزشی نیم‌سال اول ۱۴۰۵–۱۴۰۶", action: "مشاهده تقویم" },
  tagline: ["همدان، در دامنه الوند", "ریشه در دانش", "نگاه به آینده"],
};

/*===== News =====*/

export const NEWS: Story[] = [
  {
    id: "staff-meeting",
    category: "دانشگاه",
    title: "دیدار رئیس دانشگاه با کارکنان به مناسبت هفته دولت",
    summary:
      "نشست رئیس دانشگاه صنعتی همدان و اعضای هیئت‌رئیسه با کارکنان غیرهیئت‌علمی، با حضور معاونان و جمعی از همکاران دانشگاه برگزار شد.",
    date: "۱۰ شهریور ۱۴۰۵",
    image: newsStaffImage,
    imageAlt: "نشست رئیس دانشگاه صنعتی همدان با کارکنان",
    poster: true,
    href: HUT_LINKS.portal,
  },
  {
    id: "student-athletics",
    category: "دانشجویی",
    title: "درخشش ورزشکاران دانشگاه در المپیاد دانشجویان",
    summary: "کسب مدال طلای کاراته، مقام پنجم کشتی فرنگی و جایگاه هشتم تیراندازی در هفدهمین المپیاد ورزشی دانشجویان.",
    date: "۹ شهریور ۱۴۰۵",
    image: newsAthleticsImage,
    imageAlt: "نتایج ورزشکاران دانشگاه در المپیاد دانشجویان",
    poster: true,
    href: HUT_LINKS.portal,
  },
  {
    id: "isc-journal",
    category: "پژوهش",
    title: "نمایه‌شدن نشریه علمی دانشگاه در پایگاه ISC",
    summary: "نشریه انرژی پایدار و هوش مصنوعی دانشگاه در پایگاه استنادی علوم جهان اسلام نمایه شد.",
    date: "۷ مرداد ۱۴۰۵",
    image: newsJournalImage,
    imageAlt: "نشریه انرژی پایدار و هوش مصنوعی و نشان ISC",
    poster: true,
    href: HUT_LINKS.portal,
  },
];

/*===== Announcements =====*/

export const ANNOUNCEMENTS = [
  {
    day: "۱۵",
    month: "شهریور",
    title: "مهلت دفاع از پایان‌نامه کارشناسی ارشد در نیم‌سال دوم",
    issuer: "معاونت آموزشی و پژوهشی",
  },
  {
    day: "۱۵",
    month: "شهریور",
    title: "برگزاری جلسه دفاع از سمینار کارشناسی ارشد مهندسی معدن",
    issuer: "گروه مهندسی معدن",
  },
  {
    day: "۱۴",
    month: "شهریور",
    title: "اطلاعیه انتخاب واحد نیم‌سال اول سال تحصیلی ۱۴۰۵–۱۴۰۶",
    issuer: "اداره خدمات آموزشی",
  },
  {
    day: "۱۴",
    month: "شهریور",
    title: "ثبت درخواست مجوز ادامه تحصیل برای دانشجویان مشروطی",
    issuer: "اداره خدمات آموزشی",
  },
];

/*===== Academic Calendar =====*/

/** The term shown is archived: its dates are past, so the timeline marks every step as done. */
export const CALENDAR = {
  term: "نیم‌سال دوم ۱۴۰۴–۱۴۰۵",
  steps: [
    { range: "۲۶–۲۹", month: "بهمن ۱۴۰۴", title: "انتخاب واحد" },
    { range: "۲", month: "اسفند ۱۴۰۴", title: "شروع کلاس‌ها" },
    { range: "۱۰–۱۱", month: "اسفند ۱۴۰۴", title: "حذف و اضافه" },
    { range: "۱۷–۱۸", month: "خرداد ۱۴۰۵", title: "حذف تک‌درس" },
    { range: "۱۶–۲۹", month: "خرداد ۱۴۰۵", title: "ارزشیابی اساتید" },
    { range: "۳", month: "تیر ۱۴۰۵", title: "پایان کلاس‌ها" },
    { range: "۶–۲۲", month: "تیر ۱۴۰۵", title: "امتحانات" },
  ],
};

/*===== University At A Glance =====*/

export const STATS = [
  { value: "۲٬۳۰۰+", label: "دانشجو" },
  { value: "۱۱۵", label: "عضو هیئت علمی" },
  { value: "۸", label: "گروه آموزشی" },
  { value: "۲٬۲۰۰+", label: "دانش‌آموخته" },
  { value: "۲٬۴۰۰+", label: "مقاله علمی" },
  { value: "۷۵", label: "کارمند" },
];

export const CAMPUS_LIFE = {
  image: campusStoryImage,
  imageAlt: "جشن روز دانشجو در دانشگاه صنعتی همدان",
  kicker: "زندگی در دانشگاه",
  title: "خاطره‌هایی که با هم می‌سازیم",
  caption: "جشن روز دانشجو · دانشگاه صنعتی همدان",
  videoLabel: "ویدیوی جشن روز دانشجو در دانشگاه صنعتی همدان",
};

/*===== Achievements =====*/

export const ACHIEVEMENTS: Story[] = [
  {
    id: "achievement-isc",
    category: "دستاورد پژوهشی",
    title: "انرژی پایدار و هوش مصنوعی؛ در جمع نشریات ISC",
    summary: "نمایه‌شدن نشریه علمی دانشگاه در پایگاه استنادی علوم جهان اسلام",
    image: newsJournalImage,
    imageAlt: "نشریه انرژی پایدار و هوش مصنوعی و نشان ISC",
    poster: true,
    href: HUT_LINKS.portal,
  },
  {
    id: "achievement-faculty",
    category: "اعضای هیئت علمی",
    title: "ارتقای علمی اعضای هیئت علمی مهندسی پزشکی",
    summary: "آخرین احکام ارتقای مرتبه علمی اعضای هیئت علمی گروه مهندسی پزشکی دانشگاه صنعتی همدان.",
    image: achievementFacultyImage,
    imageAlt: "اعضای هیئت علمی گروه مهندسی پزشکی",
    href: HUT_LINKS.portal,
  },
  {
    id: "achievement-athletics",
    category: "افتخار دانشجویی",
    title: "افتخارآفرینی دانشجویان در میدان ورزش",
    summary: "کسب مدال طلای کاراته، مقام پنجم کشتی فرنگی و جایگاه هشتم تیراندازی در هفدهمین المپیاد ورزشی دانشجویان.",
    image: newsAthleticsImage,
    imageAlt: "نتایج ورزشکاران دانشگاه در المپیاد دانشجویان",
    poster: true,
    href: HUT_LINKS.portal,
  },
];

/*===== Events And Courses =====*/

export const EVENTS: Story[] = [
  {
    id: "controlled-blasting",
    category: "کارگاه تخصصی",
    title: "آشنایی با آتشباری کنترل‌شده",
    summary: "آموزش کاربردی برای توسعه مهارت‌های تخصصی دانشجویان و فعالان صنعت.",
    image: eventBlastingImage,
    imageAlt: "کارگاه تخصصی آتشباری کنترل‌شده",
    poster: true,
    href: HUT_LINKS.growthCenter,
  },
  {
    id: "battery-training",
    category: "آموزش صنعت",
    title: "دوره باتری و اصول نگهداری آن",
    summary: "دوره کوتاه‌مدت ویژه کارکنان نیروگاه شهید مفتح با همکاری دانشگاه.",
    image: eventBatteryImage,
    imageAlt: "دوره آموزشی باتری و اصول نگهداری",
    href: HUT_LINKS.growthCenter,
  },
  {
    id: "steam-plant",
    category: "دانشگاه و صنعت",
    title: "دوره آموزشی کنترل نیروگاه بخار",
    summary: "ارتقای دانش فنی کارکنان صنعت با بهره‌گیری از ظرفیت علمی دانشگاه.",
    image: eventSteamImage,
    imageAlt: "برگزاری دوره آموزشی کنترل نیروگاه بخار",
    href: HUT_LINKS.growthCenter,
  },
];
