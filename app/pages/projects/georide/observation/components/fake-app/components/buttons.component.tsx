import { FC } from "react";
import clsx from "clsx";
import { LockOpenIcon } from "~/common/components/icons/lock-open.icon";
import { PinIcon } from "~/common/components/icons/pin.icon";
import { BellIcon } from "~/common/components/icons/bell.icon";
import { ShareIcon } from "~/common/components/icons/share.icon";
import { ThiefIcon } from "~/common/components/icons/thief.icon";
import { SettingsIcon } from "~/common/components/icons/settings.icon";
import { IconProps } from "~/common/components/icons/icon.types";

interface ButtonsProps {
  onButtonClick: (title: string, description: string) => void;
}

interface Button {
  icon: FC<IconProps>;
  title: string;
  description: string;
  isDanger?: boolean;
}

const BUTTONS: Button[] = [
  {
    title: "Verrouiller / Déverrouiller",
    description:
      "Permet de voir en temps réel l'état de verrouillage de sa moto",
    icon: LockOpenIcon,
    isDanger: true,
  },
  {
    title: "Localiser",
    description: "Permet de recentrer la carte sur la position de sa moto",
    icon: PinIcon,
  },
  {
    title: "Déclencher la sirène anti-vol",
    description: "Permet de déclencher la sirène anti-vol de sa moto",
    icon: BellIcon,
  },
  {
    title: "Partager la position",
    description:
      "Permet de créer un lien temporaire de suivis afin de partager sa position en temps réel",
    icon: ShareIcon,
  },
  {
    title: "Signaler un vol",
    description: "Permet de déclencher l'assistance après vol",
    icon: ThiefIcon,
  },
  {
    title: "Réglages du véhicule",
    description:
      "Permet de configurer les paramètres de sa moto (sirène antivol, badge, etc.)",
    icon: SettingsIcon,
  },
];

export const FakeAppButtons: FC<ButtonsProps> = ({ onButtonClick }) => {
  return (
    <ul
      className={clsx(
        "mt-4 flex h-10 flex-wrap justify-between gap-5 px-4 group-has-checked:h-40",
        "transition-all duration-300",
      )}
    >
      {BUTTONS.map((btn, index) => (
        <li
          key={`fake-app-btn-${index}`}
          className={
            "flex grow basis-[20%] flex-col items-center justify-center gap-1"
          }
        >
          <button
            onClick={() => onButtonClick(btn.title, btn.description)}
            title={btn.title}
            className={clsx(
              "flex h-10 w-10 cursor-pointer items-center gap-4 rounded-full p-2.5 text-white drop-shadow-sm",
              "border-animate border-2 transition-all duration-300",
              btn.isDanger
                ? "bg-red-500"
                : "bg-linear-30 from-orange-500 to-orange-300 to-80%",
            )}
          >
            <btn.icon className={"h-4"} />
          </button>
          <span
            className={clsx(
              "line-clamp-2 h-full text-center text-[9px] text-stone-900 opacity-0",
              "transition-all delay-0 duration-300 group-has-checked:opacity-50 group-has-checked:delay-100",
            )}
          >
            {btn.title}
          </span>
        </li>
      ))}
    </ul>
  );
};
