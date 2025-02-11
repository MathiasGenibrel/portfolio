import { FC } from "react";
import Text from "~/pages/home/components/about-me/Text";

interface ParagraphProps {}

export const Paragraph: FC<ParagraphProps> = ({}) => {
  return (
    <p className={"my-2 text-lg text-amber-50"}>
      <Text.Light>
        Je transforme des lignes de code en expériences numériques captivantes
      </Text.Light>
      <span className={"mb-4 opacity-50"}>
        , armé de mon clavier magique et d'un sens de l'humour qui ferait
        sourire Merlin lui-même.
      </span>

      <br className={"mb-4"} />

      <Text.Light>
        Après avoir reçu mon parchemin enchanté{" "}
        <Text.Dark italic className={"text-base"}>
          (que les moldus appellent "diplôme")
        </Text.Dark>
        , je me suis lancé dans une quête pour créer des applications web et
        mobiles qui allient élégance et fonctionnalité.
        <br />
        <Text.Dark>
          Que ce soit en domptant des interfaces utilisateur ou en tissant des
          sortilèges d'optimisation, je manie les technologies modernes avec la
          précision d'un maître sorcier et la créativité d'un artiste.
        </Text.Dark>
      </Text.Light>
    </p>
  );
};
