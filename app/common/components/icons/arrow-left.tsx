import { FC } from "react";
import { IconProps } from "~/common/components/icons/icon.types";
import clsx from "clsx";

interface ArrowLeftProps extends IconProps {}

export const ArrowLeft: FC<ArrowLeftProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("aspect-square h-5 text-amber-50", className)}
    >
      <path
        d="M8.16485 11.6296L14.7953 5.1999C15.2091 4.79869 16 5.04189 16 5.5703L16 18.4297C16 18.9581 15.2091 19.2013 14.7953 18.8001L8.16485 12.3704C7.94505 12.1573 7.94505 11.8427 8.16485 11.6296Z"
        className={"fill-current"}
      />
    </svg>
  );
};
