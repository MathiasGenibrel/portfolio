import { FC } from "react";
import { HeadingSecondary } from "~/common/components/heading/HeadingSecondary";
import { PROJECTS } from "~/data/projects";
import Card from "~/common/components/card/Card";

interface WorksProps {}

export const Works: FC<WorksProps> = () => {
  return (
    <section className={"w-full max-w-3xl p-8"} id={"works"}>
      <HeadingSecondary>Accomplissements</HeadingSecondary>
      <div className={"flex flex-wrap gap-8"}>
        {PROJECTS.map((project, index) => (
          <Card key={index} {...project}>
            <Card.Image />
            <Card.Title />
            <Card.Description />
            <Card.Button />
          </Card>
        ))}
      </div>
    </section>
  );
};
