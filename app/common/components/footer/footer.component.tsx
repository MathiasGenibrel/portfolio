import { FC } from "react";
import { ContactButtons } from "~/common/components/footer/contact.buttons";
import { SocialButtons } from "~/common/components/footer/social-buttons.component";

interface FooterComponentProps {}

export const FooterComponent: FC<FooterComponentProps> = ({}) => {
  return (
    <footer className={"flex w-full flex-col bg-stone-900 p-8 text-amber-50"}>
      <h2>Envie de commencer un projet ensemble ?</h2>
      <h3 className={"font-heading mt-2 text-6xl"}>Parlons-en !</h3>
      <ContactButtons />
      <SocialButtons />
    </footer>
  );
};
