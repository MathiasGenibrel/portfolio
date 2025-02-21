import { FC } from "react";
import { IconProps } from "~/common/components/icons/icon.types";

interface PinIconProps extends IconProps {}

export const PinIcon: FC<PinIconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.00024C7.58172 2.00024 4 6.00283 4 10.5002C4 14.9624 6.55332 19.8127 10.5371 21.6747C11.4657 22.1088 12.5343 22.1088 13.4629 21.6747C17.4467 19.8127 20 14.9624 20 10.5002C20 6.00283 16.4183 2.00024 12 2.00024ZM12 12.0002C13.1046 12.0002 14 11.1048 14 10.0002C14 8.89567 13.1046 8.00024 12 8.00024C10.8954 8.00024 10 8.89567 10 10.0002C10 11.1048 10.8954 12.0002 12 12.0002Z"
        className={"fill-current"}
      />
    </svg>
  );
};
