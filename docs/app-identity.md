# App Identity: Mood, Tone & Theme

Source: [`claude-design-system/`](../claude-design-system/), the **Sarv** design system. Its [`README.md`](../claude-design-system/README.md) is the brand book and [`tokens.json`](../claude-design-system/tokens.json) is the source of truth for every value below. The app is the website of a Persian public (government) university, with a small CMS for staff to publish news, events and pages. It's RTL and works from phone to desktop.

The `sv-` components in `claude-design-system/components/` are plain HTML references. The app never loads `bundle.css` or `tokens.css`; it rebuilds those patterns from its own primitives and tokens.

## Mood

**Official, calm and trustworthy, with a warm side.** It should feel like a well-kept public institution, not a startup landing page or a dusty portal.

- **Official**: deep teal structure, a clear hierarchy, and the university's name and emblem on every page.
- **Calm**: warm paper ground, generous whitespace, few colours and gentle shadows.
- **Focused**: one gold call to action per view, such as «پذیرش و ثبت‌نام». Everything else is teal or neutral.
- **Warm**: daylight campus photography and soft rounded shapes.

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

| Token                                 | Sarv role                   | Light                 | Dark                  | Use                                                                                               |
| ------------------------------------- | --------------------------- | --------------------- | --------------------- | ------------------------------------------------------------------------------------------------- |
| `background`                          | `surface`                   | `#FBFAF6`             | `#0A1818`             | Page background                                                                                   |
| `foreground`                          | `ink`                       | `#11302E`             | `#E8F1EE`             | Headings and body text. Also `card-foreground` and `popover-foreground`                           |
| `card` / `popover`                    | `surface-raised`            | `#FFFFFF`             | `#112625`             | Cards, forms, header, service strip, popovers                                                     |
| `muted` / `secondary`                 | `surface-sunken`            | `#F0F2EE`             | `#07110F`             | Recessed bands, table stripes, input wells, image placeholders                                    |
| `muted-foreground`                    | `ink-muted`                 | `#4A625F`             | `#9FB8B3`             | Secondary text, dates, captions                                                                   |
| `accent`                              | `primary-soft`              | `#E2EEEB`             | `#17302E`             | Hover and selected rows, quiet badges, ghost-button hover. Text on it: `foreground`, `brand-text` |
| `primary`                             | `primary`                   | `#134542`             | `#7AD6C7`             | Teal action buttons (sign-in, in-app actions), active nav marker                                  |
| `primary-hover`                       | `primary-hover`             | `#0D3331`             | `#9BE3D7`             | Hover and pressed `primary`                                                                       |
| `primary-foreground`                  | `on-primary`                | `#F6F3EA`             | `#06211E`             | Text on `primary`                                                                                 |
| `brand-text`                          | `brand-text`                | `#0F5A54`             | `#86DCCF`             | Links, kickers and teal emphasis in text                                                          |
| `gold`                                | `accent`                    | `#E9B43C`             | `#F2C24F`             | The one call-to-action fill, kicker rules, text and icons on `deep`                               |
| `gold-hover`                          | `accent-hover`              | `#D6A02A`             | `#F7D278`             | Hover and pressed `gold`                                                                          |
| `gold-foreground`                     | `on-accent`                 | `#14201F`             | `#14201F`             | Text on `gold`                                                                                    |
| `gold-text`                           | `accent-text`               | `#7D5400`             | `#F2C24F`             | Gold as text on light grounds. Never on a `gold` fill                                             |
| `deep`                                | `surface-deep`              | `#134542`             | `#0F302E`             | Deep-teal bands: utility bar, stats, call to action, footer                                       |
| `deep-raised`                         | `surface-deep-raised`       | `#18504B`             | `#17423F`             | Cards and tiles on `deep`                                                                         |
| `deep-foreground`                     | `on-deep`                   | `#F6F3EA`             | `#E9F2EF`             | Text and icons on `deep` and `deep-raised`                                                        |
| `deep-muted`                          | `on-deep-muted`             | `#BCD3CE`             | `#A6C2BC`             | Secondary text on `deep` and `deep-raised`                                                        |
| `border`                              | `border`                    | `#DDE3DE`             | `#234240`             | Card outlines and dividers. Not for control edges                                                 |
| `input`                               | `border-strong`             | `#6F8782`             | `#5D7D78`             | Edges of inputs, checkboxes, radios and outline buttons (3:1)                                     |
| `ring`                                | `focus`                     | `#0B5CAD`             | `#8FC7FF`             | Focus ring on light grounds                                                                       |
| `ring-deep`                           | `focus-on-deep`             | `#FFD36B`             | `#FFD36B`             | Focus ring on `deep` and `deep-raised`                                                            |
| `overlay`                             | `overlay`                   | `#0B2625D9`           | `#06100FE0`           | Scrim over photography so `deep-foreground` text stays legible. Never without an image            |
| `success` / `success-surface`         | same                        | `#17633F` / `#E4F3EA` | `#6FD49B` / `#14301F` | Success notices and badges                                                                        |
| `warning` / `warning-surface`         | same                        | `#7A5200` / `#FBF0D6` | `#F2C24F` / `#33280E` | Warnings                                                                                          |
| `destructive` / `destructive-surface` | `danger` / `danger-surface` | `#B3261E` / `#FBE7E5` | `#FF9A92` / `#3A1816` | Errors and destructive actions                                                                    |
| `info` / `info-surface`               | same                        | `#1B5E8E` / `#E1EEF7` | `#86C1EE` / `#14293A` | Informational notices                                                                             |

