import type { StoryObj, Meta } from "@storybook/react";
import { FileUpload } from "../components/ui/FileUpload/FileUpload";

const meta: Meta = {
  title: "Example/FileUploadDragAndDrop",
  component: FileUpload,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const FileUploadDragAndDropDefault: Story = {
  args: {
    buttonTitle: "File Upload Drag and Drop Default",
    uiVariant: "dragAndDropContainer",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is a default drag and drop file uploader with size:medium , upload type:images, single upload",
      },
    },
  },
};
export const FileUploadDragAndDropMultiple: Story = {
  args: {
    buttonTitle: "File Upload Drag and Drop Multiple upload files",
    uiVariant: "dragAndDropContainer",
    uploadVariant: "multiple",
    size: "small",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is a default drag and drop file uploader with size:small and multiple upload",
      },
    },
  },
};
export const FileUploadDragAndDropLarge: Story = {
  args: {
    buttonTitle: "File Upload Drag and Drop Large",
    uiVariant: "dragAndDropContainer",
    size: "large",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is a default drag and drop file uploader with size:large and single upload",
      },
    },
  },
};
export const FileUploadDragAndDropOnlyFiles: Story = {
  args: {
    buttonTitle: "File Upload Drag and Drop Type:Files",
    uiVariant: "dragAndDropContainer",
    size: "small",
    fileTypes: "files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "This is a default drag and drop file uploader with size:medium ,single upload, upload file type:files",
      },
    },
  },
};
