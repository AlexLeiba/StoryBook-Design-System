import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/ui/Input";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    onChange: (e) => console.log(e.target.value),
    onBlur: (e) => console.log(e.target.value),
    onFocus: (e) => console.log(e.target.value),
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const PrimaryThin: Story = {
  args: {
    title: "input",
    weight: "thin",
    variant: "primary",
    value: "primary input value thin...",
    sizeType: "small",
  },
};
export const PrimaryBold: Story = {
  args: {
    title: "input",
    weight: "bold",
    variant: "primary",
    value: "primary input value...",
    sizeType: "medium",
  },
};
export const PrimaryLarge: Story = {
  args: {
    title: "input",
    weight: "thin",
    variant: "primary",
    value: "primary input value...",
    sizeType: "large",
  },
};
export const Primary: Story = {
  args: {
    title: "input",
    weight: "thin",
    variant: "primary",
    value: "primary input value...",
  },
};

export const Secondary: Story = {
  args: {
    title: "input",
    weight: "thin",
    variant: "secondary",
    value: "secondary input value...",
  },
};
export const Disabled: Story = {
  args: {
    title: "input",
    weight: "thin",
    variant: "secondary",
    disabled: true,
    value: "Disabled input value...",
  },
};
export const Error: Story = {
  args: {
    title: "input",
    weight: "thin",
    variant: "primary",
    error: "Error message",
  },
};
export const Success: Story = {
  args: {
    title: "input",
    weight: "thin",
    variant: "primary",
    success: true,
  },
};
