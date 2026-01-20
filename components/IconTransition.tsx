import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function IconTransition({ iconLists }: { iconLists: string[] }) {
  return (
    <div className="flex items-center -space-x-3  group-hover:space-x-1 transition-all duration-1000 ease-out">
      {iconLists.map((icon, index) => (
        <Avatar
          key={`icon-${icon}`}
          className="bg-[#0b0f1a] border border-gray-800 shadow-lg w-8 h-8"
        >
          <AvatarImage
            src={icon} // Assuming icons are in /public/icons/
            alt={icon}
            className="p-1.5"
            onError={(e) => {
              // Fallback to text if icon not found
              e.currentTarget.style.display = "none";
              const fallback =
                e.currentTarget.parentElement?.querySelector(
                  ".avatar-fallback",
                );
              if (fallback) {
                fallback.innerHTML = icon.slice(0, 2).toUpperCase();
              }
            }}
          />
          <AvatarFallback className="bg-[#0b0f1a] text-xs font-medium avatar-fallback">
            {icon.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
