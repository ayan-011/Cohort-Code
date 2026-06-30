import { NextRequest, NextResponse } from "next/server";

const AUTH_COOKIE_NAME = "auth_token";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;
  const { pathname } = req.nextUrl;

  const isProtected = pathname.startsWith("/dashboard");

  if (isProtected && !token) {
    const signinUrl = new URL("/signin", req.url);
    signinUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(signinUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
