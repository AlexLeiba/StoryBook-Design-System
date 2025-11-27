import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

const loaderVariants = cva(
  "animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  {
    variants: {
      sizeType: {
        small: "w-4 h-4",
        medium: "w-6 h-6",
        large: "w-8 h-8",
      },
      variant: {
        primary: "text-white",
        secondary: "text-gray-800",
        destructive: "text-gray-800",
        tertiary: "text-white",
      },
      visibilityState: {
        true: "",
        false: "hidden",
      },
    },
  }
);
type Props = VariantProps<typeof loaderVariants> & {
  size?: "small" | "medium" | "large";
  color?: string;
  visibility: boolean;
};
export function Loader({ size = "medium", visibility = false }: Props) {
  return (
    <>
      <Loader2
        size={size}
        className={loaderVariants({
          sizeType: size,
          visibilityState: visibility,
        })}
      />
    </>
  );
}
