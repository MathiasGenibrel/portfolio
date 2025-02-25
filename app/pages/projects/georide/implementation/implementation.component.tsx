import { FC } from "react";
import Heading from "~/common/components/heading/Heading";
import { WarningBox } from "~/common/components/box/warning-box.component";

interface ImplementationProps {}

export const Implementation: FC<ImplementationProps> = ({}) => {
  return (
    <article>
      <Heading.Secondary>La Conception</Heading.Secondary>
      <WarningBox className={"mt-2 mb-4"}>
        Pour des raisons de confidentialité, je ne peux détailler l'ensemble du
        processus de conception.
      </WarningBox>
      <p className={"text-lg"}>
        Ce menu coulissant, en apparence simple, cachait une réelle complexité
        technique. Le principal challenge était d'assurer une expérience fluide
        malgré de nombreuses contraintes techniques. Il fallait gérer
        simultanément les animations d'ouverture et de fermeture, le défilement
        interne du menu, le changement dynamique de véhicule, tout en maintenant
        des performances optimales. La réalisation de ce composant a représenté
        la partie la plus exigeante du développement, nécessitant un équilibre
        délicat entre performances techniques et expérience utilisateur.
      </p>
    </article>
  );
};
