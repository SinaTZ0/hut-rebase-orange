import { cva } from "class-variance-authority";
import { composeStyles, defineStyles, joinStyles } from "../styles";

/*===== Surface Styles =====*/

// Parts space themselves with `--card-spacing`, so a size only has to change that one variable.
const twCardStyles = defineStyles({
  layout: "group/card flex flex-col gap-(--card-spacing) overflow-hidden",
  geometry: "rounded-xl py-(--card-spacing)",
  // The footer brings its own padding, so the card drops its bottom padding.
  geometryFooter: "has-data-[slot=card-footer]:pb-0",
  // Edge-to-edge images replace the card's padding and take on its rounded corners.
  geometryMedia: "has-[>img:first-child]:pt-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
  typography: "text-sm",
  appearance: "bg-card text-card-foreground ring-1 ring-border",
});

const twSize = defineStyles({
  default: {
    geometry: "[--card-spacing:--spacing(4)]",
  },
  sm: {
    geometry: "[--card-spacing:--spacing(3)]",
  },
});

/*===== Compound Part Styles =====*/

const twHeaderStyles = defineStyles({
  layout:
    "group/card-header @container/card-header grid auto-rows-min items-start gap-1 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
  geometry: "rounded-t-xl px-(--card-spacing) [.border-b]:pb-(--card-spacing)",
});

const twTitleStyles = defineStyles({
  typography: "font-heading text-base leading-snug font-extrabold group-data-[size=sm]/card:text-sm",
});

const twDescriptionStyles = defineStyles({
  typography: "text-sm",
  appearance: "text-muted-foreground",
});

const twActionStyles = defineStyles({
  layout: "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
});

const twContentStyles = defineStyles({
  geometry: "px-(--card-spacing)",
});

const twFooterStyles = defineStyles({
  layout: "flex items-center",
  geometry: "rounded-b-xl border-t p-(--card-spacing)",
  appearance: "bg-muted/50",
});

/*===== Class Composition =====*/

const cardVariants = cva(joinStyles(twCardStyles), {
  variants: {
    size: composeStyles(twSize),
  },
  defaultVariants: { size: "default" },
});

const cardHeaderClasses = joinStyles(twHeaderStyles);
const cardTitleClasses = joinStyles(twTitleStyles);
const cardDescriptionClasses = joinStyles(twDescriptionStyles);
const cardActionClasses = joinStyles(twActionStyles);
const cardContentClasses = joinStyles(twContentStyles);
const cardFooterClasses = joinStyles(twFooterStyles);

export {
  cardVariants,
  cardHeaderClasses,
  cardTitleClasses,
  cardDescriptionClasses,
  cardActionClasses,
  cardContentClasses,
  cardFooterClasses,
  twSize,
};
