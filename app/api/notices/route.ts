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

  const notice = await prisma.notice.create({
    data: {
      title: body.title,
      description: body.description,
      fileUrl: body.fileUrl,
    },
  })

  return NextResponse.json(notice)
}

export async function DELETE(req: Request) {
  const body = await req.json()
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

export async function PUT(req: Request) {
  const data = await req.json()
  const body = data?.data
  const notice = await prisma.notice.update({
    where: { id: body?.id },
    data: { title: body?.title, description: body?.description },
  })

  return NextResponse.json(notice, { status: 200 })
}
