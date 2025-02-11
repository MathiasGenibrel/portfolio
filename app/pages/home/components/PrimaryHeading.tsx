import { FC } from "react";
import { ColoredSpan } from "~/welcome/welcome";

interface PrimaryHeadingProps {}

export const PrimaryHeading: FC<PrimaryHeadingProps> = ({}) => {
  return (
    <h1
      className={
        "font-heading xs:text-6xl flex w-full flex-col items-end text-4xl"
      }
    >
      <span className={"text-appear"}>Salut !</span>
      <div className={"flex gap-[0.5ch]"}>
        <span className={"text-appear delay-200"}>
          Je suis
          {/*ᒲᔑℸ ̣⍑¦ᔑᓭ => Mathias en table d'enchant*/}
        </span>
        <span className={"text-appear delay-300"}>
          <ColoredSpan>M</ColoredSpan>athias
        </span>
      </div>
    </h1>
  );
};
