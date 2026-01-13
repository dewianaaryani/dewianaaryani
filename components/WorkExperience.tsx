"use client";
import { workExperiences } from "@/app/data";
import { motion } from "framer-motion";
import { FaBuilding, FaCalendar } from "react-icons/fa";

export default function WorkExperience() {
  return (
    <div className="min-h-screen">
      <div className="py-20 w-full px-4" id="experience">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ amount: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-purple mb-2">
            Career Journey
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Work <span className="text-purple">Experience</span>
          </h1>
        </motion.div>

        {/* Cards Container */}
        <div className="max-w-6xl mx-auto space-y-6">
          {workExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ amount: 0.2 }} // Each card triggers independently
              className="group bg-[#0a0a1f]/50 rounded-3xl p-8 border border-white/8 hover:border-white/12 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="p-2 bg-purple/10 rounded-lg"
                    >
                      <FaBuilding className="text-purple text-lg" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-purple font-semibold">{exp.company}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/3 rounded-full border border-white/8 transition-colors duration-300 hover:bg-white/5 hover:border-white/12"
                  >
                    <FaCalendar className="text-xs text-white-100" />
                    <span className="text-sm text-white-100">{exp.period}</span>
                  </motion.div>
                  <span className="text-xs text-white-100/70">
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-white-100/80 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="px-4 py-2 bg-white/3 text-white text-sm rounded-full border border-white/8 transition-all duration-300 hover:bg-white/5 hover:border-purple/30 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
