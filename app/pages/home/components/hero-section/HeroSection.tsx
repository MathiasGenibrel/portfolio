import { FC } from "react";
import { PrimaryHeading } from "~/pages/home/components/PrimaryHeading";
import { Annotation } from "~/pages/home/components/Annotation";
import { Continue } from "~/pages/home/components/Continue";

interface HeroSectionProps {}

export const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section
      className={
        "flex w-full max-w-4xl flex-col gap-4 px-4 pt-28 pb-24 md:pt-32 xl:pt-48 xl:pb-32"
      }
    >
      <PrimaryHeading />
      <div className={"flex flex-col gap-4 md:flex-row md:justify-between"}>
        <Annotation />
        <img
          src={"/mg-illustration.webp"}
          alt={"Mathias Genibrel, développeur web et mobile"}
          height={375}
          width={375}
          className={
            "annotation-appear mb-8 aspect-square w-full max-w-md shrink self-center object-cover delay-[750ms] md:hidden"
          }
        />
        <Continue />
      </div>
    </section>
  );
};
