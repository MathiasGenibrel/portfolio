import { FC } from "react";
import { ButtonIcon } from "~/common/components/buttons/button-icon";
import { MailIcon } from "~/common/components/icons/mail.icon";
import { LinkedinIcon } from "~/common/components/icons/linkedin.icon";
import { GithubIcon } from "~/common/components/icons/github.icon";

export const SocialButtons: FC = () => {
  return (
    <div className={"mt-8 flex justify-center gap-6"}>
      <ButtonIcon
        Icon={MailIcon}
        href={"mailto:contact@mathias.run"}
        title={"Envoyer un email à Mathias Genibrel"}
      />
      <ButtonIcon
        Icon={LinkedinIcon}
        href={"https://www.linkedin.com/in/mathias-genibrel"}
        title={"Profil LinkedIn de Mathias Genibrel"}
      />
      <ButtonIcon
        Icon={GithubIcon}
        href={"https://github.com/MathiasGenibrel"}
        title={"Profil Github de Mathias Genibrel"}
      />
    </div>
  );
};
