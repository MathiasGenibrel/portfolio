import { Context, useContext } from "react";

export const useRequiredContext = <T>(context: Context<T>): NonNullable<T> => {
  const ctx = useContext(context);

  if (!ctx) throw new Error("Missing required context");

  return ctx;
};
