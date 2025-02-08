import { FC } from "react";
import clsx from "clsx";
import { HeroSection } from "~/pages/home/components/hero-section/HeroSection";
import { Marquee } from "~/pages/home/components/separator/Marquee";
import { AboutMe } from "~/pages/home/components/about-me/AboutMe";
import { Works } from "~/pages/home/sections/Works";

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

export function Welcome() {
  return (
    <>
      <main className={"mt-14 flex flex-col items-center justify-center"}>
        <HeroSection />
        <Marquee items={items} />
        <div className={"flex w-full flex-col items-center bg-stone-900"}>
          <AboutMe />
          <Works />
        </div>
      </main>
    </>
  );
}
