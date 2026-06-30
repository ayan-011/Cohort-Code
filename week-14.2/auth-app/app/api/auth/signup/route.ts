import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { createUser, findUserByEmail } from "@/lib/db";
import { hashPassword, signToken, AUTH_COOKIE, isValidEmail } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email and password are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (typeof password !== "string" || password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    if (findUserByEmail(email)) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const passwordHash = await hashPassword(password);
    const user = {
      id: randomUUID(),
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      passwordHash,
      createdAt: new Date().toISOString(),
    };

    createUser(user);

    const token = signToken({
      userId: user.id,
      email: user.email,
      name: user.name,
    });

    const res = NextResponse.json({
      user: { id: user.id, name: user.name, email: user.email },
    });

    res.cookies.set(AUTH_COOKIE.name, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: AUTH_COOKIE.maxAge,
    });

    return res;
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
