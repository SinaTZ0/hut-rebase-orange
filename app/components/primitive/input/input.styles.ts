import { defineStyles, joinStyles } from "../styles";

/*===== Input Styles =====*/

const twInputStyles = defineStyles({
  layout: "w-full min-w-0",
  geometry: "h-14 rounded-lg border px-4 py-1",
  // Mobile keeps 16px text so iOS Safari does not zoom in on focus.
  typography: "text-base md:text-sm",
  appearance: "border-input bg-card placeholder:text-muted-foreground dark:bg-input/30",
  // The native file-picker button inside `type="file"` inputs.
  appearanceFile:
    "file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
  interaction: "transition-colors outline-none",
  focus: "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  disabled:
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 dark:disabled:bg-input/80",
  invalid:
    "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
});

const inputClasses = joinStyles(twInputStyles);

export { inputClasses };
