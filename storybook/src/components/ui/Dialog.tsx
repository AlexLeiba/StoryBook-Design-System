import { X } from "lucide-react";
import React, { createContext, useContext, useRef, useState } from "react";
import { Button } from "./Button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utilities";

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

export type DialogProps = {
  children: React.ReactNode;
  handleSubmit: () => void;
  handleCancel: () => void;
  isOpened?: boolean;
};

export function Dialog({
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
      <div
        className={cn(
          open ? "bg-black/50 fixed inset-0 flex items-center " : "hidden"
        )}
      >
        {/* modal body */}
        {open && (
          <div
            ref={refContainer}
            className="flex flex-col gap-8 justify-between bg-white z-50 p-4 rounded-2xl lg:mx-[25%] mx-[10%]"
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
    buttonPosition: {
      left: "justify-start",
      right: "justify-end",
    },
  },
  defaultVariants: {
    variant: "delete",
    buttonDirection: "row",
    buttonPosition: "right",
  },
});

export type DialogFooterProps = VariantProps<typeof footerVariants> & {
  variant?: "delete" | "submit";
  fullWidth?: boolean;
  cancelButtonTitle?: string;
  submitButtonTitle?: string;
};

export function DialogFooter({
  variant,
  fullWidth,
  buttonDirection,
  cancelButtonTitle,
  submitButtonTitle,
}: DialogFooterProps) {
  const { setOpen, handleCancel, handleSubmit } = useDialog();
  return (
    <div className="flex-col flex">
      <div className={footerVariants({ variant, buttonDirection })}>
        <Button
          fullWidth={fullWidth}
          //   variant={variant === "delete" ? "secondary" : "primary"}
          onClick={() => {
            handleCancel();
            setOpen(false);
          }}
        >
          {cancelButtonTitle || "Cancel"}
        </Button>
        <Button
          fullWidth={fullWidth}
          size={"medium"}
          variant={variant === "delete" ? "destructive" : "secondary"}
          onClick={handleSubmit}
        >
          {submitButtonTitle || "Submit"}
        </Button>
      </div>
    </div>
  );
}
