import type { StoryObj, Meta } from "@storybook/react";
import { Checkbox } from "../components/ui/Checkbox";

const meta: Meta = {
  title: "Example/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const CheckboxDefault: Story = {
  args: {
    title: "Checkbox label default",
  },
};
export const CheckboxMedium: Story = {
  args: {
    title: "Checkbox label medium",
    sizeType: "medium",
  },
};
export const CheckboxLarge: Story = {
  args: {
    title: "Checkbox label large",
    sizeType: "large",
    error: "Error message",
  },
};

export const CheckboxDefaultError: Story = {
  args: {
    title: "Checkbox label Error",
    error: "Error message",
  },
};

export const CheckboxDefaultSuccess: Story = {
  args: {
    title: "Checkbox label Success",
    success: true,
  },
};
