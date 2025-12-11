"use client";
import React, { useState } from "react";
import type { JSX } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { IoLogoGoogle, IoPersonCircleOutline } from "react-icons/io5";

export const FloatingNav = ({
  navItems,
  className,
  mode = "scroll",
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  mode?: "scroll" | "fixed";
}) => {
  const { data: session } = useSession();

  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(mode === "fixed");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (mode !== "scroll") return;
    if (typeof current === "number") {
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(true); // ALWAYS visible
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={mode === "fixed" ? false : { opacity: 0, y: -100 }}
        animate={
          mode === "fixed"
            ? { opacity: 1, y: 0 }
            : { opacity: visible ? 1 : 0, y: visible ? 0 : -100 }
        }
        transition={{ duration: 0.25 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto px-10 py-5 z-5000",
          "items-center justify-center space-x-6",
          "bg-black/30 backdrop-blur-xl",
          "border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]",
          "rounded-full",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={idx}
            href={navItem.link}
            className="relative dark:text-neutral-50 flex items-center space-x-1 
                     text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm cursor-pointer hidden sm:block">
              {navItem.name}
            </span>
          </Link>
        ))}
        <Link
          href={session ? "/visitors" : "/sign-in"}
          className="relative dark:text-neutral-50 flex items-center space-x-1 
                     text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
        >
          <span className="block sm:hidden">
            {session ? <IoPersonCircleOutline /> : <IoLogoGoogle />}
          </span>
          <span className="text-sm cursor-pointer hidden sm:block">
            {session ? "My Account" : "Sign In"}
          </span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
