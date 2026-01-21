import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.organizationExperience.findMany({
      orderBy: {
        startDate: "desc",
      },
    });
    console.log(data);

    

    return NextResponse.json(data);
  } catch (error) {
    console.error("[ORGANIZATION_EXPERIENCES_GET]", error);
    return NextResponse.json(
      { message: "Failed to fetch organization experiences" },
      { status: 500 }
    );
  }
}
