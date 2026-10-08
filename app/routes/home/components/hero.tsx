import { ArrowLeftIcon, CalendarDaysIcon, MapPinIcon } from "lucide-react";

import { Button } from "~/components/primitive/button/button";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { HUT_LINKS } from "~/lib/site-links";
import { HERO } from "../content";

const [location, captionLead, captionTitle] = HERO.tagline;

// Small text on the far side sits over the lighter end of the scrim, so a soft shadow keeps it legible.
const photoTextShadow = "[text-shadow:0_1px_10px_rgb(0_0_0/0.55)]";

/*===== Hero =====*/

/**
 * The full-bleed campus photo under an inline scrim: dark behind the headline at the inline start, clear on the far
 * side so the campus shows. The academic notice runs as a slim row along the bottom edge, and the bottom padding
 * reserves the space the service strip overlaps. Exactly two actions: one gold, one outline on deep.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden surface-deep">
      {/*------ Photo And Scrim ------*/}
      <img
        src={HERO.image}
        alt={HERO.imageAlt}
        width={1647}
        height={955}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover object-[42%_center] min-[960px]:object-[center_45%]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 scrim-inline" />

      <div className="mx-auto grid max-w-site gap-8 px-6 pt-14 pb-10 min-[960px]:grid-cols-[1fr_auto] min-[960px]:pt-20 min-[960px]:pb-12">
        {/*------ Headline ------*/}
        <div className="max-w-xl">
          <p className="flex items-center gap-3 text-kicker text-gold">
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-gold" />
            {HERO.kicker}
          </p>
          <h1 id="hero-title" className="mt-3 text-display">
            دانشگاه صنعتی
            <br />
            <span className="text-gold">همدان</span>
          </h1>
          <p className="mt-3 max-w-sm text-body-lg">{HERO.lead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button variant="gold" size="lg" nativeButton={false} render={<SiteLink href={HUT_LINKS.about} />}>
              آشنایی با دانشگاه
              <ArrowLeftIcon data-icon="inline-end" />
            </Button>
            <Button
              variant="outline-deep"
              size="lg"
              nativeButton={false}
              render={<SiteLink href={HUT_LINKS.freshmanGuide} />}
            >
              راهنمای نودانشجویان
            </Button>
          </div>
        </div>

        {/*------ Campus Caption ------*/}
        <div className={`hidden flex-col items-end justify-between gap-8 min-[960px]:flex ${photoTextShadow}`}>
          <p className="flex items-center gap-2 text-caption">
            <MapPinIcon aria-hidden className="size-4 text-gold" />
            {location}
          </p>
          <p className="border-e-2 border-gold pe-4 text-end">
            <span className="block text-body">{captionLead}</span>
            <span className="block text-h3">{captionTitle}</span>
          </p>
        </div>
      </div>

      {/*------ Academic Notice ------*/}
      <div className="mx-auto max-w-site px-6 pb-24">
        <SiteLink
          href={HUT_LINKS.calendar}
          className="group flex min-h-14 flex-wrap items-center gap-x-4 gap-y-1 rounded-md bg-[color-mix(in_oklab,var(--overlay)_55%,transparent)] px-4 py-3 ring-1 ring-deep-foreground/20 transition-colors duration-150 ease-out outline-none hover:bg-overlay focus-visible:bg-overlay focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-solid motion-reduce:transition-none"
        >
          <CalendarDaysIcon aria-hidden className="size-5 shrink-0 text-gold" />
          <span className="text-caption text-gold">{HERO.notice.label}</span>
          <span className="min-w-0 flex-1 text-body-sm font-semibold">{HERO.notice.text}</span>
          <span className="hidden items-center gap-2 text-caption text-deep-muted transition-colors duration-150 ease-out group-hover:text-gold group-focus-visible:text-gold min-[600px]:flex">
            {HERO.notice.action}
            <ArrowLeftIcon
              aria-hidden
              className="size-5 text-gold transition-[translate] duration-150 ease-out motion-safe:group-hover:-translate-x-1 motion-safe:group-focus-visible:-translate-x-1"
            />
          </span>
        </SiteLink>
      </div>
    </section>
  );
}
