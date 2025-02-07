import { FC } from "react";
import { Tag } from "~/pages/home/components/about-me/Tag";
import { Paragraph } from "~/pages/home/components/about-me/Paragraph";

interface AboutMeProps {}

export const AboutMe: FC<AboutMeProps> = ({}) => {
  return (
    <div className={"relative w-full bg-stone-900 p-8"}>
      <div className={"boxes-bg absolute top-0 left-0 h-full w-full"} />
      <div className={"z-10 flex flex-col"}>
        <h2 className={"mb-4 text-amber-50 opacity-75"}>À propos de moi</h2>
        <Tag />
        <Paragraph />
        <Tag className={"self-end"} />
      </div>
    </div>
  );
};
