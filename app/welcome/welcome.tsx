import { FC } from "react";
import clsx from "clsx";
import { PrimaryHeading } from "~/pages/home/components/PrimaryHeading";
import { Annotation } from "~/pages/home/components/Annotation";
import { ArrowBottom } from "~/common/components/icons/arrow-bottom";
import { Continue } from "~/pages/home/components/Continue";

type ColoredSpanProps = {
  children: string;
  className?: HTMLSpanElement["className"];
};

export const ColoredSpan: FC<ColoredSpanProps> = ({ children, className }) => {
  return <span className={clsx("text-blue-500", className)}>{children}</span>;
};

export function Welcome({ message }: { message: string }) {
  return (
    <>
      <main className={"mt-14 flex flex-col items-center justify-center px-4"}>
        <HeroSection />
      </main>
    </>
  );
}
