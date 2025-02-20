import type { Route } from "./+types/home";
import Heading from "~/common/components/heading/Heading";
import { GEORIDE_PROJECT } from "~/data/projects/georide";
import { ImageComparator } from "~/pages/projects/georide/image-comparator/image-comparator";
import { Introduction } from "~/pages/projects/georide/introduction/introduction.component";
import { Marquee } from "~/pages/home/components/separator/Marquee";
import { Target } from "~/pages/projects/georide/target/target.component";

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
    <>
      <section
        className={
          "font-display flex w-full max-w-4xl flex-col gap-4 px-4 pt-28 pb-24 md:pt-32 xl:pt-48 xl:pb-32"
        }
      >
        <Heading.Primary className={"text-appear"}>
          {GEORIDE_PROJECT.title}
        </Heading.Primary>
        <ImageComparator />
        <Introduction />
      </section>
      <Marquee items={GEORIDE_PROJECT.keywords} />
      <section className={"w-full bg-stone-900 text-amber-50"}>
        <Target />
      </section>
    </>
  );
}
