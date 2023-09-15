import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"
import { within } from '@storybook/testing-library';
import { expect } from "@storybook/jest";
import BoxShadow from "./BoxShadow";
import { ContentShadow } from "./boxShadow.styles";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Stories/Box-Shadow",
  component: BoxShadow,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    componentSubtitle: "'Component Shadow",
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
} satisfies Meta<typeof BoxShadow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    shadow: "base",
    content: [
      <ContentShadow>
        <p>base</p>
      </ContentShadow>
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('base');
    const testTypeShadow = canvas.getByTestId('shadow-base');

    await expect(testText).toBeInTheDocument();
    await expect(testTypeShadow).toBeInTheDocument();
  },
};

export const Md: Story = {
  args: {
    shadow: "Md",
    content: [
      <ContentShadow>
        <p>Md</p>
      </ContentShadow>
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Md');
    const testTypeShadow = canvas.getByTestId('shadow-Md');

    await expect(testText).toBeInTheDocument();
    await expect(testTypeShadow).toBeInTheDocument();
  },
};

export const Lg: Story = {
  args: {
    shadow: "Lg",
    content: [
      <ContentShadow>
        <p>Lg</p>
      </ContentShadow>
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Lg');
    const testTypeShadow = canvas.getByTestId('shadow-Lg');

    await expect(testText).toBeInTheDocument();
    await expect(testTypeShadow).toBeInTheDocument();
  },
};

export const Xl: Story = {
  args: {
    shadow: "xl",
    content: [
      <ContentShadow>
        <p>xl</p>
      </ContentShadow>
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('xl');
    const testTypeShadow = canvas.getByTestId('shadow-xl');

    await expect(testText).toBeInTheDocument();
    await expect(testTypeShadow).toBeInTheDocument();
  },
};

export const Xxl: Story = {
  args: {
    shadow: "xxl",
    content: [
      <ContentShadow>
        <p>xxl</p>
      </ContentShadow>
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('xxl');
    const testTypeShadow = canvas.getByTestId('shadow-xxl');

    await expect(testText).toBeInTheDocument();
    await expect(testTypeShadow).toBeInTheDocument();
  },
};

export const Inner: Story = {
  args: {
    shadow: "Inner",
    content: [
      <ContentShadow>
        <p>Inner</p>
      </ContentShadow>
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Inner');
    const testTypeShadow = canvas.getByTestId('shadow-Inner');

    await expect(testText).toBeInTheDocument();
    await expect(testTypeShadow).toBeInTheDocument();
  },
};
