import { FC, ReactNode, RefObject } from "react";

export interface ModalContent {
  title: string;
  description: string;
}

export type ModalRef = {
  open: (modal: ModalContent) => void;
  close: () => void;
};

export interface ModalProps {
  ref: RefObject<ModalRef | null>;
  children: ReactNode;
}

export type CompoundComponentProps = FC<{
  className?: HTMLElement["className"];
}>;
