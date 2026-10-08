import { type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ComponentProps } from "react";
import {
  cardActionClasses,
  cardContentClasses,
  cardDescriptionClasses,
  cardFooterClasses,
  cardHeaderClasses,
  cardTitleClasses,
  cardVariants,
} from "./card.styles";

/*===== Card =====*/

export type CardProps = ComponentProps<"div"> & VariantProps<typeof cardVariants>;

/**
 * A styled surface whose parts share the size's spacing.
 * `data-size` is kept on the root because CardTitle scales its text from it.
 */
function Card({ className, size = "default", ...props }: CardProps) {
  return <div data-slot="card" data-size={size} {...props} className={cn(cardVariants({ size }), className)} />;
}

/*===== Compound Parts =====*/

function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-header" {...props} className={cn(cardHeaderClasses, className)} />;
}

function CardTitle({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-title" {...props} className={cn(cardTitleClasses, className)} />;
}

function CardDescription({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-description" {...props} className={cn(cardDescriptionClasses, className)} />;
}

function CardAction({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-action" {...props} className={cn(cardActionClasses, className)} />;
}

function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-content" {...props} className={cn(cardContentClasses, className)} />;
}

function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="card-footer" {...props} className={cn(cardFooterClasses, className)} />;
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
