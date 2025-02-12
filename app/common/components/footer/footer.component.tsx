import { FC } from "react";
import { ContactButtons } from "~/common/components/footer/contact.buttons";
import { SocialButtons } from "~/common/components/footer/social-buttons.component";

interface FooterComponentProps {}

export const FooterComponent: FC<FooterComponentProps> = ({}) => {
  return (
    <footer className={"flex justify-center bg-stone-900 p-8"}>
      <div
        className={
          "flex w-full max-w-4xl flex-col text-amber-50 md:flex-row md:items-center md:justify-between md:gap-8"
        }
      >
        <div className={"flex flex-col"}>
          <h2>Envie de commencer un projet ensemble ?</h2>
          <h3 className={"font-heading mt-2 text-6xl md:text-7xl lg:text-8xl"}>
            Parlons-en !
          </h3>
          <SocialButtons className={"hidden md:mt-0 md:flex md:self-start"} />
        </div>
        <div className={"flex shrink flex-col gap-4"}>
          <ContactButtons />
          <SocialButtons className={"md:hidden"} />
        </div>
      </div>
    </footer>
  );
};
