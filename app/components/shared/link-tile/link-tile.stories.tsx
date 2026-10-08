import type { Meta, StoryObj } from "@storybook/react-vite";
import { GraduationCapIcon, LayoutGridIcon, LibraryIcon, MessageSquareTextIcon } from "lucide-react";

import { LinkTile } from "~/components/shared/link-tile/link-tile";
import { twVariant } from "./link-tile.styles";

const variantOptions = Object.keys(twVariant) as Array<keyof typeof twVariant>;

/*===== Meta =====*/
const meta = {
  title: "Shared/LinkTile",
  component: LinkTile,
  argTypes: {
    variant: { control: "inline-radio", options: variantOptions },
    icon: { control: false },
  },
  args: {
    href: "#complaints",
    title: "صدای شما برای ما مهم است",
    description: "ثبت شکایت، پیشنهاد یا انتقاد و دریافت کد پیگیری",
    icon: MessageSquareTextIcon,
    variant: "row",
  },
  render: (args) => (
    <div className="max-w-md rounded-lg bg-card p-2 shadow-sm ring-1 ring-border">
      <LinkTile {...args} />
    </div>
  ),
} satisfies Meta<typeof LinkTile>;

export default meta;
type Story = StoryObj<typeof meta>;

/*===== Stories =====*/

// Hover or tab to a tile: the icon square fills, the title tints and the arrow nudges.
export const Row: Story = {};

// An `http` link leaves the site, so it carries `arrow-up-left` and nudges diagonally.
export const External: Story = {
  args: { href: "https://hut.ac.ir", title: "سامانه گلستان", description: "خدمات آموزشی", icon: GraduationCapIcon },
};

// The service-strip layout: the corner arrow is revealed on hover and focus.
export const StackedGrid: Story = {
  render: () => (
    <ul className="grid max-w-xl grid-cols-3 rounded-lg bg-card p-2 shadow-sm ring-1 ring-border">
      <li>
        <LinkTile
          variant="stacked"
          href="https://hut.ac.ir"
          title="سامانه گلستان"
          description="خدمات آموزشی"
          icon={GraduationCapIcon}
        />
      </li>
      <li>
        <LinkTile
          variant="stacked"
          href="https://hut.ac.ir"
          title="کتابخانه مرکزی"
          description="منابع علمی"
          icon={LibraryIcon}
        />
      </li>
      <li>
        <LinkTile
          variant="stacked"
          href="#services"
          title="کلیه خدمات"
          description="همه سامانه‌ها"
          icon={LayoutGridIcon}
        />
      </li>
    </ul>
  ),
};
