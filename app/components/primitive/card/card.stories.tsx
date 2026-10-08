import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "~/components/primitive/button/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { twSize } from "./card.styles";

const sizeOptions = Object.keys(twSize) as Array<keyof typeof twSize>;

/*===== Meta =====*/
const meta = {
  title: "Primitive/Card",
  component: Card,
  argTypes: {
    size: { control: "inline-radio", options: sizeOptions },
  },
  args: { size: "default" },
  render: (args) => (
    <Card {...args} className="max-w-sm">
      <CardHeader>
        <CardTitle>تقویم آموزشی</CardTitle>
        <CardDescription>نیم‌سال اول ۱۴۰۵–۱۴۰۶</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            مشاهده تقویم
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>انتخاب واحد: ۱۲–۱۸ مهر</CardContent>
    </Card>
  ),
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/*===== Stories =====*/
export const Playground: Story = {};

export const Small: Story = {
  args: { size: "sm" },
};

export const WithFooter: Story = {
  render: (args) => (
    <Card {...args} className="max-w-sm">
      <CardHeader>
        <CardTitle>کارشناسی ارشد علوم داده</CardTitle>
        <CardDescription>دانشکده علوم ریاضی</CardDescription>
      </CardHeader>
      <CardContent>مهلت ثبت‌نام: ۳۰ مهر ۱۴۰۵</CardContent>
      <CardFooter>
        <Button className="w-full">ثبت‌نام</Button>
      </CardFooter>
    </Card>
  ),
};
