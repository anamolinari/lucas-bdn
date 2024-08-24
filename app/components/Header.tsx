"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import dotIcon from "../../public/assets/icons/icon-dot-green.svg";
import profileImg from "../../public/assets/images/profile.png";

const routeTitles: Record<string, string> = {
  "/": "Product Designer",
  "/about": "About",
  "/tellus": "Project",
  "/global-sonic": "Project",
  "/rare-edition": "Project",
  "/luxury-card": "Project",
};

function getTitle(pathname: string): string {
  return routeTitles[pathname] || "Product Designer";
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="flex z-50 items-center justify-between pt-14 pb-6"
      aria-label="Website header"
    >
      <a href="/">
        <div className="flex items-center gap-2">
          <Image
            src={profileImg}
            alt="Lucas profile picture"
            className="w-10 h-10 rounded-full"
            priority
          />
          <h1 className="left-6 text-base font-semibold">Lucas Bordignon</h1>
        </div>
      </a>

      <div className="flex items-center gap-2">
        <p className="text-xs leading-4 font-semibold text-secondary tracking-wide sm:hidden">
          {getTitle(pathname)}
        </p>
        <Image
          src={dotIcon}
          alt="Status indicator"
          className="animate-pulse-custom w-4 h-4"
        />
      </div>
    </header>
  );
}
