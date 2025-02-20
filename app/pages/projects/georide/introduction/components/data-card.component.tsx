import { FC } from "react";
import { NumberFlowComponent } from "~/common/components/number-flow/number-flow.component";

export const DataCard: FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <div
      className={
        "flex w-full flex-col items-center justify-center rounded-2xl bg-stone-900 px-5 py-3 text-amber-50 shadow-md"
      }
    >
      <span className={"text-sm opacity-75"}>{title}</span>
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

const extractNumber = (str: string) => {
  const regex = new RegExp(/(\d+|\D)/g);
  const result = str.match(regex);

  return result ? [...result] : [];
};
