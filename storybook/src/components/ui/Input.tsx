import { forwardRef, useState, type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { BadgeAlert, BadgeCheck, Eye, EyeClosed } from "lucide-react";
import { cn } from "../../../lib/utilities";
import { labelInputVariants } from "../../../lib/cvaVariants";

const inputVariants = cva(
  [
    "p-2 font-lite text-gray-900 w-full",
    "focus:outline-none focus:ring focus:ring-black disabled:ring disabled:ring-gray-400 disabled:cursor-not-allowed ",
  ],
  {
    variants: {
      variant: {
        primary: "border-2 rounded-2xl border-gray-400",
        secondary: "border-2 rounded-3xl border-gray-400 disabled:bg-gray-200",
      },
      sizeType: {
        small: "text-sm",
        medium: "text-base",
        large: "p-4 text-2xl",
      },
      errorState: {
        false: "",
        true: "border-red-500 focus:border-red-600 focus:ring-red-600 pr-12",
      },
      successState: {
        false: "",
        true: "border-green-500 focus:border-green-600 focus:ring-green-600 pr-12",
      },
      weight: {
        thin: "font-thin",
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "primary",
      sizeType: "medium",
      weight: "thin",
      errorState: false,
      successState: false,
    },
    // compoundVariants: [
    //   {
    //     error: "error",
    //     className: "border-2 ring-red-400 h-10",
    //   },
    // ],
  }
);

type Props = VariantProps<typeof inputVariants> &
  ComponentProps<"input"> &
  ComponentProps<"textarea"> & {
    title: string;
    error?: string;
    success?: boolean;
    type?: "number" | "text" | "password" | "textarea";
    // sizeType?: "small" | "medium" | "large";
  };

export const Input = forwardRef<HTMLInputElement, Props>(
  ({
    variant,
    weight,
    className,
    title,
    error,
    success,
    sizeType,
    type,
    ...props
  }: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor="input">
          <p
            className={labelInputVariants({
              errorState: !!error,
              successState: !!success,
              disabledState: props.disabled,
              sizeType,
            })}
          >
            {title}
          </p>
        </label>
        <div className="relative w-full">
          {type === "textarea" ? (
            <textarea
              rows={4}
              id="input"
              className={inputVariants({
                variant,
                sizeType,
                weight,
                errorState: !!error,
                successState: !!success,
                className,
              })}
              {...props}
            />
          ) : (
            <input
              id="input"
              type={type}
              className={inputVariants({
                variant,
                sizeType,
                weight,
                errorState: !!error,
                successState: !!success,
                className,
              })}
              {...props}
            />
          )}
          {type === "password" && (
            <>
              {showPassword ? (
                <Eye
                  onClick={() => setShowPassword(false)}
                  className={cn(
                    "absolute top-[calc(50%-0.7rem)] right-4",
                    success ? "text-green-600" : "text-gray-400"
                  )}
                />
              ) : (
                <EyeClosed
                  onClick={() => setShowPassword(true)}
                  className={cn(
                    "absolute top-[calc(50%-0.7rem)] right-4",
                    success ? "text-green-600" : "text-gray-400"
                  )}
                />
              )}
            </>
          )}
          {success && (
            <BadgeCheck
              className={cn(
                "absolute top-[calc(50%-0.7rem)] right-4",
                success ? "text-green-600" : "text-gray-400"
              )}
            />
          )}
          {error && (
            <BadgeAlert
              className={cn(
                "absolute top-[calc(50%-0.7rem)] right-4",
                error ? "text-red-600" : "text-gray-400"
              )}
            />
          )}
        </div>
        {error && <p className="text-red-600 text-xs">{error}</p>}
      </div>
    );
  }
);
