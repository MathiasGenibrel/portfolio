import { FC } from "react";
import { TriangleWarningIcon } from "~/common/components/icons/triangle-warning.icon";
import clsx from "clsx";

interface WarningBoxProps {
  children: string;
  className?: HTMLDivElement["className"];
}

export const WarningBox: FC<WarningBoxProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-4 rounded-lg border-2 border-yellow-300 bg-yellow-50 p-4 text-yellow-800",
        className,
      )}
    >
      <div
        className={
          "text-background flex h-9 w-9 items-center justify-center rounded-full bg-yellow-500 p-2"
        }
      >
        <TriangleWarningIcon className={"h-5.5 w-5.5"} />
      </div>
      <span className={"font-display font-medium"}>{children}</span>
    </div>
  );
};
