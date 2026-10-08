import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "../input/input";
import { Label } from "./label";

/*===== Meta =====*/
const meta = {
  title: "Primitive/Label",
  component: Label,
  args: { children: "نام حیوان" },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

/*===== Stories =====*/
export const Playground: Story = {};

export const WithInput: Story = {
  render: (args) => (
    <div className="flex max-w-sm flex-col gap-2">
      <Label {...args} htmlFor="pet-name" />
      <Input id="pet-name" placeholder="مثال: لئو" />
    </div>
  ),
};

// The label dims when the control before it is disabled (`peer-disabled`).
export const Disabled: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <input id="terms" type="checkbox" className="peer" disabled />
      <Label {...args} htmlFor="terms">
        قوانین را می‌پذیرم
      </Label>
    </div>
  ),
};
