Wrap a label, an input and optional hint or error in `sv-field`. The label is always visible above the input (never placeholder-only); inputs use the `body` type style and the 1.5px `border-strong` edge, which meets 3:1 on every surface.

The consumer provides the label text, `id`/`for` pairing, and `aria-invalid="true"` plus an `sv-error` line when invalid. An error line names the problem and the fix, always with the `circle-alert` icon, never colour alone. Keep numeric input (student numbers, phone numbers) left-to-right with `dir="ltr"` on the input and Persian digits accepted.
