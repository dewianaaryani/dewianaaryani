// components/RecentProjects.tsx
"use client";

import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  liveDemoLink?: string;
}

const RecentProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="py-20 mt-14 w-full" id="projects">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex items-center justify-center mt-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple"></div>
        </div>
      </div>
    );
  }
  if (projects.length === 0) {
    return (
      <div className="py-20 mt-14 w-full" id="projects">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="text-center mt-10 text-gray-400">
          No projects found. Add some projects in the admin panel.
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 mt-14 w-full" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-10 lg:gap-12 items-center justify-center sm:justify-between mt-0 sm:mt-2 lg:mt-8  w-full">
        {projects.map(({ id, title, des, img, iconLists, liveDemoLink }) => (
          <div
            key={id}
            className="lg:min-h-140 h-110 md:h-120 flex items-center w-full justify-center group"
          >
            <PinContainer
              title={title}
              href={liveDemoLink || `/projects/${id}`}
            >
              <div className="relative flex items-center w-full justify-center  overflow-hidden sm:h-[35vh] h-[30vh] mb-10 rounded-2xl">
                <Image
                  src={img}
                  alt={title}
                  width={700}
                  height={500}
                  className="z-10 max-h-full max-w-full w-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-2 text-gray-300">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center -space-x-3  group-hover:space-x-1 transition-all duration-1000 ease-out">
                  {iconLists.map((icon, index) => (
                    <Avatar
                      key={`${id}-icon-${index}`}
                      className="bg-[#0b0f1a] border border-gray-800 shadow-lg w-8 h-8"
                    >
                      <AvatarImage
                        src={icon} // Assuming icons are in /public/icons/
                        alt={icon}
                        className="p-1.5"
                        onError={(e) => {
                          // Fallback to text if icon not found
                          e.currentTarget.style.display = "none";
                          const fallback =
                            e.currentTarget.parentElement?.querySelector(
                              ".avatar-fallback",
                            );
                          if (fallback) {
                            fallback.innerHTML = icon.slice(0, 2).toUpperCase();
                          }
                        }}
                      />
                      <AvatarFallback className="bg-[#0b0f1a] text-xs font-medium avatar-fallback">
                        {icon.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="flex justify-center items-center group cursor-pointer">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple group-hover:underline">
                    {liveDemoLink ? "Details" : "Github Repo"}
                  </p>
                  <FaLocationArrow
                    className="ms-3 group-hover:translate-x-1 transition-transform"
                    color="#CBACF9"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
