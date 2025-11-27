import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  const exist = await prisma.user.findUnique({ where: { email } });
  if (exist) return NextResponse.json({ error: "Email already used" }, { status: 400 });

  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: { name, email, password: hashed },
  });

  return NextResponse.json({ message: "User created" }, { status: 201 });
}
