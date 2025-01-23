import {FC} from "react";
import clsx from "clsx";
import {Header} from "../common/components/header/Header";


type ColoredSpanProps = {
  children: string;
  className?: HTMLSpanElement["className"];
};

export const ColoredSpan: FC<ColoredSpanProps> = ({ children, className }) => {
  return <span className={clsx("text-blue-500", className)}>{children}</span>;
};

export function Welcome({ message }: { message: string }) {
  return (
    <>
      <Header />
      <main className={"flex flex-col justify-center items-center px-4 mt-14"}>
        <section className={"py-16 flex flex-col gap-4"}>
          <h1
            className={
              "w-full text-6xl flex flex-col font-heading leading-16 items-end font-heading"
            }
          >
            <span>Salut !</span>
            <span>
              Je suis <ColoredSpan>M</ColoredSpan>athias
              {/*ᒲᔑℸ ̣⍑¦ᔑᓭ => Mathias en table d'enchant*/}
            </span>
          </h1>
          <article>
            <p className={"font-display text-lg"}>
              <strong className={"font-medium"}>
                Je suis un véritable sorcier du front-end
              </strong>{" "}
              qui métamorphose vos défis quotidiens en solutions innovantes.
            </p>
          </article>
          <img
            src={"https://picsum.photos/600"}
            alt={"Animation en stop motion pour motiver les personnes à scroll"}
            className={
              "starting-clip-path-animation-bottom pt-8 aspect-square w-full -z-10"
            }
          />
          <img
            src={"https://picsum.photos/600"}
            alt={"Animation en stop motion pour motiver les personnes à scroll"}
            className={
              "starting-clip-path-animation-bottom pt-8 aspect-square w-full -z-10"
            }
          />
          <img
            src={"https://picsum.photos/600"}
            alt={"Animation en stop motion pour motiver les personnes à scroll"}
            className={
              "starting-clip-path-animation-bottom pt-8 aspect-square w-full -z-10"
            }
          />
          <a
            href={"#"}
            className={
              "flex flex-col items-center gap-2 starting:opacity-0 opacity-100 transition-all duration-500 delay-1000 -z-10"
            }
          >
            <div
              className={
                "aspect-square bg-stone-200 h-12 rounded-full animate-glow justify-center items-center flex"
              }
            >
              <svg
                width="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={"pt-1 aspect-square"}
              >
                <path
                  opacity="0.5"
                  d="M5.00004 6.25C4.68618 6.25 4.40551 6.44543 4.29662 6.73979C4.18773 7.03415 4.27364 7.36519 4.51194 7.56944L11.5119 13.5694C11.7928 13.8102 12.2073 13.8102 12.4881 13.5694L19.4881 7.56944C19.7264 7.36519 19.8123 7.03415 19.7035 6.73979C19.5946 6.44543 19.3139 6.25 19 6.25H5.00004Z"
                  className={"fill-stone-800"}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.43057 10.5119C4.70014 10.1974 5.17361 10.161 5.48811 10.4306L12 16.0122L18.5119 10.4306C18.8264 10.161 19.2999 10.1974 19.5695 10.5119C19.839 10.8264 19.8026 11.2999 19.4881 11.5695L12.4881 17.5695C12.2072 17.8102 11.7928 17.8102 11.5119 17.5695L4.51192 11.5695C4.19743 11.2999 4.161 10.8264 4.43057 10.5119Z"
                  fill="#1C274C"
                />
              </svg>
            </div>
            <span>Continuer de lire l'histoire</span>
          </a>
        </section>
      </main>
    </>
  );
}
