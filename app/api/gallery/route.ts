import { prisma } from "@/lib/prisma/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const data = await prisma.gallery.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(data)
}

export async function POST(req: Request) {
  const body = await req?.json()

  const info = await prisma.gallery.create({
    data: {
      tittle: body?.tittle,
      imageUrl: body?.imageUrl,
    },
  })

  return NextResponse.json(info)
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json()

    const info = await prisma.gallery.delete({
      where: {
        id: body,
      },
    })
    return NextResponse.json(info)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: "Failed to delete gallery item" },
      { status: 500 }
    )
  }
}
