import { SectionHeader } from "~/components/shared/section-header/section-header";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { Badge } from "~/components/primitive/badge/badge";
import { HUT_LINKS } from "~/lib/site-links";
import { NEWS } from "../content";

/*===== News =====*/

/** One featured story over a scrimmed image beside two compact rows. Whole cards are links. */
export function NewsSection() {
  const [featured, ...others] = NEWS;

  return (
    <section aria-labelledby="news-title" className="py-12 min-[600px]:py-16">
      <div className="mx-auto max-w-site px-6">
        <SectionHeader
          kicker="اخبار و اطلاع‌رسانی"
          title="تازه‌های دانشگاه"
          lead="روایت رویدادها، پژوهش‌ها و زندگی جامعه دانشگاهی"
          action={{ label: "همه اخبار دانشگاه", href: HUT_LINKS.portal }}
          titleId="news-title"
        />

        <div className="mt-8 grid gap-6 min-[960px]:grid-cols-[1.35fr_1fr]">
          {/*------ Featured Story ------*/}
          <SiteLink
            href={featured.href}
            className="group relative isolate flex min-h-96 flex-col justify-end overflow-hidden rounded-lg p-6 text-deep-foreground shadow-sm transition-shadow duration-150 outline-none [--ring:var(--ring-deep)] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-solid"
          >
            <img
              src={featured.image}
              alt={featured.imageAlt}
              width={999}
              height={490}
              className="absolute inset-0 -z-20 size-full object-cover"
            />
            <span aria-hidden className="absolute inset-0 -z-10 bg-overlay" />
            <Badge variant="gold" className="self-start">
              خبر ویژه
            </Badge>
            <span className="mt-3 text-caption text-deep-muted">
              {featured.category} · {featured.date}
            </span>
            <h3 className="mt-1 text-h3">{featured.title}</h3>
            <p className="mt-2 line-clamp-2 text-body-sm text-deep-muted">{featured.summary}</p>
            <span className="mt-4 text-button text-gold group-hover:underline">ادامه خبر</span>
          </SiteLink>

          {/*------ Compact Rows ------*/}
          <ul className="flex flex-col gap-4">
            {others.map((story) => (
              <li key={story.id} className="flex-1">
                <SiteLink
                  href={story.href}
                  className="group flex h-full items-center gap-4 rounded-md bg-card p-3 shadow-sm ring-1 ring-border transition-shadow duration-150 outline-none hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-solid"
                >
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    width={999}
                    height={490}
                    className="aspect-4/3 w-28 shrink-0 rounded-sm object-cover min-[600px]:w-36"
                  />
                  <span className="min-w-0">
                    <span className="block text-kicker text-gold-text">{story.category}</span>
                    <span className="mt-1 block text-h4 group-hover:text-brand-text">{story.title}</span>
                    <span className="mt-1 block text-caption text-muted-foreground">{story.date}</span>
                    <span className="mt-1 block text-button text-brand-text">ادامه خبر</span>
                  </span>
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
