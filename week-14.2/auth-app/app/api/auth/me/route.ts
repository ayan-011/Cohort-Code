import { NextRequest, NextResponse } from "next/server";
import { verifyToken, AUTH_COOKIE } from "@/lib/auth";
import { findUserById } from "@/lib/db";

export async function GET(req: NextRequest) {
  const token = req.cookies.get(AUTH_COOKIE.name)?.value;
  if (!token) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  const payload = verifyToken(token);
  if (!payload) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  const user = findUserById(payload.userId);
  if (!user) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  return NextResponse.json({
    user: { id: user.id, name: user.name, email: user.email },
  });
}
