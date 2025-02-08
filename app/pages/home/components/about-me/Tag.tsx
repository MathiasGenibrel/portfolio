import { FC } from "react";
import clsx from "clsx";

interface TagProps {
  className?: HTMLSpanElement["className"];
  children: string;
}

export const Tag: FC<TagProps> = ({ className, children }) => {
  return (
    <span className={clsx("text-xs text-amber-50 opacity-50", className)}>
      {`<${children}/>`}
    </span>
  );
};
