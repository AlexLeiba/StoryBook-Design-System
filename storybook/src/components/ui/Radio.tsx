import { type ComponentProps } from "react";
import { labelInputVariants } from "../../../lib/cvaVariants";
import { cva, type VariantProps } from "class-variance-authority";

const radioVariants = cva("", {
  variants: {
    sizeType: {
      small: "w-4 h-4",
      medium: "w-6 h-6",
      large: "w-8 h-8",
    },
  },
  defaultVariants: {
    sizeType: "small",
  },
});

type Props = ComponentProps<"input"> &
  VariantProps<typeof radioVariants> & {
    title: string;
    error?: string;
    success?: boolean;
    // sizee?: "small" | "medium" | "large";
  };

export function Radio({ title, error, success, sizeType, ...props }: Props) {
  return (
    <div className="flex-col gap-1">
      <label htmlFor="radio">
        <p
          className={labelInputVariants({
            errorState: !!error,
            successState: !!success,
          })}
        >
          {title}
        </p>
      </label>
      <input
        className={radioVariants({ sizeType })}
        type="radio"
        id="radio"
        {...props}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
