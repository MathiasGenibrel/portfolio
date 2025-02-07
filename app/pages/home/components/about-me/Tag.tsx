import { FC } from "react";
import clsx from "clsx";

interface TagProps {
  className?: HTMLSpanElement["className"];
}

export const Tag: FC<TagProps> = ({ className }) => {
  return (
    <span className={clsx("text-xs text-amber-50 opacity-50", className)}>
      {"<h/>"}
    </span>
  );
};
