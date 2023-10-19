import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"
import { within } from '@storybook/testing-library';
import { expect } from "@storybook/jest";

import Card from "./Card";
import { ContentText } from "./card.styles";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    componentSubtitle: "'Component Card",
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
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CardDefault: Story = {
  args: {
    content: [ 
      <ContentText>
        <p>Card Default</p>
      </ContentText>
      ],
    card: "CardDefault",
    style: { height: "306px", width: "193px" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testCard = await canvas.getByText('Card Default');
    const testTypeCard = canvas.getByTestId('card-CardDefault');

    await expect(testCard).toBeInTheDocument();
    await expect(testTypeCard).toBeInTheDocument();
  },
};

export const CardHover: Story = {
  args: {
    content: [ 
      <ContentText>
        <p>Card Hover</p>
      </ContentText>
      ],
    card: "CardHover",
    style: { height: "306px", width: "193px" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testCard = await canvas.getByText('Card Hover');
    const testTypeCard = canvas.getByTestId('card-CardHover');

    await expect(testCard).toBeInTheDocument();
    await expect(testTypeCard).toBeInTheDocument();
  },
};