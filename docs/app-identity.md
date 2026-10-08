# App Identity: Mood, Tone & Theme

Source: [`claude-design-system/`](../claude-design-system/), the **Sarv** design system. Its [`README.md`](../claude-design-system/README.md) is the brand book and [`tokens.json`](../claude-design-system/tokens.json) is the source of truth for every value below. The app is the website of a Persian public (government) university, with a small CMS for staff to publish news, events and pages. It's RTL and works from phone to desktop.

The `sv-` components in `claude-design-system/components/` are plain HTML references. The app never loads `bundle.css` or `tokens.css`; it rebuilds those patterns from its own primitives and tokens.

Sarv's examples are drawn with placeholder art (flat teal panels, one icon, a vector campus), so they show structure, not how a page should look with real content. **This document overrides Sarv where they differ**: the type scale, control sizes, motion and scrims below are the app's own decisions.

## Mood

**Official, calm and trustworthy, with a warm side.** It should feel like a well-kept public institution, not a startup landing page or a dusty portal.

- **Official**: deep teal structure, a clear hierarchy, and the university's name and emblem on every page.
- **Calm**: warm paper ground, generous whitespace, few colours and gentle shadows.
- **Focused**: one gold call to action per view, such as «پذیرش و ثبت‌نام». Everything else is teal or neutral.
- **Warm**: daylight campus photography and soft rounded shapes.
- **Content-led**: the university's photos, news and Persian typography carry the identity. Show photos clearly, put content first and keep layout chrome (boxes, tiles, panels) to a minimum.
- **Alive**: subtle, snappy hover and focus feedback on everything you can click, so the page feels responsive without moving around.

## Tone (copy)

- **Formal and warm**: address the reader as «شما», never «تو». Use the university's own voice («ما») sparingly: «به جمع ما خوش آمدید».
- **Titles name the thing**, not the action: «آخرین اخبار دانشگاه»، «تقویم آموزشی دانشگاه»، «دستاوردها و افتخارات».
- **Buttons** use a verb or a noun of intent: «پذیرش و ثبت‌نام»، «مشاهده همه اخبار»، «بیشتر بخوانید».
- **Section openers**: a kicker of two to four words above the title («اخبار و اطلاعیه‌ها»، «مسیر نیم‌سال»), then at most one sentence of lead.
- **Announcements** state what, when, and what to do next.
- **Locale**: Persian digits («۱۴۰۵»، «۲٬۳۰۰+») with the Persian thousands separator «٬». Jalali dates («۱۶ مهر ۱۴۰۵»); ranges use an en dash («۱۲–۱۸ مهر»). Phone numbers, e-mail addresses and URLs are set `dir="ltr"`.
- **English**: the official English name appears once, in small caps beside the Persian name (`SARV UNIVERSITY`, marked `lang="en"`), and in the `EN` language switch. Don't mix Persian and English in one sentence.
- **Never**: emoji, exclamation marks or slang.
- **CMS screens** use the same voice, shorter: labels and messages say what happened and what to do next.

## Theme

All tokens will live in `app/app.css`. Use the Tailwind classes (`bg-primary`, `text-brand-text`, `bg-deep`…), never raw hex.

### Colour

Token names follow shadcn so the primitives keep working; roles Sarv adds get their own names. **Naming trap**: Sarv's `accent` is the gold call to action, which is `gold` here. shadcn's `accent` is the quiet hover and selected wash, which is Sarv's `primary-soft`.

