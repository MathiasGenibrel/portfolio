import { FC } from "react";
import { PrimaryHeading } from "~/pages/home/components/PrimaryHeading";
import { Annotation } from "~/pages/home/components/Annotation";
import { Continue } from "~/pages/home/components/Continue";

interface HeroSectionProps {}

export const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className={"flex max-h-dvh flex-col gap-4 px-4 pt-16 pb-24"}>
      <PrimaryHeading />
      <Annotation />
      <img
        src={"/mg-illustration.webp"}
        alt={"Animation en stop motion pour motiver les personnes à scroll"}
        height={300}
        width={300}
        className={
          "annotation-appear mb-8 aspect-square w-full max-w-md self-center object-cover delay-[750ms]"
        }
      />
      <Continue />
    </section>
  );
};
