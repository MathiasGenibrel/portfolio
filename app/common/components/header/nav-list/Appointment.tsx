import { FC } from "react";
import { Separator } from "./Separator.tsx";
import clsx from "clsx";
import { ButtonLink } from "../../buttons/ButtonLink.tsx";

interface AppointmentProps {
  isOpen: boolean;
}

export const Appointment: FC<AppointmentProps> = ({ isOpen }) => {
  return (
    <div className={"flex flex-col gap-2"}>
      <Separator
        className={clsx(
          "transition-all, duration-300",
          isOpen ? "opacity-40 delay-150" : "opacity-0",
        )}
      >
        Prendre rendez-vous
      </Separator>

      <ButtonLink
        href={"https://calendly.com/mathias-geni/premier-contact"}
        className={clsx(
          "transition-opacity, duration-300",
          isOpen ? "opacity-100 delay-150" : "opacity-0",
        )}
      >
        <span>Premier contact sur Calendly</span>
        <span className={"text-xs opacity-65"}>15 min</span>
      </ButtonLink>
    </div>
  );
};
