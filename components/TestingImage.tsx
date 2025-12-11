import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import React from "react";

export default async function TestingImage() {
  const supabase = createClient();
  const { data } = supabase.storage.from("images").getPublicUrl("b1.svg");

  console.log(data.publicUrl);

  return <div></div>;
}
