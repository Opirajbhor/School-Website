import { prisma } from "@/lib/prisma/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const stat = await prisma.statistics.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(stat)
}

export async function PUT(req: Request) {
  try {
    const data = await req.json()

    const result = await Promise.all(
      data.map((item: any) =>
        prisma.statistics.upsert({
          where: { key: item.key },
          update: { value: item.value },
          create: {
            key: item.key,
            value: item.value,
          },
        })
      )
    )

    return Response.json(result)
  } catch (error: any) {
    console.error("API ERROR:", error)

    return Response.json({ error: error.message }, { status: 500 })
  }
}
