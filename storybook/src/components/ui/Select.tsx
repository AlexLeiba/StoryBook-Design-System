import React, { type ComponentProps } from "react";
import { labelInputVariants } from "../../../lib/cvaVariants";
import { cva, type VariantProps } from "class-variance-authority";

type OptionsType = {
  value: string;
  label: string;
};

const selectVariants = cva("flex flex-col gap-1 ", {
  variants: {
    variant: {
      primary: "border rounded-xl border-gray-400",
      secondary: "border-2 rounded-3xl border-gray-400 disabled:bg-gray-200",
    },
    sizeType: {
      small: "p-1",
      medium: "p-2",
      large: "p-4",
    },
    successState: {
      true: "border-green-500 focus:border-green-600 focus:ring-green-600 pr-12",
      false: "",
    },
    errorState: {
      true: "border-red-500 focus:border-red-600 focus:ring-red-600 pr-12",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    sizeType: "medium",
    successState: false,
    errorState: false,
  },
});

const selectInputVariants = cva("", {
  variants: {
    sizeType: {
      small: "text-sm",
      medium: "text-xl",
      large: "p-4 text-2xl",
    },
    successState: {
      true: "border-green-500 focus:border-green-600 focus:ring-green-600 pr-12",
      false: "",
    },
    errorState: {
      true: "border-red-500 focus:border-red-600 focus:ring-red-600 pr-12",
      false: "",
    },
  },
  defaultVariants: {
    sizeType: "medium",
    successState: false,
    errorState: false,
  },
  // compoundVariants: {},
});

type Props = ComponentProps<"select"> &
  VariantProps<typeof selectVariants> & {
    title: string;
    error?: string;
    success?: boolean;
    options: OptionsType[];
  };
export function Select({ title, error, success, options, ...props }: Props) {
  return (
    <div
      className={selectVariants({
        errorState: !!error,
        successState: !!success,
      })}
    >
      <label htmlFor="select">
        <p
          className={labelInputVariants({
            errorState: !!error,
            successState: !!success,
            disabledState: props.disabled,
          })}
        >
          {title}
        </p>
      </label>

      <select
        id="select"
        className={selectInputVariants({ sizeType: props.sizeType })}
        {...props}
      >
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
