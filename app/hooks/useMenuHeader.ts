import { useEffect, useReducer } from "react";

export const useMenuHeader = () => {
  const [isOpen, toggle] = useReducer((prev) => !prev, false);

  // This effect is used to prevent execution on the server side
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden");
    document.body.classList.toggle("md:overflow-auto");
  }, [isOpen]);

  return [isOpen, toggle] as const;
};
