import { useEffect, useReducer } from "react";

export const useMenuHeader = () => {
  const [isOpen, toggle] = useReducer((prev) => !prev, false);

  // This effect is used to prevent execution on the server side
  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden", "md:overflow-auto")
      : document.body.classList.remove("overflow-hidden", "md:overflow-auto");
  }, [isOpen]);

  return [isOpen, toggle] as const;
};
