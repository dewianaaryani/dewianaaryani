"use client";

import React, { useState } from "react";
import OrganizationExperience from "@/components/OrganizationExperience";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function DiscoverMore() {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-20">
      {/* Top Divider (Discover more) */}
      {!open && (
        <div
          onClick={() => setOpen(true)}
          className="group flex cursor-pointer items-center gap-4"
        >
          <div className="h-px flex-1 bg-white/20 transition group-hover:bg-white/40" />

          <span className="flex items-center gap-2 text-sm font-medium text-white/60 transition group-hover:text-white">
            Discover more
            <span className="transition-transform group-hover:translate-y-1">
              <ArrowDown size={16} />
            </span>
          </span>

          <div className="h-px flex-1 bg-white/20 transition group-hover:bg-white/40" />
        </div>
      )}

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "mt-14 max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <OrganizationExperience />

        {/* Bottom Divider (Show less) */}
        <div
          onClick={() => setOpen(false)}
          className="group mt-14 flex cursor-pointer items-center gap-4"
        >
          <div className="h-px flex-1 bg-white/20 transition group-hover:bg-white/40" />

          <span className="flex items-center gap-2 text-sm font-medium text-white/60 transition group-hover:text-white">
            Show less
            <span className="transition-transform group-hover:-translate-y-1">
              <ArrowUp size={16} />
            </span>
          </span>

          <div className="h-px flex-1 bg-white/20 transition group-hover:bg-white/40" />
        </div>
      </div>
    </div>
  );
}
