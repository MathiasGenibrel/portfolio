import { FC } from "react";
import clsx from "clsx";

interface NavListItemProps {
  children: string;
}

export const NavListItem: FC<NavListItemProps> = ({ children }) => {
  return (
    <li
      className={clsx(
        "transition-all duration-300",
        "bg-stone-300/0 hover:bg-stone-300/50",
        "px-4 min-h-12 flex items-center rounded-lg",
        "cursor-pointer",
        "font-display",
      )}
    >
      {children}
    </li>
  );
};
