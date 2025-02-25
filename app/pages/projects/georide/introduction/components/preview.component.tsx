import { FC } from "react";
import Heading from "~/common/components/heading/Heading";
import { ImagePreview } from "~/common/components/image-preview.component";

interface PreviewProps {}

const IMAGES_URLS = [
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/48/6f/d4/486fd47e-41ca-f60e-50d0-fcc8a9906d07/89308365-dd39-4773-9f6d-fe9080216885_1_-_6_5.jpg/300x0w.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/43/b1/07/43b107a8-dae4-c544-f390-1925caf6bf64/b150f432-24e3-43f7-a025-7081e52b7a2f_2_-_6_5.jpg/300x0w.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ac/22/51/ac225183-c24e-f6e5-fc08-52255b0a8a90/d9362dd5-2575-47f1-b509-704a34e4ac94_3_-_6_5.jpg/300x0w.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/ad/e9/c2/ade9c25d-40c6-80ef-fb73-4d28a1414abd/d4a932a4-b02d-4724-b640-5294e8c61bc7_4_-_6_5.jpg/300x0w.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/78/5a/ae/785aaeb0-d3ed-0232-5928-739201c4114b/e6ff70fa-5b8e-45eb-ab42-a74996cb8efc_5_-_6_5.jpg/300x0w.webp",
  "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1a/af/10/1aaf104b-60d8-3b5e-a758-1545462a84b6/7a46bcc9-ae52-4166-b9ba-dbcf6abf89d4_7_-_6_5-1.jpg/300x0w.webp",
];

export const Preview: FC<PreviewProps> = ({}) => {
  return (
    <>
      <Heading.Tertiary className={"pt-4"}>Aperçu de l'app</Heading.Tertiary>
      <ImagePreview imagesUrls={IMAGES_URLS} />
    </>
  );
};
