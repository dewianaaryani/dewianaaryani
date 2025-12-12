"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // Base glass track
        "peer relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full",
        "backdrop-blur-md bg-white/5 border border-white/10",
        "transition-all duration-300",

        // State styles (very subtle purple)
        "data-[state=checked]:bg-[#8a5cf63a] data-[state=checked]:border-[#8b5cf650]",

        // Glow (very soft)
        "data-[state=checked]:shadow-[0_0_6px_rgba(139,92,246,0.25)]",

        // Focus
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/30",

        // Disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "block size-5 rounded-full transition-all duration-300",

          // Glass thumb
          "bg-white/40 backdrop-blur-md border border-white/20 shadow-[0_2px_6px_rgba(0,0,0,0.35)]",

          // Movement
          "data-[state=unchecked]:translate-x-1",
          "data-[state=checked]:translate-x-6",

          // Slight scale on checked for polish
          "data-[state=checked]:scale-105"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
