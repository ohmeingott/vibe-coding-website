import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const authCookie = req.cookies.get("vibe-auth");

  if (authCookie?.value === "authenticated") {
    return NextResponse.next();
  }

  // Allow access to the login page and its API route
  if (
    req.nextUrl.pathname === "/login" ||
    req.nextUrl.pathname === "/api/login"
  ) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", req.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
