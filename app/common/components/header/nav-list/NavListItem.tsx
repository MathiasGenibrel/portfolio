import { FC, MouseEventHandler } from "react";
import clsx from "clsx";
import { useAnchor } from "~/common/hooks/useAnchor";

interface NavListItemProps {
  children: string;
  href: `#${string}`;
  toggleMenu: () => void;
}

export const NavListItem: FC<NavListItemProps> = ({
  children,
  href,
  toggleMenu,
}) => {
  const anchorHandler = useAnchor();

  const clickHandler: MouseEventHandler<HTMLAnchorElement> = (e) => {
    toggleMenu();
    anchorHandler(e, href);
  };

  return (
    <li
      className={clsx(
        "transition-all duration-300",
        "bg-stone-300/0 hover:bg-stone-300/50",
        "flex min-h-12 items-center rounded-lg px-4",
        "cursor-pointer",
        "font-display",
      )}
    >
      <a
        href={href}
        onClick={clickHandler}
        className={"flex h-full w-full items-center text-nowrap"}
      >
        {children}
      </a>
    </li>
  );
};
