import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === "hot" && password === "donkey") {
    const res = NextResponse.json({ success: true });
    res.cookies.set("vibe-auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
