import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { twVariant } from "./tabs.styles";

const variantOptions = Object.keys(twVariant) as Array<keyof typeof twVariant>;

/*===== Meta =====*/
const meta = {
  title: "Primitive/Tabs",
  component: TabsList,
  argTypes: {
    variant: {
      control: "select",
      options: variantOptions,
    },
  },
  render: (args) => (
    <Tabs defaultValue="upcoming" className="max-w-sm">
      <TabsList {...args}>
        <TabsTrigger value="upcoming">نوبت‌های پیش رو</TabsTrigger>
        <TabsTrigger value="past">گذشته</TabsTrigger>
        <TabsTrigger value="cancelled" disabled>
          لغوشده
        </TabsTrigger>
      </TabsList>
      <TabsContent value="upcoming">ویزیت لئو، فردا ساعت ۱۰</TabsContent>
      <TabsContent value="past">۳ ویزیت در ماه گذشته</TabsContent>
      <TabsContent value="cancelled">نوبت لغوشده‌ای ندارید.</TabsContent>
    </Tabs>
  ),
} satisfies Meta<typeof TabsList>;

export default meta;
type Story = StoryObj<typeof meta>;

/*===== Stories =====*/
export const Playground: Story = {};

export const Line: Story = {
  args: { variant: "line" },
};

export const Vertical: Story = {
  render: (args) => (
    <Tabs defaultValue="profile" orientation="vertical" className="max-w-md">
      <TabsList {...args}>
        <TabsTrigger value="profile">پروفایل</TabsTrigger>
        <TabsTrigger value="pets">حیوانات</TabsTrigger>
        <TabsTrigger value="payments">پرداخت‌ها</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">نام، شماره موبایل و آدرس</TabsContent>
      <TabsContent value="pets">لئو و میلو</TabsContent>
      <TabsContent value="payments">۲ پرداخت در این ماه</TabsContent>
    </Tabs>
  ),
};