Rules:

- Teal is for structure and action, gold is for the single call to action and for accents on `deep`. **One `gold` button per view.**
- Build a deep band with the `surface-deep` utility: it sets the `deep` ground and `deep-foreground` text, and switches every focus ring inside it to `ring-deep`. On it, secondary text is `deep-muted` and accents are `gold`.
- Status colours always travel with an icon and a word, never colour alone.
- No gradients except the image scrims and media placeholders. No coloured side borders on cards.

**Dark mode** is part of Sarv ("midnight teal"): a near-black teal ground, brighter mint `primary`, warmer gold, and `deep` kept as a still-deeper teal band so sections keep their rhythm. The app switches it with the `.dark` class on `<html>` (the existing theme toggle), not Sarv's `data-theme`. Never recolour a component by theme in code; the tokens do it.

### Type

- **Font**: Vazirmatn Variable (`@fontsource-variable/vazirmatn`, weights 100–900), falling back to Segoe UI and Tahoma.
- **Styles**: use these as `text-<name>` utilities, each setting size, line height and weight:

  | Style     | Size / line height | Weight | Use                                 |
  | --------- | ------------------ | ------ | ----------------------------------- |
  | `display` | 56 / 84px          | 800    | The hero headline, once per page    |
  | `stat`    | 44 / 56px          | 800    | Figures in the stats band           |
  | `h1`      | 40 / 60px          | 800    | The page's own title, only          |
  | `h2`      | 30 / 48px          | 700    | Section titles                      |
  | `h3`      | 22 / 36px          | 700    | Card and panel titles               |
  | `h4`      | 18 / 30px          | 700    | List-item and footer-column titles  |
  | `body-lg` | 18 / 32px          | 400    | Hero and section leads              |
  | `body`    | 16 / 28px          | 400    | Default running text                |
  | `body-sm` | 14 / 24px          | 400    | Card summaries, hints, footer links |
  | `caption` | 12 / 20px          | 500    | Dates, meta lines, fine print       |
  | `button`  | 15 / 24px          | 700    | Button labels                       |
  | `kicker`  | 13 / 20px          | 700    | The line above a section title      |
  | `nav`     | 14 / 24px          | 600    | Primary navigation                  |

- Persian needs tall lines: never tighten line height, and never set text below `caption` (12px).
- Sarv defines no phone sizes. The app's own decision: under 600px, `display` and `h1` drop one step (to the `h1` and `h2` sizes); the other styles stay fixed.

### Space & layout

