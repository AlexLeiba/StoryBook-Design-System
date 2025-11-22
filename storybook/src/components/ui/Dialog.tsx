import { X } from "lucide-react";
import React, { createContext, useContext, useRef, useState } from "react";
import { Button } from "./Button";
import { cva, type VariantProps } from "class-variance-authority";

// Create as compount component design pattern
// Parent keeps and shares the state via context
// all children are represented as separate components
// children receive state via context of parent
// so parent passes the state to its children via provider

type ContextProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
  handleCancel: () => void;
};
const DialogContext = createContext<ContextProps>({
  open: false,
  setOpen: () => {},
  handleSubmit: () => {},
  handleCancel: () => {},
});

type DialogProps = {
  children: React.ReactNode;
  handleSubmit: () => void;
  handleCancel: () => void;
  isOpened?: boolean;
};

function Dialog({
  children,
  handleSubmit,
  handleCancel,
  isOpened = false,
}: DialogProps) {
  const [open, setOpen] = useState(isOpened);
  const refContainer = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (
        refContainer.current &&
        !refContainer.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);
  return (
    <DialogContext.Provider
      value={{ open, setOpen, handleSubmit, handleCancel }}
    >
      {/*  backdrop*/}
      <div className="bg-black/50 fixed inset-0 flex items-center">
        {/* modal body */}
        {open && (
          <div
            ref={refContainer}
            className="flex flex-col gap-2 justify-between bg-white z-50 p-4 rounded-2xl lg:mx-[25%] mx-[10%]"
          >
            {children}
          </div>
        )}
      </div>
    </DialogContext.Provider>
  );
}

function useDialog() {
  return useContext(DialogContext);
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  const { setOpen } = useDialog();

  return (
    <div className="relative">
      <X
        onClick={() => setOpen((prev) => !prev)}
        className="absolute top-0 right-0"
      />
      <div className="mt-6">{children}</div>
    </div>
  );
}

export function DialogBody({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

const footerVariants = cva(["flex w-full  gap-2"], {
  variants: {
    variant: {
      delete: "",
      submit: "",
    },
    buttonDirection: {
      row: "flex-row",
      column: "flex-col",
    },
  },
  defaultVariants: {
    variant: "delete",
    buttonDirection: "row",
  },
});
// const footerVariants = cva(["flex justify-end gap-2"], {
//   variants: {
//     variant: {
//       delete: "bg-green-400",
//       submit: "bg-yellow-400",
//     },
//   },
//   defaultVariants: {
//     variant: "delete",
//   },
// });

type DialogFooterProps = VariantProps<typeof footerVariants> & {
  children: React.ReactNode;
  variant?: "delete" | "submit";
  fullWidth?: boolean;
};

export function DialogFooter({
  children,
  variant,
  fullWidth,
  buttonDirection,
}: DialogFooterProps) {
  const { setOpen, handleCancel, handleSubmit } = useDialog();
  return (
    <div className="flex-col flex">
      {children}

      <div className={footerVariants({ variant, buttonDirection })}>
        <Button
          fullWidth={fullWidth}
          //   variant={variant === "delete" ? "secondary" : "primary"}
          onClick={() => {
            handleCancel();
            setOpen(false);
          }}
        >
          Cancel
        </Button>
        <Button
          fullWidth={fullWidth}
          size={"medium"}
          variant={variant === "delete" ? "destructive" : "secondary"}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Dialog;
