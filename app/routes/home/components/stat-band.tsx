import { PlayIcon } from "lucide-react";

import { Button } from "~/components/primitive/button/button";
import { SectionHeader } from "~/components/shared/section-header/section-header";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { HUT_LINKS } from "~/lib/site-links";
import { CAMPUS_LIFE, STATS } from "../content";

/*===== Stat Band =====*/

/** A `deep` band: the university in six figures beside a campus-life panel that links to the Aparat channel. */
export function StatBand() {
  return (
    <section aria-labelledby="glance-title" className="surface-deep py-12 min-[600px]:py-18">
      <div className="mx-auto max-w-site px-6">
        <SectionHeader
          kicker="جامعه‌ای برای یادگیری و ساختن"
          title="دانشگاه صنعتی همدان در یک نگاه"
          lead="آموزش و پژوهش در رشته‌های مهندسی، با تکیه بر دانش اعضای هیئت علمی و همراهی دانشجویان؛ در پیوند با نیازهای جامعه و صنعت."
          onDeep
          titleId="glance-title"
        />

        <div className="mt-10 grid gap-8 min-[960px]:grid-cols-[1.1fr_1fr] min-[960px]:items-stretch">
          {/*------ Figures ------*/}
          <dl className="grid grid-cols-2 gap-4 min-[600px]:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-md bg-deep-raised p-5">
                <dd className="order-first text-stat text-gold">{stat.value}</dd>
                <dt className="text-body-sm text-deep-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>

          {/*------ Campus Life Panel ------*/}
          <figure className="relative isolate flex min-h-80 flex-col justify-end overflow-hidden rounded-lg p-6">
            <img
              src={CAMPUS_LIFE.image}
              alt={CAMPUS_LIFE.imageAlt}
              width={1919}
              height={1079}
              loading="lazy"
              className="absolute inset-0 -z-20 size-full object-cover"
            />
            <span aria-hidden className="absolute inset-0 -z-10 bg-overlay" />
            <p className="text-kicker text-gold">{CAMPUS_LIFE.kicker}</p>
            <h3 className="mt-1 text-h3">{CAMPUS_LIFE.title}</h3>
            <figcaption className="mt-1 text-caption text-deep-muted">{CAMPUS_LIFE.caption}</figcaption>
            <Button
              variant="outline-deep"
              className="mt-4 self-start"
              aria-label={CAMPUS_LIFE.videoLabel}
              nativeButton={false}
              render={<SiteLink href={HUT_LINKS.aparat} />}
            >
              <PlayIcon data-icon="inline-start" />
              تماشا در آپارات
            </Button>
          </figure>
        </div>
      </div>
    </section>
  );
}
