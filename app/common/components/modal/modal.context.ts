import type { ModalContent } from "~/common/components/modal/modal.type";
import { createContext } from "react";

interface ModalContextType {
  title: ModalContent["title"];
  description: ModalContent["description"];
  close: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);
