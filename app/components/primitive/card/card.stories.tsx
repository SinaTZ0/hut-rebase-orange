import type { Meta, StoryObj } from "@storybook/react-vite";

import athleticsImage from "~/assets/news-athletics-olympiad.webp";
import staffImage from "~/assets/news-staff-meeting.webp";
import journalImage from "~/assets/news-sustainable-energy-journal.webp";
import { Button } from "~/components/primitive/button/button";
import { SiteLink } from "~/components/shared/site-link/site-link";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardMedia, CardTitle } from "./card";
import { twMediaFit, twSize } from "./card.styles";

const sizeOptions = Object.keys(twSize) as Array<keyof typeof twSize>;
const fitOptions = Object.keys(twMediaFit) as Array<keyof typeof twMediaFit>;

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

// A whole card that is a link: hover or tab to it for the card lift, media zoom and title tint. The second card's
// image is a poster, so it shows from the top instead of being cropped in the middle.
export const LinkWithMedia: Story = {
  render: (args) => (
    <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
      <Card {...args} render={<SiteLink href="#news" />}>
        <CardMedia className="aspect-video">
          <img src={staffImage} alt="نشست رئیس دانشگاه با کارکنان" />
        </CardMedia>
        <CardHeader>
          <CardTitle>دیدار رئیس دانشگاه با کارکنان به مناسبت هفته دولت</CardTitle>
          <CardDescription>۱۰ شهریور ۱۴۰۵</CardDescription>
        </CardHeader>
      </Card>
      <Card {...args} render={<SiteLink href="#news" />}>
        <CardMedia fit="top" className="aspect-video">
          <img src={athleticsImage} alt="نتایج ورزشکاران دانشگاه در المپیاد دانشجویان" />
        </CardMedia>
        <CardHeader>
          <CardTitle>درخشش ورزشکاران دانشگاه در المپیاد دانشجویان</CardTitle>
          <CardDescription>۹ شهریور ۱۴۰۵</CardDescription>
        </CardHeader>
      </Card>
    </div>
  ),
};

export const MediaFit: Story = {
  render: (args) => (
    <div className="grid max-w-4xl gap-5 sm:grid-cols-3">
      {fitOptions.map((fit) => (
        <Card key={fit} {...args}>
          <CardMedia fit={fit} className="aspect-4/3">
            <img src={journalImage} alt="نشریه انرژی پایدار و هوش مصنوعی" />
          </CardMedia>
          <CardContent dir="ltr" lang="en">
            {fit}
          </CardContent>
        </Card>
      ))}
    </div>
  ),
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