| Space     | Value | Use                                                     |
| --------- | ----- | ------------------------------------------------------- |
| `space-1` | 4px   | Icon-to-label gaps, badge padding                       |
| `space-2` | 8px   | Kicker to title, gaps between buttons                   |
| `space-3` | 12px  | Control padding, list-item gaps                         |
| `space-4` | 16px  | Compact card padding, default grid gap                  |
| `space-5` | 24px  | Card padding, grid gutter, page side gutter             |
| `space-6` | 32px  | Section header to its content                           |
| `space-7` | 48px  | Blocks inside a section                                 |
| `space-8` | 72px  | Vertical padding of homepage sections (desktop)         |
| `space-9` | 112px | Hero bottom padding under the overlapping service strip |

- Content is at most 1200px wide (`max-w-site`) with a 24px side gutter (`px-6`) at every width. The `space-*` steps are Tailwind's 4px scale: `space-5` is `6`, `space-8` is `18`, `space-9` is `28`. The main header row is 76px tall.
- Homepage sections alternate `background`, `muted` and `deep` bands. Under 600px their vertical padding drops to `space-7`.
- Breakpoints used by the components: under 960px navs collapse and two-panel layouts stack; under 600px grids drop to two columns or one.

### Shape & depth

- **Radius**:
  - `rounded-sm` 8px: inputs, thumbnails, small buttons
  - `rounded-md` 14px: buttons, notices, list cards, tiles
  - `rounded-lg` 24px: feature cards, the service strip, hero media
  - `rounded-full`: badges, chips, timeline dots
- **Depth**: cards rest on `shadow-sm` plus a 1px `border`, and lift to `shadow-md` on hover (also dropdowns). `shadow-float` is for the service strip only. Dark-theme shadows are deeper and rely on `border` for edges.
- **Controls**: tap targets at least 40px. Inputs, selects and default buttons are 48px tall, so they line up in a row; `lg` buttons (56px) are for hero and call-to-action bands. Inputs have a 1.5px `input` edge and a label always visible above them.

### States & motion

- **Focus**: a solid 2px ring with a 2px offset, `ring` on light grounds and `ring-deep` on `deep` bands.
- **Hover** lightens or tints by one step. **Disabled** controls drop to 45% opacity and keep their label.
- **Motion** is limited to 150ms colour transitions and a 1px lift, removed under `prefers-reduced-motion`.

### Iconography & imagery

