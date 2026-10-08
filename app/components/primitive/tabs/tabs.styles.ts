import { cva } from "class-variance-authority";
import { composeStyles, defineStyles, joinStyles } from "../styles";

/*===== Tabs Styles =====*/

const twTabsStyles = defineStyles({
  layout: "group/tabs flex gap-2 data-horizontal:flex-col",
});

/*===== List Styles =====*/

const twListStyles = defineStyles({
  layout: "group/tabs-list inline-flex w-fit items-center justify-center group-data-vertical/tabs:flex-col",
  geometry:
    "rounded-lg p-[3px] group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit data-[variant=line]:rounded-none",
  appearance: "text-muted-foreground",
});

// `data-variant` stays on the list as well, because TabsTrigger styles itself from it.
const twVariant = defineStyles({
  default: {
    appearance: "bg-muted",
  },
  line: {
    layout: "gap-1",
    appearance: "bg-transparent",
  },
});

/*===== Trigger Styles =====*/

const twTriggerStyles = defineStyles({
  layout:
    "relative inline-flex flex-1 items-center justify-center gap-1.5 group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start",
  geometry: "h-[calc(100%-1px)] rounded-md border px-1.5 py-0.5",
  geometryIcon: "has-data-[icon=inline-end]:pe-1 has-data-[icon=inline-start]:ps-1",
  typography: "text-sm font-medium whitespace-nowrap",
  appearance: "border-transparent text-foreground/60 dark:text-muted-foreground",
  interaction: "transition-all",
  hover: "hover:text-foreground dark:hover:text-foreground",
  focus:
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring",
  disabled:
    "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
  state:
    "data-active:bg-background data-active:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
  // The line variant drops the active fill and shows an underline (`after:`) instead.
  stateLine:
    "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-[variant=line]/tabs-list:data-active:shadow-none group-data-[variant=line]/tabs-list:data-active:after:opacity-100 dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
  stateIndicator:
    "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-end-1 group-data-vertical/tabs:after:w-0.5",
  icon: "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
});

/*===== Content Styles =====*/

const twContentStyles = defineStyles({
  layout: "flex-1",
  typography: "text-sm",
  focus: "outline-none",
});

/*===== Class Composition =====*/

const tabsClasses = joinStyles(twTabsStyles);

const tabsListVariants = cva(joinStyles(twListStyles), {
  variants: {
    variant: composeStyles(twVariant),
  },
  defaultVariants: { variant: "default" },
});

const tabsTriggerClasses = joinStyles(twTriggerStyles);
const tabsContentClasses = joinStyles(twContentStyles);

export { tabsClasses, tabsListVariants, tabsTriggerClasses, tabsContentClasses, twVariant };
