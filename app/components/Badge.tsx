"use client";

interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  if (!label) return null;

  return (
    <div className="flex h-6 px-2 items-center rounded-[4px] bg-subtle border border-line text-secondary text-xs">
      {label}
    </div>
  );
}
