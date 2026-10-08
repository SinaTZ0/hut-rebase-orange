import { cva } from "class-variance-authority";
import { composeStyles, defineStyles, joinStyles } from "../styles";

/*===== Alert Styles =====*/

const twAlertStyles = defineStyles({
  // A leading icon gets its own column and spans the title and description rows.
  layout:
    "group/alert relative grid w-full gap-0.5 has-data-[slot=alert-action]:relative has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2",
  geometry: "rounded-lg border px-2.5 py-2",
  // Leaves room at the end for the absolutely positioned AlertAction.
  geometryAction: "has-data-[slot=alert-action]:pe-18",
  typography: "text-start text-sm",
  icon: "*:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
});

const twVariant = defineStyles({
  default: {
    appearance: "bg-card text-card-foreground",
  },
  destructive: {
    appearance: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90",
    icon: "*:[svg]:text-current",
  },
});

/*===== Compound Part Styles =====*/

const twTitleStyles = defineStyles({
  layout: "group-has-[>svg]/alert:col-start-2",
  typography: "font-medium [&_a]:underline [&_a]:underline-offset-3",
  hover: "[&_a]:hover:text-foreground",
});

const twDescriptionStyles = defineStyles({
  geometry: "[&_p:not(:last-child)]:mb-4",
  typography: "text-sm text-balance md:text-pretty [&_a]:underline [&_a]:underline-offset-3",
  appearance: "text-muted-foreground",
  hover: "[&_a]:hover:text-foreground",
});

const twActionStyles = defineStyles({
  layout: "absolute end-2 top-2",
});

/*===== Class Composition =====*/

const alertVariants = cva(joinStyles(twAlertStyles), {
  variants: {
    variant: composeStyles(twVariant),
  },
  defaultVariants: { variant: "default" },
});

const alertTitleClasses = joinStyles(twTitleStyles);
const alertDescriptionClasses = joinStyles(twDescriptionStyles);
const alertActionClasses = joinStyles(twActionStyles);

export { alertVariants, alertTitleClasses, alertDescriptionClasses, alertActionClasses, twVariant };
