import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const user = await req.json()
  console.log(user.data)
  const { email, password } = user.data
  const isValid =
    email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS
  if (!isValid) {
    return NextResponse.json({ error: "Invalid Credentials" }, { status: 401 })
  }
  const cookieStore = await cookies()
  cookieStore.set("admin-session", process.env.SESSION_TOKEN!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 12, //12 hours for session token
  })

  return NextResponse.json({
    success: true,
  })
}
