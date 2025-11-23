import { cva, type VariantProps } from "class-variance-authority";
import React, { forwardRef, type ComponentProps } from "react";

// type Props = {
//   size: "small" | "medium" | "large";
//   variant: "primary" | "secondary";
//   children: React.ReactNode | string;
//   className: ButtonHTMLAttributes<HTMLButtonElement>;
// };

// TODO button as link, with icon, with loading state

const buttonVariants = cva(
  [
    "py-2 rounded-2xl px-2 cursor-pointer ",
    "focus:outline-none focus-within:ring focus-within:ring-black ",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:ring disabled:ring-gray-400 disabled:ring-offset-2 disabled:ring-offset-gray-100",
  ],
  {
    variants: {
      size: {
        small: "px-4",
        large: "px-8 py-4 text-2xl",
        medium: "px-6 font-medium text-xl",
      },
      variant: {
        primary: "bg-gray-800 text-white",
        secondary: "bg-yellow-400",
        destructive: "bg-red-600 text-white",
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
  },
  defaultVariants: {
    size: "medium",
  },
});

type Props = ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

React.createElement("div", { children: "hello" }, "hello");

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, size, variant, className, fullWidth, ...props }: Props, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ size, variant, fullWidth, className })}
        {...props}
      >
        <p className={titleVariants({ size })}>{children}</p>
      </button>
    );
  }
);
