import Image, { StaticImageData } from "next/image";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

interface ImageGalleryProps {
  image: StaticImageData;
  alt: string;
  text?: string;
}

export function PageImage({ image, alt, text }: ImageGalleryProps) {
  return (
    <div className="flex sm:w-full sm:h-full flex-col items-center gap-2">
      <FadeInWhenVisible>
        <Image
          src={image}
          alt={alt}
          width={540}
          height={304}
          className="rounded-xl border border-[#1D1F1E]/10"
          loading="lazy"
          quality={100}
        />
      </FadeInWhenVisible>
      {text && (
        <p className="text-xs leading-4 tracking-wide text-secondary">{text}</p>
      )}
    </div>
  );
}
