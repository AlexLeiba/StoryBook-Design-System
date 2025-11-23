import type { StoryObj, Meta } from "@storybook/react";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  type DialogFooterProps,
  type DialogProps,
} from "../components/ui/Dialog";

function DialogComponent({
  fullWidth,
  buttonDirection,
  variant,
  ...props
}: DialogProps & DialogFooterProps) {
  return (
    <Dialog {...props}>
      <DialogHeader>
        <h2 className="text-2xl">Dialog Title</h2>
      </DialogHeader>

      <DialogBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla,
        nesciunt facilis tempora at non modi reiciendis magnam aliquid
        consequatur?
      </DialogBody>

      <DialogFooter
        variant={variant}
        fullWidth={fullWidth}
        buttonDirection={buttonDirection}
      />
    </Dialog>
  );
}

const meta: Meta = {
  title: "Example/Dialog",
  component: DialogComponent,
  //   tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DialogComponent>;

export const DialogDefault: Story = {
  args: {
    isOpened: true,
  },
};

export const DialogVertical: Story = {
  args: {
    isOpened: true,
    buttonDirection: "column",
  },
};

export const DialogHorizontalFullWidth: Story = {
  args: {
    isOpened: true,
    buttonDirection: "row",
    fullWidth: true,
  },
};

export const DialogDelete: Story = {
  args: {
    isOpened: true,
    variant: "delete",
  },
};
