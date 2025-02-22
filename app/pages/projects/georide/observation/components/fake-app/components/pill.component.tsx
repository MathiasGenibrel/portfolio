import { FC } from "react";
import clsx from "clsx";

interface PillProps {}

export const Pill: FC<PillProps> = () => {
  return (
    <div
      className={clsx(
        "absolute top-4 right-0 left-0 mx-auto",
        "w-fit rounded-full bg-blue-50 px-4 py-1 text-sm text-blue-700 drop-shadow-md",
        "border-2 border-blue-400",
      )}
    >
      <span className={"font-medium"}>Zone d'interaction</span>
    </div>
  );
};
