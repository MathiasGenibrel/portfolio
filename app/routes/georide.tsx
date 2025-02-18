import type { Route } from "./+types/home";
import Heading from "~/common/components/heading/Heading";
import { GEORIDE_PROJECT } from "~/data/projects/georide";
import { ImageComparator } from "~/pages/projects/georide/image-comparator";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Projet de Mathias | ${GEORIDE_PROJECT.title}` },
    {
      name: "description",
      content: GEORIDE_PROJECT.description,
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
  return (
    <section
      className={
        "flex w-full max-w-4xl flex-col gap-4 px-4 pt-28 pb-24 md:pt-32 xl:pt-48 xl:pb-32"
      }
    >
      <Heading.Primary>{GEORIDE_PROJECT.title}</Heading.Primary>
      <ImageComparator />
    </section>
  );
}
