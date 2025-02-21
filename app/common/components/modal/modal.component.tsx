import { FC, useImperativeHandle } from "react";
import clsx from "clsx";
import { useRequiredContext } from "~/common/hooks/useRequiredContext";
import Heading from "~/common/components/heading/Heading";
import { useModal } from "~/common/components/modal/modal.hook";
import { ModalContext } from "~/common/components/modal/modal.context";
import type {
  CompoundComponentProps,
  ModalProps,
} from "~/common/components/modal/modal.type";

export const Modal: FC<ModalProps> & {
  Title: CompoundComponentProps;
  Description: CompoundComponentProps;
  Actions: CompoundComponentProps;
} = ({ ref, children }) => {
  const modal = useModal();

  useImperativeHandle(ref, () => ({
    open: modal.open,
    close: modal.close,
  }));

  return (
    <dialog
      className={clsx(
        "group fixed top-0 left-0 z-40 flex h-screen w-full items-center justify-center bg-stone-900/25 px-8",
        "pointer-events-none opacity-0 backdrop-blur-none",
        "open:pointer-events-auto open:opacity-100 open:backdrop-blur-sm",
        "transition-all duration-300",
      )}
      ref={modal.ref}
      onClick={modal.close}
    >
      <ModalContext.Provider
        value={{
          title: modal.content.title,
          description: modal.content.description,
          close: modal.close,
        }}
      >
        <div
          className={clsx(
            "bg-background flex flex-col rounded-2xl p-4 text-stone-900 transition-all duration-300",
            "translate-y-12 opacity-0",
            "group-open:translate-y-0 group-open:opacity-100",
          )}
          onClick={modal.stopPropagation}
        >
          {children}
        </div>
      </ModalContext.Provider>
    </dialog>
  );
};

// Compound Components
Modal.Title = ({ className }) => {
  const { title } = useRequiredContext(ModalContext);
  return <Heading.Quaternary>{title}</Heading.Quaternary>;
};

Modal.Description = ({ className }) => {
  const { description } = useRequiredContext(ModalContext);
  return <p className={clsx("mt-2 opacity-70", className)}>{description}</p>;
};

Modal.Actions = ({ className }) => {
  const { close } = useRequiredContext(ModalContext);
  return (
    <div className={clsx("mt-4 flex justify-end", className)}>
      <button
        onClick={close}
        className="cursor-pointer rounded-md bg-stone-900 px-5 py-3 text-amber-50"
      >
        Compris
      </button>
    </div>
  );
};
