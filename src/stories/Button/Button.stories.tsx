import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls } from "@storybook/blocks";
import { within } from '@storybook/testing-library';
import { expect } from "@storybook/jest";

import Button from "./Button";

const meta = {
  title: "Components/Button",
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

export const Primary: Story = {
  args: {
    ButtonType: "primary",
    label: "Button",
    style: { height: "48px", width: "118px" },

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
    style: { height: "48px", width: "118px" },
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
    style: { height: "48px", width: "118px" },
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

export const Text: Story = {
  args: {
    ButtonType: "text",
    label: "Button",
    style: { height: "48px", width: "118px" },

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


