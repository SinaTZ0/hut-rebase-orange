# Homepage & Primitives Refactor: Handoff

A temporary brief for one refactor session. Delete it when the work is merged.

## Why

The rebuilt homepage follows the Sarv design system closely but looks worse than the previous one in `../hut-rr8-tw-base`. These causes were found and the docs are already fixed:

1. **Flat scrims.** `hero.tsx` and `news-section.tsx` cover whole photos with a flat `bg-overlay` (85% opaque), which hides them. Sarv's own scrims are gradients (`claude-design-system/components/bundle.css:101` and `:150`).
2. **Placeholder references.** The old reference screens were renders of Sarv's placeholder art, so they taught flat teal boxes with one icon each. They are now screenshots of the previous homepage.
3. **Patterns used as templates.** "Featured story over a scrimmed image" put text over posters. Announcements got their own band, and events became sparse full-width rows.
4. **Heavy scale and decorative boxes.** Sarv's large type, 48/56px controls and 72px sections, plus boxes the design doesn't need (the floating hero notice, boxed stat tiles, a card for every announcement).
5. **Flow gap.** There was no step that looks at the real content before choosing layouts.

## Read first

- `docs/app-identity.md`: updated. Read in particular the new type scale, Space & layout, Shape & depth (containers and controls), **States & motion → Interaction**, Imagery (scrims and images that contain text), the Signature patterns intro, and Reference screens.
- `docs/design-flow.md`: updated (adds a content inventory step, an `interaction` line in the brief, and a screenshot review). Follow it via the `page-design` skill.
- `docs/components.md`: updated (interaction ownership in primitives).
- `docs/references/homepage-light.png` and `homepage-dark.png`: the previous homepage at 1440px. Copy its composition, image handling and hover feel, not its colours or sizes.
- The previous code, for the interactions and layouts to port (read only, never import across projects):
  - `../hut-rr8-tw-base/app/components/primitive/card/card.styles.ts`: `twLinkStyles` (whole-card link wash + shadow)
  - `../hut-rr8-tw-base/app/components/primitive/link-tile/link-tile.styles.ts`: row/stacked tiles, icon fill, diagonal arrow, reveal
  - `../hut-rr8-tw-base/app/components/primitive/text-link/text-link.styles.ts`: arrow nudge
  - `../hut-rr8-tw-base/app/components/primitive/button/button.styles.ts`: press `active:not-disabled:translate-y-px`
  - `../hut-rr8-tw-base/app/routes/home/components/*.tsx`: hero, news + notices panel, mixed achievements, events beside a deep panel, video play button

Note: `.tmp-claude/d.png`, `dd.png` and `m.png` are screenshots of the current homepage and may be out of date. Take new ones with `.tmp-claude/shot.mjs` against `npm run dev`.

## Part 1: Tokens (`app/app.css`)

Make the tokens match app-identity. This is a separate change from the primitives and the page.

- [ ] Type: `display` 52/76, `stat` 40/52, `h1` 36/56, `h2` 28/44, `h3` 20/32, `h4` 16/28, `body-lg` 17/30, `button` 14/24 weight 600, `kicker` 12/20. `body`, `body-sm`, `caption` and `nav` stay the same.
- [ ] Phone sizes under 600px: `display` → 36/56, `h1` → 28/44, `h2` → 24/40. Check how the current drop is implemented (`text-h1 min-[600px]:text-display` in `hero.tsx`) and keep one approach.
- [ ] `--radius-lg` 1.5rem → 1.25rem (20px). Check what `--radius-xl` (currently equal to lg) is used for before changing it.
- [ ] Scrims: add two utilities so routes don't hand-write gradients, e.g. `@utility scrim-inline` (RTL: `linear-gradient(to left, var(--overlay) 0%, <overlay at ~70%> 45%, <overlay at ~30%> 100%)`) and `@utility scrim-bottom` (`linear-gradient(to top, var(--overlay) 0%, var(--overlay) 38%, transparent 85%)`). `--overlay` already has alpha, so derive the weaker stops with `color-mix(in oklab, var(--overlay) N%, transparent)`. Comment that `scrim-inline` assumes RTL.
- [ ] Section padding is used as `py-12 min-[600px]:py-18`: move to `py-12 min-[600px]:py-16`. Hero bottom padding for the service strip overlap: `space-9` is now 96px.

## Part 2: Primitives and shared components

One change per primitive, each with its story updated, checked in light, dark and side by side. Follow the "Prepare shared pieces" step. Check consumers first (`grep -rn "<Name"` under `app/`).

- [ ] **Button** (`primitive/button`):
  - sizes: `sm` h-10 (unchanged), `default` h-12 → h-11, `lg` h-14 → h-12, `icon` size-12 → size-11, `icon-lg` size-14 → size-12; adjust padding to suit.
  - add the press: `active:not-disabled:translate-y-px` (`translate` is already in the transition list).
  - add the arrow nudge for a trailing icon: `[&_[data-icon=inline-end]]:group-hover/button:-translate-x-1` with a transform transition, `motion-reduce:` overrides in `motion`.
