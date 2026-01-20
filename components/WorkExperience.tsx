"use client";

import type { WorkExperience } from "@/lib/interface";
import { formatDate } from "@/utils/date";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBuilding, FaCalendar } from "react-icons/fa";
import IconTransition from "./IconTransition";
import { Dot } from "lucide-react";

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
              className="group bg-[#0a0a1f]/50 rounded-3xl p-8 border border-white/8 hover:border-white/20 transition-colors duration-300 gap-6 flex flex-col "
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 ">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="p-2 bg-purple/10 rounded-lg"
                    >
                      <FaBuilding className="text-purple text-lg" />
                    </motion.div>
                    <div className="flex flex-col">
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-purple font-medium text-sm md:text-md">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex  md:flex-col items-center justify-between md:items-end gap-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/3 rounded-full border border-white/8 transition-colors duration-300 hover:bg-white/5 hover:border-white/12"
                  >
                    <FaCalendar className="text-xs text-white-100" />
                    <span className="text-xs md:text-sm text-white-100">
                      <span>
                        {formatDate(exp.startDate)} -{" "}
                        {exp.endDate ? formatDate(exp.endDate) : "Present"}
                      </span>
                    </span>
                  </motion.div>
                  <span className="text-xs md:text-sm text-white-100/70">
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4">
                <p className="text-white-300 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
                <div className="flex flex-col items-start gap-2 text-xs md:text-sm font-medium text-white-200">
                  <p>What I did:</p>
                  {exp.pin.map((pinItem, pinIndex) => (
                    <div
                      key={`pin-${pinIndex}`}
                      className="flex items-center  "
                    >
                      <Dot
                        className="inline-block mr-2 text-purple"
                        size={26}
                      />
                      <p>{pinItem}</p>
                    </div>
                  ))}
                </div>
              </div>

              <IconTransition iconLists={exp.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
