import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"
import Form from "./Form";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const Meta = {
  title: "Components/Form",
  component: Form,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    componentSubtitle: "'Component Form",
    docs: {
      page: () => <>
        <Title />
        <Description />
        <Subtitle />

        <PrimaryDocBlock />
        <Controls />

        <Stories />
      </>,
    },
  },
} as Meta<typeof Form>;

export default Meta;
type Story = StoryObj<typeof Meta>;

export const Default: Story = {};
Default.args = {
  label: "Your text:",
};
Default.play = async ({ canvasElement}) => {
  const canvas = within(canvasElement);
  const testText = await canvas.getByText('Your text:');

  await expect(testText).toBeInTheDocument;
};

// For the Placeholder Form
export const WithPlaceholder: Story = {};
WithPlaceholder.args = {
  label: "Your text:",
  placeholder: "Enter your Text...",
};
WithPlaceholder.play = async ({ canvasElement}) => {
  const canvas = within(canvasElement);
  const testText = await canvas.getByText('Your text:');
  const WPlaceholder = await canvas.getByPlaceholderText("Enter your Text...");

  await expect(WPlaceholder).toBeInTheDocument;
  await expect(testText).toBeInTheDocument;
};