import { FC, useRef } from "react";
import clsx from "clsx";
import { Modal } from "~/common/components/modal/modal.component";
import type { ModalRef } from "~/common/components/modal/modal.type";
import { Navbar } from "~/pages/projects/georide/observation/components/fake-app/components/navbar.component";
import { Pill } from "~/pages/projects/georide/observation/components/fake-app/components/pill.component";
import { Menu } from "~/pages/projects/georide/observation/components/fake-app/components/menu.component";

interface FakeAppProps {}

export const FakeApp: FC<FakeAppProps> = () => {
  const modalRef = useRef<ModalRef>(null);

  const handleButtonClick = (title: string, description: string) => {
    modalRef.current?.open({
      title: title,
      description: description,
    });
  };

  return (
    <>
      <Modal ref={modalRef}>
        <Modal.Title />
        <Modal.Description />
        <Modal.Actions />
      </Modal>

      <div
        className={clsx(
          "group relative",
          "aspect-[207/448] max-h-[75vh] min-h-[38rem]",
          "flex flex-col justify-end self-center overflow-hidden rounded-3xl",
          "bg-[url(/georide/map.png)] bg-center",
        )}
      >
        <Pill />

        <Menu onButtonClick={handleButtonClick} />

        <Navbar />
      </div>
    </>
  );
};
