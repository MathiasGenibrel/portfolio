import { useEffect, useReducer } from "react";

export const useMenuHeader = () => {
  const [isOpen, toggle] = useReducer((prev) => !prev, false);

  // This effect is used to prevent execution on the server side
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return [isOpen, toggle] as const;
};
