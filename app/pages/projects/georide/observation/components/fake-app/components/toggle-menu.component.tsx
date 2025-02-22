import { FC } from "react";
import { WidgetIcon } from "~/common/components/icons/widget.icon";

interface ToggleMenuProps {}

export const ToggleMenu: FC<ToggleMenuProps> = ({}) => {
  return (
    <label htmlFor={"widget"} className={"cursor-pointer"}>
      <input id={"widget"} className={"hidden"} type={"checkbox"} />

      <WidgetIcon
        className={
          "border-animate h-8 w-8 rounded-sm border-2 p-1 text-orange-500"
        }
      />
    </label>
  );
};
