# Sarv design system: quick start

1. Open `examples/homepage-light.html` or `examples/homepage-dark.html` in a browser to see the full homepage built from the system.
2. In your own pages load, in this order: `tokens.css`, then `components/bundle.css`. Set `<html lang="fa" dir="rtl" data-theme="light">`; use `data-theme="dark"` for the dark theme.
3. Use the token type classes (`display`, `h1`..`h4`, `body`, `body-sm`, `caption`, `kicker`, `button`, `nav`) and the `sv-` component classes. Each folder in `components/` has a `README.md` (guidelines) and a `preview.html` (live markup to copy).
4. `tokens.json` is the source of truth for colors (light and dark), type, spacing, radius and shadow. `README.md` is the brand book.
5. Icons and logos are in `assets/`. The font is `fonts/Vazirmatn-Variable.woff2` (SIL Open Font License).
