import { prisma } from "@/lib/prisma/prisma"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function GET() {
  const info = await prisma.session.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(info)
}

export async function POST(req: Request) {
  const data = await req.json()
  if (!data) {
    return NextResponse.json(
      {
        message: "failed to create session",
      },
      { status: 500 }
    )
  }

  try {
    const info = await prisma.session.create({
      data: {
        session_name: data?.session_name,
        session_status: data?.session_status,
      },
    })
    revalidatePath("/")
    return NextResponse.json(info)
  } catch (error) {
    console.log("PRISMA ERROR:", error)
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json()

    const info = await prisma.session.delete({
      where: {
        id: body,
      },
    })

    return NextResponse.json(info)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Failed to delete session" },
      { status: 500 }
    )
  }
}
