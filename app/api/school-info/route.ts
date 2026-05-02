import { prisma } from "@/lib/prisma/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const info = await prisma.schoolInfo.findFirst()
    return NextResponse.json(info)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch school info" },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  const body = await req.json()

  const info = await prisma.schoolInfo.create({
    data: {
      title: body.title,
    },
  })

  return NextResponse.json(info)
}
