// src/stories/GridStory.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Grid from "./Grid";
import Card from "../Card/Card";
import { ContentText } from "../Card/card.styles";

const meta = {
  title: "Stories/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    componentSubtitle: "'Component Grid",
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
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateCardItems = (count: number) => {
  const cardItems = [];
  for (let i = 0; i < count; i++) {
    cardItems.push(
      <Card
        data-testid={"card-item"}
        card="CardHover"
        content={[
          <ContentText>
            <p>Content {i}</p>
          </ContentText>,
        ]}
        style={{
          height: "200px",
          width: "200px",
        }}
        key={`card-${i}`}
      />
    );
  }
  return cardItems;
};

export const Preview: Story = {
  args: {
    items: generateCardItems(4), // Ubah angka 4 sesuai dengan jumlah item yang Anda inginkan.
    columns: 2,
    gap: "4px",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cardItems = canvas.getAllByTestId("card-item"); // Menambahkan atribut test id pada Card element

    for (let i = 0; i < cardItems.length; i++) {
      const contentText = await canvas.findByText(`Content ${i}`);
      expect(contentText).toBeInTheDocument();
    }
  },
};

export const Grid1: Story = {
  args: {
    items: generateCardItems(4), // Ubah angka 4 sesuai dengan jumlah item yang Anda inginkan.
    columns: 2,
    gap: "4px",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cardItems = canvas.getAllByTestId("card-item"); // Menambahkan atribut test id pada Card element

    for (let i = 0; i < cardItems.length; i++) {
      const contentText = await canvas.findByText(`Content ${i}`);
      expect(contentText).toBeInTheDocument();
    }
  },
};

Grid1.parameters = {
  docs: {
    source: {
      code: `
      <Grid
  columns={2}
  gap="4px"
  items={[
    <Card key="card-0" card="CardHover" content={[<ContentText><p>Content 0</p></ContentText>]} data-testid="card-item" style={{height: '200px', width: '200px'}}></Card>,
    <Card key="card-1" card="CardHover" content={[<ContentText><p>Content 1</p></ContentText>]} data-testid="card-item" style={{height: '200px', width: '200px'}}></Card>,
    <Card key="card-2" card="CardHover" content={[<ContentText><p>Content 2</p></ContentText>]} data-testid="card-item" style={{height: '200px', width: '200px'}}></Card>,
    <Card key="card-3" card="CardHover" content={[<ContentText><p>Content 3</p></ContentText>]} data-testid="card-item" style={{height: '200px', width: '200px'}}></Card>
  ]}
></Grid>
      `
    }
  }
}
