A term's milestones in order of time, which in right-to-left layouts runs from the right. Each step has a Jalali date range above a dot and a short name below. States: `is-done` (filled `primary`), `is-current` (gold dot with a `primary-soft` halo, name in `brand-text`, `aria-current="step"`), and future (hollow, `border-strong`).

The consumer provides seven steps at most, the term badge and the link to the full calendar. Under 960px the timeline turns into a vertical list. State is carried by the dot and the label position, so keep the current step's name in the markup too.
