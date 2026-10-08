import { CheckIcon } from "lucide-react";

import { Badge } from "~/components/primitive/badge/badge";
import { SectionHeader } from "~/components/shared/section-header/section-header";
import { HUT_LINKS } from "~/lib/site-links";
import { CALENDAR } from "../content";

/*===== Academic Timeline =====*/

/**
 * The term milestones, running from the inline start. The dates belong to a finished term, so every step is «done»
 * and the card carries an archive badge. It becomes a vertical list under 960px.
 */
export function AcademicTimeline() {
  return (
    <section aria-labelledby="calendar-title" className="bg-muted py-12 min-[600px]:py-16">
      <div className="mx-auto max-w-site px-6">
        <SectionHeader
          kicker="مسیر نیم‌سال"
          title="تقویم آموزشی دانشگاه"
          lead="زمان‌بندی انتخاب واحد، کلاس‌ها و امتحانات"
          action={{ label: "تقویم کامل آموزشی", href: HUT_LINKS.calendar }}
          titleId="calendar-title"
        />

        <div className="mt-8 rounded-lg bg-card p-6 shadow-sm ring-1 ring-border min-[600px]:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-h3">{CALENDAR.term}</h3>
            <Badge variant="secondary">آرشیو تقویم آموزشی</Badge>
          </div>

          <ol className="mt-8 grid min-[960px]:grid-cols-7">
            {CALENDAR.steps.map((step) => (
              <li
                key={step.title + step.range}
                className="relative ps-10 pb-8 before:absolute before:start-[13px] before:top-7 before:-bottom-1 before:w-0.5 before:bg-primary last:pb-0 last:before:hidden min-[960px]:ps-0 min-[960px]:pe-3 min-[960px]:pt-10 min-[960px]:pb-0 min-[960px]:before:start-0 min-[960px]:before:end-0 min-[960px]:before:top-[13px] min-[960px]:before:bottom-auto min-[960px]:before:h-0.5 min-[960px]:before:w-auto"
              >
                <span
                  aria-hidden
                  className="absolute start-0 top-0 grid size-7 place-items-center rounded-full bg-primary text-primary-foreground"
                >
                  <CheckIcon className="size-4" />
                </span>
                <p className="text-h4">{step.title}</p>
                <p className="mt-1 text-body-sm text-muted-foreground">
                  {step.range} {step.month}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
