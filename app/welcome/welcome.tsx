import { FC } from "react";
import clsx from "clsx";
import { HeroSection } from "~/pages/home/components/hero-section/HeroSection";
import { Marquee } from "~/pages/home/components/separator/Marquee";
import { AboutMe } from "~/pages/home/components/about-me/AboutMe";
import { Works } from "~/pages/home/sections/Works";
import { Knowledge } from "~/pages/home/sections/Knowledge";

type ColoredSpanProps = {
  children: string;
  className?: HTMLSpanElement["className"];
};

export const ColoredSpan: FC<ColoredSpanProps> = ({ children, className }) => {
  return <span className={clsx("text-blue-500", className)}>{children}</span>;
};

const MARQUEE = {
  top: [
    "Développeur Web",
    "Développeur Mobile",
    "TypeScript Wizard 🧙‍♂️",
    "Architecte Frontend",
  ],
  bottom: ["React / React Native", "Tailwind CSS", "Github Actions", "Docker"],
};

const expertKnowledge = [
  "Design System & Prototypage Haute-Fidélité",
  "Développement Frontend Modern & Responsive",
  "Expérience Utilisateur & Interface Interactive",
  "Applications Cross-Platform React Native",
  "Optimisation SEO & Performance Web",
  "Workflow Git & Gestion de Versions",
  "Infrastructure DevOps & Déploiement Cloud",
];

export function Welcome() {
  return (
    <>
      <main className={"mt-14 flex flex-col items-center justify-center"}>
        <HeroSection />
        <Marquee items={MARQUEE.top} />
        <div className={"flex w-full flex-col items-center bg-stone-900"}>
          <AboutMe />
          <Works />
        </div>
        <Knowledge expertKnowledge={expertKnowledge} />
        <Marquee items={MARQUEE.bottom} />
      </main>
    </>
  );
}
