"use client";
import React from "react";
import { motion } from "framer-motion";
import { certificates, organizations } from "@/app/data";
import { FaArrowRight, FaAward, FaCalendar, FaUsers } from "react-icons/fa";

export default function Certificates() {
  return (
    <div className="py-20 w-full px-4" id="certificates">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm uppercase tracking-wider text-purple mb-2">
          Achievements
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">
          Certifications & <span className="text-purple">Awards</span>
        </h1>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative bg-linear-to-br from-[#0a0a1f] to-[#1a1a3f] rounded-3xl p-6 border border-white/5 hover:border-purple/30 transition-all duration-500 overflow-hidden"
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 bg-linear-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Award icon with glow */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-4 p-4 bg-linear-to-br from-purple/20 to-cyan-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <FaAward className="text-purple text-3xl" />
              </div>

              <h3 className="text-base font-bold text-white mb-2 line-clamp-2 min-h-12">
                {cert.name}
              </h3>
              <p className="text-purple text-sm font-semibold mb-4">
                {cert.issuer}
              </p>

              <div className="w-full pt-4 border-t border-white/5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white-100">Issued</span>
                  <span className="text-white font-semibold">{cert.date}</span>
                </div>
                <p className="text-xs text-white-100 opacity-50">
                  {cert.credentialId}
                </p>
              </div>
            </div>

            {/* Hover arrow */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaArrowRight className="text-purple text-sm" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
