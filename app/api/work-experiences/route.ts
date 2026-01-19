import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { WorkExperience } from "@/lib/interface";

export async function GET() {
  try {
    const data = await prisma.workExperience.findMany({
      orderBy: {
        startDate: "desc",
      },
    });

    // ✅ MAP Prisma → DTO
    const result: WorkExperience[] = data.map((item) => ({
      id: item.id,
      role: item.role,
      company: item.company,
      startDate: item.startDate.toISOString(),
      endDate: item.endDate ? item.endDate.toISOString() : null,
      description: item.description,
      pin: item.pin,
      location: item.location,
      skills: item.skills,
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error("[WORK_EXPERIENCES_GET]", error);
    return NextResponse.json(
      { message: "Failed to fetch work experiences" },
      { status: 500 }
    );
  }
}
