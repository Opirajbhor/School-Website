import { prisma } from "@/lib/prisma/prisma"
import { messageHead } from "@/lib/types/Interfaces"
import { NextResponse } from "next/server"

export async function GET() {
  const data = await prisma.messageHead.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(data)
}

export async function PUT(req: Request) {
  const body = await req.json()

  const info: messageHead = await prisma.messageHead.upsert({
    where: { key: body.key },
    update: {
      title: body.title ?? "",
      name: body.name ?? "",
      image: body.image ?? "",
      desc: body.desc ?? "",
    },
    create: {
      key: body.key,
      title: body.title ?? "",
      name: body.name ?? "",
      image: body.image ?? "",
      desc: body.desc ?? "",
    },
  })

  return NextResponse.json(info)
}
