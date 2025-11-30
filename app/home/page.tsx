"use client";
import MagicButton from "@/components/ui/MagicButton";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { FaDoorOpen } from "react-icons/fa6";

export default function page() {
  const { data: session } = useSession();
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/sign-in" });
  };

  return (
    <div>
      Hello {session?.user?.name}
      <MagicButton
        title="Sign Up with Google"
        icon={<FaDoorOpen />}
        position="left"
        fullWidth={true}
        handleClick={() => handleLogout()}
      />
    </div>
  );
}
