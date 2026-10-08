import { Badge } from "~/components/primitive/badge/badge";
import { Card, CardContent, CardDescription, CardFooter, CardMedia, CardTitle } from "~/components/primitive/card/card";
import { SectionHeader } from "~/components/shared/section-header/section-header";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { TextLink } from "~/components/shared/text-link/text-link";
import { HUT_LINKS } from "~/lib/site-links";
import { ANNOUNCEMENTS, NEWS, type Story } from "../content";

/*===== News =====*/

/**
 * News beside the dated announcements. Most news images are posters, so every story gets its own media area and the
 * text never sits on the image. Whole cards are links.
 */
export function NewsSection() {
  const [featured, ...others] = NEWS;

  return (
    <section aria-labelledby="news-title" className="pt-16 pb-12 min-[600px]:pt-20 min-[600px]:pb-16">
      <div className="mx-auto max-w-site px-6">
        <SectionHeader
          kicker="اخبار و اطلاع‌رسانی"
          title="تازه‌های دانشگاه"
          lead="روایت رویدادها، پژوهش‌ها و زندگی جامعه دانشگاهی"
          action={{ label: "همه اخبار دانشگاه", href: HUT_LINKS.portal }}
          titleId="news-title"
        />

        <div className="mt-8 grid gap-6 min-[960px]:grid-cols-[minmax(0,1.85fr)_minmax(0,1fr)]">
          <div className="grid gap-5 min-[600px]:grid-cols-2">
            <FeaturedStory story={featured} />
            {others.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
          <AnnouncementsPanel />
        </div>
      </div>
    </section>
  );
}

/*===== Featured Story =====*/

/** A wide card: the whole poster beside the text from 600px, above it on phones. The footer holds meta and the link. */
function FeaturedStory({ story }: { story: Story }) {
  return (
    <Card render={<SiteLink href={story.href} />} className="gap-0 py-0 min-[600px]:col-span-2">
      <div className="grid min-[600px]:grid-cols-[1.15fr_1fr]">
        <CardMedia fit={story.poster ? "contain" : "cover"} className="aspect-2/1 min-[600px]:aspect-auto">
          <img src={story.image} alt={story.imageAlt} width={1000} height={491} />
        </CardMedia>
        <div className="flex flex-col gap-2 p-5 min-[600px]:justify-center min-[600px]:p-6">
          <Badge variant="gold" className="self-start">
            خبر ویژه
          </Badge>
          <CardTitle>{story.title}</CardTitle>
          <CardDescription className="line-clamp-3">{story.summary}</CardDescription>
        </div>
      </div>
      <CardFooter className="justify-between gap-3">
        <StoryMeta story={story} />
        <TextLink>ادامه خبر</TextLink>
      </CardFooter>
    </Card>
  );
}

/*===== Story Card =====*/

function StoryCard({ story }: { story: Story }) {
  return (
    <Card size="sm" render={<SiteLink href={story.href} />}>
      <CardMedia fit={story.poster ? "top" : "cover"} className="aspect-2/1">
        <img src={story.image} alt={story.imageAlt} width={1000} height={491} loading="lazy" />
      </CardMedia>
      <CardContent className="flex-1">
        <CardTitle>{story.title}</CardTitle>
      </CardContent>
      <CardFooter className="justify-between gap-3">
        <StoryMeta story={story} />
        <TextLink>ادامه خبر</TextLink>
      </CardFooter>
    </Card>
  );
}

function StoryMeta({ story }: { story: Story }) {
  return <p className="text-caption text-muted-foreground">{story.date}</p>;
}

/*===== Announcements =====*/

/** Dated notices on `muted`, separated by dividers rather than a box each. Each states what, when and who issued it. */
function AnnouncementsPanel() {
  return (
    <aside aria-labelledby="announcements-title" className="flex flex-col rounded-lg bg-muted p-5">
      <p className="text-caption text-muted-foreground">آنچه باید بدانید</p>
      <h3 id="announcements-title" className="text-h3">
        اطلاعیه‌ها
      </h3>
      <ul className="mt-2 flex flex-col divide-y divide-border">
        {ANNOUNCEMENTS.map((item) => (
          <li key={item.title}>
            <SiteLink
              href={HUT_LINKS.portal}
              className="group flex items-start gap-3 rounded-sm py-4 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-solid"
            >
              <span className="flex w-12 shrink-0 flex-col items-center rounded-md bg-card py-1.5 ring-1 ring-border transition-colors duration-150 ease-out group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary group-focus-visible:bg-primary group-focus-visible:text-primary-foreground motion-reduce:transition-none">
                <span className="text-h4">{item.day}</span>
                <span className="text-caption">{item.month}</span>
              </span>
              <span className="min-w-0">
                <span className="block text-body-sm font-semibold transition-colors duration-150 ease-out group-hover:text-brand-text group-focus-visible:text-brand-text motion-reduce:transition-none">
                  {item.title}
                </span>
                <span className="mt-1 block text-caption text-muted-foreground">{item.issuer}</span>
              </span>
            </SiteLink>
          </li>
        ))}
      </ul>
      <TextLink href={HUT_LINKS.portal} className="mt-auto self-start">
        همه اطلاعیه‌ها
      </TextLink>
    </aside>
  );
}
