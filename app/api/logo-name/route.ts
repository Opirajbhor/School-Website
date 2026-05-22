import { prisma } from "@/lib/prisma/prisma"
import { NextResponse } from "next/server"
import { error } from "node:console"

export async function GET() {
  try {
    const data = await prisma.logoName.findFirst({
      orderBy: { createdAt: "desc" },
    })
    if (data === null) {
      return NextResponse.json({
        name: "XYZ School",
        imageUrl: "🏯",
      })
    }
    return NextResponse.json(data)
  } catch {
    return console.error(error)
  }
}

export async function PUT(req: Request) {
  const body = await req?.json()

  const info = await prisma.logoName.upsert({
    where: { id: body?.id },
    update: {
      name: body.title ?? "",
      imageUrl: body.imageUrl ?? "",
    },
    create: {
      name: body.title ?? "",
      imageUrl: body.imageUrl ?? "",
    },
  })

  return NextResponse.json(info)
}
