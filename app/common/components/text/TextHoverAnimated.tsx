import { FC } from "react";

interface TextHoverAnimatedProps {
  children: string;
}

export const TextHoverAnimated: FC<TextHoverAnimatedProps> = ({ children }) => {
  return (
    <div className={"group/text relative cursor-default"}>
      <span
        aria-hidden
        className={
          "absolute -translate-y-4 opacity-0 transition-all duration-200 group-hover/text:translate-y-0 group-hover/text:opacity-100"
        }
      >
        {children}
      </span>
      <span
        className={
          "block translate-y-0 opacity-100 transition-all duration-200 group-hover/text:translate-y-4 group-hover/text:opacity-0 group-hover/text:blur-sm"
        }
      >
        {children}
      </span>
    </div>
  );
};
