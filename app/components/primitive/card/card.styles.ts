import { cva } from "class-variance-authority";
import { composeStyles, defineStyles, joinStyles } from "../styles";

/*===== Surface Styles =====*/

// Parts space themselves with `--card-spacing`, so a size only has to change that one variable.
const twCardStyles = defineStyles({
  layout: "group/card flex flex-col gap-(--card-spacing) overflow-hidden",
  geometry: "rounded-lg py-(--card-spacing)",
  // The footer brings its own padding, so the card drops its bottom padding.
  geometryFooter: "has-data-[slot=card-footer]:pb-0",
  // Edge-to-edge images replace the card's padding and take on its rounded corners.
  geometryMedia: "has-[>img:first-child]:pt-0 *:[img:first-child]:rounded-t-lg *:[img:last-child]:rounded-b-lg",
  typography: "text-body-sm",
  // Sarv cards rest on a hairline plus `shadow-sm`. A card wrapped in a link (whole cards are links) lifts to
  // `shadow-md` on hover.
  appearance: "bg-card text-card-foreground shadow-sm ring-1 ring-border",
  interaction: "transition-shadow duration-150",
  hover: "in-[a]:hover:shadow-md",
});

const twSize = defineStyles({
  default: {
    geometry: "[--card-spacing:--spacing(6)]",
  },
  sm: {
    geometry: "[--card-spacing:--spacing(4)]",
  },
});

/*===== Compound Part Styles =====*/

const twHeaderStyles = defineStyles({
  layout:
    "group/card-header @container/card-header grid auto-rows-min items-start gap-1 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
  geometry: "rounded-t-lg px-(--card-spacing) [.border-b]:pb-(--card-spacing)",
});

const twTitleStyles = defineStyles({
  typography: "font-heading text-h3 group-data-[size=sm]/card:text-h4",
});

const twDescriptionStyles = defineStyles({
  typography: "text-body-sm",
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
  geometry: "rounded-b-lg border-t p-(--card-spacing)",
  appearance: "bg-muted",
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
