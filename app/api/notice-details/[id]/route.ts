import { prisma } from "@/lib/prisma/prisma"
import { NextResponse } from "next/server"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const {id} = await params
  console.log(id)
  const notice = await prisma.notice.findUnique({
    where: { id: id },
  })
  return NextResponse.json(notice)
}
