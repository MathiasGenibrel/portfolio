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
        "lg:hidden z-50",
        "w-8 h-8 mr-2",
        "flex flex-col justify-center items-center pointer-events-auto cursor-pointer",
      )}
      onClick={handleClick}
      aria-label="Toggle menu"
    >
      <span
        className={clsx(
          "block h-0.5 w-6 bg-stone-800",
          "transition-all duration-300",
          isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1",
        )}
      />
      <span
        className={clsx(
          "block h-0.5 bg-stone-800",
          "transition-all duration-300",
          isOpen ? "opacity-0 w-0" : "opacity-100 w-6",
        )}
      />
      <span
        className={clsx(
          "block h-0.5 w-6 bg-stone-800",
          "transition-all duration-300",
          isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1",
        )}
      />
    </button>
  );
};
