import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import logoUrl from "~/assets/branding-navbar-logo.webp";
import { Button } from "~/components/primitive/button/button";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { CONTACT, HUT_LINKS, INTERNAL_PATHS, SERVICES } from "~/lib/site-links";

/*===== Footer Content =====*/

const UNIVERSITY_LINKS = [
  { label: "معرفی دانشگاه", href: HUT_LINKS.about },
  { label: "اعضای هیئت علمی", href: HUT_LINKS.faculty },
  { label: "گروه‌های آموزشی", href: HUT_LINKS.departments },
  { label: "فرم‌ها و آیین‌نامه‌ها", href: HUT_LINKS.forms },
  { label: "دفترچه تلفن", href: HUT_LINKS.phoneBook },
];

const SOCIAL_LINKS = [
  { label: "ایتا", href: HUT_LINKS.eitaa },
  { label: "آپارات", href: HUT_LINKS.aparat },
  { label: "لینکدین", href: HUT_LINKS.linkedin },
];

const footerLinkClasses =
  "rounded-sm text-body-sm text-deep-muted outline-none hover:text-deep-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

/*===== Site Footer =====*/

/** The deep footer: brand, two link columns, contact details with gold icons and the copyright line. */
export function SiteFooter() {
  return (
    <footer className="surface-deep">
      <div className="mx-auto grid max-w-site gap-10 px-6 py-12 min-[960px]:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        {/*------ Brand ------*/}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md bg-deep-raised">
              <img src={logoUrl} alt="" width={28} height={25} className="size-7 object-contain" />
            </span>
            <span className="text-h4">دانشگاه صنعتی همدان</span>
          </div>
          <p className="text-body-sm text-deep-muted">
            پایگاه اطلاع‌رسانی دانشگاه صنعتی همدان؛ اخبار، آموزش، پژوهش و خدمات جامعه دانشگاهی.
          </p>
          <ul aria-label="شبکه‌های اجتماعی" className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <SiteLink href={link.href} className={footerLinkClasses}>
                  {link.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>

        {/*------ University Links ------*/}
        <nav aria-labelledby="footer-university">
          <h2 id="footer-university" className="text-h4">
            دانشگاه
          </h2>
          <ul className="mt-3 flex flex-col gap-2">
            {UNIVERSITY_LINKS.map((link) => (
              <li key={link.label}>
                <SiteLink href={link.href} className={footerLinkClasses}>
                  {link.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </nav>

        {/*------ Systems ------*/}
        <nav aria-labelledby="footer-systems">
          <h2 id="footer-systems" className="text-h4">
            سامانه‌ها و خدمات
          </h2>
          <ul className="mt-3 flex flex-col gap-2">
            {SERVICES.map((service) => (
              <li key={service.title}>
                <SiteLink href={service.href} className={footerLinkClasses}>
                  {service.title}
                </SiteLink>
              </li>
            ))}
          </ul>
        </nav>

        {/*------ Contact ------*/}
        <div>
          <h2 className="text-h4">ارتباط با دانشگاه</h2>
          <ul className="mt-3 flex flex-col gap-3 text-body-sm text-deep-muted">
            <li className="flex gap-3">
              <MapPinIcon aria-hidden className="mt-1 size-5 shrink-0 text-gold" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon aria-hidden className="mt-1 size-5 shrink-0 text-gold" />
              <a href={CONTACT.phoneHref} dir="ltr" className={footerLinkClasses}>
                {CONTACT.phoneLabel}
              </a>
            </li>
            <li className="flex gap-3">
              <MailIcon aria-hidden className="mt-1 size-5 shrink-0 text-gold" />
              <a href={CONTACT.emailHref} dir="ltr" className={footerLinkClasses}>
                {CONTACT.email}
              </a>
            </li>
          </ul>
          <Button
            variant="outline-deep"
            size="sm"
            className="mt-4"
            nativeButton={false}
            render={<SiteLink href={HUT_LINKS.contact} />}
          >
            ارتباط با ما
          </Button>
        </div>
      </div>

      {/*------ Copyright ------*/}
      <div className="border-t border-deep-raised">
        <div className="mx-auto flex max-w-site flex-wrap items-center justify-between gap-3 px-6 py-4 text-caption text-deep-muted">
          <p>کلیه حقوق این وب‌سایت متعلق به دانشگاه صنعتی همدان است.</p>
          <SiteLink href={INTERNAL_PATHS.privacy} className={footerLinkClasses}>
            حریم خصوصی و صیانت از داده‌ها
          </SiteLink>
        </div>
      </div>
    </footer>
  );
}
