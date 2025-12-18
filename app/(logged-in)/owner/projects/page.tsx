"use client";
import { projects } from "@/app/data";
import { PinContainer } from "@/components/ui/3d-pin";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import MagicButton from "@/components/ui/MagicButton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Spotlight } from "@/components/ui/Spotlight";
import { Switch } from "@/components/ui/switch";
import { TextGenerateTwoEffect } from "@/components/ui/TextGenerateTwoEffect";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PlusIcon, Search, Settings2 } from "lucide-react";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
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
                <Link href="/owner/projects/add">
                  <Button
                    size="icon-lg"
                    aria-label="Submit"
                    variant="outline"
                    className="border-black-300 cursor-pointer"
                  >
                    <PlusIcon />
                  </Button>
                </Link>
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
                      <div className="flex items-center -space-x-3 hover:space-x-0 transition-all">
                        {item.iconLists.map((icon, index) => (
                          <Avatar
                            key={index}
                            className="bg-[#0b0f1a] ring-2 ring-background shadow-md"
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
                    <Link href={`/projects/${item.id}`}>
                      <div className="text-white/80 text-sm underline flex gap-2">
                        <Settings2 size={20} />
                        Configure Project
                      </div>
                    </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
}
