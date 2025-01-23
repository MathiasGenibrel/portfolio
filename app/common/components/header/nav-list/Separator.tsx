import { FC } from "react";
import clsx from "clsx";

interface SeparatorProps {
  children: string;
  className?: HTMLElement["className"];
}

export const Separator: FC<SeparatorProps> = ({ children, className }) => {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <hr className={"w-full"} />
      <span className={"font-display text-nowrap"}>{children}</span>
      <hr className={"w-full"} />
    </div>
  );
};
