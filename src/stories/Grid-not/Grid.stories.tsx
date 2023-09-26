// src/stories/GridStory.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { within } from '@storybook/testing-library';
import { expect } from "@storybook/jest";

import Grid from "./Grid";

const meta = {
    title: "Stories/Gagal ❌/Grid-not",
    component: Grid,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ["autodocs"],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
      layout: "fullscreen",
    },
  } satisfies Meta<typeof Grid>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Grid1: Story = {
    args: {
        columns: 4,
        gap: '16px', 
        cardCount: 4, // Number of components
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const testGridNumber = await canvas.getByText('1');
  
      await expect(testGridNumber).toBeInTheDocument();
    },
};
  
