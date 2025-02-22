import { FC } from "react";

interface VehicleInformationProps {}

export const VehicleInformation: FC<VehicleInformationProps> = () => {
  return (
    <div className={"flex flex-col"}>
      <span className={"flex gap-1"}>
        <div className={"relative w-1 rounded-full bg-orange-400"} />
        Moto de Mathias
      </span>
      <Status />
    </div>
  );
};

const Status: FC = () => {
  return (
    <span
      className={
        "relative left-2 flex items-center gap-2 text-xs text-stone-900/50"
      }
    >
      À l'arrêt
      <div
        className={"mt-0.5 aspect-square h-1.5 w-1.5 rounded-full bg-green-300"}
      />
    </span>
  );
};
