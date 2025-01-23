import { FC } from "react";
import clsx from "clsx";

interface MadeWithLoveProps {
  isOpen: boolean;
}

export const MadeWithLove: FC<MadeWithLoveProps> = ({ isOpen }) => {
  return (
    <article
      className={clsx(
        "flex gap-1.5 items-center justify-center",
        "transition-all, duration-300",
        isOpen ? "opacity-40 delay-150" : "opacity-0",
      )}
    >
      <span className={"font-display text-stone-800 text-sm"}>
        Fais avec le
      </span>

      <HeartIcon />
    </article>
  );
};

const HeartIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 9.13746C2 14.0004 6.01943 16.5918 8.96173 18.9112C10 19.7297 11 20.5004 12 20.5004C13 20.5004 14 19.7297 15.0383 18.9112C17.9806 16.5918 22 14.0004 22 9.13746C22 4.27453 16.4998 0.82583 12 5.501C7.50016 0.82583 2 4.27453 2 9.13746Z"
        className={"fill-current text-stone-800"}
      />
    </svg>
  );
};
