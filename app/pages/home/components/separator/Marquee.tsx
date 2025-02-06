import { FC } from "react";

interface MarqueeProps {
  items: string[];
}

export const Marquee: FC<MarqueeProps> = ({ items }) => {
  return (
    <div className="flex w-full overflow-hidden bg-stone-900 py-4">
      <ul className="animate-scroll flex gap-8">
        {[...items, ...items].map((item, index) => (
          <li key={`${item}-${index}`} className="flex items-center gap-8">
            <span className="text-background whitespace-nowrap">{item}</span>
            <Separator />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Separator = () => (
  <div className={"flex gap-1"}>
    {Array.from({ length: 3 }).map((_, index) => (
      <div key={index} className={"bg-background h-1 w-4 rounded-full"} />
    ))}
  </div>
);
