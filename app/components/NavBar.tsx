"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useMemo } from "react";

import {
  IconAbout,
  IconHome,
  IconMail,
  IconPlayground,
  IconProps,
  IconTheme,
} from "./Icons";
import { useTheme } from "../context/ThemeContext";

interface NavBarLinkProps {
  href: string;
  icon: FC<IconProps>;
  active: boolean;
  label: string;
}

const tooltipClasses = `
    tooltip absolute left-1/2 bottom-[125%] transform translate-x-[-50%] translate-y-[10px] invisible opacity-0
    p-2 bg-primary text-xs leading-4 tracking-wide text-line rounded-md whitespace-nowrap transition-all duration-300 ease-out sm:hidden
  `;

const NavBarLink: FC<NavBarLinkProps> = ({
  href,
  icon: Icon,
  active,
  label,
}) => (
  <Link href={href} className="relative inline-block" aria-label={label}>
    <div
      className={`p-2 rounded-lg transition-all duration-300 ease-out ${active ? "bg-background" : "hover:bg-transparent"}`}
    >
      <Icon active={active} />
    </div>
    <span className={tooltipClasses} aria-hidden="true">
      {label}
    </span>
  </Link>
);

export function NavBar() {
  const { toggleTheme } = useTheme();
  const pathname = usePathname();

  const isActive = useMemo(
    () => ({
      home: pathname === "/",
      about: pathname === "/about",
      playground: pathname === "/playground",
    }),
    [pathname]
  );

  return (
    <div
      className="fixed bottom-[24px] sm:bottom-[20px] left-1/2 z-50 transform translate-x-[-50%] flex items-center justify-center
      p-1 bg-card border border-solid border-line rounded-xl"
    >
      <NavBarLink
        href="/"
        icon={IconHome}
        active={isActive.home}
        label="Home"
      />
      <NavBarLink
        href="/about"
        icon={IconAbout}
        active={isActive.about}
        label="About"
      />
      <NavBarLink
        href="/playground"
        icon={IconPlayground}
        active={isActive.playground}
        label="Playground"
      />
      <NavBarLink
        href="mailto:l.bordignon0@gmail.com"
        icon={IconMail}
        active={false}
        label="Email me"
      />

      <button
        onClick={toggleTheme}
        className="relative p-2"
        aria-label="Switch Theme"
      >
        <IconTheme />
        <span className={tooltipClasses}>Switch Theme</span>
      </button>
    </div>
  );
}
