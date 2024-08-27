"use client";

import Badge from "@/app/components/Badge";

interface ItemDescriptionProps {
  title: string;
  description: string;
  badges?: string[];
}

export default function ItemDescription({
  title,
  description,
  badges,
}: ItemDescriptionProps) {
  return (
    <div className="w-full h-fit flex justify-between gap-10">
      <div className="flex flex-col max-w-60">
        <p className="text-sm tracking-wide text-primary">{title}</p>
        <p className="text-xs text-secondary mt-1 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap justify-end w-full max-w-60 gap-2 h-fit">
        {badges?.map(
          (label, index) => label && <Badge key={index} label={label} />
        )}
      </div>
    </div>
  );
}
