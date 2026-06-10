import { prisma } from "@/lib/prisma/prisma"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"
export async function GET() {
  const notices = await prisma.banner.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(notices)
}
export async function PUT(req: Request) {
  const body = await req.json()

  const info = await prisma.banner.upsert({
    where: { key: body.key },
    update: {
      title: body.title ?? "",
      imageUrl: body.imageUrl ?? "",
    },
    create: {
      key: body.key,
      title: body.title ?? "",
      imageUrl: body.imageUrl ?? "",
    },
  })
    revalidatePath("/")
  
  return NextResponse.json(info)
}
