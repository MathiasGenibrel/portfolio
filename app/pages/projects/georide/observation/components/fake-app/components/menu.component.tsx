import { FC } from "react";
import { VehicleInformation } from "~/pages/projects/georide/observation/components/fake-app/components/vehicle-information.component";
import { ToggleMenu } from "~/pages/projects/georide/observation/components/fake-app/components/toggle-menu.component";
import { FakeAppButtons } from "~/pages/projects/georide/observation/components/fake-app/components/buttons.component";

interface MenuProps {
  onButtonClick: (title: string, description: string) => void;
}

export const Menu: FC<MenuProps> = ({ onButtonClick }) => {
  return (
    <div
      className={
        "mx-3 mb-4 min-w-64 overflow-hidden rounded-lg bg-white p-4 text-stone-900"
      }
    >
      <div className={"flex items-center justify-between gap-4"}>
        <VehicleInformation />

        <ToggleMenu />
      </div>
      <FakeAppButtons onButtonClick={onButtonClick} />
    </div>
  );
};
