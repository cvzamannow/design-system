import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"
import { within } from '@storybook/testing-library';
import { expect } from "@storybook/jest";

import  Button  from "./Button";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Stories/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    componentSubtitle: "'Conponent Button",
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
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    ButtonType: "primary",
    label: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testBtn = await canvas.getByText('Button');
    const testMediumSize = canvas.getByTestId('button-size-medium');

    await expect(testBtn).toBeInTheDocument();
    await expect(testMediumSize).toBeInTheDocument();
    await expect(testBtn).toHaveStyle('background-color: #FFA824');
  },
};

export const Secondary: Story = {
  args: {
    ButtonType: "secondary",
    label: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testBtn = await canvas.getByText('Button');
    const testMediumSize = canvas.getByTestId('button-size-medium');

    await expect(testBtn).toBeInTheDocument();
    await expect(testMediumSize).toBeInTheDocument();
    await expect(testBtn).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
  },
};

export const Nolo: Story = {
  args: {
    ButtonType: "nolo",
    label: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testBtn = await canvas.getByText('Button');
    const testMediumSize = canvas.getByTestId('button-size-medium');

    await expect(testBtn).toBeInTheDocument();
    await expect(testMediumSize).toBeInTheDocument();
    await expect(testBtn).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testTextBtn = await canvas.getByText('Button');
    const testSmallSize = canvas.getByTestId('button-size-small'); // Assuming you have a test id for the size

    await expect(testTextBtn).toBeInTheDocument();
    await expect(testSmallSize).toBeInTheDocument();
  },
};


export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testTextBtn = await canvas.getByText('Button');
    const testLargeSize = canvas.getByTestId('button-size-large'); // Assuming you have a test id for the size

    await expect(testTextBtn).toBeInTheDocument();
    await expect(testLargeSize).toBeInTheDocument();
  },
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing