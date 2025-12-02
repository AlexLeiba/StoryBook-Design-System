import type { StoryObj, Meta } from "@storybook/react";
import Dropdown from "../components/ui/Dropdown";

const meta: Meta = {
  title: "Example / Dropdown",
  component: Dropdown,
  argTypes: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const DropdownDefault: Story = {
  args: {
    label: "Default Dropdown",
    title: "default value",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (v) => console.log("first", v),
  },
};

export const DropdownMultipleOptionsDefault: Story = {
  args: {
    selectType: "multiple",
    label: "Multiple Options Dropdown",
    title: "default value",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (v) => console.log("first", v),
  },
};
export const DropdownMultipleOptionsSmall: Story = {
  args: {
    size: "small",
    selectType: "multiple",
    label: "Multiple Options Dropdown",
    title: "default value",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (v) => console.log("first", v),
  },
};
export const DropdownMultipleOptionsLarge: Story = {
  args: {
    size: "large",
    selectType: "multiple",
    label: "Multiple Options Dropdown",
    title: "default value",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (v) => console.log("first", v),
  },
};
export const DropdownSuccess: Story = {
  args: {
    success: true,
    label: "Default Dropdown",
    title: "default value",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (v) => console.log("first", v),
  },
};

export const DropdownError: Story = {
  args: {
    error: "Error message",
    label: "Default Dropdown",
    title: "default value",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (v) => console.log("first", v),
  },
};

export const DropdownSmall: Story = {
  args: {
    size: "small",
    label: "Default Dropdown",
    title: "default value",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (v) => console.log("first", v),
  },
};
export const DropdownMedium: Story = {
  args: {
    size: "medium",
    label: "Default Dropdown",
    title: "default value",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (v) => console.log("first", v),
  },
};
export const DropdownLarge: Story = {
  args: {
    size: "large",
    label: "Default Dropdown",
    title: "default value",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (v) => console.log("first", v),
  },
};
export const DropdownSecondary: Story = {
  args: {
    variant: "secondary",
    label: "Default Dropdown",
    title: "default value",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (v) => console.log("first", v),
  },
};
export const DropdownGhost: Story = {
  args: {
    variant: "ghost",
    label: "Default Dropdown",
    title: "default value",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    handleSelectValue: (v) => console.log("first", v),
  },
};