- [ ] **Input / Select / Textarea**: `h-12` → `h-11` so they line up with buttons (`select.styles.ts:26`, `input.styles.ts:8`; check input-group too).
- [ ] **Card** (`primitive/card`):
  - default size padding `--spacing(6)` → `--spacing(5)`.
  - today `in-[a]:hover:shadow-md` is the only effect. Add the **card lift**: a faint `accent` wash plus `shadow-md` over 200ms, with focus-visible equivalents, when the card is inside a link or is the link.
  - give media a zoom hook: an `overflow-hidden` media frame part (e.g. `CardMedia`, or a documented pattern) whose `img` scales `1.03` over 300ms on `group-hover/card` and `group-focus-visible`.
  - decide on one whole-card-link API (the old project used a `CardLink` part, `data-slot="card-link"`) so routes stop hand-writing `SiteLink` + focus classes around cards, as `news-section.tsx` and `events.tsx` do now.
- [ ] **Text link** (new `shared/text-link`, or a `link` variant): `brand-text` label, trailing `arrow-left` with the arrow nudge, colour tint on hover, focus ring, min-h-10 tap target. On `deep`: `gold` → `deep-foreground`. Replaces the hand-styled «ادامه خبر» / «بیشتر بخوانید» spans.
- [ ] **Link tile** (new `shared/link-tile`, port of the old primitive): `row` and `stacked` variants with the icon fill, title tint, diagonal nudge and reveal. Used by the service strip and the call-to-action support routes.
- [ ] **Section header** (`shared/section-header`): check it against the smaller `h2` and kicker; its «مشاهده همه» action becomes a text link or outline `sm` button.
- [ ] **Site header / footer**: header row 76 → 72px; footer and utility links get the link tint (`deep-muted` → `gold`) with a 150ms colour transition.
- [ ] Badge, Alert, Tabs, Dropdown, Tooltip: check their sizes against the new type scale only; no new motion.

## Part 3: Homepage (`app/routes/home/`)

Run the `page-design` skill, doing the content inventory from `content.ts` (most news and achievement images are posters). Target structure, in order:

1. **Hero** (`hero.tsx`): replace `bg-overlay` with `scrim-inline` so the campus shows clearly on the far side. Two-line headline («دانشگاه صنعتی» / «همدان» in gold) at `display`. Remove the floating `deep-raised` notice box: the academic notice becomes a slim full-width link row along the hero's bottom edge (calendar icon, label, text, arrow nudge), as in the old hero. The far side carries the short caption («ریشه در دانش / نگاه به آینده»).
2. **Service strip** (`service-strip.tsx`): the floating panel stays; tiles become `link-tile` stacked with the icon fill. Drop the panel's own title row if it only repeats the obvious.
3. **News + announcements** (`news-section.tsx` + `announcements.tsx` → one section): main column = featured story as a wide card (image area beside the text, no text over the poster) plus two cards with their own media area; side column = the announcements panel (date chip, title, office, «همه اطلاعیه‌ها» link) on `muted`. Delete the separate announcements band. Card lift, media zoom, title tint and arrow nudge on every card.
4. **Timeline** (`academic-timeline.tsx`): keep; check against the smaller type.
5. **Stat band** (`stat-band.tsx`): figures in an open grid with hairline dividers instead of boxed tiles; video panel shows the photo (bottom scrim only under its caption) and a play button with the play pulse.
6. **Achievements** (`achievements.tsx`): mixed sizes, one large card beside two stacked row cards, as in the reference, instead of three equal cards. Poster images get `object-top` or `object-contain` on `muted`.
7. **Events and courses** (`events.tsx`): a `deep` intro panel (kicker, title, lead, link) beside a list of row cards with thumbnails; replaces the full-width text rows.
8. **Call to action** (`call-to-action.tsx`): keep; the support routes become `link-tile` rows.

Remove from the page every container that isn't clickable or a real content group (app-identity → Containers).

## Done when

- [ ] `npm run lint` and `npm run typecheck` pass; `npm run build` passes after the token change.
- [ ] Full-page screenshots at 1440px and 390px, light and dark, compared with `docs/references/`: photos clearly visible, no text over posters, no empty-looking bands, no decorative boxes.
- [ ] Every clickable thing responds to hover and keyboard focus with the vocabulary in app-identity; nothing moves the layout; with reduced motion emulated (Playwright `reducedMotion: "reduce"`) no transforms run.
- [ ] WCAG 2.2 AA: text contrast 4.5:1 for everything under 24px (and under 18.66px bold), tap targets ≥ 40px, focus ring visible on light and `deep` grounds, logical properties only.
- [ ] Stories updated for every changed primitive and shared component.
- [ ] This file deleted.
