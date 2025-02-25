import { FC } from "react";

interface ImagePreviewProps {
  imagesUrls: string[];
}

export const ImagePreview: FC<ImagePreviewProps> = ({ imagesUrls }) => {
  return (
    <div
      className={
        "max-h-[calc(100lvh - 20lvh)] mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden"
      }
    >
      {imagesUrls.map((href, index) => (
        <img
          key={index}
          className={"max-h-carousel aspect-[230/491] snap-start rounded-3xl"}
          src={href}
          alt=""
        />
      ))}
    </div>
  );
};
