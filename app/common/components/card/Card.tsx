import { Context, createContext, ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router";

interface CardContext {
  link: string;
  title: string;
  description: string;
  imageUrl: string | [string, string];
}

interface CardProps extends CardContext {
  children: ReactNode;
}

export const CardContext = createContext<CardContext | null>(null);

export default function Card({
  children,
  link,
  title,
  description,
  imageUrl,
}: CardProps) {
  return (
    <CardContext.Provider
      value={{
        link,
        title,
        description,
        imageUrl,
      }}
    >
      <Link
        to={link}
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
  const { link } = useRequiredContext(CardContext);
  const navigate = useNavigate();

  return (
    <div className={"group relative self-end"} onClick={() => navigate(link)}>
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
