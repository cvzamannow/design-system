import type { Meta, StoryObj } from "@storybook/react";
import { Title, Description, Subtitle, Stories, Primary as PrimaryDocBlock, Controls} from "@storybook/blocks"
import { within } from '@storybook/testing-library';
import { expect } from "@storybook/jest";

import Text from "./Text";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Stories/Text",
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    componentSubtitle: "'Component Text",
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
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Preview: Story = {
  args: {
    size: "preview",
    label: "preview",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('extraSmall');
    const testSize = canvas.getByTestId('label-size-extraSmall');

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "extraSmall",
    label: "extraSmall",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('extraSmall');
    const testSize = canvas.getByTestId('label-size-extraSmall');

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

ExtraSmall.parameters = {
  docs: {
    source: {
      code: `
      <Text
  label="extraSmall"
  size="extraSmall"
></Text>
      `
    }
  }
}

export const Small: Story = {
  args: {
    size: "small",
    label: "Small",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Small');
    const testSize = canvas.getByTestId('label-size-small');

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

Small.parameters = {
  docs: {
    source: {
      code: `
      <Text
  label="Small"
  size="small"
></Text>
      `
    }
  }
}

export const Normal: Story = {
  args: {
    size: "normal",
    label: "Normal",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Normal');
    const testSize = canvas.getByTestId('label-size-normal');

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

Normal.parameters = {
  docs: {
    source: {
      code: `
      <Text
      label="Normal"
      size="normal"
    ></Text>
      `
    }
  }
}

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Medium",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Medium');
    const testSize = canvas.getByTestId('label-size-medium');

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

Medium.parameters = {
  docs: {
    source: {
      code: `
      <Text
  label="Medium"
  size="medium"
></Text>
      `
    }
  }
}

export const Large: Story = {
  args: {
    size: "large",
    label: "Large",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const testText = await canvas.getByText('Large');
    const testSize = canvas.getByTestId('label-size-large');

    await expect(testText).toBeInTheDocument();
    await expect(testSize).toBeInTheDocument();
  },
};

Large.parameters = {
  docs: {
    source: {
      code: `
      <Text
  label="Large"
  size="large"
></Text>
      `
    }
  }
}
