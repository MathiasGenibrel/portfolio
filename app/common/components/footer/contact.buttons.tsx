import { FC } from "react";
import { ButtonLink } from "~/common/components/buttons/ButtonLink";

export const ContactButtons: FC = () => {
  return (
    <article className={"mt-8 flex flex-col gap-2 md:mt-0"}>
      <ButtonLink href={"mailto:contact@mathias.run"} className={"text-nowrap"}>
        Contactez-moi
      </ButtonLink>
      <div className={"flex items-center gap-4 opacity-60"}>
        <hr className={"w-full text-amber-50 opacity-50"} />
        <span className={"text-nowrap"}>ou alors</span>
        <hr className={"w-full text-amber-50 opacity-50"} />
      </div>
      <ButtonLink href={"https://calendly.com/mathias-geni/premier-contact"}>
        <span className={"text-nowrap"}>Planifier un appel vidéo</span>
        <span className={"text-xs text-nowrap opacity-65"}>15 min</span>
      </ButtonLink>
    </article>
  );
};
