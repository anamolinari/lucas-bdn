"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import dotIcon from "../../public/assets/icons/icon-dot-green.svg";
import profileImg from "../../public/assets/images/profile.png";

export default function Header() {
  const pathname = usePathname();

  const getTitle = () => {
    if (pathname === "/") return "Product Designer";
    if (pathname === "/about") return "About";
    if (pathname === "/tellus") return "Project";
    if (pathname === "/global-sonic") return "Project";
    if (pathname === "/rare-edition") return "Project";
    if (pathname === "/luxury-card") return "Project";
    return "Product Designer";
  };

  return (
    <header
      className="flex z-50 items-center justify-between pt-14 pb-6"
      aria-label="Website header"
    >
      <div className="flex items-center gap-2">
        <Image
          src={profileImg}
          alt="Lucas profile picture"
          className="w-10 h-10 rounded-full"
          priority
        />
        <h1 className="left-6 text-base font-semibold">Lucas Bordignon</h1>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-xs leading-4 font-semibold text-secondary tracking-wide sm:hidden">
          {getTitle()}
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
