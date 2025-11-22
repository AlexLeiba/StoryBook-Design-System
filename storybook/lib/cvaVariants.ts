import { cva } from "class-variance-authority";

export const labelInputVariants = cva(" text-gray-900", {
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
      medium: "text-xl",
      large: "text-2xl",
    },
  },
  defaultVariants: {
    sizeType: "medium",
  },
});
