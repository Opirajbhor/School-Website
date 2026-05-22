import { prisma } from "@/lib/prisma/prisma"
import { NextResponse } from "next/server"
import { error } from "node:console"

export async function GET() {
  const dummy = {
    name: "XYZ School",
    imageUrl:
      "https://res.cloudinary.com/de6sgdpm7/image/upload/v1779431279/ABC_USD_Logo_wxt7lc.png",
    slogan: "a revolutionary way to educate",
  }
  try {
    const data = await prisma.logoName.findFirst({
      orderBy: { createdAt: "desc" },
    })
    if (data === null) {
      return NextResponse.json(dummy)
    }
    return NextResponse.json(data)
  } catch {
    return console.error(error)
  }
}

export async function PUT(req: Request) {
  const body = await req?.json()

  const existing = await prisma.logoName.findFirst()

  if (existing) {
    const updated = await prisma.logoName.update({
      where: {
        id: existing.id,
      },
      data: {
        name: body?.tittle,
        imageUrl: body?.imageUrl,
        slogan: body?.slogan,
      },
    })

    return NextResponse.json(updated)
  }

  const created = await prisma.logoName.create({
    data: {
      name: body?.name,
      imageUrl: body.imageUrl,
      slogan: body?.slogan,
    },
  })

  return NextResponse.json(created)
}
