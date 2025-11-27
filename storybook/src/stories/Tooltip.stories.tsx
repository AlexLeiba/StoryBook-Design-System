import type { StoryObj, Meta } from "@storybook/react";
import { Tooltip, type Props as TooltipProps } from "../components/ui/Tooltip";
import { Button } from "../components/ui/Button";

const TooltipWithButton = ({
  title,
  size,
  variant,
  position,
  icon,
  buttonTitle,
  handleIconClick,
  ...props
}: TooltipProps & { buttonTitle: string }) => {
  return (
    <Tooltip
      title={title}
      icon={icon}
      size={size}
      variant={variant}
      position={position}
      handleIconClick={handleIconClick}
      {...props}
    >
      <Button className="w-[350px] ">
        {buttonTitle || "Hover over me to see tooltip"}
      </Button>
    </Tooltip>
  );
};

const meta: Meta = {
  title: "Example/Tooltip",
  component: TooltipWithButton,
  tags: ["autodocs"],
  argTypes: {
    buttonTitle: {
      control: "text",
      defaultValue: "Button",
    },
    title: {
      control: "text",
      defaultValue: "This is a tooltip",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const TooltipDefault: Story = {
  args: {
    title: "This is a tooltip",
    size: "medium",
  },
};
export const TooltipSecondary: Story = {
  args: {
    title: "This is a tooltip",
    variant: "secondary",
    size: "small",
  },
};
export const TooltipTertiary: Story = {
  args: {
    title: "This is a tooltip",
    variant: "tertiary",
    size: "large",
  },
};
