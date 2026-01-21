import React from "react";
import { motion } from "framer-motion";
export default function CardReg({
  data,
  children,
}: {
  data: any[];
  children: React.ReactNode;
}) {
  return (
    <div className=" space-y-6">
      {data.map((data, index) => (
        <motion.div
          key={data.index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ amount: 0.2 }} // Each card triggers independently
          className="group bg-[#0a0a1f]/50 rounded-3xl p-8 border border-white/8 hover:border-white/20 transition-colors duration-300 gap-6 flex flex-col "
        >
          {children}
        </motion.div>
      ))}
    </div>
  );
}
