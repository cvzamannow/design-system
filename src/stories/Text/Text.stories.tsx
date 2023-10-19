import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls } from "@storybook/blocks";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import Text from "./Text";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    componentSubtitle: "'Component Text",
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Subtitle />

          <PrimaryDocBlock />
          <Controls />

          <Stories />
        </>
      ),
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

// Heading

export const H1: Story = {
  args: {
    type: "regular",
    size: "h1",
    text: "Your custom text example",
    style: {
      color: "black",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h1");

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

export const H2: Story = {
  args: {
    type: "regular",
    size: "h2",
    text: "Your custom text example",
    style: {
      color: "black",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h2");

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

export const H3: Story = {
  args: {
    type: "regular",
    size: "h3",
    text: "Your custom text example",
    style: {
      color: "black",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h3");

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

export const H4: Story = {
  args: {
    type: "regular",
    size: "h4",
    text: "Your custom text example",
    style: {
      color: "black",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h4");

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

export const H5: Story = {
  args: {
    type: "regular",
    size: "h5",
    text: "Your custom text example",
    style: {
      color: "black",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h5");

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

export const H6: Story = {
  args: {
    type: "regular",
    size: "h6",
    text: "Your custom text example",
    style: {
      color: "black",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h6");

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

export const H7: Story = {
  args: {
    type: "regular",
    size: "h7",
    text: "Your custom text example",
    style: {
      color: "black",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-h7");

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

// Body Text

export const B1: Story = {
  args: {
    type: "regular",
    size: "b1",
    text: "Your custom text example",
    style: {
      color: "black",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-b1");

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

export const B2: Story = {
  args: {
    type: "regular",
    size: "b2",
    text: "Your custom text example",
    style: {
      color: "black",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-b2");

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

export const B3: Story = {
  args: {
    type: "regular",
    size: "b3",
    text: "Your custom text example",
    style: {
      color: "black",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-b3");

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

// Caption

export const C1: Story = {
  args: {
    type: "regular",
    size: "c1",
    text: "Your custom text example",
    style: {
      color: "black",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-c1");

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

export const C2: Story = {
  args: {
    type: "regular",
    size: "c2",
    text: "Your custom text example",
    style: {
      color: "black",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText("Your custom text example");
    const testSize = canvas.getByTestId("text-size-c2");

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};
