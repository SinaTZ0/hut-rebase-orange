Sarv is a Persian-first, right-to-left design system for a public university's website: calm deep teal, one gold call to action, generous Vazirmatn type, and a light and a dark theme that share the same structure. Every page is built from `tokens.json` and the `sv-` classes in `components/bundle.css`.

## Content fundamentals

- Write in formal, warm Persian. Address the reader as «شما», never «تو». Use the university's voice («ما») sparingly: «به جمع ما خوش آمدید».
- Titles name the thing, not the action: «آخرین اخبار دانشگاه», «تقویم آموزشی دانشگاه», «دستاوردها و افتخارات». Buttons use verbs or nouns of intent: «پذیرش و ثبت‌نام», «مشاهده همه اخبار», «بیشتر بخوانید».
- Every section opens with a `kicker` of two to four words above its title («اخبار و اطلاعیه‌ها», «مسیر نیم‌سال»), then at most one sentence of lead.
- Use Persian digits («۱۴۰۵», «۲٬۳۰۰+») and the Persian thousands separator «٬». Dates are Jalali: «۱۶ مهر ۱۴۰۵»; ranges use an en dash: «۱۲–۱۸ مهر». Phone numbers, e-mail and URLs are set `dir="ltr"`.
- Official English names appear once, in small caps beside the Persian name (`SARV UNIVERSITY`), and in the `EN` language switch. Do not mix Persian and English in one sentence.
- No emoji, no exclamation marks, no slang. Announcements state what, when and what to do next.

## Visual foundations

- **Direction.** Every page is `dir="rtl"` and `lang="fa"`. Use logical properties (`margin-inline-start`, `inset-inline-end`), never left/right. Forward arrows point left (`arrow-left`). Time on timelines runs from the right.
- **Themes.** `light` is the default: warm paper `surface`, white `surface-raised`, deep-teal `surface-deep` sections. `dark` (midnight teal) swaps to `surface` #0a1818 ground, `surface-raised` #112625, brighter mint `primary` and warmer gold `accent`, and keeps `surface-deep` as a still-deeper teal band so sections keep their rhythm. Switch with `data-theme="dark"` on `<html>`; never recolour components by theme in code.
- **Colour roles.** Body text is `ink`, secondary text `ink-muted`. Teal emphasis and links are `brand-text`. Teal fills are `primary` with `on-primary` labels. Gold is `accent` with `on-accent` labels and is the only call-to-action colour; gold as text on light grounds is `accent-text`. On `surface-deep` use `on-deep`, `on-deep-muted` and `accent`. Status colours (`success`, `warning`, `danger`, `info`) always travel with an icon and a word.
- **Type.** One family, Vazirmatn (variable, weights 100–900, file in `fonts/`). Use the token classes: `display` for the single hero headline, `h1`–`h4` for titles, `body-lg`/`body`/`body-sm` for text, `caption` for dates and meta, `kicker`, `button` and `nav` for labels. Persian needs tall lines; do not tighten `lineHeight`, and never set text below `caption` (12px).
- **Space and layout.** The `space-1`…`space-9` scale (4–112px); content is `container` (1200px) wide with a `gutter` of 24px. Homepage sections are separated by `space-8` and alternate `surface`, `surface-sunken` and `surface-deep`. The service strip overlaps the hero by `space-9`.
- **Shape.** `radius-md` (14px) for buttons, notices and list cards; `radius-lg` (24px) for feature cards, the strip and media; `radius-sm` (8px) for inputs and thumbnails; `radius-pill` for badges and timeline dots.
- **Depth.** Cards rest on `shadow-sm` and a `border` hairline, lift to `shadow-md` on hover, and the service strip alone uses `shadow-float`. Dark theme shadows are deeper and rely on `border` for edges.
- **Imagery.** Photography of the campus, warm and daylight, always under an `overlay` scrim when text sits on it. Until photographs exist, use the `sv-media` placeholders (a tonal panel with a dotted texture and one outline icon) and the vector campus scene; they are placeholders, not final art.
- **Focus and states.** Focus is a solid 2px ring, 2px offset: `focus` on light grounds, `focus-on-deep` on teal bands, each at least 3:1. Hover lightens or tints by one step; disabled controls drop to 45% opacity and keep their label. Motion is limited to 150ms colour and 1px-lift transitions and is removed under `prefers-reduced-motion`.
- **Do not** use gradients other than the image scrims and the `sv-media` panel, coloured left borders on cards, or more than one gold button per view.

## Iconography

Icons are Lucide (ISC licence): 24px grid, 1.75px round-cap outline strokes, drawn in `currentColor`. Use 20px in text rows, 28px in service tiles and 32–64px in media placeholders. Copy the inline SVG from `assets/Icons/`; the files there are drawn in a fixed teal ink (#134542) because `<img>` cannot inherit colour, so recolour the copy in markup. Directional icons (`arrow-left`, `chevron-left`) are never mirrored by script; pick the one that points the right way. Do not use emoji or filled glyphs as icons.

## Logo

The emblem in `assets/Logos/` (an arch holding a cypress leaf, «سرو») is a placeholder for the university's official mark; replace it, keeping the 44px square slot and the name lockup («دانشگاه سرو» above `SARV UNIVERSITY`). Use the teal file on light grounds and the gold file on `surface-deep`.

## Accessibility

Text pairs are at least 4.5:1 in both themes (3:1 for control edges, focus rings and large text); `ink-muted` and `brand-text` are safe on every light-or-dark ground named in their usage notes. Status is never colour-only. Tap targets are at least 40px. Every page declares `lang="fa"` and marks any English span with `lang="en"`.

## Components

Button, Badge, Field, Alert, SiteHeader, Hero, ServiceStrip, SectionHeader, NewsCard, Timeline, StatBand, FeatureCard, CallToAction and SiteFooter are plain HTML with `sv-` classes (see each component's guidelines and live preview); there is no JavaScript bundle. `components/Homepage` shows them composed into the full university homepage in both themes.
