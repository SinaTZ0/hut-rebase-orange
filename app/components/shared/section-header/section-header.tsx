import { ArrowLeftIcon } from "lucide-react";

import { Button } from "~/components/primitive/button/button";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { cn } from "cn";

/*===== Section Header =====*/

export type SectionHeaderProps = {
  /** Two to four words above the title. */
  kicker: string;
  title: string;
  /** At most one sentence. */
  lead?: string;
  /** An outline link at the opposite end, such as «مشاهده همه». */
  action?: { label: string; href: string };
  /** Set on `deep` bands: the gold rule stays, the text switches to the deep palette. */
  onDeep?: boolean;
  /** The id of the `h2`, so the section can point at it with `aria-labelledby`. */
  titleId?: string;
  className?: string;
};

/**
 * Opens a homepage section: a gold rule and kicker, an `h2`, an optional lead and an optional link. The kicker sits
 * above the title so the eye reads «what it is» before «what it says».
 */
export function SectionHeader({ kicker, title, lead, action, onDeep, titleId, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-x-6 gap-y-4", className)}>
      <div className="max-w-2xl">
        <p className={cn("flex items-center gap-3 text-kicker", onDeep ? "text-gold" : "text-brand-text")}>
          <span aria-hidden className="h-0.5 w-8 rounded-full bg-gold" />
          {kicker}
        </p>
        <h2 id={titleId} className="mt-2 text-h2">
          {title}
        </h2>
        {lead && (
          <p className={cn("mt-2 text-body-lg", onDeep ? "text-deep-muted" : "text-muted-foreground")}>{lead}</p>
        )}
      </div>
      {action && (
        <Button
          variant={onDeep ? "outline-deep" : "outline"}
          nativeButton={false}
          render={<SiteLink href={action.href} />}
        >
          {action.label}
          <ArrowLeftIcon data-icon="inline-end" />
        </Button>
      )}
    </div>
  );
}
