import { PlayIcon, UsersRoundIcon } from "lucide-react";

import { SectionHeader } from "~/components/shared/section-header/section-header";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { WatermarkIcon } from "~/components/shared/watermark-icon/watermark-icon";
import { HUT_LINKS } from "~/lib/site-links";
import { CAMPUS_LIFE, STATS } from "../content";

/*===== Stat Band =====*/

/**
 * A `deep` band: the university in six figures, set in an open grid with hairlines rather than boxed tiles, beside a
 * campus-life photo that links to the Aparat channel.
 */
export function StatBand() {
  return (
    <section
      aria-labelledby="glance-title"
      className="relative isolate overflow-hidden surface-deep py-12 min-[600px]:py-16"
    >
      <WatermarkIcon icon={UsersRoundIcon} className="-end-10 -bottom-12 size-64" />
      <div className="mx-auto grid max-w-site items-center gap-10 px-6 min-[960px]:grid-cols-2 min-[960px]:gap-16">
        {/*------ Figures ------*/}
        <div>
          <SectionHeader
            kicker="جامعه‌ای برای یادگیری و ساختن"
            title="دانشگاه صنعتی همدان در یک نگاه"
            lead="آموزش و پژوهش در رشته‌های مهندسی، با تکیه بر دانش اعضای هیئت علمی و همراهی دانشجویان؛ در پیوند با نیازهای جامعه و صنعت."
            onDeep
            titleId="glance-title"
          />
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 min-[600px]:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col border-t border-deep-muted/25 pt-4">
                <dt className="text-body-sm text-deep-muted">{stat.label}</dt>
                <dd className="order-first text-stat text-gold">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/*------ Campus Life Video ------*/}
        <figure>
          <SiteLink
            href={HUT_LINKS.aparat}
            aria-label={CAMPUS_LIFE.videoLabel}
            className="group relative isolate block aspect-16/10 overflow-hidden rounded-lg ring-1 ring-deep-muted/20 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-solid"
          >
            <img
              src={CAMPUS_LIFE.image}
              alt=""
              width={1919}
              height={1079}
              loading="lazy"
              className="absolute inset-0 -z-20 size-full object-cover transition-[scale] duration-300 ease-out motion-safe:group-hover:scale-[1.03] motion-safe:group-focus-visible:scale-[1.03]"
            />
            {/* The bottom scrim sits only under the caption; the photo above stays clear. */}
            <span aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/2 scrim-bottom" />

            {/*------ Play Pulse ------*/}
            <span
              aria-hidden
              className="absolute inset-0 m-auto grid size-16 place-items-center rounded-full border-8 border-deep-foreground/25 bg-gold bg-clip-padding text-gold-foreground transition-[scale] duration-150 ease-out motion-safe:group-hover:scale-110 motion-safe:group-focus-visible:scale-110"
            >
              <PlayIcon className="ms-0.5 size-6" />
            </span>

            <span className="absolute inset-x-6 bottom-5 text-start">
              <span className="block text-kicker text-gold">{CAMPUS_LIFE.kicker}</span>
              <span className="block text-h3">{CAMPUS_LIFE.title}</span>
            </span>
          </SiteLink>
          <figcaption className="mt-3 text-caption text-deep-muted">{CAMPUS_LIFE.caption} · تماشا در آپارات</figcaption>
        </figure>
      </div>
    </section>
  );
}
