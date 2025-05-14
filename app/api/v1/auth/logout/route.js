import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );

    // Clear all auth-related cookies
    const cookies = response.cookies;

    // Clear token cookie
    cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    // Clear any other auth-related cookies if they exist
    cookies.set("auth", "", {
      httpOnly: true,
      expires: new Date(0),
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
