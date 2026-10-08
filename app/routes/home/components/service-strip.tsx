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
 * A floating panel of quick-access tiles. It overlaps the hero's bottom padding so the two read as one object. The
 * title is for screen readers only: the tiles name themselves.
 */
export function ServiceStrip() {
  return (
    <section aria-labelledby="services-title" className="relative z-10 -mt-16 px-6">
      <h2 id="services-title" className="sr-only">
        دسترسی سریع به خدمات دانشگاه
      </h2>
      <ul className="mx-auto grid max-w-site grid-cols-2 gap-1 rounded-lg bg-card p-2 shadow-float ring-1 ring-border min-[600px]:grid-cols-3 min-[960px]:grid-cols-6">
        {TILES.map((tile) => (
          <li key={tile.title}>
            <LinkTile
              variant="stacked"
              href={tile.href}
              title={tile.title}
              description={tile.description}
              icon={tile.icon}
              className="h-full"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
