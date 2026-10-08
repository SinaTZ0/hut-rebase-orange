# Design Flow

Follow these steps for every new page. Going back to an earlier step is fine when the design changes.

1. **Purpose**: In one sentence, say what the user comes to this page to do. Example: "Find a course and see when and where it meets."
2. **App context**: Read [app-identity.md](./app-identity.md). Note which signature patterns fit this page and how its copy follows the tone rules. Don't create a new mood, tone or theme for one page.
3. **Page brief**: this is where the page is designed.
   - `role`: where the page sits in the flow (entry, list, detail, form, settings…) and where the user goes next.
   - `structure`: the sections from top to bottom, with what each one contains. Include the empty, loading and error states.
   - `design`: the layout and visual hierarchy, i.e. what the eye should land on first, second and third, and how the layout adapts from phone to desktop. Include one distinctive idea that serves the page's purpose and makes it memorable, not just a generic template.
   - `look`: density, emphasis and how colour is used on this page, within the app theme.
4. **Components**: the brief decides the design; components serve it. Never let the component list flatten the design.
   - **Standard controls** (buttons, inputs, dialogs, menus…): pick the shadcn component that fits ([shadcn.md](./shadcn.md)) and use its primitive from `components/primitive/`.
   - **App components** (form alerts, links…): check `components/shared/` before building something new.
   - **Custom pieces**: build anything more distinctive in the route slice, composing primitives where they fit.
5. **Prepare shared pieces**: as a separate change before the page, create any missing primitive and update any whose base style doesn't match app-identity yet ([components.md](./components.md)). Base styles follow app-identity, never one page's needs, because a change affects every page. Update the story and check it in light, dark and side by side (`npm run storybook`).
6. **Build**:
   - A page-specific look that will be reused becomes a variant. One-off creative styling is fine; keep it local to the page.
   - Move a custom piece to `components/shared/` once a second route needs it.
   - The app is right-to-left. Use logical utilities (`ms`/`me`, `ps`/`pe`, `start`/`end`, `text-start`), never `left`/`right`.
7. **Review**: compare the page with the brief: the hierarchy, the distinctive idea, and every state. Check it at phone and desktop widths, in light and dark, and against `WCAG 2.2 AA`.