| Token                                 | Sarv role                   | Light                 | Dark                  | Use                                                                                                             |
| ------------------------------------- | --------------------------- | --------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------- |
| `background`                          | `surface`                   | `#FBFAF6`             | `#0A1818`             | Page background                                                                                                 |
| `foreground`                          | `ink`                       | `#11302E`             | `#E8F1EE`             | Headings and body text. Also `card-foreground` and `popover-foreground`                                         |
| `card` / `popover`                    | `surface-raised`            | `#FFFFFF`             | `#112625`             | Cards, forms, header, service strip, popovers                                                                   |
| `muted` / `secondary`                 | `surface-sunken`            | `#F0F2EE`             | `#07110F`             | Recessed bands, table stripes, input wells, image placeholders                                                  |
| `muted-foreground`                    | `ink-muted`                 | `#4A625F`             | `#9FB8B3`             | Secondary text, dates, captions                                                                                 |
| `accent`                              | `primary-soft`              | `#E2EEEB`             | `#17302E`             | Hover and selected rows, quiet badges, ghost-button hover. Text on it: `foreground`, `brand-text`               |
| `primary`                             | `primary`                   | `#134542`             | `#7AD6C7`             | Teal action buttons (sign-in, in-app actions), active nav marker                                                |
| `primary-hover`                       | `primary-hover`             | `#0D3331`             | `#9BE3D7`             | Hover and pressed `primary`                                                                                     |
| `primary-foreground`                  | `on-primary`                | `#F6F3EA`             | `#06211E`             | Text on `primary`                                                                                               |
| `brand-text`                          | `brand-text`                | `#0F5A54`             | `#86DCCF`             | Links, kickers and teal emphasis in text                                                                        |
| `gold`                                | `accent`                    | `#E9B43C`             | `#F2C24F`             | The one call-to-action fill, kicker rules, text and icons on `deep`                                             |
| `gold-hover`                          | `accent-hover`              | `#D6A02A`             | `#F7D278`             | Hover and pressed `gold`                                                                                        |
| `gold-foreground`                     | `on-accent`                 | `#14201F`             | `#14201F`             | Text on `gold`                                                                                                  |
| `gold-text`                           | `accent-text`               | `#7D5400`             | `#F2C24F`             | Gold as text on light grounds. Never on a `gold` fill                                                           |
| `deep`                                | `surface-deep`              | `#134542`             | `#0F302E`             | Deep-teal bands: utility bar, stats, call to action, footer                                                     |
| `deep-raised`                         | `surface-deep-raised`       | `#18504B`             | `#17423F`             | Cards and tiles on `deep`                                                                                       |
| `deep-foreground`                     | `on-deep`                   | `#F6F3EA`             | `#E9F2EF`             | Text and icons on `deep` and `deep-raised`                                                                      |
| `deep-muted`                          | `on-deep-muted`             | `#BCD3CE`             | `#A6C2BC`             | Secondary text on `deep` and `deep-raised`                                                                      |
| `border`                              | `border`                    | `#DDE3DE`             | `#234240`             | Card outlines and dividers. Not for control edges                                                               |
| `input`                               | `border-strong`             | `#6F8782`             | `#5D7D78`             | Edges of inputs, checkboxes, radios and outline buttons (3:1)                                                   |
| `ring`                                | `focus`                     | `#0B5CAD`             | `#8FC7FF`             | Focus ring on light grounds                                                                                     |
| `ring-deep`                           | `focus-on-deep`             | `#FFD36B`             | `#FFD36B`             | Focus ring on `deep` and `deep-raised`                                                                          |
| `overlay`                             | `overlay`                   | `#0B2625D9`           | `#06100FE0`           | Scrim colour over photography, always as a gradient (see Imagery). Never as a flat fill, never without an image |
| `success` / `success-surface`         | same                        | `#17633F` / `#E4F3EA` | `#6FD49B` / `#14301F` | Success notices and badges                                                                                      |
| `warning` / `warning-surface`         | same                        | `#7A5200` / `#FBF0D6` | `#F2C24F` / `#33280E` | Warnings                                                                                                        |
| `destructive` / `destructive-surface` | `danger` / `danger-surface` | `#B3261E` / `#FBE7E5` | `#FF9A92` / `#3A1816` | Errors and destructive actions                                                                                  |
| `info` / `info-surface`               | same                        | `#1B5E8E` / `#E1EEF7` | `#86C1EE` / `#14293A` | Informational notices                                                                                           |

Rules:

- Teal is for structure and action, gold is for the single call to action and for accents on `deep`. **One `gold` button per view.**
- Build a deep band with the `surface-deep` utility: it sets the `deep` ground and `deep-foreground` text, and switches every focus ring inside it to `ring-deep`. On it, secondary text is `deep-muted` and accents are `gold`.
- Status colours always travel with an icon and a word, never colour alone.
- No gradients except the image scrims and media placeholders. No coloured side borders on cards.
- Scrims are gradients built from `overlay`, darkest where the text sits and fading over the rest of the picture. A flat `bg-overlay` over a whole photo hides it, so never use it.

