import { FC } from "react";
import { Tag } from "~/pages/home/components/about-me/Tag";
import { Paragraph } from "~/pages/home/components/about-me/Paragraph";
import { HeadingSecondary } from "~/common/components/heading/HeadingSecondary";

interface AboutMeProps {}

export const AboutMe: FC<AboutMeProps> = ({}) => {
  return (
    <div className={"relative w-full bg-stone-900 p-8"} id={"about"}>
      <div className={"boxes-bg absolute top-0 left-0 h-full w-full"} />
      <div className={"z-10 flex flex-col"}>
        <HeadingSecondary>À propos de moi</HeadingSecondary>
        <Tag>me</Tag>
        <Paragraph />
        <Tag className={"self-end"}>me</Tag>
      </div>
    </div>
  );
};
