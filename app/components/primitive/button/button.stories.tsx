import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowLeftIcon, CalendarIcon, PlusIcon } from "lucide-react";

import { Button } from "./button";
import { twSize, twVariant } from "./button.styles";

const variantOptions = Object.keys(twVariant) as Array<keyof typeof twVariant>;
const sizeOptions = Object.keys(twSize) as Array<keyof typeof twSize>;

/*===== Meta =====*/
const meta = {
  title: "Primitive/Button",
  component: Button,
  args: { children: "ورود به سامانه" },
  argTypes: {
    variant: {
      control: "select",
      options: variantOptions,
    },
    size: {
      control: "select",
      options: sizeOptions,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/*===== Stories =====*/
export const Playground: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {/* One gold button per view: the page's main call to action. */}
      <Button {...args} variant="gold">
        پذیرش و ثبت‌نام
      </Button>
      <Button {...args}>ورود به سامانه</Button>
      <Button {...args} variant="outline">
        مشاهده همه اخبار
      </Button>
      <Button {...args} variant="secondary">
        ذخیره پیش‌نویس
      </Button>
      <Button {...args} variant="ghost">
        انصراف
      </Button>
      <Button {...args} variant="destructive">
        حذف خبر
      </Button>
      <Button {...args} variant="link">
        قوانین و مقررات
      </Button>
    </div>
  ),
};

// On a deep-teal band the pair is gold plus `outline-deep`, as in the hero and call-to-action band.
export const OnDeep: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3 rounded-lg surface-deep p-6">
      <Button {...args} variant="gold" size="lg">
        پذیرش و ثبت‌نام
      </Button>
      <Button {...args} variant="outline-deep" size="lg">
        آشنایی با دانشگاه
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} size="xs">
        کوچک‌تر
      </Button>
      <Button {...args} size="sm">
        کوچک
      </Button>
      <Button {...args} size="default">
        پیش‌فرض
      </Button>
      <Button {...args} size="lg">
        بزرگ
      </Button>
    </div>
  ),
};

// `lg` is for hero and call-to-action bands, and the full-width submit of a form.
export const PrimaryAction: Story = {
  render: (args) => (
    <div className="max-w-sm">
      <Button {...args} size="lg" className="w-full">
        تأیید و ادامه
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args}>
        <CalendarIcon data-icon="inline-start" />
        تقویم آموزشی
      </Button>
      <Button {...args} variant="outline">
        بیشتر بخوانید
        {/* Arrow points left: "forward" in RTL. */}
        <ArrowLeftIcon data-icon="inline-end" />
      </Button>
    </div>
  ),
};

export const IconSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      {(["icon-xs", "icon-sm", "icon", "icon-lg"] as const).map((size) => (
        <Button key={size} size={size} variant="outline" aria-label="افزودن">
          <PlusIcon />
        </Button>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
};
