import { prisma } from "@/lib/prisma/prisma"
import { staffDataType } from "@/lib/types/type"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const info = await prisma.staff.findMany()
    return NextResponse.json(info)
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch school info", err },
      { status: 500 }
    )
  }
}

export async function PUT(req: Request) {
  const data: staffDataType = await req.json()

  const info = await prisma.staff.upsert({
    where: { id: data?.id },
    update: {
      name: data?.name,
      designation: data?.designation,
      subject: data?.subject,
      index: data?.index,
      joinDate: new Date(data.joinDate),
      comment: data?.comment,
      image: data?.imageUrl,
    },
    create: {
      name: data?.name,
      designation: data?.designation,
      subject: data?.subject,
      index: data?.index,
      joinDate: new Date(data.joinDate),
      comment: data?.comment,
      image: data?.imageUrl,
    },
  })

  return NextResponse.json(info)
}
