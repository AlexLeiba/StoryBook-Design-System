import { cva, type VariantProps } from "class-variance-authority";
import React, { forwardRef, type ComponentProps } from "react";
import { Loader } from "../animations/Loader";

// TODO button as link, with icon, with loading state

const buttonVariants = cva(
  [
    "py-2 px-2 cursor-pointer ",
    "focus-within:outline-none focus-within:ring  focus:ring-offset-2 focus:ring-offset-gray-100",
    "hover:opacity-80",
    "disabled:cursor-not-allowed disabled:opacity-50 ",
  ],
  {
    variants: {
      size: {
        small: "px-4",
        large: "px-8 py-4 text-2xl",
        medium: "px-6 font-medium text-xl",
      },
      variant: {
        primary: "bg-gray-800 text-white  rounded-2xl focus:ring-gray-500",
        secondary: "bg-yellow-400  rounded-2xl focus:ring-gray-500",
        destructive: "bg-red-600 text-white  rounded-2xl focus:ring-gray-500",
        tertiary: "bg-purple-800 text-white rounded-xs  focus:ring-gray-500",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      size: "small",
      variant: "primary",
    },
    compoundVariants: [
      {
        variant: "primary",
        size: "large",
        class: "rounded-3xl bg-purple-400 text-white", //when variants above are matched then apply this class utilities
      },
    ],
  }
);

const titleVariants = cva("text-base", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-xl font-medium",
    },
    loadingState: {
      true: "opacity-0",
      false: "opacity-100",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

type Props = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

React.createElement("div", { children: "hello" }, "hello");

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      size,
      variant,
      className,
      fullWidth,
      loading = false,
      ...props
    }: Props,
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ size, variant, fullWidth, className })}
        {...props}
      >
        <div className="relative">
          <Loader visibility={loading} variant={variant} />

          <p className={titleVariants({ size, loadingState: loading })}>
            {children}
          </p>
        </div>
      </button>
    );
  }
);
