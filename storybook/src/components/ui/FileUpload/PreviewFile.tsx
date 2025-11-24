import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

const imageVariants = cva(
  "rounded-2xl overflow-hidden relative border-2 border-gray-500 p-2",
  {
    variants: {
      sizeType: {
        small: "size-[100px]",
        medium: "size-[120px]",
        large: "size-[150px]",
      },
    },
    defaultVariants: {
      sizeType: "small",
    },
  }
);

type Props = VariantProps<typeof imageVariants> & {
  fileUrl: string;
  fileName: string;
  size: "small" | "medium" | "large";
  handleClear: () => void;
};
export function PreviewFile({ fileUrl, fileName, size, handleClear }: Props) {
  return (
    <div className={imageVariants({ sizeType: size })}>
      <button
        title="delete image"
        className="fize-4 bg-gray-400 rounded-full absolute top-1 right-1 z-20 cursor-pointer"
      >
        <X onClick={handleClear} className="text-white" />
      </button>

      <a href={fileUrl} download={fileName}>
        <span className="line-clamp-3">{fileName}</span>
      </a>
    </div>
  );
}
