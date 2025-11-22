import type { StoryObj, Meta } from "@storybook/react";
import { Select } from "../components/ui/Select";

const meta: Meta = {
  title: "Example/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const SelectDefault: Story = {
  args: {
    variant: "primary",
    title: "Select label default",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};
export const SelectSecondary: Story = {
  args: {
    variant: "secondary",
    title: "Select label default",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};
export const SelectError: Story = {
  args: {
    error: "Error message",
    title: "Select label default",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};
export const SelectSuccess: Story = {
  args: {
    success: true,
    title: "Select label default",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};
export const SelectSmall: Story = {
  args: {
    sizeType: "small",
    title: "Select label default",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};
export const SelectMedium: Story = {
  args: {
    sizeType: "medium",
    title: "Select label default",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};
export const SelectLarge: Story = {
  args: {
    sizeType: "large",
    title: "Select label default",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};
