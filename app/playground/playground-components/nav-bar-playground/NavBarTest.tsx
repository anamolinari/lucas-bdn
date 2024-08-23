"use client";

import { useState } from "react";
import { MenuItemPlayground } from "./MenuItem";
import { Icon1, Icon2, Icon3 } from "./Icon";

export default function NavBarTest() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: <Icon1 />, label: "Home" },
    { icon: <Icon2 />, label: "Profile" },
    { icon: <Icon3 />, label: "Settings" },
  ];

  return (
    <nav className="flex flex-row gap-1 p-1 rounded-2xl bg-[#202020]">
      {navItems.map((item, index) => (
        <MenuItemPlayground
          key={index}
          icon={item.icon}
          isActive={index === activeIndex}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </nav>
  );
}
