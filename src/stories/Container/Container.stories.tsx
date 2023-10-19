// src/stories/GridStory.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Container from "./Container";
import { ContentContainer } from "./container.styles";

const meta = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    componentSubtitle: "'Component Container",
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
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Grid1: Story = {
  args: {
    Contents: [
        <ContentContainer>Content</ContentContainer>
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Content');
    const testIdContainer = canvas.getByTestId('container');

    await expect(testText).toBeInTheDocument();
    await expect(testIdContainer).toBeInTheDocument();
    await expect(testText).toHaveStyle('background-color: #ffa724a4');
  },
};