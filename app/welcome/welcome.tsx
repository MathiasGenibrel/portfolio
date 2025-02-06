import { FC } from "react";
import clsx from "clsx";
import { HeroSection } from "~/pages/home/components/hero-section/HeroSection";
import { Marquee } from "~/pages/home/components/separator/Marquee";

type ColoredSpanProps = {
  children: string;
  className?: HTMLSpanElement["className"];
};

export const ColoredSpan: FC<ColoredSpanProps> = ({ children, className }) => {
  return <span className={clsx("text-blue-500", className)}>{children}</span>;
};

const items = [
  "Développeur Web",
  "Développeur Mobile",
  "TypeScript Wizard 🧙‍♂️",
  "Architecte Frontend",
];

export function Welcome({ message }: { message: string }) {
  return (
    <>
      <main className={"mt-14 flex flex-col items-center justify-center"}>
        <HeroSection />
        <Marquee items={items} />
      </main>
    </>
  );
}
