import { defineStyles, joinStyles } from "../styles";

/*===== Textarea Styles =====*/

const twTextareaStyles = defineStyles({
  // `field-sizing-content` grows the textarea with its content, starting from `min-h-28`.
  layout: "flex field-sizing-content w-full",
  geometry: "min-h-28 rounded-lg border px-4 py-3",
  // Mobile keeps 16px text so iOS Safari does not zoom in on focus.
  typography: "text-base md:text-sm",
  appearance: "border-input bg-card placeholder:text-muted-foreground dark:bg-input/30",
  interaction: "transition-colors outline-none",
  focus: "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  disabled: "disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 dark:disabled:bg-input/80",
  invalid:
    "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
});

const textareaClasses = joinStyles(twTextareaStyles);

export { textareaClasses };
