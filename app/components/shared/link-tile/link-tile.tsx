import { type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { ArrowLeftIcon, ArrowUpLeftIcon, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { SiteLink } from "~/components/shared/site-link/site-link";
import {
  linkTileArrowVariants,
  linkTileContentVariants,
  linkTileDescriptionClasses,
  linkTileIconBareClasses,
  linkTileIconClasses,
  linkTileTitleClasses,
  linkTileVariants,
} from "./link-tile.styles";

/*===== Link Tile =====*/

export type LinkTileProps = VariantProps<typeof linkTileVariants> & {
  href: string;
  title: ReactNode;
  description?: ReactNode;
  /** A Lucide icon, drawn at 28px in an `accent` square. */
  icon?: LucideIcon;
  /** Draw the icon without its `accent` square, so it sits on the tile's own surface. */
  bareIcon?: boolean;
  className?: string;
};

/**
 * A whole-tile link with an icon square, an `h4` title, an optional `body-sm` description and an arrow. Links that
 * leave the site (`http…`) carry `arrow-up-left`; internal ones carry `arrow-left`. Lay tiles out in the consumer:
 * `row` for lists of routes, `stacked` for compact grids like the service strip.
 */
export function LinkTile({
  href,
  title,
  description,
  icon: Icon,
  bareIcon = false,
  variant,
  className,
}: LinkTileProps) {
  const external = href.startsWith("http");
  const Arrow = external ? ArrowUpLeftIcon : ArrowLeftIcon;

  return (
    <SiteLink data-slot="link-tile" href={href} className={cn(linkTileVariants({ variant }), className)}>
      {Icon && (
        <span
          data-slot="link-tile-icon"
          aria-hidden
          className={cn(linkTileIconClasses, bareIcon && linkTileIconBareClasses)}
        >
          <Icon />
        </span>
      )}
      <span className={linkTileContentVariants({ variant })}>
        <span className={linkTileTitleClasses}>{title}</span>
        {description && <span className={linkTileDescriptionClasses}>{description}</span>}
      </span>
      <Arrow
        data-slot="link-tile-arrow"
        aria-hidden
        className={linkTileArrowVariants({ variant, direction: external ? "external" : "internal" })}
      />
    </SiteLink>
  );
}
