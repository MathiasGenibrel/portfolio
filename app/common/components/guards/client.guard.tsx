import { FC, ReactNode } from "react";

interface ClientGuardProps {
  fallback: ReactNode;
  children: ReactNode;
}

export const ClientGuard: FC<ClientGuardProps> = ({ children, fallback }) => {
  if (typeof window === "undefined") {
    return fallback;
  }

  return children;
};
