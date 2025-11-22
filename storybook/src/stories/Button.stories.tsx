import { Button } from "../components/ui/Button";
import type { Meta, StoryObj } from "@storybook/react";

// Meta<typeof Button> takes care to pass only attributes that exists.
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"], //will generate docs in storybook local server
  argTypes: {
    children: { control: "text", defaultValue: "Button" }, //to update a prop with a controller in the storybook UI
  },
};

export default meta;

type Story = StoryObj<typeof meta>; //this is the type of the component

export const Primary: Story = {
  args: {
    //args is what is passed into the component as props

    variant: "primary",
    size: "medium",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    //args is what is passed into the component as props

    variant: "secondary",
    size: "medium",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    //args is what is passed into the component as props

    size: "small",
    variant: "secondary",
    children: "Button",
  },
};
export const Large: Story = {
  args: {
    //args is what is passed into the component as props

    size: "large",
    variant: "secondary",
    children: "Button",
  },
};
