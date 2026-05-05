import { prisma } from "@/lib/prisma/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const notices = await prisma.notice.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(notices)
}

export async function POST(req: Request) {
  const body = await req.json()
  console.log(body)

  const notice = await prisma.notice.create({
    data: {
      title: body.tittle,
      description: body.description,
    },
  })

  return NextResponse.json(notice)
}
