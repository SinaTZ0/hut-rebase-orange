import { cn } from "cn";

import { Badge } from "~/components/primitive/badge/badge";
import { Card, CardDescription, CardFooter, CardMedia, CardTitle } from "~/components/primitive/card/card";
import { SectionHeader } from "~/components/shared/section-header/section-header";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { TextLink } from "~/components/shared/text-link/text-link";
import { HUT_LINKS } from "~/lib/site-links";
import { ACHIEVEMENTS, type Story } from "../content";

/*===== Achievements =====*/

/** Mixed sizes for rhythm: one large feature card beside two stacked row cards. */
export function Achievements() {
  const [featured, ...others] = ACHIEVEMENTS;

  return (
    <section aria-labelledby="achievements-title" className="py-12 min-[600px]:py-16">
      <div className="mx-auto max-w-site px-6">
        <SectionHeader
          kicker="ثمره تلاش جامعه دانشگاهی"
          title="دستاوردها و افتخارات"
          lead="از پیشرفت‌های علمی تا افتخارآفرینی دانشجویان؛ روایت تلاش‌هایی که به ثمر می‌رسند."
          action={{ label: "دستاوردهای دانشگاه", href: HUT_LINKS.portal }}
          titleId="achievements-title"
        />
        <ul className="mt-8 grid gap-5 min-[960px]:grid-cols-[1.1fr_1fr] min-[960px]:grid-rows-2">
          <li className="min-[960px]:row-span-2">
            <AchievementCard story={featured} featured />
          </li>
          {others.map((story) => (
            <li key={story.id}>
              <AchievementCard story={story} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/*===== Achievement Card =====*/

/**
 * The featured card stacks its media above the text; the others are rows from 600px with the media at the inline
 * start. The footer holds the category and the link. Posters crop from the top so their own titles survive.
 */
function AchievementCard({ story, featured = false }: { story: Story; featured?: boolean }) {
  return (
    <Card render={<SiteLink href={story.href} />} className="h-full gap-0 py-0">
      <div className={cn("flex flex-1 flex-col", !featured && "min-[600px]:flex-row")}>
        <CardMedia
          fit={story.poster ? "top" : "cover"}
          className={cn("aspect-2/1", !featured && "min-[600px]:aspect-auto min-[600px]:w-2/5")}
        >
          <img src={story.image} alt={story.imageAlt} width={1000} height={580} loading="lazy" />
        </CardMedia>
        <div className="flex flex-1 flex-col gap-2 p-5 min-[600px]:p-6">
          {featured && (
            <Badge variant="gold" className="self-start">
              در کانون توجه
            </Badge>
          )}
          <CardTitle className={cn(!featured && "text-h4")}>{story.title}</CardTitle>
          <CardDescription className="line-clamp-2">{story.summary}</CardDescription>
        </div>
      </div>
      <CardFooter className="justify-between gap-3">
        <p className="text-caption text-muted-foreground">{story.date}</p>
        <TextLink>بیشتر بخوانید</TextLink>
      </CardFooter>
    </Card>
  );
}
