import { ReactNode } from "react";
import clsx from "clsx";

interface TextProps {
  children: ReactNode;
  className?: HTMLSpanElement["className"];
}

interface LightTextProps extends TextProps {}
interface DarkTextProps extends TextProps {
  italic?: boolean;
}

export default function Text({ children, className }: TextProps) {
  return <span className={clsx("text-amber-50", className)}>{children}</span>;
}

Text.Light = function ({ children, className }: LightTextProps) {
  return <Text className={className}>{children}</Text>;
};

Text.Dark = function ({ children, italic = false, className }: DarkTextProps) {
  return (
    <Text className={clsx("opacity-50", italic && "italic", className)}>
      {children}
    </Text>
  );
};
