import { ArrowLeftIcon, HeartHandshakeIcon, MessageSquareTextIcon } from "lucide-react";

import { Button } from "~/components/primitive/button/button";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { HUT_LINKS, INTERNAL_PATHS } from "~/lib/site-links";

/*===== Support Routes =====*/

const SUPPORT_ROUTES = [
  {
    title: "صدای شما برای ما مهم است",
    description: "ثبت شکایت، پیشنهاد یا انتقاد و دریافت کد پیگیری",
    href: INTERNAL_PATHS.complaints,
    icon: MessageSquareTextIcon,
  },
  {
    title: "همراه شما در مسیر دانشگاه",
    description: "ثبت پرسش برای دریافت راهنمایی و دریافت کد پیگیری",
    href: INTERNAL_PATHS.consultation,
    icon: HeartHandshakeIcon,
  },
];

/*===== Call To Action =====*/

/** The closing invitation: a `deep` panel with two actions beside a card of two real support routes. */
export function CallToAction() {
  return (
    <section aria-labelledby="welcome-title" className="py-12 min-[600px]:py-16">
      <div className="mx-auto max-w-site px-6">
        <div className="grid gap-8 rounded-lg surface-deep p-6 min-[600px]:p-10 min-[960px]:grid-cols-[1.2fr_1fr] min-[960px]:items-center">
          <div>
            <p className="flex items-center gap-3 text-kicker text-gold">
              <span aria-hidden className="h-0.5 w-8 rounded-full bg-gold" />
              شروع یک مسیر تازه
            </p>
            <h2 id="welcome-title" className="mt-2 text-h2">
              به جمع ما خوش آمدید
            </h2>
            <p className="mt-2 text-body-lg text-deep-muted">
              هر آنچه برای آغاز مسیر دانشگاهی نیاز دارید؛ از آشنایی با گروه‌های آموزشی تا راهنمای ثبت‌نام.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                variant="gold"
                size="lg"
                nativeButton={false}
                render={<SiteLink href={HUT_LINKS.freshmanGuide} />}
              >
                راهنمای نودانشجویان
                <ArrowLeftIcon data-icon="inline-end" />
              </Button>
              <Button
                variant="outline-deep"
                size="lg"
                nativeButton={false}
                render={<SiteLink href={HUT_LINKS.departments} />}
              >
                گروه‌های آموزشی
              </Button>
            </div>
          </div>

          {/*------ Support Routes ------*/}
          <ul className="flex flex-col gap-3 rounded-md bg-card p-3 text-card-foreground">
            {SUPPORT_ROUTES.map((route) => (
              <li key={route.href}>
                <SiteLink
                  href={route.href}
                  className="group flex items-start gap-4 rounded-md p-4 transition-colors duration-150 outline-none hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-md bg-accent text-brand-text group-hover:bg-card">
                    <route.icon aria-hidden className="size-7" />
                  </span>
                  <span>
                    <span className="block text-h4">{route.title}</span>
                    <span className="block text-body-sm text-muted-foreground">{route.description}</span>
                  </span>
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
