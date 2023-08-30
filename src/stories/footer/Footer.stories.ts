import type { Meta, StoryObj } from "@storybook/react";
import { within } from '@storybook/testing-library';
import { expect } from "@storybook/jest";
import { Footer } from "./Footer";

const meta = {
  title: "Feat/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backgroundColor: "rgb(6, 95, 70)"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testFooter = await canvas.getByTestId('footer')

    await expect(testFooter).toBeInTheDocument();
  },
};