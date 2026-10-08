import { LayoutGridIcon } from "lucide-react";

import { LinkTile } from "~/components/shared/link-tile/link-tile";
import { HUT_LINKS, SERVICES } from "~/lib/site-links";

/*===== Tiles =====*/

// Six tiles fit one row on desktop and the last is always «کلیه خدمات», so the strip shows the first five
// services. The footer still lists all of them.
const TILES = [
  ...SERVICES.slice(0, 5),
  { title: "کلیه خدمات", description: "همه سامانه‌ها و خدمات", href: HUT_LINKS.systems, icon: LayoutGridIcon },
];

/*===== Service Strip =====*/

/**
 * A floating panel of quick-access tiles separated by hairlines. It overlaps the hero's bottom padding so the two read
 * as one object. The panel clips its tiles, so only the outer corners of the first and last tile are rounded. The
 * title is for screen readers only: the tiles name themselves.
 */
export function ServiceStrip() {
  return (
    <section aria-labelledby="services-title" className="relative z-10 -mt-16 px-6">
      <h2 id="services-title" className="sr-only">
        دسترسی سریع به خدمات دانشگاه
      </h2>
      <ul className="mx-auto grid max-w-site grid-cols-2 overflow-hidden rounded-lg bg-card shadow-float ring-1 ring-border min-[600px]:grid-cols-3 min-[960px]:grid-cols-6">
        {TILES.map((tile) => (
          <li
            key={tile.title}
            className="border-border not-last:border-e max-[599px]:nth-[-n+4]:border-b max-[599px]:nth-[2n]:border-e-0 min-[600px]:max-[959px]:nth-[-n+3]:border-b min-[600px]:max-[959px]:nth-[3n]:border-e-0"
          >
            <LinkTile
              variant="stacked"
              href={tile.href}
              title={tile.title}
              description={tile.description}
              icon={tile.icon}
              bareIcon
              className="h-full min-h-32 justify-center rounded-none p-0 focus-visible:-outline-offset-2"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
