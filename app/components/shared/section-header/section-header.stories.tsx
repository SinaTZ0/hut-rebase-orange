import type { Meta, StoryObj } from "@storybook/react-vite";

import { SectionHeader } from "~/components/shared/section-header/section-header";

/*===== Meta =====*/
const meta = {
  title: "Shared/SectionHeader",
  component: SectionHeader,
  args: {
    kicker: "اخبار و اطلاع‌رسانی",
    title: "تازه‌های دانشگاه",
    lead: "روایت رویدادها، پژوهش‌ها و زندگی جامعه دانشگاهی",
    action: { label: "همه اخبار دانشگاه", href: "#news" },
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

/*===== Stories =====*/
export const Default: Story = {};

export const WithoutAction: Story = {
  args: { action: undefined },
};

export const OnDeep: Story = {
  args: { onDeep: true },
  render: (args) => (
    <div className="rounded-lg surface-deep p-8">
      <SectionHeader {...args} />
    </div>
  ),
};
