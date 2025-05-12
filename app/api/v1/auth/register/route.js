import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { username, email, password, role } = await req.json();
    console.log(username, password, email, role);
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Username, email and password required" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma?.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role,
      },
    });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const response = NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
    });

    return response;
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
