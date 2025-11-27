import { cva, type VariantProps } from "class-variance-authority";
import { useState, type ComponentProps } from "react";

const containerVariants = cva(
  [
    "border-dotted border-2 p-2 flex justify-center items-center w-full",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:ring disabled:ring-gray-400 disabled:ring-offset-2 disabled:ring-offset-gray-100 ",
    "focus:outline-none focus:ring focus:ring-black",
    "hover:bg-gray-100 cursor-pointer",
  ],
  {
    variants: {
      sizeType: {
        small: "min-h-[100px] ",
        large: "min-h-[300px] p-4",
        medium: "min-h-[200px] ",
      },
      errorState: {
        false: "",
        true: "border-red-500 focus:border-red-600 focus:ring-red-600 pr-12",
      },
      successState: {
        false: "",
        true: "border-green-500 focus:border-green-600 focus:ring-green-600 pr-12",
      },
      isDragging: {
        false: "",
        true: "border-green-500 focus:border-green-600 focus:ring-green-600 pr-12",
      },
    },
  }
);

const titleVariants = cva("text-gray-900", {
  variants: {
    errorState: {
      false: "",
      true: "text-red-600",
    },
    successState: {
      false: "",
      true: "text-green-600",
    },
    disabledState: {
      false: "",
      true: "text-gray-400",
    },
    sizeType: {
      small: "text-sm",
      medium: "text-2xl",
      large: "text-4xl",
    },
    isDragging: {
      false: "",
      true: "text-green-600",
    },
  },
});

type Props = VariantProps<typeof containerVariants> &
  ComponentProps<"button"> & {
    size?: "small" | "medium" | "large";
    $title?: string;
    handleClick?: () => void;
  };
export function DragAndDropContainer({
  size = "medium",
  $title = "Drag and drop files here",
  handleClick,
  ...props
}: Props) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <button
      onClick={handleClick}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setIsDragging(false);
      }}
      onDragEnd={(e) => {
        e.preventDefault();
      }}
      className={containerVariants({ sizeType: size, isDragging })}
      {...props}
    >
      <p className={titleVariants({ sizeType: size, isDragging: isDragging })}>
        {$title}
      </p>
    </button>
  );
}
