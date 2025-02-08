import { FC } from "react";
import { Tag } from "~/pages/home/components/about-me/Tag";
import { TextHoverAnimated } from "~/common/components/text/TextHoverAnimated";

interface KnowledgeProps {
  expertKnowledge: string[];
}

export const Knowledge: FC<KnowledgeProps> = ({ expertKnowledge }) => {
  return (
    <section className={"relative flex w-full flex-col px-8 py-20"}>
      <div className={"boxes-bg--light absolute top-0 left-8 h-full w-full"} />
      <h2 className={"text-3xl font-bold text-stone-900"}>
        Le meilleur de mon expertise
      </h2>
      <Tag className={"mt-4 mb-1 text-stone-900"}>exp</Tag>
      <ul className={"mt-2 flex flex-col gap-6"}>
        {expertKnowledge.map((knowledge, index) => (
          <li key={index} className={"font-medium text-stone-900 opacity-75"}>
            <TextHoverAnimated>{knowledge}</TextHoverAnimated>
          </li>
        ))}
      </ul>
      <Tag className={"self-end text-stone-900"}>exp</Tag>
    </section>
  );
};
