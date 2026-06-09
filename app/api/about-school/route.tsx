import { prisma } from "@/lib/prisma/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const info = await prisma.aboutSchool.findFirst()
    return NextResponse.json(info)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to fetch school info" },
      { status: 500 }
    )
  }
}

export async function PUT(req: Request) {
  const reqbody = await req.json()
  const body = reqbody.data
  console.log(body)
  const info = await prisma.aboutSchool.upsert({
    where: { key: "main" },
    update: {
      title: body.title,
      description: body.description,
      imageUrl: body.imageUrl,
    },
    create: {
      key: "main",
      title: body.title,
      description: body.description,
      imageUrl: body.imageUrl,
    },
  })

  return NextResponse.json(info)
}
