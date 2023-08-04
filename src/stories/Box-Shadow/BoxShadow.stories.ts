import type { Meta, StoryObj } from "@storybook/react";

import { BoxShadow } from "./BoxShadow";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Stories/Box Shadow",
  component: BoxShadow,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof BoxShadow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const base: Story = {
  args: {
    shadow: "base",
    label: "base",
  },
};

export const Md: Story = {
  args: {
    shadow: "Md",
    label: "Md",
  },
};

export const Lg: Story = {
  args: {
    shadow: "Lg",
    label: "Lg",
  },
};

export const xl: Story = {
  args: {
    shadow: "xl",
    label: "xl",
  },
};

export const xxl: Story = {
  args: {
    shadow: "xxl",
    label: "xxl",
  },
};

export const Inner: Story = {
  args: {
    shadow: "Inner",
    label: "Inner",
  },
};
