"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { organizations } from "@/app/data";
import { FaCalendar, FaUsers } from "react-icons/fa";
import SectionReg from "./SectionReg";
import CardReg from "./CardReg";
import type { OrganizationExperience } from "@/lib/interface";
import { Dot, UserRound, UsersRound } from "lucide-react";
import { formatDate } from "@/utils/date";

export default function OrganizationExperience() {
  const [organizations, setOrganizations] = React.useState<
    OrganizationExperience[]
  >([]);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    async function fetchOrganizations() {
      try {
        const response = await fetch("api/organization-experiences");
        const data = await response.json();
        setOrganizations(data);
      } catch (error) {
        console.error("Error fetching organizations:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrganizations();
  }, []);

  if (loading) {
    return (
      <div className="py-20 mt-14 w-full" id="organizations">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent organizations</span>
        </h1>
        <div className="flex items-center justify-center mt-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple"></div>
        </div>
      </div>
    );
  }
  if (organizations.length === 0) {
    return (
      <div className="py-20 mt-14 w-full" id="organizations">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent organizations</span>
        </h1>
        <div className="text-center mt-10 text-gray-400">
          No organizations found. Add some organizations in the admin panel.
        </div>
      </div>
    );
  }

  return (
    <SectionReg
      title="Organization"
      titleInSpan="Experience"
      subtitle="A Journey Through"
    >
      <div className=" space-y-6">
        {organizations.map((org, index) => (
          <motion.div
            key={org.id}
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
                    <UserRound className="text-purple text-lg" />
                  </motion.div>
                  <div className="flex flex-col">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                      {org.role}
                    </h3>
                    <p className="mt-1 text-purple font-medium text-sm md:text-md">
                      {org.organization}
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
                      {formatDate(org.startDate)} -{" "}
                      {org.endDate ? formatDate(org.endDate) : "Present"}
                    </span>
                  </span>
                </motion.div>
                <span className="text-xs md:text-sm text-white-100/70">
                  {org.location}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <p className="text-white-300 leading-relaxed text-sm md:text-base">
                {org.description}
              </p>
              <div className="flex flex-col items-start gap-2 text-xs md:text-sm font-medium text-white-200">
                <p>What I did:</p>
                {org.pin.map((pinItem, pinIndex) => (
                  <div key={`pin-${pinIndex}`} className="flex items-center  ">
                    <Dot className="inline-block mr-2 text-purple" size={26} />
                    <p>{pinItem}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionReg>
  );
}
