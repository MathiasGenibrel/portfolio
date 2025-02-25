import { FC } from "react";
import Heading from "~/common/components/heading/Heading";

interface EndingProps {}

export const Ending: FC<EndingProps> = () => {
  return (
    <article className={"flex flex-col gap-2"}>
      <Heading.Secondary>Pour conclure</Heading.Secondary>
      <p className={"text-lg"}>
        Travailler sur le projet{" "}
        <strong>GeoRide a été une opportunité exceptionnelle</strong>, d'autant
        plus que je suivais leur aventure depuis les débuts, avant même la
        commercialisation du produit. Ma première rencontre avec l'équipe lors
        du High Side Ride Festival en 2022 a été déterminante. Les échanges avec{" "}
        <strong>
          Arnaud et Benjamin m'ont donné l'envie de rejoindre cette aventure
        </strong>
        , mais j'ai d'abord choisi d'honorer mes engagements professionnels en
        cours.
        <br />
        <br />
        En novembre 2023, déterminé à me démarquer, j'ai postulé en proposant
        une <strong>amélioration concrète du produit</strong>. Cette approche
        reflétait mon engagement et ma passion pour ce projet qui me tenait tant
        à cœur. Cette expérience m'a permis de{" "}
        <strong>développer mes compétences techniques et créatives</strong>,
        tout en travaillant sur un projet à fort impact dans l'univers de la
        moto, ma passion.
        <div
          className={
            "mt-4 rounded-2xl border-2 border-blue-300 bg-blue-50 px-4 py-2 text-blue-800"
          }
        >
          <i className={"text-base"}>
            Je tiens à remercier Arnaud et Benjamin pour cette première
            étincelle en 2022, Thomas pour m'avoir permis de rejoindre l'équipe,
            et l'ensemble de l'équipe GeoRide pour cette opportunité unique.
          </i>
        </div>
      </p>
    </article>
  );
};
