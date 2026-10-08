import {
  BookOpenCheckIcon,
  GraduationCapIcon,
  LandmarkIcon,
  LibraryIcon,
  MonitorPlayIcon,
  UtensilsCrossedIcon,
  type LucideIcon,
} from "lucide-react";

/*===== External Destinations =====*/

/** Official portal and partner destinations. Persian slugs stay unencoded so the file reads like the portal's URLs. */
export const HUT_LINKS = {
  portal: "https://hut.ac.ir/",
  about: "https://hut.ac.ir/معرفی-دانشگاه",
  contact: "https://hut.ac.ir/ارتباط-با-ما",
  systems: "https://hut.ac.ir/سامانه-ها",
  admin: "https://hut.ac.ir/اداری-و-مالی",
  calendar: "https://hut.ac.ir/web/edu/تقویم-آموزشی",
  freshmanGuide: "https://edu.hut.ac.ir/ngs1403",
  departments: "https://hut.ac.ir/groups",
  faculty: "https://hut.ac.ir/اعضای-هیات-علمی",
  forms: "https://hut.ac.ir/university-forms",
  phoneBook: "https://hut.ac.ir/تلفن-داخلی",
  login: "https://hut.ac.ir/c/portal/login?p_l_id=13",
  growthCenter: "https://hut.ac.ir/web/roshd",
  eitaa: "https://eitaa.com/info_hut",
  aparat: "https://www.aparat.com/hut.university",
  linkedin: "https://www.linkedin.com/school/hamedan-university-of-technology/",
  english: "https://en.hut.ac.ir/en",
} as const;

/*===== Internal Destinations =====*/

/** Paths this app will serve itself. Some pages are not built yet, so these links may 404 until they are. */
export const INTERNAL_PATHS = {
  privacy: "/privacy-and-data-protection",
  complaints: "/complaints-and-feedback",
  consultation: "/online-consultation",
} as const;

/*===== Navigation =====*/

export type NavLinkItem = { label: string; href: string };
export type NavGroup = { label: string; description: string; links: NavLinkItem[] };

/** The four grouped menus of the main navigation. */
export const NAV_GROUPS: NavGroup[] = [
  {
    label: "دانشگاه",
    description: "با دانشگاه صنعتی همدان آشنا شوید",
    links: [
      { label: "معرفی دانشگاه", href: HUT_LINKS.about },
      { label: "اعضای هیئت علمی", href: HUT_LINKS.faculty },
      { label: "حوزه ریاست", href: HUT_LINKS.portal },
      { label: "فرم‌ها و آیین‌نامه‌ها", href: HUT_LINKS.forms },
      { label: "دفترچه تلفن", href: HUT_LINKS.phoneBook },
      { label: "حریم خصوصی و صیانت از داده‌ها", href: INTERNAL_PATHS.privacy },
    ],
  },
  {
    label: "آموزش",
    description: "مسیر یادگیری و خدمات آموزشی",
    links: [
      { label: "معاونت آموزشی", href: HUT_LINKS.portal },
      { label: "گروه‌های آموزشی", href: HUT_LINKS.departments },
      { label: "تقویم آموزشی", href: HUT_LINKS.calendar },
      { label: "راهنمای نودانشجویان", href: HUT_LINKS.freshmanGuide },
    ],
  },
  {
    label: "پژوهش و فناوری",
    description: "از ایده تا ارتباط با صنعت",
    links: [
      { label: "مدیریت پژوهشی", href: HUT_LINKS.portal },
      { label: "آزمایشگاه‌ها", href: HUT_LINKS.portal },
      { label: "ارتباط با صنعت", href: HUT_LINKS.portal },
      { label: "مرکز رشد و کارآفرینی", href: HUT_LINKS.growthCenter },
      { label: "کتابخانه مرکزی", href: HUT_LINKS.portal },
    ],
  },
  {
    label: "دانشجویی و فرهنگی",
    description: "زندگی و تجربه دانشجویی",
    links: [
      { label: "معاونت دانشجویی و فرهنگی", href: HUT_LINKS.portal },
      { label: "خدمات رفاهی دانشجویان", href: HUT_LINKS.portal },
      { label: "مرکز مشاوره و سبک زندگی", href: HUT_LINKS.portal },
      { label: "کانون‌های فرهنگی و هنری", href: HUT_LINKS.portal },
    ],
  },
];

/** Direct links shown beside the groups in the main navigation. */
export const NAV_LINKS: NavLinkItem[] = [
  { label: "اداری و مالی", href: HUT_LINKS.admin },
  { label: "سامانه‌های دانشگاه", href: HUT_LINKS.systems },
];

/*===== Contact =====*/

export const CONTACT = {
  address: "همدان، پل پژوهش، بلوار شهید فهمیده، خیابان مردم",
  phoneLabel: "۰۸۱–۳۸۴۱۱۰۰۰",
  phoneHref: "tel:+988138411000",
  email: "info@hut.ac.ir",
  emailHref: "mailto:info@hut.ac.ir",
} as const;

/*===== Services =====*/

export type Service = { title: string; description: string; kind: "سامانه" | "سرویس"; href: string; icon: LucideIcon };

/** Quick-access systems. The portal's systems page lists every entry point, so each tile lands there for now. */
export const SERVICES: Service[] = [
  {
    title: "سامانه گلستان",
    description: "خدمات آموزشی",
    kind: "سامانه",
    href: HUT_LINKS.systems,
    icon: GraduationCapIcon,
  },
  {
    title: "درس‌افزار",
    description: "یادگیری الکترونیکی",
    kind: "سامانه",
    href: HUT_LINKS.systems,
    icon: MonitorPlayIcon,
  },
  {
    title: "سامانه تغذیه",
    description: "رزرو غذای دانشجویی",
    kind: "سامانه",
    href: HUT_LINKS.systems,
    icon: UtensilsCrossedIcon,
  },
  {
    title: "کتابخانه مرکزی",
    description: "منابع و پایگاه‌های علمی",
    kind: "سرویس",
    href: HUT_LINKS.portal,
    icon: LibraryIcon,
  },
  { title: "سامانه ساجد", description: "خدمات دانشگاهی", kind: "سامانه", href: HUT_LINKS.systems, icon: LandmarkIcon },
  {
    title: "آموزش‌های آزاد",
    description: "دوره‌های مهارتی",
    kind: "سرویس",
    href: HUT_LINKS.portal,
    icon: BookOpenCheckIcon,
  },
];
