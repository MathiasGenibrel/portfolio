import { ComponentProps } from "react";
import Card from "~/common/components/card/Card";

export const PROJECTS: Omit<ComponentProps<typeof Card>, "children">[] = [
  {
    title: "Refonte de l'app GeoRide",
    description:
      "Chez GeoRide, j'ai relevé le défi de réinventer entièrement l'interface de l'application mobile. L'objectif ? Créer une expérience plus intuitive et moderne pour une communauté de plusieurs milliers de motards. Une transformation qui a redéfini la façon dont nos utilisateurs interagissent quotidiennement avec leur passion.",
    imageUrl: ["/georide-before.webp", "/georide-after.webp"],
    link: "/georide",
  },
  {
    title: "Reproduction de Klack",
    description:
      "Un projet personnel de reproduction créative explorant les limites des animations web modernes. J'ai recréé l'interface de Klack en me concentrant sur les micro-interactions, utilisant un mix de technologies front-end pour obtenir une expérience utilisateur fluide et engageante.",
    imageUrl: "/klack.webp",
    link: "/klack",
  },
  {
    title: "Webapp de distributeur de pizzas",
    description:
      "Développement d'une application web permettant aux clients de Nell de consulter en temps réel les pizzas disponibles dans leurs distributeurs automatiques. Une solution qui rend l'expérience d'achat plus fluide et transparente.",
    imageUrl: "/pizza-nell.webp",
    link: "/pizza-nell",
  },
  {
    title: "Site pour SebAutoMotoÉcole",
    description:
      "Conception d'une vitrine web moderne pour une auto-école locale, alliant référencement optimisé et présentation claire des formations. Un projet qui simplifie la recherche d'informations pour les futurs conducteurs tout en boostant la visibilité de l'établissement.",
    imageUrl: "/seb-auto.webp",
    link: "/seb-auto-moto-ecole",
  },
];
