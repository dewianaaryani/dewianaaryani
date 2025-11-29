import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { signIn } from "@/auth"; // ⬅️ next-auth helper (NextAuth v5)

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  const exist = await prisma.user.findUnique({ where: { email } });
  if (exist)
    return NextResponse.json({ error: "Email already used" }, { status: 400 });

  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: { name, email, password: hashed },
  });

  // 🔥 Auto login setelah sukses register
  await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  return NextResponse.json({ message: "User created & logged in" }, { status: 201 });
}
