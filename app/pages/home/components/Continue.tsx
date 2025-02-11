import { FC, MouseEventHandler } from "react";
import { ArrowBottom } from "~/common/components/icons/arrow-bottom";
import { useAnchor } from "~/common/hooks/useAnchor";

interface ContinueProps {}

export const Continue: FC<ContinueProps> = () => {
  const anchorHandler = useAnchor();

  const clickHandler: MouseEventHandler<HTMLAnchorElement> = (e) =>
    anchorHandler(e, "#about");

  return (
    <a
      onClick={clickHandler}
      href={"/#about"}
      className={
        "flex flex-col items-center gap-2 opacity-100 transition-all delay-1000 duration-500 starting:opacity-0"
      }
    >
      <div
        className={
          "animate-glow flex aspect-square h-12 items-center justify-center rounded-full bg-stone-200"
        }
      >
        <ArrowBottom className={"h-8 pt-1"} />
      </div>
      <span>Continuer de lire mon histoire</span>
    </a>
  );
};
