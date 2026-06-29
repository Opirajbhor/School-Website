import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // Read cookie from incoming request
  const session = request.cookies.get("admin-session")

  // If cookie is missing or invalid
  if (session?.value !== process.env.SESSION_TOKEN) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
