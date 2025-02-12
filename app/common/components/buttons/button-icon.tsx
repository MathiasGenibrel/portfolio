import { FC } from "react";

interface IconProps {
  className?: HTMLElement["className"];
}

interface ButtonIconProps {
  Icon: FC<IconProps>;
  href: `https://${string}` | `mailto:${string}`;
  title: string;
}

export const ButtonIcon: FC<ButtonIconProps> = ({ Icon, href, title }) => {
  return (
    <a
      href={href}
      title={title}
      aria-label={title}
      className={"group relative overflow-hidden rounded-lg bg-stone-700 p-3"}
    >
      <Icon
        className={
          "relative h-6 transition-transform duration-200 group-hover:translate-y-12 group-focus:translate-y-12"
        }
      />
      <Icon
        className={
          "absolute top-3 left-3 h-6 -translate-y-12 transition-transform duration-200 group-hover:translate-y-0 group-focus:translate-y-0"
        }
      />
    </a>
  );
};
