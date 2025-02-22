import Heading from "~/common/components/heading/Heading";
import { FC } from "react";
import Text from "~/pages/home/components/about-me/Text";
import { FakeApp } from "~/pages/projects/georide/observation/components/fake-app/fake-app.component";

export const Observation: FC = () => {
  return (
    <article className={"mx-auto flex max-w-4xl flex-col px-8"}>
      <Heading.Secondary className={"pt-4 pb-2"}>
        État des lieux de l'application
      </Heading.Secondary>
      <p className={"text-lg"}>
        Pour refaire l'applications, je ne suis pas parti de zéro. Vu que l'on
        doit refaire la "home screen" de l'application, il faut comprendre les
        fonctionnalités éssentiels présente sur ces fenêtres de l'application.
      </p>
      <span className={"mt-4 mb-2 text-center text-xs"}>
        <Text.Dark>
          Découvrez l'application en manipulant cette zone interactive
        </Text.Dark>
      </span>

      <FakeApp />
    </article>
  );
};
