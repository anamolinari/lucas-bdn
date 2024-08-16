import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { IconArrow } from "./Icons";

interface ProjectProps {
  title: string;
  text: string;
  img: StaticImageData;
  alt: string;
  link: string;
  marginB?: string;
}

export function Project({ title, text, img, alt, link }: ProjectProps) {
  return (
    <Link href={link} aria-label={title}>
      <div className="project relative flex sm:flex-col sm:gap-4 items-start sm:items-center justify-between gap-1 cursor-pointer">
        <div className="flex flex-col items-start justify-start w-[184px] sm:w-full">
          <div className="flex flex-row items-center gap-2">
            <h3 className="title text-sm leading-5 text-primary transition-all duration-500 ease">
              {title}
            </h3>
            <span className="icon opacity-0 transition-all duration-500 ease">
              <IconArrow />
            </span>
          </div>
          <p className="description text-sm leading-5 mt-2 transition-all duration-500 ease">
            {text}
          </p>
        </div>

        <div className="img-wrapper relative w-[316px] sm:w-full h-[237px] sm:h-full overflow-hidden rounded-xl">
          <AspectRatio.Root ratio={4 / 3} className="relative">
            <Image
              src={img}
              alt={alt}
              className="img rounded-xl transition-all duration-500 ease inset-0 object-cover"
              layout="fill"
            />
          </AspectRatio.Root>
        </div>
      </div>
    </Link>
  );
}
