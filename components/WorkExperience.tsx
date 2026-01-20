"use client";

import type { WorkExperience } from "@/lib/interface";
import { formatDate } from "@/utils/date";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBuilding, FaCalendar } from "react-icons/fa";
import IconTransition from "./IconTransition";

export default function WorkExperience() {
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("api/work-experiences");
        const data = await response.json();
        setWorkExperiences(data);
      } catch (error) {
        console.error("Error fetching workExperiences:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="py-20 mt-14 w-full" id="workExperiences">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent workExperiences</span>
        </h1>
        <div className="flex items-center justify-center mt-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple"></div>
        </div>
      </div>
    );
  }
  if (workExperiences.length === 0) {
    return (
      <div className="py-20 mt-14 w-full" id="workExperiences">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent workExperiences</span>
        </h1>
        <div className="text-center mt-10 text-gray-400">
          No workExperiences found. Add some workExperiences in the admin panel.
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full items-center justify-center">
      <div className="py-20 w-full items-center justify-center" id="experience">
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
        <div className=" space-y-6">
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
                    <span className="text-sm text-white-100">
                      <span>
                        {formatDate(exp.startDate)} -{" "}
                        {exp.endDate ? formatDate(exp.endDate) : "Present"}
                      </span>
                    </span>
                  </motion.div>
                  <span className="text-xs text-white-100/70">
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-white-100/80 mb-6 leading-relaxed">
                {exp.description}
              </p>
              {exp.pin.map((pinItem, pinIndex) => (
                <span
                  key={`pin-${pinIndex}`}
                  className="inline-block bg-purple/10 text-purple text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                >
                  {pinItem}
                </span>
              ))}

              <IconTransition iconLists={exp.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
