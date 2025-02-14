import {
  Context,
  createContext,
  MouseEventHandler,
  ReactNode,
  useContext,
} from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

interface CardContext {
  link: string;
  deployLink?: string;
  title: string;
  description: string;
  clickHandler?: MouseEventHandler<HTMLElement>;
  imageUrl: string | [string, string];
}

interface CardProps extends Omit<CardContext, "clickHandler"> {
  children: ReactNode;
}

export const CardContext = createContext<CardContext | null>(null);

export default function Card({
  children,
  link,
  deployLink,
  title,
  description,
  imageUrl,
}: CardProps) {
  const clickHandler: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toast("Documentation en cours d'implémentation", {
      classNames: {
        toast: "!bg-amber-50 !text-stone-900 flex-col",
        closeButton: "!bg-stone-900 !text-amber-50",
        title: "font-display !text-lg",
        actionButton: "bg-amber-50 !p-5 !text-base !font-medium font-display",
        description: "opacity-75 font-display text-sm",
      },
      closeButton: true,
      description: deployLink
        ? "La documentation détaillant le processus de création est actuellement en cours d'implémentation. En attendant, vous pouvez découvrir le projet en ligne."
        : "La documentation détaillant le processus de création est actuellement en cours d'implémentation.",
      action: deployLink
        ? {
            label: "Voir le projet",
            onClick: () => {
              window.open(deployLink, "_blank");
            },
          }
        : null,
    });
  };

  return (
    <CardContext.Provider
      value={{
        link,
        deployLink,
        clickHandler,
        title,
        description,
        imageUrl,
      }}
    >
      <Link
        to={link}
        title={title}
        onClick={clickHandler}
        className={
          "group/container flex grow basis-3xs cursor-pointer flex-col text-amber-50"
        }
      >
        {children}
      </Link>
    </CardContext.Provider>
  );
}

const useRequiredContext = <T,>(context: Context<T>): NonNullable<T> => {
  const ctx = useContext(context);

  if (!ctx) throw new Error("Missing required context");

  return ctx;
};

Card.Title = function CardTitle() {
  const { title } = useRequiredContext(CardContext);

  return <h3 className={"mt-4 mb-1 text-xl font-bold"}>{title}</h3>;
};

Card.Description = function CardDescription() {
  const { description } = useRequiredContext(CardContext);

  return (
    <p className={"mb-4 line-clamp-3 text-amber-50 opacity-75"}>
      {description}
    </p>
  );
};

Card.Image = function CardImage() {
  const { imageUrl } = useRequiredContext(CardContext);

  if (typeof imageUrl === "string") {
    return (
      <picture className={"overflow-hidden bg-amber-50"}>
        <img
          src={Array.isArray(imageUrl) ? imageUrl[0] : imageUrl}
          height={400}
          width={400}
          alt={"Projet"}
          className={
            "aspect-square w-full object-cover transition-transform duration-200 group-hover/container:scale-115"
          }
        />
      </picture>
    );
  }

  return (
    <picture className={"relative"}>
      <img
        src={imageUrl[0]}
        height={400}
        width={400}
        alt={"Projet"}
        className={
          "aspect-square w-full object-cover transition-transform duration-200"
        }
      />
      <img
        src={imageUrl[1]}
        height={400}
        width={400}
        alt={"Projet"}
        className={
          "cp-image transition-transform-200ms absolute top-0 left-0 aspect-square w-full object-cover"
        }
      />
    </picture>
  );
};

Card.Button = function CardLink() {
  const { clickHandler } = useRequiredContext(CardContext);

  const handleClick: MouseEventHandler<HTMLElement> = (e) => {
    clickHandler && clickHandler(e);
  };

  return (
    <div className={"group relative self-end"} onClick={handleClick}>
      <div className={"cursor-pointer px-6 py-3"}>Voir le projet</div>
      <button
        className={
          "cp-button absolute top-0 left-0 cursor-pointer bg-amber-50 px-6 py-3 text-stone-900"
        }
      >
        Voir le projet
      </button>
    </div>
  );
};
