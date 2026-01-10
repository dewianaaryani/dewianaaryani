"use client";
import React from "react";
import { motion } from "framer-motion";
import { organizations } from "@/app/data";
import { FaCalendar, FaUsers } from "react-icons/fa";

export default function OrganizationExperience() {
  return (
    <div className="py-20 w-full px-4" id="organizations">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm uppercase tracking-wider text-cyan-500 mb-2">
          Community Impact
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">
          Organization <span className="text-purple">Experience</span>
        </h1>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {organizations.map((org, index) => (
          <motion.div
            key={org.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative bg-linear-to-br from-[#0a0a1f] to-[#1a1a3f] rounded-3xl p-8 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                  <FaUsers className="text-cyan-500 text-2xl" />
                </div>
                <div className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                  <span className="text-xs text-white-100">{org.impact}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{org.role}</h3>
              <p className="text-cyan-500 font-semibold mb-4">
                {org.organization}
              </p>

              <p className="text-white-100 text-sm mb-4 leading-relaxed">
                {org.description}
              </p>

              <div className="flex items-center gap-2 text-white-100 text-sm">
                <FaCalendar className="text-xs" />
                <span>{org.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
