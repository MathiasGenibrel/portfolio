import { FC } from "react";
import Heading from "~/common/components/heading/Heading";
import { ExternalLink } from "~/common/components/external-link/external-link.component";
import { Sparkles } from "~/common/components/sparkles/sparkles.component";
import { DataCard } from "~/pages/projects/georide/introduction/components/data-card.component";

interface SummaryProps {}

export const Summary: FC<SummaryProps> = () => {
  return (
    <>
      <Heading.Secondary className={"annotation-appear pt-4 delay-[400ms]"}>
        GeoRide, c'est quoi ?
      </Heading.Secondary>
      <div className={"flex flex-col gap-4"}>
        <Sparkles minSparkleDelay={100} maxSparkleDelay={300} withRandomColor>
          <div
            className={
              "annotation-appear xs:flex-row pointer-events-none flex flex-col items-stretch gap-4 delay-[600ms] select-none"
            }
          >
            <DataCard title={"utilisateurs"} value={"+25000"} />
            <DataCard title={"véhicules retrouvé"} value={"90%"} />
          </div>
        </Sparkles>
        <p className={"annotation-appear text-lg text-stone-900 delay-[800ms]"}>
          <ExternalLink href={"https://georide.fr"}>GeoRide</ExternalLink>{" "}
          révolutionne l'expérience de la moto en la propulsant dans l'ère du
          numérique. À travers une application mobile et un adaptateur, GeoRide
          permet aux motards de rester en contact permanent avec leur machine.
          Le système offre une protection complète avec{" "}
          <i>
            détection d'accidents, alertes vol, surveillance des mouvements,
            suivi de la batterie, ...
          </i>
          <br />
          Plus qu'un simple dispositif de sécurité, GeoRide enrichit
          l'expérience de la moto en ajoutant une dimension connectée à la
          passion du deux-roues, tout en préservant la liberté qui fait
          l'essence même de la moto.
        </p>
      </div>
    </>
  );
};
