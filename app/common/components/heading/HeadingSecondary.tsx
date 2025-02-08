import { FC } from "react";

interface HeadingProps {
  children: string;
}

export const HeadingSecondary: FC<HeadingProps> = ({ children }) => {
  return (
    <h2 className={"mb-4 text-sm font-medium text-amber-50 opacity-75"}>
      {children}
    </h2>
  );
};
