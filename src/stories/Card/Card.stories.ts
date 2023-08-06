import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Stories/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CardDefault: Story = {
  args: {
    card: "CardDefault",
    label: "Card Default",
    style: { height: "306px", width: "193px" }, // Atur tinggi dan lebar sesuai kebutuhan Anda
  },
};

export const CardHover: Story = {
  args: {
    card: "CardHover",
    label: "Card Hover",
    style: { height: "306px", width: "193px" }, // Atur tinggi dan lebar sesuai kebutuhan Anda
  },
};

