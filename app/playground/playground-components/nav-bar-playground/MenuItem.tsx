import { ReactNode } from "react";

// Define the type for the props
type MenuItemProps = {
  icon: ReactNode;
  isActive: boolean;
  onClick: () => void;
};

export function MenuItemPlayground({ icon, isActive, onClick }: MenuItemProps) {
  return (
    <div
      className={`transition ease-out duration-200 cursor-pointer flex flex-row items-center justify-center gap-1 rounded-xl w-10 h-10
            ${isActive ? "bg-indigo-600 hover:bg-blue-700 text-white" : "hover:bg-black/50 hover:text-white text-white/40"}`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
}
