import type { StoryObj, Meta } from "@storybook/react";
import { FileUpload } from "../components/ui/FileUpload/FileUpload";

const meta: Meta = {
  title: "Example/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const FileUploadDefaultSingle: Story = {
  args: { buttonTitle: "File Upload Primary Single" },
  parameters: {
    docs: {
      description: {
        story:
          "This is a default button with size:medium, variant:primary and single file upload",
      },
    },
  },
};
export const FileUploadDefaultMultiple: Story = {
  args: {
    buttonTitle: "File Upload Primary Multiple",
    uploadVariant: "multiple",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is a default button with size:medium, variant:primary and multiple file upload",
      },
    },
  },
};

export const FileUploadSecondary: Story = {
  args: {
    buttonVariant: "secondary",
    buttonTitle: "Upload File Secondary",
    size: "small",
  },
  parameters: {
    docs: {
      description: {
        story: "This is a secondary button with small size",
      },
    },
  },
};
export const FileUploadTertiary: Story = {
  args: {
    buttonVariant: "tertiary",
    buttonTitle: "Upload File",
    size: "medium",
  },
  parameters: {
    docs: {
      description: {
        story: "This is a tertiary button with medium size",
      },
    },
  },
};
export const FileUploadPrimaryLarge: Story = {
  args: {
    buttonVariant: "primary",
    buttonTitle: "Upload File",
    size: "large",
  },
  parameters: {
    docs: {
      description: {
        story: "This is a primary button with large size",
      },
    },
  },
};
