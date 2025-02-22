import { FC, useRef } from "react";
import clsx from "clsx";
import { WidgetIcon } from "~/common/components/icons/widget.icon";
import { LockOpenIcon } from "~/common/components/icons/lock-open.icon";
import { BellIcon } from "~/common/components/icons/bell.icon";
import { PinIcon } from "~/common/components/icons/pin.icon";
import { Modal } from "~/common/components/modal/modal.component";
import type { ModalRef } from "~/common/components/modal/modal.type";
import { MotorcycleIcon } from "~/common/components/icons/motorcycle.icon";
import { HomeIcon } from "~/common/components/icons/home.icon";
import { SettingsIcon } from "~/common/components/icons/settings.icon";
import { StatIcon } from "~/common/components/icons/stat.icon";
import { UserGroupIcon } from "~/common/components/icons/user-group.icon";
import { ShareIcon } from "~/common/components/icons/share.icon";
import { ThiefIcon } from "~/common/components/icons/thief.icon";

interface FakeAppProps {}

interface Button {
  icon: FC;
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
    title: "Faire sonner la sirène anti-vol",
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
    title: "Faire sonner la sirène anti-vol",
    description: "Permet de déclencher la sirène anti-vol de sa moto",
    icon: ThiefIcon,
  },
  {
    title: "Réglages du véhicule",
    description:
      "Permet de configurer les paramètres de sa moto (sirène antivol, badge, etc.)",
    icon: SettingsIcon,
  },
];

export const FakeApp: FC<FakeAppProps> = ({}) => {
  const modalRef = useRef<ModalRef>(null);

  return (
    <>
      <Modal ref={modalRef}>
        <Modal.Title />
        <Modal.Description />
        <Modal.Actions />
      </Modal>

      <div
        className={
          "group relative flex aspect-[207/448] max-h-[75vh] min-h-[38rem] flex-col justify-end self-center bg-[url(/georide/map.png)] bg-center"
        }
      >
        <div
          className={clsx(
            "absolute top-4 right-0 left-0 mx-auto",
            "w-fit rounded-full bg-blue-50 px-4 py-1 text-sm text-blue-700 drop-shadow-md",
            "border-2 border-blue-400",
          )}
        >
          <span className={"font-medium"}>Zone d'interaction</span>
        </div>
        <div
          className={
            "mx-8 mb-4 min-w-64 overflow-hidden rounded-lg bg-white p-4 text-stone-900 sm:mx-3"
          }
        >
          <div className={"flex items-center justify-between gap-4"}>
            <div className={"flex flex-col"}>
              <span className={"flex gap-1"}>
                <div className={"relative w-1 rounded-full bg-orange-400"} />
                Moto de Mathias
              </span>
              <span
                className={
                  "relative left-2 flex items-center gap-2 text-xs text-stone-900/50"
                }
              >
                À l'arrêt
                <div
                  className={
                    "mt-0.5 aspect-square h-1.5 w-1.5 rounded-full bg-green-300"
                  }
                />
              </span>
            </div>
            <label htmlFor={"widget"} className={"group cursor-pointer"}>
              <input id={"widget"} className={"hidden"} type={"checkbox"} />

              <WidgetIcon
                className={
                  "border-animate h-8 w-8 rounded-sm border-2 p-1 text-orange-500"
                }
              />
            </label>
          </div>
          <ul
            className={clsx(
              "mt-4 flex h-10 flex-wrap justify-between gap-5 px-4 group-has-checked:h-24",
              "transition-all duration-300",
            )}
          >
            {BUTTONS.map((btn, index) => (
              <li
                key={`fake-app-btn-${index}`}
                className={"flex basis-[20%] justify-center"}
              >
                <button
                  onClick={() =>
                    modalRef.current?.open({
                      title: btn.title,
                      description: btn.description,
                    })
                  }
                  title={btn.title}
                  className={clsx(
                    "flex h-10 w-10 cursor-pointer items-center gap-4 rounded-full p-2.5 text-white drop-shadow-sm",
                    "border-animate border-2 transition-all duration-300",
                    btn.isDanger
                      ? "bg-red-500"
                      : "bg-linear-30 from-orange-500 to-orange-300 to-80%",
                  )}
                >
                  <btn.icon />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={
            "flex justify-between gap-4 rounded-t-2xl bg-white p-4 text-stone-600"
          }
        >
          <HomeIcon
            gradient
            className={"h-7 w-6 border-b-2 border-orange-500 pb-1"}
          />
          <StatIcon className={"h-6 w-6"} />
          <div
            className={
              "rotate-45 rounded-md bg-linear-30 from-orange-500 to-orange-300 to-80% p-[3px]"
            }
          >
            <UserGroupIcon className={"b h-6 w-6 -rotate-45 text-white"} />
          </div>
          <MotorcycleIcon className={"h-6 w-6"} />
          <SettingsIcon className={"h-6 w-6"} />
        </div>
      </div>
    </>
  );
};
