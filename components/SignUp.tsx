"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import animationData from "@/app/data/confetti.json";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import {
  IoKeyOutline,
  IoLogoGoogle,
  IoMailOutline,
  IoPersonOutline,
  IoSearchCircleOutline,
} from "react-icons/io5";
import { TextGenerateTwoEffect } from "./ui/TextGenerateTwoEffect";
import { useRouter } from "next/navigation";
import SignUpWithCredentials from "./SignUpWithCredential";
import Lottie from "lottie-react";

export default function SignUp() {
  const router = useRouter();
  const [success, setSuccess] = React.useState(false);

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Lottie
          animationData={animationData}
          loop={false}
          style={{ width: 300 }}
        />
        <h2 className="text-2xl font-bold text-white mt-4">Success! 🎉</h2>
      </div>
    );
  }

  const navigateToSignIn = () => {
    router.push("/signin");
  };
  const [withCredentials, setWithCredentials] = React.useState(false);
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 -left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="h-screen flex justify-center relative z-10 overflow-hidden">
        <div className="max-w-[89vw] md:max-w-[60vw] lg:max-w-[80vw] flex flex-col items-center justify-center w-full">
          <TextGenerateTwoEffect
            className="text-center text-[40px] md:text-5xl lg:text-5xl"
            words="Sign Up"
          />
          <p className="text-center md:tracking-wider mb-8 text-sm md:text-md lg:text-lg">
            Let’s connect — I’d love to hear your thoughts
          </p>
          <div className="grid w-full max-w-sm gap-6">
            {withCredentials ? (
              <SignUpWithCredentials />
            ) : (
              <>
                <MagicButton
                  title="Sign Up with Google"
                  icon={<IoLogoGoogle />}
                  position="left"
                  fullWidth={true}
                />
                <MagicButton
                  title="Sign Up with Credentials"
                  icon={<IoPersonOutline />}
                  position="left"
                  fullWidth={true}
                  handleClick={() => setWithCredentials(true)}
                />
              </>
            )}
            {/* <div className="text-center text-xs md:text-sm lg:text-md text-white-200">
              Already have an account?{" "}
              <span
                className="text-purple font-semibold cursor-pointer underline"
                onClick={() => navigateToSignIn()}
              >
                Log In
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
