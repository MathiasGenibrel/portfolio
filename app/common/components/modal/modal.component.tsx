import {
  FC,
  MouseEventHandler,
  RefObject,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import Heading from "~/common/components/heading/Heading";

export type ModalRef = { open: (modal: Modal) => void; close: () => void };

interface ModalProps {
  ref: RefObject<ModalRef | null>;
}

interface Modal {
  title: string;
  description: string;
}

export const Modal: FC<ModalProps> = ({ ref }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });
  const openHandler = ({ title, description }: Modal) => {
    modalRef.current?.show();
    setModalContent({ title, description });
  };

  const closeHandler = () => {
    modalRef.current?.close();
  };

  const stopPropagationHandler: MouseEventHandler<HTMLElement> = (e) => {
    e.stopPropagation();
  };

  useImperativeHandle(ref, () => ({
    open: openHandler,
    close: closeHandler,
  }));

  return (
    <dialog
      className={clsx(
        "group fixed top-0 left-0 z-40 flex h-screen w-full items-center justify-center bg-stone-900/25 px-8",
        "pointer-events-none opacity-0 backdrop-blur-none",
        "open:pointer-events-auto open:opacity-100 open:backdrop-blur-sm",
        "transition-all duration-300",
      )}
      ref={modalRef}
      onClick={closeHandler}
    >
      <div
        className={clsx(
          "bg-background flex flex-col rounded-2xl p-4 text-stone-900 transition-all duration-300",
          "translate-y-12 opacity-0",
          "group-open:translate-y-0 group-open:opacity-100",
        )}
        onClick={stopPropagationHandler}
      >
        <Heading.Quaternary className={"font-bold"}>
          {modalContent.title}
        </Heading.Quaternary>
        <p className={"mt-2 opacity-70"}>{modalContent.description}</p>
        <button
          onClick={() => modalRef.current?.close()}
          className={
            "mt-4 cursor-pointer self-end rounded-md bg-stone-900 px-5 py-3 text-amber-50"
          }
        >
          Compris
        </button>
      </div>
    </dialog>
  );
};
