"use client";
import { projects } from "@/app/data";
import { PinContainer } from "@/components/ui/3d-pin";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { Switch } from "@/components/ui/switch";
import { TextGenerateTwoEffect } from "@/components/ui/TextGenerateTwoEffect";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PlusIcon, Search } from "lucide-react";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
const projectss = Array(4).fill({
  title: "Lorem ipsum dolor sit.",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque maxime deserunt obcaecati reiciendis eaque quasi unde expedita dolore perspiciatis eveniet!",
  iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
});

export default function page() {
  const [selecTimeActive, setSelecTimeActive] = React.useState("all");

  return (
    <div className="w-full">
      <div className="flex justify-center relative z-10">
        <div className="py-20 mt-14 max-w-sm md:max-w-7xl gap-10 flex-col">
          <h1 className="heading mb-8">
            A small selection of{" "}
            <span className="text-purple">recent projects</span>
          </h1>
          <div className="flex-col gap-2 items-center justify-center">
            <div className="grid gap-3 md:flex items-center justify-center md:justify-between">
              <div className="flex gap-4 order-last md:order-first items-center">
                <div className="md:flex hidden gap-4 items-center">
                  <Button className="item-theme">All</Button>
                  <Button className="item-theme-secondary">
                    One Months Ago
                  </Button>
                  <Button className="item-theme-secondary">
                    Three Months Ago
                  </Button>
                </div>
                <div className="flex md:hidden gap-2 items-center justify-between w-full">
                  <Button className="item-theme" size="sm">
                    All
                  </Button>
                  <Button className="item-theme-secondary" size="sm">
                    1 Months Ago
                  </Button>
                  <Button className="item-theme-secondary" size="sm">
                    3 Months Ago
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2  md:gap-4 order-first md:order-last justify-between">
                <InputGroup className="">
                  <InputGroupInput placeholder="Search..." className="" />
                  <InputGroupAddon>
                    <Search />
                  </InputGroupAddon>
                </InputGroup>
                <Button
                  size="icon-lg"
                  aria-label="Submit"
                  variant="outline"
                  className="border-black-300"
                >
                  <PlusIcon />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {projectss.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.2)] transition hover:bg-white/10"
                >
                  {/* Image */}
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    <Image
                      src="/bg.png"
                      alt="bg-img"
                      width={400}
                      height={400}
                      className="w-full h-[200px] object-cover opacity-80"
                    />

                    {/* Icons inside bottom-right */}
                    <div className="absolute bottom-3 right-0.5 flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          className="border border-white/20 rounded-full bg-black/60 backdrop-blur-sm lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${index * 10}px)`,
                          }}
                        >
                          <img src={icon} alt={icon} className="p-2" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Title + Description */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-lg font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border border-white/10 w-full mb-4"></div>

                  {/* Configure + Switch */}
                  <div className="flex items-center justify-between">
                    <div className="text-white/80 font-medium">
                      Configure Project
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id={`switch-${index}`} />
                      <Label
                        htmlFor={`switch-${index}`}
                        className="text-white/70"
                      >
                        Enabled
                      </Label>
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
    </div>
  );
}
