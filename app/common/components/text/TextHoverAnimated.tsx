import { FC } from "react";
import clsx from "clsx";

interface TextHoverAnimatedProps {
  children: string;
  className?: HTMLSpanElement["className"];
}

export const TextHoverAnimated: FC<TextHoverAnimatedProps> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx("group/text relative cursor-default", className)}>
      <span
        aria-hidden
        className={
          "absolute -translate-y-6 opacity-0 transition-all duration-300 group-hover/text:translate-y-0 group-hover/text:opacity-100"
        }
      >
        {children}
      </span>
      <span
        className={
          "block translate-y-0 opacity-100 transition-all duration-300 group-hover/text:translate-y-6 group-hover/text:opacity-0 group-hover/text:blur-xs"
        }
      >
        {children}
      </span>
    </div>
  );
};
