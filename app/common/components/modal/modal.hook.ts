import { MouseEventHandler, useRef, useState } from "react";
import type { ModalContent } from "~/common/components/modal/modal.type";

export const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalContent, setModalContent] = useState<ModalContent>({
    title: "",
    description: "",
  });

  const openHandler = (content: ModalContent) => {
    modalRef.current?.show();
    setModalContent(content);
  };

  const closeHandler = () => {
    modalRef.current?.close();
  };

  const stopPropagationHandler: MouseEventHandler<HTMLElement> = (e) => {
    e.stopPropagation();
  };

  return {
    ref: modalRef,
    content: modalContent,
    open: openHandler,
    close: closeHandler,
    stopPropagation: stopPropagationHandler,
  };
};
