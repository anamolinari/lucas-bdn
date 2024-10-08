"use client";
import Image from "next/image";
import { IconArrow } from "./Icons";

interface ItemProps {
  url: string;
  image: string;
  name: string;
  text: string;
  imageRounded?: string;
}

interface MusicAndInspirationProps {
  title: string;
  items: ItemProps[];
}

export function Item({
  url,
  image,
  name,
  text,
  imageRounded = "rounded-[8px]",
}: ItemProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Link to ${name}`}
      className="music-item flex gap-2 items-center justify-between text-sm leading-5 text-secondary cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className={`transition-transform duration-300 ease border-[0.75px] border-line ${imageRounded}`}
        />
        <div className="text-xs leading-4 tracking-wide w-[115px]">
          <p className="text-primary whitespace-nowrap truncate text-ellipsis">
            {name}
          </p>
          <p className="whitespace-nowrap truncate text-ellipsis transition-all duration-300 ease">
            {text}
          </p>
        </div>
      </div>
      <span className="transition-all duration-300 ease">
        <IconArrow />
      </span>
    </a>
  );
}

export function MusicAndInspiration({
  title,
  items,
}: MusicAndInspirationProps) {
  return (
    <div className="flex sm:flex-col items-start justify-between my-10 gap-6 pb-10 border-b-[0.75px] border-line">
      <h3 className="w-[130px] text-sm leading-5 text-secondary">{title}</h3>
      <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-col sm:w-full">
        {items.map((item, index) => (
          <Item
            key={`${item.name}-${index}`}
            url={item.url}
            image={item.image}
            name={item.name}
            text={item.text}
            imageRounded={item.imageRounded}
          />
        ))}
      </div>
    </div>
  );
}
