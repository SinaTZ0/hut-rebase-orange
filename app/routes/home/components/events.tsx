import { ArrowLeftIcon, BookOpenIcon } from "lucide-react";

import { Badge } from "~/components/primitive/badge/badge";
import { Card, CardContent, CardDescription, CardMedia, CardTitle } from "~/components/primitive/card/card";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { WatermarkIcon } from "~/components/shared/watermark-icon/watermark-icon";
import { TextLink } from "~/components/shared/text-link/text-link";
import { HUT_LINKS } from "~/lib/site-links";
import { EVENTS } from "../content";

/*===== Events =====*/

/**
 * Workshops and industry courses: a `deep` intro panel holding the section title and its link, beside a list of row
 * cards with thumbnails. Three items share the band with the intro instead of stretching across it.
 */
export function Events() {
  return (
    <section aria-labelledby="events-title" className="bg-muted py-12 min-[600px]:py-16">
      <div className="mx-auto grid max-w-site gap-6 px-6 min-[960px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)]">
        {/*------ Intro Panel ------*/}
        <div className="relative isolate flex flex-col overflow-hidden rounded-lg surface-deep p-6 min-[600px]:p-8">
          <WatermarkIcon icon={BookOpenIcon} className="-end-8 -top-6 size-40" />
          <p className="flex items-center gap-3 text-kicker text-gold">
            <span aria-hidden className="h-0.5 w-8 rounded-full bg-gold" />
            یادگیری ادامه دارد
          </p>
          <h2 id="events-title" className="mt-2 text-h2">
            رویدادها و دوره‌های آموزشی
          </h2>
          <p className="mt-2 text-body text-deep-muted">
            از کلاس درس تا محیط کار؛ دوره‌های مهارتی و تخصصی در همراهی دانشگاه و صنعت.
          </p>
          <div className="mt-auto border-t border-deep-muted/25 pt-4 max-[959px]:mt-6">
            <TextLink href={HUT_LINKS.growthCenter} tone="deep">
              مرکز رشد و کارآفرینی
            </TextLink>
          </div>
        </div>

        {/*------ Event Rows ------*/}
        <ul className="flex flex-col gap-4">
          {EVENTS.map((event) => (
            <li key={event.id}>
              <Card size="sm" render={<SiteLink href={event.href} />}>
                <CardContent className="flex items-center gap-4">
                  <CardMedia
                    fit={event.poster ? "top" : "cover"}
                    className="aspect-4/3 w-24 rounded-sm min-[600px]:w-36"
                  >
                    <img src={event.image} alt={event.imageAlt} width={1000} height={563} loading="lazy" />
                  </CardMedia>
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
                    <Badge>{event.category}</Badge>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{event.summary}</CardDescription>
                  </div>
                  {/* A round arrow chip with the icon fill. */}
                  <span
                    aria-hidden
                    className="hidden size-10 shrink-0 place-items-center rounded-full bg-accent text-brand-text transition-colors duration-150 ease-out motion-reduce:transition-none min-[600px]:grid [a:focus-visible_&]:bg-primary [a:focus-visible_&]:text-primary-foreground [a:hover_&]:bg-primary [a:hover_&]:text-primary-foreground"
                  >
                    <ArrowLeftIcon className="size-5" />
                  </span>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
