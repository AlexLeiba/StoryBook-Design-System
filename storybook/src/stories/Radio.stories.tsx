import { Radio } from "../components/ui/Radio";
import type { StoryObj, Meta } from "@storybook/react";

const meta: Meta = {
  title: "Example/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const RadioDefault: Story = {
  args: {
    title: "Radio label default",
  },
};
export const RadioDefaultMedium: Story = {
  args: {
    title: "Radio label medium",
    sizeType: "medium",
  },
};
export const RadioDefaultLarge: Story = {
  args: {
    title: "Radio label large",
    sizeType: "large",
  },
};
export const RadioSuccess: Story = {
  args: {
    title: "Radio label success",
    success: true,
  },
};
export const RadioError: Story = {
  args: {
    title: "Rdio label error",
    error: "Error message",
  },
};
