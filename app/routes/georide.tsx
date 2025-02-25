import type { Route } from "./+types/home";
import Heading from "~/common/components/heading/Heading";
import { GEORIDE_PROJECT } from "~/data/projects/georide";
import { ImageComparator } from "~/pages/projects/georide/image-comparator/image-comparator";
import { Introduction } from "~/pages/projects/georide/introduction/introduction.component";
import { Marquee } from "~/pages/home/components/separator/Marquee";
import { Target } from "~/pages/projects/georide/target/target.component";
import { Observation } from "~/pages/projects/georide/observation/observation.component";
import { DesignTrend } from "~/pages/projects/georide/design-trend.component";
import { Implementation } from "~/pages/projects/georide/implementation/implementation.component";
import { Ending } from "~/pages/projects/georide/ending/ending.component";

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
          "font-display flex w-full max-w-4xl flex-col gap-4 px-8 pt-28 pb-24 md:pt-32 xl:pt-48 xl:pb-32"
        }
      >
        <Heading.Primary className={"text-appear"}>
          {GEORIDE_PROJECT.title}
        </Heading.Primary>
        <ImageComparator />
        <Introduction />
      </section>
      <Marquee items={GEORIDE_PROJECT.keywords} />
      <section className={"w-full bg-stone-900 pb-32 text-amber-50"}>
        <Target />
        <Observation />
        <DesignTrend />
      </section>
      <section
        className={"mt-8 flex w-full max-w-4xl flex-col gap-12 px-8 pb-24"}
      >
        <Implementation />
        <Ending />
      </section>
      <Marquee items={[...GEORIDE_PROJECT.keywords, "Ride safe ✌️"]} />
    </>
  );
}
