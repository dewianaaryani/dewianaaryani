import React from "react";
import { motion } from "framer-motion";

export default function SectionReg({
  title,
  titleInSpan,
  subtitle,
  children,
}: {
  title: string;
  titleInSpan: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-20 mt-14 w-full" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ amount: 0.3 }}
        className="text-center mb-12"
      >
        <p className="text-sm uppercase tracking-wider text-purple mb-2">
          {subtitle}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">
          {title} <span className="text-purple">{titleInSpan}</span>
        </h1>
      </motion.div>
      {children}
    </div>
  );
}
