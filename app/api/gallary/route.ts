import { prisma } from "@/lib/prisma/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const data = await prisma.gallary.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(data)
}

export async function POST(req: Request) {
  const body = await req?.json()

  const info = await prisma.gallary.create({
    data: {
      tittle: body?.tittle,
      imageUrl: body?.imageUrl,
    },
  })

  return NextResponse.json(info)
}
