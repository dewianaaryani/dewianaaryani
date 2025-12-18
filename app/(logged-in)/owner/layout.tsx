import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen">
      <div className="flex justify-center relative z-10">
        <div className="py-20 mt-14 max-w-sm md:max-w-7xl gap-10 flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
