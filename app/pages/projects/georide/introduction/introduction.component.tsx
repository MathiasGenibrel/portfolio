import { FC } from "react";
import { Summary } from "~/pages/projects/georide/introduction/components/summary.component";
import { Preview } from "~/pages/projects/georide/introduction/components/preview.component";

interface IntroductionProps {}

export const Introduction: FC<IntroductionProps> = ({}) => {
  return (
    <>
      <Summary />
      <Preview />
    </>
  );
};
