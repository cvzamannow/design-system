import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";

const meta = {
  title: "Stories/Form",
  component: Form,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// For Default Form
export const Default: Story = {};
Default.args = {};

// For the Placeholder Form
export const WithPlaceholder: Story = {};
WithPlaceholder.args = {
  placeholder: "Enter your Text...",
};