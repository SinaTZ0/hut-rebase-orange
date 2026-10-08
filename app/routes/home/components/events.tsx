import { ArrowLeftIcon } from "lucide-react";

import { Card } from "~/components/primitive/card/card";
import { SectionHeader } from "~/components/shared/section-header/section-header";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { HUT_LINKS } from "~/lib/site-links";
import { EVENTS } from "../content";

/*===== Events =====*/

/** Workshops and industry courses in row form on the `muted` band. */
export function Events() {
  return (
    <section aria-labelledby="events-title" className="bg-muted py-12 min-[600px]:py-16">
      <div className="mx-auto max-w-site px-6">
        <SectionHeader
          kicker="یادگیری ادامه دارد"
          title="رویدادها و دوره‌های آموزشی"
          lead="از کلاس درس تا محیط کار؛ دوره‌های مهارتی و تخصصی در همراهی دانشگاه و صنعت."
          action={{ label: "مرکز رشد و کارآفرینی", href: HUT_LINKS.growthCenter }}
          titleId="events-title"
        />
        <ul className="mt-8 flex flex-col gap-4">
          {EVENTS.map((event) => (
            <li key={event.id}>
              <SiteLink
                href={event.href}
                className="group block rounded-lg outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-solid"
              >
                <Card className="flex-col gap-0 py-0 min-[600px]:flex-row">
                  <img
                    src={event.image}
                    alt={event.imageAlt}
                    width={999}
                    height={562}
                    loading="lazy"
                    className="aspect-video w-full object-cover min-[600px]:aspect-auto min-[600px]:w-72 min-[600px]:shrink-0"
                  />
                  <div className="flex flex-col justify-center gap-2 p-6">
                    <p className="text-kicker text-gold-text">{event.category}</p>
                    <h3 className="text-h3 group-hover:text-brand-text">{event.title}</h3>
                    <p className="text-body-sm text-muted-foreground">{event.summary}</p>
                    <span className="inline-flex items-center gap-2 text-button text-brand-text">
                      بیشتر بخوانید
                      <ArrowLeftIcon aria-hidden className="size-5" />
                    </span>
                  </div>
                </Card>
              </SiteLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
