import { FC, useRef } from "react";
import { ArrowLeft } from "~/common/components/icons/arrow-left";
import { ArrowRight } from "~/common/components/icons/arrow-right";
import { useImageComparatorHandler } from "~/pages/projects/georide/image-comparator/hooks/useImageComparatorHandler";
import clsx from "clsx";

interface ImageComparatorProps {}

export const ImageComparator: FC<ImageComparatorProps> = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { position, handler } = useImageComparatorHandler(containerRef);

  return (
    <div
      ref={containerRef}
      className={
        "annotation-appear relative w-fit overflow-hidden delay-200 select-none"
      }
      onMouseMove={handler.move}
      onClick={handler.click}
    >
      <img
        alt=""
        src={"/georide-after.webp"}
        className={"pointer-events-none"}
      />
      <img
        alt=""
        src={"/georide-before.webp"}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        className={"pointer-events-none absolute top-0 left-0"}
      />
      <div
        style={{ left: `${position}%` }}
        className={
          "absolute top-0 z-10 flex h-full w-0.5 items-center justify-center bg-stone-900"
        }
      >
        <Text position="left">Avant</Text>
        <Text position="right">Après</Text>
        <div
          className={
            "flex aspect-square w-fit cursor-col-resize items-center rounded-full bg-stone-900 p-2"
          }
        >
          <ArrowLeft className={"relative left-0.5"} />
          <ArrowRight className={"relative right-0.5"} />
        </div>
      </div>
    </div>
  );
};

interface TextProps {
  children: string;
  position: "left" | "right";
}

const Text: FC<TextProps> = ({ children, position }) => (
  <span
    className={clsx(
      "font-display absolute top-2 text-sm font-medium text-stone-900",
      position === "left" ? "right-4" : "left-4",
    )}
  >
    {children}
  </span>
);
