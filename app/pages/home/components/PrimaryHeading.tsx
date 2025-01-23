import { FC } from "react";
import { ColoredSpan } from "~/welcome/welcome";

interface PrimaryHeadingProps {}

export const PrimaryHeading: FC<PrimaryHeadingProps> = ({}) => {
  return (
    <h1
      className={
        "font-heading flex w-full flex-col items-end text-6xl leading-16"
      }
    >
      <span>Salut !</span>
      <span>
        Je suis <ColoredSpan>M</ColoredSpan>athias
        {/*ᒲᔑℸ ̣⍑¦ᔑᓭ => Mathias en table d'enchant*/}
      </span>
    </h1>
  );
};
