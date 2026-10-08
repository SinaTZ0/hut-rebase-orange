# Component Conventions

## Where components live

- `app/components/primitive/` holds the components we have restyled for this app. Each one owns its folder:

  ```text
  primitive/button/
    button.tsx          # rendering and props
    button.styles.ts    # style groups and CVA variants
    button.stories.tsx  # maintained UI documentation
  ```

- `app/components/ui/` holds shadcn components we haven't changed yet. When one needs app-specific styling, **move** it into `primitive/` with the structure above, point every import (including other `ui/` files) at the new path, and delete the `ui/` file. Never keep two versions of the same component.
- Route-specific pieces stay in their route slice; see [frontend-guideline.md](./frontend-guideline.md).

Import directly from the owning file. `buttonVariants` and other CVA helpers come from the `*.styles.ts` file.

## Editing styles

Wrap style maps in `defineStyles` from `primitive/styles.ts`. It keeps the classes split into named groups, keeps their keys typed for CVA, and lets Prettier sort the Tailwind classes inside it. It does no merging at runtime.

```ts
const twVariant = defineStyles({
  default: {
    appearance: "bg-primary text-primary-foreground",
    hover: "hover:bg-primary/80",
  },
});
```

Use the same group names across components and leave out the ones you don't need. Unknown names fail type-checking.

| Group                      | Contents                                                   |
| -------------------------- | ---------------------------------------------------------- |
| `layout`                   | Display, alignment, positioning, gaps, and `group/*` names |
| `geometry`                 | Dimensions, padding, margin, radius, and border width      |
| `typography`               | Font family, size, weight, alignment, and line height      |
| `appearance`               | Colors, border colors, shadows, and placeholder colors     |
| `interaction`              | Transitions, cursor, selection, and pointer behavior       |
| `hover`, `focus`, `active` | Styles belonging to each interaction state                 |
| `disabled`, `invalid`      | Disabled and `aria-invalid` styles                         |
| `state`                    | Open/closed, expanded, and enter/exit styles               |
| `motion`                   | Reduced-motion overrides                                   |
| `icon`                     | Selectors affecting descendant icons                       |

When one group has a distinct sub-concern, add a capitalized suffix and a comment saying why, e.g. `geometryIcon` for padding that adjusts around a `data-icon` child, or `stateAutofill`.

Helpers:

- `joinStyles(groups)` turns one set of groups into a class string, both for a part without variants and for a CVA base.
- `composeStyles(map)` turns a map of variant options into CVA's `variants` and keeps the option keys literal.
- Resolve Tailwind conflicts only at the element: `cn(componentVariants({ variant, size }), className)`. Preserve Base UI's function `className` where a wrapper supports it, as Button does.

Export the variant maps as `twVariant`, `twSize`, and so on, so stories can build their controls from them (`Object.keys(twVariant)`). That way a new variant appears in Storybook without touching the story. Consumers use the component's props; they never import or mutate the maps.

Prefer a CVA variant over `data-[size=…]:` selectors on the element itself. Keep the `data-*` attribute as well when a child or a parent reads it, as CardTitle does with `group-data-[size=sm]/card`.

## Changing a primitive

A primitive's styles change every page that uses it, so follow the base-styles step in [design-flow.md](./design-flow.md). Before you change a default or add a variant, check the existing consumers and other `ui/` components that compose it, because some rely on its slots and selectors (`data-slot`, `in-data-[slot=button-group]`, `has-data-[icon=…]`, `aria-invalid`). Then update the story.