**Dark mode** is part of Sarv ("midnight teal"): a near-black teal ground, brighter mint `primary`, warmer gold, and `deep` kept as a still-deeper teal band so sections keep their rhythm. The app switches it with the `.dark` class on `<html>` (the existing theme toggle), not Sarv's `data-theme`. Never recolour a component by theme in code; the tokens do it.

### Type

- **Font**: Vazirmatn Variable (`@fontsource-variable/vazirmatn`, weights 100–900), falling back to Segoe UI and Tahoma.
- **Styles**: use these as `text-<name>` utilities, each setting size, line height and weight. The scale is tighter than Sarv's: the homepage carries a lot of content, and Sarv's sizes made cards and sections look heavy and empty at desktop width.

  | Style     | Size / line height | Weight | Use                                 |
  | --------- | ------------------ | ------ | ----------------------------------- |
  | `display` | 52 / 76px          | 800    | The hero headline, once per page    |
  | `stat`    | 40 / 52px          | 800    | Figures in the stats band           |
  | `h1`      | 36 / 56px          | 800    | The page's own title, only          |
  | `h2`      | 28 / 44px          | 700    | Section titles                      |
  | `h3`      | 20 / 32px          | 700    | Card and panel titles               |
  | `h4`      | 16 / 28px          | 700    | List-item and footer-column titles  |
  | `body-lg` | 17 / 30px          | 400    | Hero and section leads              |
  | `body`    | 16 / 28px          | 400    | Default running text                |
  | `body-sm` | 14 / 24px          | 400    | Card summaries, hints, footer links |
  | `caption` | 12 / 20px          | 500    | Dates, meta lines, fine print       |
  | `button`  | 14 / 24px          | 600    | Button labels                       |
  | `kicker`  | 12 / 20px          | 700    | The line above a section title      |
  | `nav`     | 14 / 24px          | 600    | Primary navigation                  |

- Persian needs tall lines: never tighten line height below the table, and never set text below `caption` (12px), not even badges or meta lines.
- Running text stays at `body` (16px). Get density from layout (fewer boxes, side-by-side panels, tighter card padding), not by shrinking reading text.
- Under 600px, `display`, `h1` and `h2` drop one step (`display` → 36/56, `h1` → 28/44, `h2` → 24/40); the other styles stay fixed.
- WCAG 2.2 AA: bold text under 18.66px (`h4`, `button`, `kicker`) and all text under 24px counts as normal text, so it needs 4.5:1. The token pairs in the colour table already meet that; never pair small text with a colour that only reaches 3:1 (`input`, `gold` on light grounds).

### Space & layout

| Space     | Value | Use                                                      |
| --------- | ----- | -------------------------------------------------------- |
| `space-1` | 4px   | Icon-to-label gaps, badge padding                        |
| `space-2` | 8px   | Kicker to title, gaps between buttons                    |
| `space-3` | 12px  | Control padding, list-item gaps                          |
| `space-4` | 16px  | Compact card padding, list-row padding, default grid gap |
| `space-5` | 20px  | Card padding, grid gutter                                |
| `space-6` | 32px  | Section header to its content, feature-card padding      |
| `space-7` | 48px  | Blocks inside a section                                  |
| `space-8` | 64px  | Vertical padding of homepage sections (desktop)          |
| `space-9` | 96px  | Hero bottom padding under the overlapping service strip  |

- Content is at most 1200px wide (`max-w-site`) with a 24px side gutter (`px-6`) at every width. The `space-*` steps are Tailwind's 4px scale: `space-5` is `5`, `space-6` is `8`, `space-8` is `16`, `space-9` is `24`. The main header row is 72px tall.
- Homepage sections alternate `background`, `muted` and `deep` bands. Under 600px their vertical padding drops to `space-7`.
- Prefer side-by-side compositions on desktop (a main column beside a side panel, a deep panel beside a list) over stacking full-width bands; every extra band makes the page longer and emptier.
- Breakpoints used by the components: under 960px navs collapse and two-panel layouts stack; under 600px grids drop to two columns or one.

### Shape & depth

- **Radius**:
  - `rounded-sm` 8px: inputs, thumbnails, small buttons
  - `rounded-md` 14px: buttons, notices, list cards, tiles
  - `rounded-lg` 20px: feature cards, the service strip, hero media, deep panels
  - `rounded-full`: badges, chips, timeline dots
