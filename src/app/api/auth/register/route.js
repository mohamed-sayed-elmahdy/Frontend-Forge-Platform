import { NextResponse } from "next/server";
import connectDB from "@/lib/config/mongodb";
import User from "@/lib/models/UserModel";
import { hashPassword, generateToken } from "@/lib/auth/utils";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, password } = body;

    // 1) Validation  
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Name, email and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, message: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // 2) Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already exists" },
        { status: 409 }
      );
    }

    // 3) Hash the password
    const hashedPassword = await hashPassword(password);

    // 4) Create the user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 5) generate JWT
    const token = generateToken({
      userId: user._id.toString(),
      role: user.role,
    });

    // 6)  Return the response with the token in a cookie
    const response = NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
        },
      },
      { status: 201 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Registration failed" },
      { status: 500 }
    );
  }
}