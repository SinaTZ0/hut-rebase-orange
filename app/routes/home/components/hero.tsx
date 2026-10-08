import { ArrowLeftIcon, CalendarDaysIcon } from "lucide-react";

import { Button } from "~/components/primitive/button/button";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { HUT_LINKS } from "~/lib/site-links";
import { HERO } from "../content";

/*===== Hero =====*/

/**
 * The full-bleed campus photo under the `overlay` scrim. The bottom padding reserves the space the service strip
 * overlaps. Exactly two actions: one gold, one outline on deep.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden text-deep-foreground [--ring:var(--ring-deep)]"
    >
      {/*------ Photo And Scrim ------*/}
      <img
        src={HERO.image}
        alt={HERO.imageAlt}
        width={1646}
        height={954}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-overlay" />

      <div className="mx-auto grid max-w-site gap-10 px-6 pt-16 pb-36 min-[960px]:grid-cols-[1.4fr_1fr] min-[960px]:items-end min-[960px]:pt-24 min-[960px]:pb-44">
        {/*------ Headline ------*/}
        <div>
          <p className="flex items-center gap-3 text-kicker text-gold">
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-gold" />
            {HERO.kicker}
          </p>
          <h1 id="hero-title" className="mt-3 text-display">
            دانشگاه صنعتی <span className="text-gold">همدان</span>
          </h1>
          <p className="mt-4 max-w-xl text-body-lg text-deep-muted">{HERO.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
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

        {/*------ Academic Notice ------*/}
        <div className="flex flex-col gap-4 min-[960px]:items-end">
          <div className="w-full max-w-sm rounded-md bg-deep-raised p-5 ring-1 ring-deep-muted/30">
            <p className="flex items-center gap-2 text-caption text-gold">
              <CalendarDaysIcon aria-hidden className="size-5" />
              {HERO.notice.label}
            </p>
            <p className="mt-2 text-h4">{HERO.notice.text}</p>
            <Button
              variant="outline-deep"
              size="sm"
              className="mt-4"
              nativeButton={false}
              render={<SiteLink href={HUT_LINKS.calendar} />}
            >
              {HERO.notice.action}
            </Button>
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-caption text-deep-muted">
            {HERO.tagline.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
