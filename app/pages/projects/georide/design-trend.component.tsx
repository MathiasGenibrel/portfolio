import { FC } from "react";
import Heading from "~/common/components/heading/Heading";
import Text from "~/pages/home/components/about-me/Text";
import { ImagePreview } from "~/common/components/image-preview.component";

interface DesignTrendProps {}

const IMAGES_URLS = [
  "/georide/preview/transition-drawer.jpg",
  "/georide/preview/drawer-uber-down.jpg",
  "/georide/preview/drawer-uber-up.jpg",
  "/georide/preview/drawer-apple-down.jpg",
  "/georide/preview/drawer-apple-up.jpg",
  "/georide/preview/transition-thumbnail.jpg",
  "/georide/preview/thumbnail.jpg",
  "/georide/preview/transition-settings.jpg",
  "/georide/preview/settings-apple.jpg",
  "/georide/preview/settings-discord.jpg",
  "/georide/preview/settings-discord-2.jpg",
];

export const DesignTrend: FC<DesignTrendProps> = () => {
  return (
    <article className={"mx-auto flex max-w-4xl flex-col px-8 pt-8"}>
      <Heading.Secondary>La Phase d'Exploration</Heading.Secondary>
      <Description />
      <ImagePreview imagesUrls={IMAGES_URLS} />
    </article>
  );
};

const Description: FC = () => {
  return (
    <p className={"text-lg"}>
      <Text.Dark>
        Ma recherche d'inspiration s'est focalisée sur des applications
        référentes, particulièrement
      </Text.Dark>{" "}
      <strong>Uber</strong> et <strong>Plans</strong> d'Apple, pour leur
      utilisation ingénieuse du Drawer.
      <br />
      <Text.Dark>
        Ce menu coulissant compact offre un accès rapide aux informations
        essentielles tout en préservant l'espace d'affichage.
      </Text.Dark>
      <br />
      <strong>Apple Music</strong> m'a également inspiré avec sa mise en valeur
      des vignettes, un concept parfait pour sublimer les motos de nos
      utilisateurs.
      <br />
      Pour l'organisation des paramètres, les applications{" "}
      <strong>Plans, Réglages et Discord</strong> ont servi de modèles.
    </p>
  );
};
