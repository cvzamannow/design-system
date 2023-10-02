import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls } from "@storybook/blocks";
import { within } from '@storybook/testing-library';
import { expect } from "@storybook/jest";

import Button, { ButtonProps } from "./Button";

const meta = {
  title: "Stories/Button",
  component: Button,
  parameters: {
    layout: "centered",
    componentSubtitle: "'Conponent Button",
    docs: {
      page: () => (
        <>
          <Title></Title>
          <Description></Description>
          <Subtitle></Subtitle>
          <PrimaryDocBlock></PrimaryDocBlock>
          <Controls></Controls>
          <Stories></Stories>
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {
    shildren: { control: "text"},
    backgroundColor: { control: "color" },
    ButtonType: { control: "text" },
    size: { control: "text" },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base = (args:ButtonProps) => <Button {...args}>{args.children}</Button>;

Base.args = {
  onClick: () => {},
  label: "",
  children: "your text",
  disabled: false,
};

export const Primary = (args:ButtonProps) => <Button {...args}>{args.children}</Button>;

Primary.args = {
  onClick: () => {},
  label:"",
  children: "Button",
  ButtonType: "primary"
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
    const testSmallSize = canvas.getByTestId('button-size-small');

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
    const testLargeSize = canvas.getByTestId('button-size-large');

    await expect(testTextBtn).toBeInTheDocument();
    await expect(testLargeSize).toBeInTheDocument();
  },
};
