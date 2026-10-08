import type { Meta, StoryObj } from "@storybook/react-vite";

import { Separator } from "./separator";

/*===== Meta =====*/
const meta = {
  title: "Primitive/Separator",
  component: Separator,
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

/*===== Stories =====*/
export const Horizontal: Story = {
  render: (args) => (
    <div className="flex max-w-sm flex-col gap-3 text-sm">
      <p>پرونده لئو</p>
      <Separator {...args} />
      <p>واکسن بعدی: ۱۲ مهر</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <div className="flex h-6 items-center gap-3 text-sm">
      <span>ویزیت</span>
      <Separator {...args} orientation="vertical" />
      <span>واکسن</span>
      <Separator {...args} orientation="vertical" />
      <span>آرایش</span>
    </div>
  ),
};
