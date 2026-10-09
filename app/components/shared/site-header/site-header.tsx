import { ChevronDownIcon, MenuIcon } from "lucide-react";

import logoUrl from "~/assets/branding-navbar-logo.webp";
import { Button } from "~/components/primitive/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/primitive/dropdown-menu/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/primitive/sheet/sheet";
import { Link } from "~/components/shared/link/link";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { ThemeToggle } from "~/components/shared/theme-toggle/theme-toggle";
import { HUT_LINKS, NAV_GROUPS, NAV_LINKS } from "~/lib/site-links";

/*===== Shared Styles =====*/

// The nav item: a gold underline marks hover and focus. External destinations have no «current page», so no
// `aria-current` marker appears here.
const navItemClasses =
  "relative inline-flex h-18 items-center gap-1 px-3 text-nav text-foreground outline-none transition-colors duration-150 after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:rounded-full after:bg-gold after:opacity-0 hover:text-brand-text hover:after:opacity-100 focus-visible:text-brand-text focus-visible:outline-2 focus-visible:outline-solid focus-visible:-outline-offset-2 focus-visible:outline-ring aria-expanded:text-brand-text aria-expanded:after:opacity-100 data-popup-open:text-brand-text data-popup-open:after:opacity-100";

/*===== Utility Bar =====*/

function UtilityBar() {
  return (
    <div className="surface-deep">
      <div className="mx-auto flex h-10 max-w-site items-center justify-between gap-4 px-6 text-caption">
        <p className="truncate text-deep-muted">پایگاه رسمی دانشگاه صنعتی همدان</p>
        <nav aria-label="پیوندهای سریع" className="flex shrink-0 items-center gap-5">
          <SiteLink
            href={HUT_LINKS.contact}
            className="rounded-sm text-deep-foreground transition-colors duration-150 ease-out outline-none hover:text-gold focus-visible:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-solid motion-reduce:transition-none"
          >
            ارتباط با ما
          </SiteLink>
          <SiteLink
            href={HUT_LINKS.login}
            className="rounded-sm text-gold transition-colors duration-150 ease-out outline-none hover:text-deep-foreground focus-visible:text-deep-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-solid motion-reduce:transition-none"
          >
            ورود به پرتال
          </SiteLink>
        </nav>
      </div>
    </div>
  );
}

/*===== Brand =====*/

/** The mark sits on a deep tile because the logo file is white; the tile keeps it legible in both themes. */
function Brand() {
  return (
    <Link
      to="/"
      className="flex min-w-0 items-center gap-3 rounded-md outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring focus-visible:outline-solid"
    >
      <span className="grid size-11 place-items-center rounded-md surface-deep">
        <img src={logoUrl} alt="" width={28} height={25} className="size-7 object-contain" />
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="truncate text-h4 text-foreground">دانشگاه صنعتی همدان</span>
        <span
          lang="en"
          dir="ltr"
          className="hidden truncate text-caption tracking-wider text-muted-foreground uppercase min-[600px]:block"
        >
          Hamedan University of Technology
        </span>
      </span>
    </Link>
  );
}

/*===== Desktop Navigation =====*/

function DesktopNav() {
  return (
    <nav aria-label="منوی اصلی" className="hidden items-center min-[960px]:flex">
      {NAV_GROUPS.map((group) => (
        <DropdownMenu key={group.label}>
          <DropdownMenuTrigger className={navItemClasses}>
            {group.label}
            <ChevronDownIcon className="size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-64" sideOffset={0}>
            <DropdownMenuGroup>
              <DropdownMenuLabel>{group.description}</DropdownMenuLabel>
              {group.links.map((link) => (
                <DropdownMenuItem key={link.label} render={<SiteLink href={link.href} />}>
                  {link.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
      {NAV_LINKS.map((link) => (
        <SiteLink key={link.label} href={link.href} className={navItemClasses}>
          {link.label}
        </SiteLink>
      ))}
    </nav>
  );
}

/*===== Mobile Menu =====*/

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="outline" size="icon" aria-label="باز کردن منو" className="min-[960px]:hidden" />}
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="start" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>منوی دانشگاه</SheetTitle>
          <SheetDescription>دسترسی به بخش‌ها و خدمات دانشگاه صنعتی همدان</SheetDescription>
        </SheetHeader>
        <nav aria-label="منوی موبایل" className="flex flex-col gap-6 px-6 pb-8">
          {NAV_GROUPS.map((group) => (
            <section key={group.label} aria-label={group.label}>
              <h3 className="text-h4">{group.label}</h3>
              <p className="text-caption text-muted-foreground">{group.description}</p>
              <ul className="mt-2 flex flex-col">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <SheetClose
                      render={
                        <SiteLink
                          href={link.href}
                          className="flex min-h-10 items-center rounded-sm px-2 text-body-sm outline-none hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-solid"
                        />
                      }
                    >
                      {link.label}
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <ul className="flex flex-col border-t pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <SiteLink
                  href={link.href}
                  className="flex min-h-10 items-center rounded-sm px-2 text-body-sm font-semibold outline-none hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-solid"
                >
                  {link.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

/*===== Site Header =====*/

/** The utility bar and main row. The nav collapses into a sheet under 960px. */
export function SiteHeader() {
  return (
    <header>
      <UtilityBar />
      <div className="border-b bg-card">
        <div className="mx-auto flex h-18 max-w-site items-center justify-between gap-4 px-6">
          <Brand />
          <DesktopNav />
          <div className="flex shrink-0 items-center gap-1">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
