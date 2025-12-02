import { type ComponentProps } from "react";
import { labelInputVariants } from "../../../lib/cvaVariants";
import { cva, type VariantProps } from "class-variance-authority";

const checkboxVariants = cva("", {
  variants: {
    sizeType: {
      small: "w-4 h-4",
      medium: "w-6 h-6",
      large: "w-8 h-8",
    },
    errorState: {
      false: "",
      true: "border-red-500 focus:border-red-600 focus:ring-red-600 pr-12",
    },
  },
});

type Props = ComponentProps<"input"> &
  VariantProps<typeof checkboxVariants> & {
    title?: string;
    error?: string;
    success?: boolean;
  };
export function Checkbox({ title, error, success, sizeType, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1 items-start">
      <label htmlFor="checkbox">
        {title && (
          <p
            className={labelInputVariants({
              errorState: !!error,
              successState: !!success,
            })}
          >
            {title}
          </p>
        )}
      </label>

      <input
        className={checkboxVariants({ sizeType, errorState: !!error })}
        id="checkbox"
        type="checkbox"
        {...props}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
