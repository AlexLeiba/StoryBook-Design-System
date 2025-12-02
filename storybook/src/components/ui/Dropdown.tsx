import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import { labelInputVariants } from "../../../lib/cvaVariants";
import { cva, type VariantProps } from "class-variance-authority";
import { Checkbox } from "./Checkbox";

type OptionsType = {
  value: string;
  label: string;
};

const dropdownVariants = cva(
  " w-full relative hover:bg-black/10 cursor-pointer text-left",
  {
    variants: {
      errorState: {
        false: "",
        true: "border-red-500 focus:border-red-600 focus:ring-red-600 pr-12",
      },
      successState: {
        false: "",
        true: "border-green-500 focus:border-green-600 focus:ring-green-600 pr-12",
      },
      size: {
        small: "p-1",
        medium: "p-4",
        large: "p-6",
      },
      variant: {
        primary: "border rounded-xl border-gray-400",
        secondary: "border-2 rounded-3xl border-gray-400 disabled:bg-gray-200",
        ghost: "rounded-xs bg-gray-200",
      },
      openState: {
        false: "",
        true: "bg-black/20",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      errorState: false,
      successState: false,
    },
  }
);

const optionVariants = cva("p-2 w-full hover:bg-black/10 cursor-pointer ", {
  variants: {
    size: {
      small: "p-1",
      medium: "p-2",
      large: "p-4",
    },
    variant: {
      primary: " rounded-xl  bg-white",
      secondary: " rounded-3xl  disabled:bg-gray-200 bg-white",
      ghost: "rounded-3xl bg-gray-200 ",
    },
    selectType: {
      single: "",
      multiple: "flex  items-center gap-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
    selectType: "single",
  },
});
const optionTitleVariant = cva("p-2 text-left ", {
  variants: {
    size: {
      small: "text-xs",
      medium: "text-2xl",
      large: "text-2xl",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});
const containerOptionsVariants = cva(
  "flex flex-col gap-2 absolute z-50 top-[calc(100%)] left-0 right-0 ",
  {
    variants: {
      size: {
        small: "p-1  shadow-xs",
        medium: "p-2 shadow-md",
        large: "p-4 shadow-lg",
      },
      variant: {
        primary: " rounded-xl border-gray-400 bg-white ",
        secondary: " rounded-3xl border-gray-400 disabled:bg-gray-200 bg-white",
        ghost: "rounded-none bg-gray-200 ",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

type VariantsType = VariantProps<typeof dropdownVariants>;

type Props = VariantsType &
  HTMLAttributes<HTMLDivElement> & {
    options: OptionsType[];
    title: string;
    error?: string;
    success?: boolean;
    disabled?: boolean;
    label?: string;
    selectType?: "single" | "multiple";
    handleSelectValue: (value: OptionsType) => void;
    // variant?: "primary" | "secondary" | "ghost";
  };
function Dropdown({
  options,
  title,
  error,
  success,
  disabled,
  variant = "primary",
  className,
  label,
  selectType = "single",
  handleSelectValue,
  ...props
}: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [select, setSelect] = useState<OptionsType>({ value: "", label: "" });
  const [selectMultiple, setSelectMultiple] = useState<OptionsType[]>([]);

  function handleSelect(
    selectedValue: OptionsType,
    type: "single" | "multiple"
  ) {
    if (type === "single") {
      setSelect(selectedValue);
      handleSelectValue(selectedValue);
      setOpen(false);
    }
    if (type === "multiple") {
      setSelectMultiple((prev) => {
        const alreadyExists = prev.find(
          (value) => value.value === selectedValue.value
        );

        if (alreadyExists) {
          return prev.filter((value) => value.value !== selectedValue.value);
        }
        return [...prev, selectedValue];
      });
    }
  }

  useEffect(() => {
    if (open && containerRef.current) {
      function clickOutside(e: PointerEvent) {
        if (!containerRef.current?.contains(e.target as Node)) {
          setOpen(false);
        }
      }

      document.addEventListener("click", (e) => clickOutside(e));

      return () => removeEventListener("click", clickOutside);
    }
  }, [open]);
  return (
    <div className="relative" ref={containerRef}>
      {label && (
        <p
          className={labelInputVariants({
            errorState: !!error,
            successState: !!success,
            disabledState: disabled,
            sizeType: props.size,
          })}
        >
          {label}
        </p>
      )}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={dropdownVariants({
          errorState: !!error,
          successState: !!success,
          variant,
          openState: open,
          className,
        })}
      >
        {selectType === "single" && (
          <p
            className={labelInputVariants({
              errorState: !!error,
              successState: !!success,
              disabledState: disabled,
              sizeType: props.size,
            })}
          >
            {(selectType === "single" && select.label) || title}
          </p>
        )}
        {selectType === "multiple" && (
          <div className="flex gap-2">
            {selectMultiple.length > 0 ? (
              selectMultiple.map((selectedValue) => {
                return (
                  <div className="flex gap-2 bg-gray-100 rounded-2xl py-1 px-2 text-white">
                    <p
                      className={labelInputVariants({
                        errorState: !!error,
                        successState: !!success,
                        disabledState: disabled,
                        sizeType: props.size,
                      })}
                    >
                      {selectedValue.label}
                    </p>
                  </div>
                );
              })
            ) : (
              <p
                className={labelInputVariants({
                  errorState: !!error,
                  successState: !!success,
                  disabledState: disabled,
                  sizeType: props.size,
                })}
              >
                {title}
              </p>
            )}
          </div>
        )}
      </button>
      {open && (
        <>
          {/* SINGLE */}
          {selectType === "single" ? (
            <div
              className={containerOptionsVariants({
                variant,
                size: props.size,
              })}
            >
              {options.map((option) => (
                <button
                  onClick={() => handleSelect(option, "single")}
                  className={optionVariants({ variant, size: props.size })}
                  key={option.value}
                >
                  <p className={optionTitleVariant({ size: props.size })}>
                    {option.label}
                  </p>
                </button>
              ))}
            </div>
          ) : (
            // MULTIPLE
            <div
              className={containerOptionsVariants({
                variant,
                size: props.size,
              })}
            >
              {options.map((option) => (
                <div
                  onClick={() => handleSelect(option, "multiple")}
                  className={optionVariants({
                    variant,
                    size: props.size,
                    selectType,
                  })}
                  key={option.value}
                  title={""}
                >
                  <Checkbox
                    onClick={() => handleSelect(option, "multiple")}
                    onChange={() => handleSelect(option, "multiple")}
                    checked={
                      !!selectMultiple.find(
                        (value) => value.value === option.value || false
                      )
                    }
                    sizeType={props.size || "medium"}
                  />
                  <p className={optionTitleVariant({ size: props.size })}>
                    {option.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default Dropdown;
