import { FC } from "react";

interface LinkedinIconProps {
  className?: HTMLSpanElement["className"];
}

export const LinkedinIcon: FC<LinkedinIconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1393 14.628V14.5842L17.1113 14.628H17.1393Z"
        className={"fill-amber-50"}
      />
      <path
        d="M17.1393 25.4395V18.3783C17.1393 18.0003 17.1672 17.6222 17.2792 17.3527C17.582 16.5985 18.2733 15.8162 19.4353 15.8162C20.956 15.8162 21.5632 16.9748 21.5632 18.6758V25.4395H25.765V18.1875C25.765 14.3025 23.693 12.4965 20.928 12.4965C18.6985 12.4965 17.6993 13.7215 17.1393 14.5842V14.628H17.1113L17.1393 14.5842V12.7958H12.9392C12.9917 13.9823 12.9392 25.4395 12.9392 25.4395H17.1393Z"
        className={"fill-amber-50"}
      />
      <path
        d="M10.6502 25.4395V12.7958H6.4485V25.4395H10.6502Z"
        className={"fill-amber-50"}
      />
      <path
        d="M8.55025 11.0685C10.015 11.0685 10.9267 10.099 10.9267 8.8845C10.9005 7.64375 10.0168 6.7005 8.57825 6.7005C7.13975 6.7005 6.2 7.6455 6.2 8.8845C6.2 10.099 7.11175 11.0685 8.52225 11.0685H8.55025Z"
        className={"fill-amber-50"}
      />
    </svg>
  );
};
