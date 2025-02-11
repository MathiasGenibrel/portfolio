import { MouseEvent } from "react";
import { useNavigate } from "react-router";

type UseAnchorType = (
  element: MouseEvent<HTMLAnchorElement>,
  anchor: `#${string}`,
) => void;

export const useAnchor = (): UseAnchorType => {
  const navigate = useNavigate();

  return (e, anchor) => {
    e.preventDefault();

    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });

    navigate(anchor);
  };
};
