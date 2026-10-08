import { cva } from "class-variance-authority";
import { composeStyles, defineStyles, joinStyles } from "~/components/primitive/styles";

/*===== Shared Styles =====*/

// A faint `accent` wash on hover, mixed toward transparent so it tints whatever panel the tile sits on.
const twTileStyles = defineStyles({
  layout: "group/link-tile relative flex min-w-0",
  geometry: "rounded-md",
  interaction: "transition-colors duration-150 ease-out outline-none",
  hover: "hover:bg-[color-mix(in_oklab,var(--accent)_45%,transparent)]",
  focus:
    "focus-visible:z-10 focus-visible:bg-[color-mix(in_oklab,var(--accent)_45%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:outline-solid",
  motion: "motion-reduce:transition-none",
});

// The icon fill: the `accent` square turns `primary` with a `primary-foreground` icon.
const twIconStyles = defineStyles({
  layout: "grid shrink-0 place-items-center",
  geometry: "size-12 rounded-md",
  appearance: "bg-accent text-brand-text",
  interaction: "transition-colors duration-150 ease-out",
  hover: "group-hover/link-tile:bg-primary group-hover/link-tile:text-primary-foreground",
  focus: "group-focus-visible/link-tile:bg-primary group-focus-visible/link-tile:text-primary-foreground",
  icon: "[&_svg]:size-7",
  motion: "motion-reduce:transition-none",
});

// The title tint.
const twTitleStyles = defineStyles({
  layout: "block",
  typography: "text-h4",
  interaction: "transition-colors duration-150 ease-out",
  hover: "group-hover/link-tile:text-brand-text",
  focus: "group-focus-visible/link-tile:text-brand-text",
  motion: "motion-reduce:transition-none",
});

const twDescriptionStyles = defineStyles({
  layout: "mt-0.5 block",
  typography: "text-body-sm",
  appearance: "text-muted-foreground",
});

const twArrowStyles = defineStyles({
  geometry: "size-5 shrink-0",
  appearance: "text-brand-text",
  interaction: "transition-[translate,opacity] duration-150 ease-out",
  motion: "motion-reduce:transition-none",
});

// Internal routes nudge forward; tiles that leave the site use `arrow-up-left` and nudge diagonally.
const twArrowDirection = defineStyles({
  internal: {
    hover: "motion-safe:group-hover/link-tile:-translate-x-1",
    focus: "motion-safe:group-focus-visible/link-tile:-translate-x-1",
  },
  external: {
    hover: "motion-safe:group-hover/link-tile:-translate-x-0.5 motion-safe:group-hover/link-tile:-translate-y-0.5",
    focus:
      "motion-safe:group-focus-visible/link-tile:-translate-x-0.5 motion-safe:group-focus-visible/link-tile:-translate-y-0.5",
  },
});

// `bare` drops the icon's filled square so the icon sits on the tile's own surface; on hover it only takes the tint.
const twIconBare = defineStyles({
  appearance: "bg-transparent group-hover/link-tile:bg-transparent group-focus-visible/link-tile:bg-transparent",
  hover: "group-hover/link-tile:text-brand-text",
  focus: "group-focus-visible/link-tile:text-brand-text",
});

/*===== Layouts =====*/

// `row`: icon, text and a trailing arrow side by side, for support routes and lists.
// `stacked`: a centered column for compact grids such as the service strip; its arrow sits in the corner and is
// revealed on hover, so a row of tiles stays calm at rest.
const twVariant = defineStyles({
  row: { layout: "items-center gap-4", geometry: "p-4" },
  stacked: { layout: "flex-col items-center gap-3", geometry: "px-3 py-5", typography: "text-center" },
});

const twContentVariant = defineStyles({
  row: { layout: "min-w-0 flex-1" },
  stacked: { layout: "min-w-0" },
});

const twArrowVariant = defineStyles({
  row: {},
  stacked: {
    layout: "absolute end-3 top-3",
    geometry: "size-4",
    appearance: "opacity-0",
    hover: "group-hover/link-tile:opacity-100",
    focus: "group-focus-visible/link-tile:opacity-100",
  },
});

/*===== Class Composition =====*/

const linkTileVariants = cva(joinStyles(twTileStyles), {
  variants: { variant: composeStyles(twVariant) },
  defaultVariants: { variant: "row" },
});

const linkTileContentVariants = cva("", {
  variants: { variant: composeStyles(twContentVariant) },
  defaultVariants: { variant: "row" },
});

const linkTileArrowVariants = cva(joinStyles(twArrowStyles), {
  variants: { variant: composeStyles(twArrowVariant), direction: composeStyles(twArrowDirection) },
  defaultVariants: { variant: "row", direction: "internal" },
});

const linkTileIconClasses = joinStyles(twIconStyles);
const linkTileIconBareClasses = joinStyles(twIconBare);
const linkTileTitleClasses = joinStyles(twTitleStyles);
const linkTileDescriptionClasses = joinStyles(twDescriptionStyles);

export {
  linkTileVariants,
  linkTileContentVariants,
  linkTileDescriptionClasses,
  linkTileArrowVariants,
  linkTileIconClasses,
  linkTileIconBareClasses,
  linkTileTitleClasses,
  twVariant,
};
