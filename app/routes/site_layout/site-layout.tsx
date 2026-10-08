import { Outlet } from "react-router";

import { SiteFooter } from "~/components/shared/site-footer/site-footer";
import { SiteHeader } from "~/components/shared/site-header/site-header";

/*===== Site Layout =====*/

/** The public chrome shared by every university page: skip link, header, `main` landmark and footer. */
export default function SiteLayout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-gold px-4 py-2 text-button text-gold-foreground focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
      >
        پرش به محتوای اصلی
      </a>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
