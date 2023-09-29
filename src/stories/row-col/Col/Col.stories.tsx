import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"
import Col from "./Col";
import { ContentText } from "../../Card/card.styles";
import Card from "../../Card/Card";
// import { within } from "@storybook/testing-library";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Stories/Row&Col/Col",
  component: Col,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    componentSubtitle: "'Component Col",
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
} satisfies Meta<typeof Col>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateCardItems = (count: number) => {
  const cardItems = [];
  for (let i = 0; i < count; i++) {
    cardItems.push(
      <Card
        data-testid={"col-item"}
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

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Preview: Story = {
  args: {
    items: generateCardItems(3),
    style: { gap: "3px"},
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const cardItems = canvas.getAllByTestId("col-item"); // Menambahkan atribut test id pada Card element

  //   for (let i = 0; i < cardItems.length; i++) {
  //     const contentText = await canvas.findByText(`Content ${i}`);
  //     expect(contentText).toBeInTheDocument();
  //   }
  // },
};

export const Col1: Story = {
  args: {
    items: generateCardItems(3),
    style: { gap: "3px"},
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   const cardItems = canvas.getAllByTestId("col-item"); // Menambahkan atribut test id pada Card element

  //   for (let i = 0; i < cardItems.length; i++) {
  //     const contentText = await canvas.findByText(`Content ${i}`);
  //     expect(contentText).toBeInTheDocument();
  //   }
  // },
};

Col1.parameters = {
  docs: {
    source: {
      code: `
      <Col
  items={[
    <Card key="card-0" card="CardHover" content={[<ContentText><p>Content 0</p></ContentText>]} data-testid="col-item" style={{height: '200px', width: '200px'}}></Card>,
    <Card key="card-1" card="CardHover" content={[<ContentText><p>Content 1</p></ContentText>]} data-testid="col-item" style={{height: '200px', width: '200px'}}></Card>,
    <Card key="card-2" card="CardHover" content={[<ContentText><p>Content 2</p></ContentText>]} data-testid="col-item" style={{height: '200px', width: '200px'}}></Card>
  ]}
  style={{
    gap: '3px'
  }}
></Col>
      `
    }
  }
}

