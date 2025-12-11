import { projects } from "@/app/data";
import { PinContainer } from "@/components/ui/3d-pin";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateTwoEffect } from "@/components/ui/TextGenerateTwoEffect";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PlusIcon, Search } from "lucide-react";

import { signIn } from "next-auth/react";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";

export default function page() {
  return (
    <div className="w-full">
      <div className="flex justify-center relative z-10">
        <div className="py-20 mt-14">
          <h1 className="heading">
            A small selection of{" "}
            <span className="text-purple">recent projects</span>
          </h1>
          <div className="flex items-center justify-between">
            <ToggleGroup type="single">
              <ToggleGroupItem value="all" aria-label="Toggle bold">
                All
              </ToggleGroupItem>
              <ToggleGroupItem
                value="one-months-ago"
                aria-label="Toggle italic"
              >
                One Months Ago
              </ToggleGroupItem>
              <ToggleGroupItem
                value="three-months-ago"
                aria-label="Toggle underline"
              >
                Three Months Ago
              </ToggleGroupItem>
            </ToggleGroup>
            <div className="flex items-center">
              <InputGroup>
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
              </InputGroup>
              <Button size="icon" aria-label="Submit">
                <PlusIcon />
              </Button>
            </div>
          </div>
          {/* make a 4 iteration for projects mapping */}

          <div className=" flex flex-wrap items-center justify-center p-4 gap-x-18 gap-y-4">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
              <div
                key={id}
                className="lg:min-h-130 h-100 flex items-center justify-center sm:w-[570px] w-[80vw]"
              >
                <div className="">
                  <div className="relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden sm:h-[35vh] h-[30vh]  mb-10">
                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                      <img src="/bg.png" alt="bg-img" />
                    </div>
                    <img
                      src={img}
                      alt={title}
                      className="z-10 absolute bottom-0"
                    />
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
                        <div
                          key={icon}
                          className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <img src={icon} alt={icon} className="p-2" />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
