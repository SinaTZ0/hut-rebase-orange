import { ArrowLeftIcon } from "lucide-react";

import { SiteLink } from "~/components/shared/site-link/site-link";
import { HUT_LINKS, SERVICES } from "~/lib/site-links";

/*===== Service Strip =====*/

/** A floating panel of the six quick-access systems. It overlaps the hero so the two read as one object. */
export function ServiceStrip() {
  return (
    <section aria-labelledby="services-title" className="relative z-10 -mt-24 px-6 min-[600px]:-mt-28">
      <div className="mx-auto max-w-site rounded-lg bg-card p-6 shadow-float ring-1 ring-border">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="services-title" className="text-h3">
            دسترسی سریع به خدمات دانشگاه
          </h2>
          <SiteLink
            href={HUT_LINKS.systems}
            className="inline-flex min-h-10 items-center gap-2 rounded-sm text-nav text-brand-text outline-none hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            کلیه خدمات
            <ArrowLeftIcon aria-hidden className="size-5" />
          </SiteLink>
        </div>
        <ul className="mt-5 grid grid-cols-2 gap-3 min-[960px]:grid-cols-6">
          {SERVICES.map((service) => (
            <li key={service.title}>
              <SiteLink
                href={service.href}
                className="group flex h-full flex-col items-start gap-3 rounded-md p-3 transition-colors duration-150 outline-none hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring"
              >
                <span className="grid size-12 place-items-center rounded-md bg-accent text-brand-text group-hover:bg-card">
                  <service.icon aria-hidden className="size-7" />
                </span>
                <span>
                  <span className="block text-h4">{service.title}</span>
                  <span className="block text-body-sm text-muted-foreground">{service.description}</span>
                </span>
              </SiteLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
