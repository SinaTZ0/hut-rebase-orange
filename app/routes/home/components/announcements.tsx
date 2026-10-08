import { SectionHeader } from "~/components/shared/section-header/section-header";
import { HUT_LINKS } from "~/lib/site-links";
import { ANNOUNCEMENTS } from "../content";
import { SiteLink } from "~/components/shared/site-link/site-link";

/*===== Announcements =====*/

/** Dated notices on the `muted` band. Each states what, when and who issued it. */
export function Announcements() {
  return (
    <section aria-labelledby="announcements-title" className="bg-muted py-12 min-[600px]:py-16">
      <div className="mx-auto max-w-site px-6">
        <SectionHeader
          kicker="آنچه باید بدانید"
          title="اطلاعیه‌ها"
          action={{ label: "همه اطلاعیه‌ها", href: HUT_LINKS.portal }}
          titleId="announcements-title"
        />
        <ul className="mt-8 grid gap-4 min-[960px]:grid-cols-2">
          {ANNOUNCEMENTS.map((item) => (
            <li key={item.title}>
              <SiteLink
                href={HUT_LINKS.portal}
                className="group flex h-full items-center gap-4 rounded-md bg-card p-4 shadow-sm ring-1 ring-border transition-shadow duration-150 outline-none hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-solid"
              >
                <span className="grid size-16 shrink-0 place-items-center rounded-md bg-accent text-center leading-tight text-brand-text">
                  <span>
                    <span className="block text-h3">{item.day}</span>
                    <span className="block text-caption">{item.month}</span>
                  </span>
                </span>
                <span>
                  <span className="block text-h4 group-hover:text-brand-text">{item.title}</span>
                  <span className="mt-1 block text-caption text-muted-foreground">{item.issuer}</span>
                </span>
              </SiteLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
