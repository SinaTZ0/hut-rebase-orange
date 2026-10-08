import { type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import type { ComponentProps } from "react";
import { alertActionClasses, alertDescriptionClasses, alertTitleClasses, alertVariants } from "./alert.styles";

/*===== Alert =====*/

export type AlertProps = ComponentProps<"div"> & VariantProps<typeof alertVariants>;

/** A message box announced with `role="alert"`. A leading `svg` child becomes its icon column. */
function Alert({ className, variant, ...props }: AlertProps) {
  return <div data-slot="alert" role="alert" className={cn(alertVariants({ variant }), className)} {...props} />;
}

/*===== Compound Parts =====*/

function AlertTitle({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="alert-title" className={cn(alertTitleClasses, className)} {...props} />;
}

function AlertDescription({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="alert-description" className={cn(alertDescriptionClasses, className)} {...props} />;
}

function AlertAction({ className, ...props }: ComponentProps<"div">) {
  return <div data-slot="alert-action" className={cn(alertActionClasses, className)} {...props} />;
}

export { Alert, AlertTitle, AlertDescription, AlertAction };
