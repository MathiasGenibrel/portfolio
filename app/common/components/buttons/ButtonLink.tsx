import { FC, ReactNode } from "react";
import clsx from "clsx";

interface ButtonLinkProps {
  children: ReactNode;
  href: `https://${string}` | `mailto:${string}`;
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
        "flex items-baseline justify-between gap-4",
        "font-display text-background w-full rounded-lg bg-blue-500 px-5 py-3 font-medium",
        "hover:bg-blue-600",
        className,
      )}
      title={"Prendre rendez-vous pour un premier contact sur calendly"}
    >
      {children}
    </a>
  );
};
