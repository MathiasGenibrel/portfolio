import { FC } from "react";
import Heading from "~/common/components/heading/Heading";
import { Sparkles } from "~/common/components/sparkles/sparkles.component";
import Text from "~/pages/home/components/about-me/Text";

interface TargetProps {}

export const Target: FC<TargetProps> = ({}) => {
  return (
    <article className={"mx-auto max-w-4xl px-8 py-4"}>
      <Heading.Secondary className={"pt-4 pb-2"}>L'Objectif</Heading.Secondary>
      <p className={"text-lg"}>
        <Sparkles minSparkleDelay={300} maxSparkleDelay={1000}>
          <i>"Avoir sa moto dans la poche"</i>
        </Sparkles>{" "}
        - cette phrase résume parfaitement l'attente des utilisateurs.
        <br />
        <Text.Dark>
          Plus qu'une simple application de sécurité, ils voulaient ressentir
          cette connexion unique avec leur machine.
        </Text.Dark>{" "}
        Ma mission était de transformer cette expérience utilisateur pour faire
        de chaque moto la véritable star de l'application, sans compromis sur la
        sécurité.
      </p>
    </article>
  );
};
