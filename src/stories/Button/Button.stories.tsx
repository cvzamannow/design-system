import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls } from "@storybook/blocks";
import { within } from '@storybook/testing-library';
import { expect } from "@storybook/jest";

import Button from "./Button";

const meta = {
  title: "Stories/Button",
  component: Button,
  parameters: {
    layout: "centered",
    componentSubtitle: "'Conponent Button",
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Subtitle />
          <PrimaryDocBlock />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    ButtonType: { control: "text" },
    size: { control: "text" },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  
  args: {
    ButtonType: "preview",
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

Primary.parameters = {
  docs: {
    source: {
      code: `
<Button
  ButtonType="primary"
  onClick={() => {}}
>Button</Button>
      `,
    },
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

Secondary.parameters = {
  docs: {
    source: {
      code: `
<Button
  ButtonType="secondary"
  label="Button"
  onClick={() => {}}
></Button>
      `,
    },
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

Nolo.parameters = {
  docs: {
    source: {
      code: `
<Button
  ButtonType="nolo"
  label="Button"
  onClick={() => {}}
></Button>
      `,
    },
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

Small.parameters = {
  docs: {
    source: {
      code: `
<Button
  ButtonType="small"
  label="Button"
  onClick={() => {}}
></Button>
      `,
    },
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

Large.parameters = {
  docs: {
    source: {
      code: `
<Button
  ButtonType="large"
  label="Button"
  onClick={() => {}}
></Button>
      `,
    },
  },
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing