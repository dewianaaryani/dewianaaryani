import { FloatingNav } from "@/components/ui/FloatingNav";
import React from "react";
import { navItems } from "../data";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} mode="fixed" />
        {children}
      </div>
    </div>
  );
}
