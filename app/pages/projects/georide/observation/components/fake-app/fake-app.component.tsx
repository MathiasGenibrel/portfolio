import { FC, useRef } from "react";
import clsx from "clsx";
import { WidgetIcon } from "~/common/components/icons/widget.icon";
import { Modal } from "~/common/components/modal/modal.component";
import type { ModalRef } from "~/common/components/modal/modal.type";
import { MotorcycleIcon } from "~/common/components/icons/motorcycle.icon";
import { HomeIcon } from "~/common/components/icons/home.icon";
import { SettingsIcon } from "~/common/components/icons/settings.icon";
import { StatIcon } from "~/common/components/icons/stat.icon";
import { UserGroupIcon } from "~/common/components/icons/user-group.icon";
import { FakeAppButtons } from "~/pages/projects/georide/observation/components/fake-app/components/buttons.component";

interface FakeAppProps {}

export const FakeApp: FC<FakeAppProps> = () => {
  const modalRef = useRef<ModalRef>(null);

  const handleButtonClick = (title: string, description: string) => {
    modalRef.current?.open({
      title: title,
      description: description,
    });
  };

  return (
    <>
      <Modal ref={modalRef}>
        <Modal.Title />
        <Modal.Description />
        <Modal.Actions />
      </Modal>

      <div
        className={clsx(
          "group relative",
          "aspect-[207/448] max-h-[75vh] min-h-[38rem]",
          "flex flex-col justify-end self-center overflow-hidden rounded-3xl",
          "bg-[url(/georide/map.png)] bg-center",
        )}
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
            "mx-3 mb-4 min-w-64 overflow-hidden rounded-lg bg-white p-4 text-stone-900"
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
          <FakeAppButtons onButtonClick={handleButtonClick} />
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
