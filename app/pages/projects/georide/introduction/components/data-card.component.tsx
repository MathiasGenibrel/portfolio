import { FC } from "react";
import { NumberFlowComponent } from "~/common/components/number-flow/number-flow.component";
import clsx from "clsx";

interface DataCardProps {
  title: string;
  value: string;
  tag?: string;
}

export const DataCard: FC<DataCardProps> = ({ title, value, tag }) => {
  return (
    <div
      className={
        "relative flex w-full flex-col items-center justify-center rounded-2xl bg-stone-900 px-5 py-3 text-amber-50 shadow-md"
      }
    >
      {tag && <Tag>{tag}</Tag>}
      <span className={"line-clamp-1 text-sm opacity-75"}>{title}</span>
      <span className={"flex"}>
        {extractNumber(value).map((value, index) =>
          Number.isNaN(Number(value)) ? (
            <span key={`${value}-${index}`} className={"text-xl font-bold"}>
              {value}
            </span>
          ) : (
            <NumberFlowComponent
              key={`${value}-${index}`}
              duration={1000}
              delay={500}
              toNumber={Number(value)}
            />
          ),
        )}
      </span>
    </div>
  );
};

const Tag = ({ children }: { children: string }) => (
  <span
    className={clsx(
      "xs:-top-4 absolute -top-2 -right-4",
      "rounded-full border-2 border-orange-300 bg-orange-50 px-2 py-1",
      "font-display text-xs font-medium text-orange-800",
    )}
  >
    <i>{children}</i>
  </span>
);

const extractNumber = (str: string) => {
  const regex = new RegExp(/(\d+|\D)/g);
  const result = str.match(regex);

  return result ? [...result] : [];
};
