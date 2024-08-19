import Image, { StaticImageData } from "next/image";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

interface ImageGalleryProps {
  image: StaticImageData;
  alt: string;
  text?: string;
}

export function PageImage({ image, alt, text }: ImageGalleryProps) {
  return (
    <div className="flex sm:w-full sm:h-full flex-col items-center gap-2 w-[540px] ">
      <FadeInWhenVisible>
        <Image
          src={image}
          alt={alt}
          className="rounded-xl border border-[#1D1F1E]/10"
          loading="lazy"
        />
      </FadeInWhenVisible>
      <p className="text-xs leading-4 tracking-wide text-secondary">{text}</p>
    </div>
  );
}
