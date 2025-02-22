import { FC } from "react";
import { HomeIcon } from "~/common/components/icons/home.icon";
import { StatIcon } from "~/common/components/icons/stat.icon";
import { UserGroupIcon } from "~/common/components/icons/user-group.icon";
import { MotorcycleIcon } from "~/common/components/icons/motorcycle.icon";
import { SettingsIcon } from "~/common/components/icons/settings.icon";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
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
  );
};
