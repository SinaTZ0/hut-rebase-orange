import type { LucideIcon } from "lucide-react";

import { cn } from "~/lib/utils";

interface WatermarkIconProps {
  icon: LucideIcon;
  className?: string;
}

/**
 * A large, faint outline icon that fills the empty corner of a `deep` panel.
 *
 * The parent must be `relative isolate overflow-hidden`: the icon sits behind the panel's content (`-z-10`) and
 * bleeds past its edge, so it never competes with text. Position and size come from `className`, using logical
 * offsets (`-end-6`, `-bottom-8`). The fade is the element's `opacity`, not a translucent stroke colour: Lucide paths
 * overlap at their joins, and an alpha stroke would double up there and draw darker spots. It is decorative, so it is hidden from assistive technology.
 */
export function WatermarkIcon({ icon: Icon, className }: WatermarkIconProps) {
  return (
    <Icon
      aria-hidden
      data-slot="watermark-icon"
      className={cn("pointer-events-none absolute -z-10 size-40 stroke-[1] text-deep-foreground opacity-10", className)}
    />
  );
}
