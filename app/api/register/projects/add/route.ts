import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const githubRepoLink = formData.get("githubRepoLink") as string;
  const liveDemoLink = formData.get("liveDemoLink") as string;
  const iconLists = formData.get("iconLists") as string | null;

  const fileFields = ["thumbnail", "image1", "image2", "image3"] as const;
  const uploaded: Record<string, string | null> = {
    thumbnail: null,
    image1: null,
    image2: null,
    image3: null,
  };

  for (const field of fileFields) {
    const file = formData.get(field) as File | null;
    if (!file) continue;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const filePath = `projects/${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("projects")
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: true,
      });

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });

    const url = supabase.storage.from("projects").getPublicUrl(filePath).data.publicUrl;
    uploaded[field] = url;
  }

  const project =await prisma.project.create({
  data: {
    name,
    description,
    githubRepoLink,
    liveDemoLink,
    iconLists,
    thumbnail: "",
    image1: "",
    image2: "",
    image3: "",
  },
});


  return NextResponse.json({ message: "Success", project });
}
