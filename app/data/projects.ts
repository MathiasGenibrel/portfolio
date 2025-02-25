import { ComponentProps } from "react";
import Card from "~/common/components/card/Card";
import { GEORIDE_PROJECT } from "~/data/projects/georide";

export interface Project extends Omit<ComponentProps<typeof Card>, "children"> {
  keywords: string[];
}

export const PROJECTS: Project[] = [
  GEORIDE_PROJECT,
  {
    title: "Reproduction de Klack",
    description:
      "Un projet personnel de reproduction créative explorant les limites des animations web modernes. J'ai recréé l'interface de Klack en me concentrant sur les micro-interactions, utilisant un mix de technologies front-end pour obtenir une expérience utilisateur fluide et engageante.",
    imageUrl: "/klack.webp",
    link: "/klack",
    deployLink: "https://klack.mathias.run",
    isPublished: false,
    keywords: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion Framer",
      "Docker",
      "Github Actions",
    ],
  },
  {
    title: "Webapp de distributeur de pizzas",
    description:
      "Développement d'une application web permettant aux clients de Nell de consulter en temps réel les pizzas disponibles dans leurs distributeurs automatiques. Une solution qui rend l'expérience d'achat plus fluide et transparente.",
    imageUrl: "/pizza-nell.webp",
    link: "/pizza-nell",
    deployLink: "https://pizza-nell.mathias.run",
    isPublished: false,
    keywords: [
      "TypeScript",
      "Tailwind CSS",
      "AstroJS",
      "Docker",
      "Github Actions",
    ],
  },
  {
    title: "Site pour SebAutoMotoÉcole",
    description:
      "Conception d'une vitrine web moderne pour une auto-école locale, alliant référencement optimisé et présentation claire des formations. Un projet qui simplifie la recherche d'informations pour les futurs conducteurs tout en boostant la visibilité de l'établissement.",
    imageUrl: "/seb-auto.webp",
    link: "/seb-auto-moto-ecole",
    deployLink: "https://sebautomoto.fr",
    isPublished: false,
    keywords: [
      "AstroJS",
      "TypeScript",
      "Tailwind CSS",
      "Strapi",
      "Docker",
      "Github Actions",
    ],
  },
];
