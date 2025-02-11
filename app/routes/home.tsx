import type { Route } from "./+types/home";
import { Welcome } from "~/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mathias | TypeScript Wizard 🧙‍♂️" },
    {
      name: "description",
      content:
        "Bienvenue dans l'antre du maitre TypeScript 🧙‍♂️, développeur web et mobile passionné par l'expérience utilisateur et les interfaces modernes. Ainsi que par les technologies React, React Native, Tailwind CSS, Github Actions et Docker.",
    },
    {
      name: "keywords",
      content:
        "Mathias Genibrel, développeur web, développeur mobile, react, react native, typescript, tailwind css, github actions, docker",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome />;
}