- **Depth**: cards rest on `shadow-sm` plus a 1px `border`. A card that is a link takes `shadow-md` and a faint `accent` wash on hover; dropdowns use `shadow-md`. `shadow-float` is for the service strip only. Dark-theme shadows are deeper and rely on `border` for edges.
- **Containers**: use a card only for something you can click or a standalone group of content. Layout wrappers, single figures (stats) and section intros are not cards. Separate items in a list with dividers or whitespace, not a box each.
- **Fill the container**: when items share a container, the items own the space. The container has no padding and no gaps; each item is a cell that stretches to fill its slice, and cells are separated by hairline dividers. Padding goes on the item's content, so the hover and focus area is the whole cell, not a small box inside a gutter. Don't leave dead space around interactive items.
- **Dividers**: the app prefers hairline dividers to boxes and fills. Use them to separate and organise content, such as items in a list or grid, a header from its body, or a body from its footer, and let the design decide where they help.
- **Uniform surfaces**: keep a component's parts on the surface they sit on. Don't give every part (icon, chip, label) its own filled ground, because it makes the parts feel detached from one another and from the component. Use fills where they carry meaning, such as state or emphasis.
- **Controls**: tap targets at least 40px (above WCAG 2.2's 24px minimum). Inputs, selects and default buttons are 44px tall, so they line up in a row; `sm` buttons are 40px; `lg` buttons (48px) are for hero and call-to-action bands. Icon-only buttons are 44px (40px when compact): enlarge the target, not the icon. Inputs have a 1.5px `input` edge and a label always visible above them.

### States & motion

- **Focus**: a solid 2px ring with a 2px offset, `ring` on light grounds and `ring-deep` on `deep` bands. Keyboard focus gets the same feedback as hover (`group-focus-visible` next to every `group-hover`), plus the ring.
- **Hover** lightens or tints by one step. **Disabled** controls drop to 45% opacity, keep their label and get no hover effects.

#### Interaction

Subtle interactivity is part of the identity: everything you can click responds to hover, focus and press with a small, quick change, so the site feels alive and responsive. It should feel **snappy**: feedback starts at once and settles fast. It should never be showy, bouncy or move the layout.

Timing (Tailwind's `ease-out` for everything; enter and exit share the same duration):

| What changes                                  | Duration | Utility                  |
| --------------------------------------------- | -------- | ------------------------ |
| Colour, background, border, text, icon fill   | 150ms    | `duration-150` (default) |
| Small transforms: arrow nudge, press, fade-in | 150ms    | `duration-150`           |
| Card shadow and wash                          | 200ms    | `duration-200`           |
| Media zoom inside a card                      | 300ms    | `duration-300`           |

Nothing takes longer than 300ms. Animate only `color`, `background-color`, `border-color`, `box-shadow`, `opacity` and `transform`, never width, height, padding or position, so hovering never shifts the layout. List the properties (`transition-[background-color,box-shadow]`), never `transition-all`.

The vocabulary (use these, don't invent new effects):

| Effect             | Where                                                      | How                                                                                              |
| ------------------ | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Card lift**      | Whole-card links (news, feature, event cards, list rows)   | `shadow-sm` → `shadow-md` and a faint `accent` wash (`hover:bg-accent/40`), 200ms. No movement   |
| **Media zoom**     | The photo inside a card link                               | `group-hover:scale-[1.03]` in an `overflow-hidden` frame, 300ms                                  |
| **Title tint**     | Card and row titles inside a link                          | `group-hover:text-brand-text`, 150ms                                                             |
| **Arrow nudge**    | The trailing `arrow-left` of links, card calls and buttons | `group-hover:-translate-x-1` (4px forward in RTL), 150ms                                         |
| **Diagonal nudge** | `arrow-up-left` on tiles that leave the page               | `-translate-x-0.5 -translate-y-0.5`, 150ms                                                       |
| **Icon fill**      | Icon squares in service tiles, round arrow chips on cards  | `accent` ground → `primary` ground with `primary-foreground` icon, 150ms                         |
| **Reveal**         | A secondary arrow on compact tiles                         | `opacity-0` → `opacity-100`, 150ms                                                               |
| **Press**          | Buttons                                                    | `active:translate-y-px`                                                                          |
| **Play pulse**     | The play button on a video panel                           | `group-hover:scale-110`, 150ms                                                                   |
| **Link tint**      | Footer, utility bar and plain text links                   | Colour one step brighter (`deep-muted` → `gold` on `deep`; `brand-text` → `foreground` on light) |

These effects belong to primitives and shared components (Card, Button, Link, LinkTile…), so routes get them by composing, not by repeating classes.

**Reduced motion**: under `prefers-reduced-motion` drop every transform (`motion-reduce:transform-none`, or apply transforms with `motion-safe:`) and the colour transitions (`motion-reduce:transition-none`); the end states still apply instantly, so feedback stays visible.

### Iconography & imagery

- **Icons**: Lucide outline icons, 24px grid, 1.75 stroke, round caps, drawn in `currentColor` (`lucide-react` in the app, where `app.css` sets the 1.75 stroke for every icon, so don't pass `strokeWidth`; `claude-design-system/assets/Icons/` shows the set). 20px in text rows, 28px in service tiles, 32–64px in media placeholders. No emoji or filled glyphs.
- **Direction**: directional icons are never mirrored by script. Forward actions use `arrow-left`; pick the icon that points the right way.
- **Photography**: warm, daylight campus photos. A photo is the most valuable thing on the page, so show it: keep at least half of it clearly visible, and put text on it only over a scrim. Until real photos exist, use a tonal placeholder panel with one outline icon (Sarv's `sv-media`); it's a placeholder, not final art.
- **Scrims**: two shapes, both from `overlay`:
  - **Inline scrim** (hero, wide banners): darkest at the inline start where the text sits (`overlay` at full strength), easing to about a third of it at the far end. In RTL the start is the right, so the gradient runs right to left. Tailwind's `bg-linear-to-*` directions are physical, so write it as `to left` and note that it assumes RTL.
  - **Bottom scrim** (a card with text on its image): `overlay` at the bottom up to about 40% of the height, fading to transparent by about 85%. The top of the picture stays clear.
- **Images that contain text** (posters, flyers, certificates, infographics, screenshots): most news and achievement images are posters. **Never put text over them**, scrim or not: two layers of text become unreadable. Give them their own media area with the text beside or below; crop from the top (`object-top`) or show the whole image (`object-contain` on a `muted` ground) so the poster's own title survives.
- **Media frames**: thumbnails 4:3 or 16:9 in `rounded-sm`, card media flush with the card's top corners, and always `overflow-hidden` so the media zoom stays inside.
- **Logo**: the Sarv emblem (an arch holding a cypress leaf) in `claude-design-system/assets/Logos/` is a placeholder for the university's official mark. Keep its 44px square slot and the lockup: «دانشگاه سرو» above `SARV UNIVERSITY`. Teal on light grounds, gold on `deep`, mint (`primary` dark) in dark mode.

### Signature patterns

These are **defaults, not templates**. Start from a pattern, then fit it to the real content: merge patterns, drop parts or change the layout when the content calls for it (posters instead of photos, four items instead of three, a short list that doesn't fill a band). What stays fixed is the identity: tokens, tone, one gold action per view, the scrim and image rules, and the interaction vocabulary. Each pattern has guidelines and live markup in `claude-design-system/components/<Name>/`; read its markup for structure and semantics, not for its placeholder look.

- **Site header** ([SiteHeader](../claude-design-system/components/SiteHeader/README.md)): a `deep` utility bar (official-site label, contact, portal login) above a `card` row with the brand, up to five nav items (current one: gold underline, `brand-text`, `aria-current="page"`) and the tools (language, theme, search) at the far end.
- **Hero** ([Hero](../claude-design-system/components/Hero/README.md)): a full-bleed campus photo under an **inline scrim** (the photo stays clearly visible on the far side), text at the inline start, a `display` headline, a lead of two lines at most, and exactly two actions: one `gold`, one outline on deep. The far side can carry a short caption; a timely academic notice can run as a slim row along the hero's bottom edge, not as a floating box.
- **Service strip** ([ServiceStrip](../claude-design-system/components/ServiceStrip/README.md)): a floating `card` panel of up to six quick-access tiles (icon in an `accent` square, `h4` title, `body-sm` subtitle) that overlaps the hero on the homepage. The last tile is always «کلیه خدمات».
- **Section header** ([SectionHeader](../claude-design-system/components/SectionHeader/README.md)): a gold rule and `brand-text` kicker, an `h2` title, an optional one-sentence lead, and an optional outline «مشاهده همه» at the opposite end.
- **News** ([NewsCard](../claude-design-system/components/NewsCard/README.md)): a featured story plus a few more, beside a side panel of dated announcements (date chip, title, issuing office) when the page has them. The featured story puts its text over the image with a **bottom scrim** only when the image is a real photo; for posters, the text sits beside or below the image. Other stories are cards with their own media area, or compact rows (thumbnail, category kicker, `h4` title, Jalali date). Whole cards are links.
- **Academic timeline** ([Timeline](../claude-design-system/components/Timeline/README.md)): up to seven term milestones running from the right, with done, current (gold dot, `aria-current="step"`) and future states. It becomes a vertical list under 960px.
- **Stat band** ([StatBand](../claude-design-system/components/StatBand/README.md)): a `deep` band with a video panel and up to six real, cited figures in `stat` and `gold`, set in an open grid with hairline dividers, not boxed tiles. Never invent figures.
- **Feature cards** ([FeatureCard](../claude-design-system/components/FeatureCard/README.md)): media, a `gold-text` kicker meta line, `h3` title, two-line summary and a link call. Mix sizes to create rhythm (one large card beside two smaller ones) for achievements; row form with a thumbnail for courses and events, beside a `deep` intro panel that holds the section title and its link.
- **Call to action** ([CallToAction](../claude-design-system/components/CallToAction/README.md)): a `deep` invitation panel with two actions beside a `card` panel of two real support routes. Once, at the end of the homepage.
- **Footer** ([SiteFooter](../claude-design-system/components/SiteFooter/README.md)): a `deep` footer with the brand, two link columns of up to five links, a contact column with gold icons, and the copyright line.

Building blocks:

- **Button** ([Button](../claude-design-system/components/Button/README.md)): variant `gold` for the one main call to action, `outline` for secondary choices (`outline-deep` on deep bands), `default` (teal) for in-app actions, `ghost` for low emphasis. Forward actions carry a trailing `arrow-left`. Disabled buttons use the `disabled` attribute.
- **Badge** ([Badge](../claude-design-system/components/Badge/README.md)): a pill of three words at most. Quiet `accent` wash by default, `gold` for one featured item per card, status tones always with an icon.
- **Field** ([Field](../claude-design-system/components/Field/README.md)): a visible label above the input, an optional hint, and an error line that names the problem and the fix with the `circle-alert` icon. Student and phone numbers are `dir="ltr"` and accept Persian digits.
- **Alert** ([Alert](../claude-design-system/components/Alert/README.md)): variants `info`, `success`, `warning` and `destructive` (plus a neutral `default`), each a tone-coloured `h4` title and icon over an `ink` `body-sm` sentence. The primitive sets `role="alert"` for warning and destructive and `role="status"` otherwise. No more than three stacked; official announcements go in the news list.

## Reference screens

Screenshots of the previous homepage (`hut-rr8-tw-base`), which shows the composition, density, image handling and feel the app aims for. Take from it: how photos are shown, side-by-side sections, the news + announcements layout, the open stat grid, the mixed-size achievement cards, the events list beside a deep panel, and its hover feedback. Take colours, type, radius and spacing from this document, not from the screenshot, which predates these tokens. Names, dates, figures and images are sample content.

- [homepage-light.png](./references/homepage-light.png) and [homepage-dark.png](./references/homepage-dark.png): the full homepage at 1440px, in section order: header, hero with an academic notice row, service strip, news with announcements, timeline, stat band, achievements, events and courses, call to action, footer.
- Sarv's [`examples/homepage-light.html`](../claude-design-system/examples/homepage-light.html) and [`examples/homepage-dark.html`](../claude-design-system/examples/homepage-dark.html) show the patterns' markup with placeholder art. Use them for structure and semantics only.

## Accessibility notes

Sarv's tokens already meet WCAG 2.2 AA in both themes when used on the grounds listed above:

- Text pairs are at least 4.5:1; control edges, focus rings and large text at least 3:1.
- Status is never colour-only: always an icon and a word.
- Tap targets are at least 40px.
- Every page declares `lang="fa"` and `dir="rtl"`, and marks any English span with `lang="en"`.
- Use logical properties only (`ms`/`me`, `ps`/`pe`, `start`/`end`), never left/right.
