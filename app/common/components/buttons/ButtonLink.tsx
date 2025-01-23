import { FC, ReactNode } from "react";
import clsx from "clsx";

interface ButtonLinkProps {
  children: ReactNode;
  href: `https://${string}`;
  className?: HTMLAnchorElement["className"];
}

export const ButtonLink: FC<ButtonLinkProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <a
      href={href}
      target={"_blank"}
      className={clsx(
        "flex justify-between items-baseline",
        "font-display font-medium bg-blue-500 text-background px-4 py-2 rounded-lg w-full",
        "hover:bg-blue-600",
        className,
      )}
      title={"Prendre rendez-vous pour un premier contact sur calendly"}
    >
      {children}
    </a>
  );
};
