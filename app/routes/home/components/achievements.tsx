import { ArrowLeftIcon } from "lucide-react";

import { Badge } from "~/components/primitive/badge/badge";
import { Card } from "~/components/primitive/card/card";
import { SectionHeader } from "~/components/shared/section-header/section-header";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { HUT_LINKS } from "~/lib/site-links";
import { ACHIEVEMENTS } from "../content";

/*===== Achievements =====*/

/** Three stacked feature cards: image, gold-text kicker, `h3`, a two-line summary and a link call. */
export function Achievements() {
  return (
    <section aria-labelledby="achievements-title" className="py-12 min-[600px]:py-18">
      <div className="mx-auto max-w-site px-6">
        <SectionHeader
          kicker="ثمره تلاش جامعه دانشگاهی"
          title="دستاوردها و افتخارات"
          lead="از پیشرفت‌های علمی تا افتخارآفرینی دانشجویان؛ روایت تلاش‌هایی که به ثمر می‌رسند."
          action={{ label: "دستاوردهای دانشگاه", href: HUT_LINKS.portal }}
          titleId="achievements-title"
        />
        <ul className="mt-8 grid gap-6 min-[960px]:grid-cols-3">
          {ACHIEVEMENTS.map((item, index) => (
            <li key={item.id}>
              <SiteLink
                href={item.href}
                className="group block h-full rounded-lg outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Card className="h-full">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width={999}
                    height={579}
                    loading="lazy"
                    className="aspect-video w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-2 px-(--card-spacing)">
                    {index === 0 && (
                      <Badge variant="gold" className="self-start">
                        در کانون توجه
                      </Badge>
                    )}
                    <p className="text-kicker text-gold-text">{item.category}</p>
                    <h3 className="text-h3 group-hover:text-brand-text">{item.title}</h3>
                    <p className="line-clamp-2 text-body-sm text-muted-foreground">{item.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-2 text-button text-brand-text">
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
