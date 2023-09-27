import type { Meta, StoryObj } from "@storybook/react";
import { within } from '@storybook/testing-library';
import { expect } from "@storybook/jest";

import Header from "./Header";

const meta = {
  title: "Stories/Gagal ❌/Header-not",
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Zeta",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testname = await canvas.getByText('Zeta');

    await expect(testname).toBeInTheDocument();
  },
};

export const LoggedInWithLongName: Story = {
  args: {
    user: {
      name: "Vestia Zeta",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testname = await canvas.getByText('Vestia Zeta');

    await expect(testname).toBeInTheDocument();
  },
};