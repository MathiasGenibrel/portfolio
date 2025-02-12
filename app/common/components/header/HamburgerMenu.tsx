import { FC } from "react";
import clsx from "clsx";

interface HamburgerMenuProps {
  handleClick: () => void;
  isOpen: boolean;
}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({
  handleClick,
  isOpen,
}) => {
  return (
    <button
      className={clsx(
        "z-50 md:hidden",
        "mr-2 h-8 w-8",
        "pointer-events-auto flex cursor-pointer flex-col items-center justify-center",
      )}
      onClick={handleClick}
      aria-label="Toggle menu"
    >
      <span
        className={clsx(
          "block h-0.5 w-6 bg-stone-800",
          "transition-all duration-300",
          isOpen ? "translate-y-0.5 rotate-45" : "-translate-y-1",
        )}
      />
      <span
        className={clsx(
          "block h-0.5 bg-stone-800",
          "transition-all duration-300",
          isOpen ? "w-0 opacity-0" : "w-6 opacity-100",
        )}
      />
      <span
        className={clsx(
          "block h-0.5 w-6 bg-stone-800",
          "transition-all duration-300",
          isOpen ? "-translate-y-0.5 -rotate-45" : "translate-y-1",
        )}
      />
    </button>
  );
};
