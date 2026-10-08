import type { Meta, StoryObj } from "@storybook/react-vite";
import { CircleAlertIcon, InfoIcon } from "lucide-react";

import { Button } from "../button/button";
import { Alert, AlertAction, AlertDescription, AlertTitle } from "./alert";
import { twVariant } from "./alert.styles";

const variantOptions = Object.keys(twVariant) as Array<keyof typeof twVariant>;

/*===== Meta =====*/
const meta = {
  title: "Primitive/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: "select",
      options: variantOptions,
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>واکسن سالانه لئو نزدیک است</AlertTitle>
      <AlertDescription>تا ۱۲ مهر برای واکسن هاری نوبت بگیرید.</AlertDescription>
    </Alert>
  ),
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/*===== Stories =====*/
export const Playground: Story = {};

export const Destructive: Story = {
  args: { variant: "destructive" },
  render: (args) => (
    <Alert {...args}>
      <CircleAlertIcon />
      <AlertTitle>پرداخت انجام نشد</AlertTitle>
      <AlertDescription>اتصال اینترنت را بررسی کنید و دوباره امتحان کنید.</AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>اطلاعات شما امن و محرمانه است</AlertTitle>
    </Alert>
  ),
};

export const WithAction: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>نوبت فردا ساعت ۱۰</AlertTitle>
      <AlertDescription>دکتر رضایی، کلینیک دامپزشکی آرامش</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline">
          جزئیات
        </Button>
      </AlertAction>
    </Alert>
  ),
};
