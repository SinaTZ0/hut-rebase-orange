Use `sv-btn` plus one variant and the `button` type style. There is one `accent` (gold) button per view: the main call to action, such as «پذیرش و ثبت‌نام». Secondary choices use `outline`; on `surface-deep` use `outline-deep`. `primary` (teal) is for in-app actions such as sign-in. `ghost` is for low-emphasis actions like cancel.

The consumer provides the label and the element (`<a>` for navigation, `<button>` for actions). Put a trailing `arrow-left` icon on forward actions: in right-to-left layouts forward points left. Sizes: `sv-btn--sm` in dense toolbars, default in content, `sv-btn--lg` in hero and call-to-action bands.

Do not set gold text on a light ground (use `accent-text`). Do not put two `accent` buttons side by side. Disabled buttons keep their label and use the `disabled` attribute, never a lighter colour alone.
