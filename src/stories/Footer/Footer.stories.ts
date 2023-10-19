import type { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";
import { within } from '@storybook/testing-library';
import { expect } from "@storybook/jest";
import { Footer } from "./Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    menu1: { control: "text" }, 
    menu2: { control: "text" }, 
    menu3: { control: "text" }, 
    instagramPath: {control: "text"},
    facebookPath: {control: "text"},
    twitterPath:  {control: "text"},
    aboutPath: {control: "text"},
    contactPath: {control: "text"},
    faqPath:  {control: "text"},
    companyDescription: { control: "text" },
    questionText: { control: "text" },
    feedbackText: { control: "text" },
    copyrightText: { control: "text" },
  },
} as Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backgroundColor: "rgb(6, 95, 70)",
    menu1: "About",
    menu2: "Contact Us",
    menu3: "FAQ",
    instagramPath: "/instagram",
    facebookPath: "/facebook",
    twitterPath: "/twitter",
    aboutPath: "/about",
    contactPath: "/contact",
    faqPath: "/faq",
    companyDescription: "Memudahkan Anda menuju perusahaan impian dengan menggunakan CV yang efektif dan efisien",
    questionText: "Question or feedback ?",
    feedbackText: "We'd love to hear from you",
    copyrightText: `Copyright © ${new Date().getFullYear()} CV Zaman Now`
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testFooter = await canvas.getByTestId('footer');

    await expect(testFooter).toBeInTheDocument();

    const aboutLink = await canvas.findByText("About");
    const contactLink = await canvas.findByText("Contact Us");
    const faqLink = await canvas.findByText("FAQ");

    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(faqLink).toBeInTheDocument();
    
  },
};