- **Icons**: Lucide outline icons, 24px grid, 1.75 stroke, round caps, drawn in `currentColor` (`lucide-react` in the app, where `app.css` sets the 1.75 stroke for every icon, so don't pass `strokeWidth`; `claude-design-system/assets/Icons/` shows the set). 20px in text rows, 28px in service tiles, 32–64px in media placeholders. No emoji or filled glyphs.
- **Direction**: directional icons are never mirrored by script. Forward actions use `arrow-left`; pick the icon that points the right way.
- **Photography**: warm, daylight campus photos, always under an `overlay` scrim when text sits on them. Until real photos exist, use a tonal placeholder panel with one outline icon (Sarv's `sv-media`); it's a placeholder, not final art.
- **Logo**: the Sarv emblem (an arch holding a cypress leaf) in `claude-design-system/assets/Logos/` is a placeholder for the university's official mark. Keep its 44px square slot and the lockup: «دانشگاه سرو» above `SARV UNIVERSITY`. Teal on light grounds, gold on `deep`, mint (`primary` dark) in dark mode.

### Signature patterns

Each pattern has guidelines and live markup in `claude-design-system/components/<Name>/`.

- **Site header** ([SiteHeader](../claude-design-system/components/SiteHeader/README.md)): a `deep` utility bar (official-site label, contact, portal login) above a `card` row with the brand, up to five nav items (current one: gold underline, `brand-text`, `aria-current="page"`) and the tools (language, theme, search) at the far end.
- **Hero** ([Hero](../claude-design-system/components/Hero/README.md)): a full-bleed photo under the `overlay` scrim, text at the inline start, a `display` headline, a lead of two lines at most, and exactly two actions: one `gold`, one outline on deep.
- **Service strip** ([ServiceStrip](../claude-design-system/components/ServiceStrip/README.md)): a floating `card` panel of up to six quick-access tiles (icon in an `accent` square, `h4` title, `body-sm` subtitle) that overlaps the hero on the homepage. The last tile is always «کلیه خدمات».
- **Section header** ([SectionHeader](../claude-design-system/components/SectionHeader/README.md)): a gold rule and `brand-text` kicker, an `h2` title, an optional one-sentence lead, and an optional outline «مشاهده همه» at the opposite end.
- **News** ([NewsCard](../claude-design-system/components/NewsCard/README.md)): one featured story over a scrimmed image beside a list of three compact rows (thumbnail, category kicker, `h4` title, Jalali date). Whole cards are links.
- **Academic timeline** ([Timeline](../claude-design-system/components/Timeline/README.md)): up to seven term milestones running from the right, with done, current (gold dot, `aria-current="step"`) and future states. It becomes a vertical list under 960px.
- **Stat band** ([StatBand](../claude-design-system/components/StatBand/README.md)): a `deep` band with a video panel and up to six real, cited figures in `stat` and `gold`. Never invent figures.
- **Feature cards** ([FeatureCard](../claude-design-system/components/FeatureCard/README.md)): media, a `gold-text` kicker meta line, `h3` title, two-line summary and a link call. Stacked for achievements, row form for courses and events.
- **Call to action** ([CallToAction](../claude-design-system/components/CallToAction/README.md)): a `deep` invitation panel with two actions beside a `card` panel of two real support routes. Once, at the end of the homepage.
- **Footer** ([SiteFooter](../claude-design-system/components/SiteFooter/README.md)): a `deep` footer with the brand, two link columns of up to five links, a contact column with gold icons, and the copyright line.

Building blocks:

- **Button** ([Button](../claude-design-system/components/Button/README.md)): variant `gold` for the one main call to action, `outline` for secondary choices (`outline-deep` on deep bands), `default` (teal) for in-app actions, `ghost` for low emphasis. Forward actions carry a trailing `arrow-left`. Disabled buttons use the `disabled` attribute.
- **Badge** ([Badge](../claude-design-system/components/Badge/README.md)): a pill of three words at most. Quiet `accent` wash by default, `gold` for one featured item per card, status tones always with an icon.
- **Field** ([Field](../claude-design-system/components/Field/README.md)): a visible label above the input, an optional hint, and an error line that names the problem and the fix with the `circle-alert` icon. Student and phone numbers are `dir="ltr"` and accept Persian digits.
- **Alert** ([Alert](../claude-design-system/components/Alert/README.md)): variants `info`, `success`, `warning` and `destructive` (plus a neutral `default`), each a tone-coloured `h4` title and icon over an `ink` `body-sm` sentence. The primitive sets `role="alert"` for warning and destructive and `role="status"` otherwise. No more than three stacked; official announcements go in the news list.

## Reference screens

These are examples of the identity, not specs to copy. Match their feel, not their pixels. Names, dates and figures are sample content, and the scene art is a placeholder for photography.

- [homepage-light.png](./references/homepage-light.png) and [homepage-dark.png](./references/homepage-dark.png): the full homepage at 1440px, in section order: header, hero, service strip, news, timeline, stat band, achievements, events and courses, call to action, footer.
- Live versions: [`examples/homepage-light.html`](../claude-design-system/examples/homepage-light.html) and [`examples/homepage-dark.html`](../claude-design-system/examples/homepage-dark.html).

## Accessibility notes

Sarv's tokens already meet WCAG 2.2 AA in both themes when used on the grounds listed above:

- Text pairs are at least 4.5:1; control edges, focus rings and large text at least 3:1.
- Status is never colour-only: always an icon and a word.
- Tap targets are at least 40px.
- Every page declares `lang="fa"` and `dir="rtl"`, and marks any English span with `lang="en"`.
- Use logical properties only (`ms`/`me`, `ps`/`pe`, `start`/`end`), never left/right.
