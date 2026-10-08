import { defineStyles, joinStyles } from "../styles";

/*===== Label Styles =====*/

const twLabelStyles = defineStyles({
  layout: "flex items-center gap-2",
  typography: "text-sm leading-none font-medium",
  interaction: "select-none",
  // A label follows the disabled state of its Field group or of the control just before it.
  disabled:
    "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
});

/*===== Class Composition =====*/

const labelClasses = joinStyles(twLabelStyles);

export { labelClasses };
