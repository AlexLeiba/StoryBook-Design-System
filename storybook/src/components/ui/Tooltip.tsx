import { cva, type VariantProps } from "class-variance-authority";
import { Info } from "lucide-react";
import React, { useEffect, useRef, useState, type ComponentProps } from "react";
import { cn } from "../../../lib/utilities";

const tooltipVariants = cva(
  [" p-2 min-w-[200px] max-w-[350px] z-50", "flex justify-between"],
  {
    variants: {
      size: {
        small: "px-2",
        large: "px-4 py-4 text-2xl",
        medium: "px-3 font-medium text-xl",
      },
      variant: {
        primary: "bg-gray-800 text-white  rounded-xl focus:ring-gray-500",
        secondary: "bg-yellow-400  rounded-xl focus:ring-gray-500",
        neutral: "bg-gray-200  rounded-xl focus:ring-gray-500",
        destructive: "bg-red-600 text-white  rounded-2xl focus:ring-gray-500",
        tertiary: "bg-purple-800 text-white rounded-xs  focus:ring-gray-500",
      },
      position: {
        top: "",
        bottom: "",
        left: "",
        right: "",
      },
    },
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

type Props = ComponentProps<"div"> &
  VariantProps<typeof tooltipVariants> & {
    children: React.ReactNode;
    title: string;
    icon?: React.ReactNode;
    handleIconClick?: () => void;
  };

function Tooltip({
  children,
  title,
  size,
  variant,
  position,
  icon,
  handleIconClick,
  ...props
}: Props) {
  const childrenRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [visibility, setVisibility] = useState(false);
  const [coords, setCoords] = useState<{
    top?: number;
    left?: number;
    transform?: string;
    right?: number;
  }>({
    top: 0,
    left: 0,
    transform: ``,
    right: 0,
  });

  useEffect(() => {
    function updatePosition() {
      if (childrenRef.current && tooltipRef.current) {
        const coordsElementData = childrenRef.current.getBoundingClientRect();
        const { width: tooltipWidth } =
          tooltipRef.current.getBoundingClientRect();

        const {
          left,
          x, //position on x axis from left edge of element
          y, //position of y axis from top edge of element
          width: targetElementWidth,
          height: targetElementHeight,
        } = coordsElementData;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const isOutsideViewportLeft = x < 50;

        const isOutsideViewportRight =
          left + targetElementWidth + 50 > viewportWidth;

        const isOutsideViewportBottom =
          y + targetElementHeight + 50 > viewportHeight;

        const isOutsideViewportTop = y < 50;

        const absolutePositions: {
          top?: number;
          left?: number;
          right?: number;
          transform?: string;
          bottom?: number;
        } = {};

        // RIGHT LEFT TOP ( FULL WIDTH TOP) POSITION
        if (
          isOutsideViewportRight &&
          isOutsideViewportLeft &&
          isOutsideViewportTop
        ) {
          // SHOW TOOLTIP BOTTOM MIDDLE
          absolutePositions.top = targetElementHeight + 10;
          absolutePositions.left = targetElementWidth / 2;
          absolutePositions.transform = "translateX(-50%)";
          return setCoords({
            ...absolutePositions,
          });
        }

        // RIGHT LEFT BOTTOM (FULL WIDTH BOTTOM)  POSITION
        if (
          isOutsideViewportRight &&
          isOutsideViewportLeft &&
          isOutsideViewportBottom
        ) {
          // SHOW TOOLTIP TOP MIDDLE
          absolutePositions.bottom = targetElementHeight + 10;
          absolutePositions.left = targetElementWidth / 2;
          absolutePositions.transform = "translateX(-50%)";
          return setCoords({
            ...absolutePositions,
          });
        }

        // RIGHT TOP  POSITION
        if (isOutsideViewportRight && isOutsideViewportTop) {
          if (tooltipWidth < targetElementWidth) {
            // SHOW MIDDLE BOTTOM
            absolutePositions.top = targetElementHeight + 10;
            absolutePositions.left = targetElementWidth / 2;
            absolutePositions.transform = "translateX(-50%)";
          }

          if (tooltipWidth >= targetElementWidth) {
            // SHOW BOTTOM LEFT
            absolutePositions.top = targetElementHeight + 10;
            absolutePositions.right = targetElementWidth;
          }
          return setCoords({
            ...absolutePositions,
          });
        }

        // LEFT TOP  POSITION
        if (isOutsideViewportLeft && isOutsideViewportTop) {
          if (tooltipWidth < targetElementWidth) {
            // SHOW BOTTOM MIDDLE

            absolutePositions.top = targetElementHeight + 10;
            absolutePositions.left = targetElementWidth / 2;
            absolutePositions.transform = "translateX(-50%)";
          }
          if (tooltipWidth >= targetElementWidth) {
            // SHOW BOTTOM RIGHT
            absolutePositions.top = targetElementHeight + 10;
            absolutePositions.left = targetElementWidth + 10;
          }
          return setCoords({
            ...absolutePositions,
          });
        }

        // RIGHT BOTTOM  POSITION
        if (isOutsideViewportRight && isOutsideViewportBottom) {
          if (tooltipWidth < targetElementWidth) {
            // SHOW TOP MIDDLE
            absolutePositions.bottom = targetElementHeight + 10;
            absolutePositions.left = targetElementWidth / 2;
            absolutePositions.transform = "translateX(-50%)";
          }

          if (tooltipWidth >= targetElementWidth) {
            // SHOW TOP LEFT
            absolutePositions.bottom = targetElementHeight + 10;
            absolutePositions.right = targetElementWidth;
          }
          return setCoords({
            ...absolutePositions,
          });
        }

        // LEFT BOTTOM  POSITION
        if (isOutsideViewportLeft && isOutsideViewportBottom) {
          if (tooltipWidth < targetElementWidth) {
            // SHOW TOP MIDDLE

            absolutePositions.bottom = targetElementHeight + 10;
            absolutePositions.left = targetElementWidth / 2;
            absolutePositions.transform = "translateX(-50%)";
          }
          if (tooltipWidth >= targetElementWidth) {
            // SHOW TOP RIGHT
            absolutePositions.bottom = targetElementHeight + 10;
            absolutePositions.left = targetElementWidth + 10;
          }
          return setCoords({
            ...absolutePositions,
          });
        }

        //BOTTOM  POSITION
        if (isOutsideViewportBottom) {
          // SHOW TOP MIDDLE
          absolutePositions.bottom = targetElementHeight + 10;
          absolutePositions.left = targetElementWidth / 2;
          absolutePositions.transform = "translateX(-50%)";
          return setCoords({
            ...absolutePositions,
          });
        }
        //  TOP  POSITION
        if (isOutsideViewportTop) {
          // SHOW BOTTOM MIDDLE
          absolutePositions.top = targetElementHeight + 10;
          absolutePositions.left = targetElementWidth / 2;
          absolutePositions.transform = "translateX(-50%)";

          return setCoords({
            ...absolutePositions,
          });
        }

        // LEFT  POSITION
        if (isOutsideViewportLeft) {
          if (tooltipWidth > targetElementWidth) {
            // SHOW TOP RIGHT
            absolutePositions.bottom = targetElementHeight + 10;
            absolutePositions.left = targetElementWidth + 10;
          }

          if (tooltipWidth <= targetElementWidth) {
            // SHOW TOP MIDDLE
            absolutePositions.bottom = targetElementHeight + 10;
            absolutePositions.left = targetElementWidth / 2;
            absolutePositions.transform = "translateX(-50%)";
          }

          return setCoords({
            ...absolutePositions,
          });
        }
        // RIGHT POSITION
        if (isOutsideViewportRight) {
          if (tooltipWidth > targetElementWidth) {
            // SHOW TOP LEFT
            absolutePositions.bottom = targetElementHeight + 10;
            absolutePositions.right = targetElementWidth + 10;
          }

          if (tooltipWidth <= targetElementWidth) {
            // SHOW  TOP MIDDLE
            absolutePositions.bottom = targetElementHeight + 10;
            absolutePositions.left = targetElementWidth / 2;
            absolutePositions.transform = "translateX(-50%)";
          }
          return setCoords({
            ...absolutePositions,
          });
        }

        // MIDDLE POSITION

        // SHOW TOP MIDDLE
        absolutePositions.bottom = targetElementHeight + 10;
        absolutePositions.left = targetElementWidth / 2;
        absolutePositions.transform = "translateX(-50%)";
        return setCoords({
          ...absolutePositions,
        });
      }
    }

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, [visibility]);

  //
  return (
    <div
      title="info"
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
      className="relative "
    >
      {visibility && (
        <div
          ref={tooltipRef}
          style={{
            position: "absolute",
            ...coords,
          }}
          className={tooltipVariants({ size, variant, position })}
          {...props}
        >
          <p className={titleVariants({ size })}>{title}</p>

          <div
            className={cn(handleIconClick ? "cursor-pointer" : "cursor-text")}
            onClick={handleIconClick}
          >
            {icon || <Info />}
          </div>
        </div>
      )}
      <div ref={childrenRef}>{children}</div>
    </div>
  );
}

export default Tooltip;
