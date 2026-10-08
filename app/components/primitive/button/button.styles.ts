import { cva } from "class-variance-authority";
import { composeStyles, defineStyles, joinStyles } from "../styles";

/*===== Shared Styles =====*/

const twSharedStyles = defineStyles({
  // `group/button` lets icons and labels react to the button's own state.
  layout: "group/button inline-flex shrink-0 items-center justify-center",
  geometry: "rounded-lg border",
  appearance: "border-transparent bg-clip-padding",
  typography: "text-sm font-bold whitespace-nowrap",
  interaction: "transition-all outline-none select-none",
  focus: "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  // Popup triggers stay put on press so the popup does not shift with them.
  active: "active:not-aria-[haspopup]:translate-y-px",
  disabled: "disabled:pointer-events-none disabled:opacity-50",
  invalid:
    "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
  icon: "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
});

/*===== Appearance =====*/

const twVariant = defineStyles({
  default: {
    appearance: "bg-primary text-primary-foreground",
    hover: "hover:bg-primary/80",
  },
  outline: {
    appearance: "border-border bg-card dark:border-input dark:bg-input/30",
    hover: "hover:bg-muted hover:text-foreground dark:hover:bg-input/50",
    state: "aria-expanded:bg-muted aria-expanded:text-foreground",
  },
  secondary: {
    appearance: "bg-secondary text-secondary-foreground",
    hover: "hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",
    state: "aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
  },
  ghost: {
    hover: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50",
    state: "aria-expanded:bg-muted aria-expanded:text-foreground",
  },
  destructive: {
    appearance: "bg-destructive/10 text-destructive dark:bg-destructive/20",
    hover: "hover:bg-destructive/20 dark:hover:bg-destructive/30",
    focus:
      "focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
  },
  link: {
    appearance: "text-primary underline-offset-4",
    hover: "hover:underline",
  },
});

/*===== Geometry =====*/

// `geometryIcon` tightens the padding on the side holding a `data-icon` child so the icon looks optically centered.
// `geometryGroup` restores the shared radius when compact buttons sit inside a ButtonGroup.
const twSize = defineStyles({
  xs: {
    layout: "gap-1",
    geometry: "h-8 rounded-[min(var(--radius-md),10px)] px-2.5",
    geometryIcon: "has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5",
    geometryGroup: "in-data-[slot=button-group]:rounded-lg",
    typography: "text-xs",
    icon: "[&_svg:not([class*='size-'])]:size-3",
  },
  sm: {
    layout: "gap-1.5",
    geometry: "h-10 rounded-[min(var(--radius-md),12px)] px-3",
    geometryIcon: "has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2",
    geometryGroup: "in-data-[slot=button-group]:rounded-lg",
  },
  default: {
    layout: "gap-2",
    geometry: "h-11 px-4",
    geometryIcon: "has-data-[icon=inline-end]:pe-3 has-data-[icon=inline-start]:ps-3",
    icon: "[&_svg:not([class*='size-'])]:size-5",
  },
  lg: {
    layout: "gap-2",
    geometry: "h-14 px-6",
    geometryIcon: "has-data-[icon=inline-end]:pe-4 has-data-[icon=inline-start]:ps-4",
    typography: "text-base",
    icon: "[&_svg:not([class*='size-'])]:size-5",
  },
  "icon-xs": {
    geometry: "size-8 rounded-[min(var(--radius-md),10px)]",
    geometryGroup: "in-data-[slot=button-group]:rounded-lg",
    icon: "[&_svg:not([class*='size-'])]:size-3.5",
  },
  "icon-sm": {
    geometry: "size-10 rounded-[min(var(--radius-md),12px)]",
    geometryGroup: "in-data-[slot=button-group]:rounded-lg",
  },
  icon: {
    geometry: "size-11",
    icon: "[&_svg:not([class*='size-'])]:size-5",
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
