import { FC } from "react";
import Heading from "~/common/components/heading/Heading";

interface TargetProps {}

export const Target: FC<TargetProps> = ({}) => {
  return (
    <article className={"mx-auto max-w-4xl px-8 py-4"}>
      <Heading.Secondary className={"pt-4 pb-2"}>
        L'Objectif: Créer une Connexion Émotionnelle
      </Heading.Secondary>
      <p className={"text-lg"}>
        Malgré une application techniquement performante, les utilisateurs
        exprimaient un besoin clair : ils voulaient que leur moto soit mise en
        avant, qu'elle devienne la star de leur écran. Ma mission était de
        repenser l'interface pour créer cette connexion émotionnelle
        instantanée, sans compromettre les fonctionnalités de sécurité qui font
        l'ADN de GeoRide.
      </p>
    </article>
  );
};
