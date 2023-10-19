import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"
import Col from "./Col";
import { ContentText } from "../../Card/card.styles";
import Card from "../../Card/Card";
// import { within } from "@storybook/testing-library";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Row&Col/Col",
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