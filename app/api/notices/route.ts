import { prisma } from "@/lib/prisma/prisma"
import { NextResponse } from "next/server"
import { error } from "node:console"

export async function GET() {
  const notices = await prisma.notice.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(notices)
}

export async function POST(req: Request) {
  const body = await req.json()

  const notice = await prisma.notice.create({
    data: {
      title: body.tittle,
      description: body.description,
    },
  })

  return NextResponse.json(notice)
}

export async function DELETE(req: Request) {
  const body = await req.json()
  console.log(body)
  try {
    const notice = await prisma.notice.delete({
      where: { id: body.id },
    })

    return NextResponse.json({
      success: true,
      notice,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 }
    )
  }
}
