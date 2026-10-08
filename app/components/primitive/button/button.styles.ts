import { cva } from "class-variance-authority";
import { composeStyles, defineStyles, joinStyles } from "../styles";

/*===== Shared Styles =====*/

const twSharedStyles = defineStyles({
  // `group/button` lets icons and labels react to the button's own state.
  layout: "group/button inline-flex shrink-0 items-center justify-center",
  // Sarv's 1.5px edge, transparent unless a variant draws it, so every variant has the same size.
  geometry: "rounded-md border-[1.5px]",
  appearance: "border-transparent bg-clip-padding",
  typography: "text-button whitespace-nowrap",
  interaction: "transition-[color,background-color,border-color,translate] duration-150 outline-none select-none",
  focus: "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  disabled: "disabled:pointer-events-none disabled:opacity-45",
  invalid: "aria-invalid:border-destructive",
  icon: "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
});

/*===== Appearance =====*/

// Sarv allows one `gold` button per view: the page's main call to action. `default` (teal) is for in-app actions.
// Every variant but `link` lifts 1px on hover, unless reduced motion is on. Popup triggers don't lift, so an open
// popup stays aligned with them.
const twVariant = defineStyles({
  default: {
    appearance: "bg-primary text-primary-foreground",
    hover: "hover:bg-primary-hover motion-safe:hover:not-aria-[haspopup]:-translate-y-px",
  },
  gold: {
    appearance: "bg-gold text-gold-foreground",
    hover: "hover:bg-gold-hover motion-safe:hover:not-aria-[haspopup]:-translate-y-px",
  },
  outline: {
    appearance: "border-input bg-transparent text-foreground",
    hover: "hover:bg-accent motion-safe:hover:not-aria-[haspopup]:-translate-y-px",
    state: "aria-expanded:bg-accent",
  },
  // For secondary choices on `surface-deep` bands.
  "outline-deep": {
    appearance: "border-gold bg-transparent text-gold",
    hover: "hover:bg-deep-raised motion-safe:hover:not-aria-[haspopup]:-translate-y-px",
    state: "aria-expanded:bg-deep-raised",
  },
  secondary: {
    appearance: "bg-secondary text-secondary-foreground",
    hover: "hover:bg-accent motion-safe:hover:not-aria-[haspopup]:-translate-y-px",
    state: "aria-expanded:bg-accent",
  },
  ghost: {
    appearance: "text-brand-text",
    hover: "hover:bg-accent motion-safe:hover:not-aria-[haspopup]:-translate-y-px",
    state: "aria-expanded:bg-accent",
  },
  destructive: {
    appearance: "bg-destructive-surface text-destructive",
    hover: "hover:border-destructive motion-safe:hover:not-aria-[haspopup]:-translate-y-px",
  },
  link: {
    appearance: "text-brand-text underline-offset-4",
    hover: "hover:underline",
  },
});

/*===== Geometry =====*/

// Heights line up with the 48px inputs; `sm` and every icon size keep Sarv's 40px minimum tap target.
// `geometryIcon` tightens the padding on the side holding a `data-icon` child so the icon looks optically centered.
// `geometryGroup` restores the shared radius when compact buttons sit inside a ButtonGroup.
const twSize = defineStyles({
  xs: {
    layout: "gap-1",
    geometry: "h-8 rounded-sm px-3",
    geometryIcon: "has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2",
    geometryGroup: "in-data-[slot=button-group]:rounded-md",
    typography: "text-caption font-bold",
    icon: "[&_svg:not([class*='size-'])]:size-4",
  },
  sm: {
    layout: "gap-1.5",
    geometry: "h-10 rounded-sm px-4",
    geometryIcon: "has-data-[icon=inline-end]:pe-3 has-data-[icon=inline-start]:ps-3",
    geometryGroup: "in-data-[slot=button-group]:rounded-md",
    icon: "[&_svg:not([class*='size-'])]:size-4",
  },
  default: {
    layout: "gap-2",
    geometry: "h-12 px-6",
    geometryIcon: "has-data-[icon=inline-end]:pe-5 has-data-[icon=inline-start]:ps-5",
  },
  lg: {
    layout: "gap-2",
    geometry: "h-14 px-8",
    geometryIcon: "has-data-[icon=inline-end]:pe-6 has-data-[icon=inline-start]:ps-6",
  },
  "icon-xs": {
    geometry: "size-8 rounded-sm",
    geometryGroup: "in-data-[slot=button-group]:rounded-md",
    icon: "[&_svg:not([class*='size-'])]:size-4",
  },
  "icon-sm": {
    geometry: "size-10 rounded-sm",
    geometryGroup: "in-data-[slot=button-group]:rounded-md",
  },
  icon: {
    geometry: "size-12",
  },
  "icon-lg": {
    geometry: "size-14",
    icon: "[&_svg:not([class*='size-'])]:size-6",
  },
});

/*===== Class Composition =====*/

const buttonVariants = cva(joinStyles(twSharedStyles), {
  variants: {
    variant: composeStyles(twVariant),
    size: composeStyles(twSize),
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export { buttonVariants, twVariant, twSize };
