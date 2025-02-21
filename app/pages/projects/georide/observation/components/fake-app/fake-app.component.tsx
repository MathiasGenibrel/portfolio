import { FC, useRef } from "react";
import clsx from "clsx";
import { WidgetIcon } from "~/common/components/icons/widget.icon";
import { LockOpenIcon } from "~/common/components/icons/lock-open.icon";
import { MailIcon } from "~/common/components/icons/mail.icon";
import { BellIcon } from "~/common/components/icons/bell.icon";
import { PinIcon } from "~/common/components/icons/pin.icon";
import { Modal } from "~/common/components/modal/modal.component";
import type { ModalRef } from "~/common/components/modal/modal.type";
import { MotorcycleIcon } from "~/common/components/icons/motorcycle.icon";
import { HomeIcon } from "~/common/components/icons/home.icon";
import { SettingsIcon } from "~/common/components/icons/settings.icon";
import { StatIcon } from "~/common/components/icons/stat.icon";
import { UserGroupIcon } from "~/common/components/icons/user-group.icon";

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
      "Ce bouton permet de voir en temps réel l'état de verrouillage de sa moto",
    icon: LockOpenIcon,
    isDanger: true,
  },
  {
    title: "Localiser",
    description:
      "Ce bouton permet de recentrer la carte sur la position de sa moto",
    icon: PinIcon,
  },
  {
    title: "Faire sonner la sirène anti-vol",
    description: "Ce bouton permet de déclencher la sirène anti-vol de sa moto",
    icon: BellIcon,
  },
];

export const FakeApp: FC<FakeAppProps> = ({}) => {
  const modalRef = useRef<ModalRef>(null);

  return (
    <div
      className={
        "flex aspect-[207/448] max-h-[75vh] min-h-[38rem] flex-col justify-end self-center bg-[url(/georide/map.png)] bg-center"
      }
    >
      <Modal ref={modalRef}>
        <Modal.Title />
        <Modal.Description />
        <Modal.Actions />
      </Modal>

      <div
        className={
          "mx-auto mb-4 min-w-64 rounded-lg bg-white p-4 text-stone-900"
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

            <WidgetIcon className={"h-6 w-6 text-orange-500"} />
          </label>
        </div>
        <ul className={"mt-4 flex justify-between gap-4 px-4"}>
          {BUTTONS.map((btn, index) => (
            <li key={`fake-app-btn-${index}`}>
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
  );
};
