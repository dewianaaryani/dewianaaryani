import { projects } from "@/app/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const RecentProjects = () => {
  return (
    <div className="py-20 mt-14 w-full" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className=" flex flex-wrap items-center justify-center mt-10 gap-x-12 gap-y-4 lg:gap-y-18 w-full">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-130 h-100 flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden sm:h-[35vh] h-[30vh]  mb-10 rounded-2xl">
                <div className="relative w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <Avatar
                      key={index}
                      className="bg-[#0b0f1a] ring-1 ring-background shadow-md"
                    >
                      <AvatarImage
                        src={icon}
                        alt={icon}
                        className="p-2 object-contain"
                      />
                      <AvatarFallback className="bg-[#0b0f1a]" />
                    </Avatar>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Details
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
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
