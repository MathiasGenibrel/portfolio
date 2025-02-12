import { FC } from "react";
import { Tag } from "~/pages/home/components/about-me/Tag";
import { TextHoverAnimated } from "~/common/components/text/TextHoverAnimated";
import { ColoredSpan } from "~/welcome/welcome";

interface KnowledgeProps {
  expertKnowledge: string[];
}

export const Knowledge: FC<KnowledgeProps> = ({ expertKnowledge }) => {
  return (
    <section
      className={
        "relative flex w-full max-w-4xl flex-col overflow-hidden px-8 py-20"
      }
    >
      <div className={"boxes-bg--light absolute top-0 left-8 h-full w-full"} />
      <h2 className={"font-heading text-6xl font-medium text-stone-900"}>
        Mes <ColoredSpan>S</ColoredSpan>ervices.
      </h2>
      <h3 className={"text-2xl font-medium text-stone-900"}>
        Profitez de mon expertise.
      </h3>
      <Tag className={"mt-12 mb-1 text-stone-900"}>exp</Tag>
      <ul className={"mt-2 flex flex-col gap-8"}>
        {expertKnowledge.map((knowledge, index) => (
          <li
            key={index}
            className={
              "font-medium text-stone-900 opacity-75 transition-opacity delay-100 duration-200 hover:opacity-100"
            }
          >
            <TextHoverAnimated>{knowledge}</TextHoverAnimated>
          </li>
        ))}
      </ul>
      <Tag className={"self-end text-stone-900"}>exp</Tag>
    </section>
  );
};
