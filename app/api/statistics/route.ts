import { prisma } from "@/lib/prisma/prisma"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function GET() {
  const stat = await prisma.statistics.findMany({
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(stat)
}

export async function PUT(req: Request) {
  try {
    const data = (await req.json()) as Array<{ key: string; value: string }>

    const result = await Promise.all(
      data.map((item: { key: string; value: string }) =>
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
    revalidatePath("/")

    return Response.json(result)
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    console.error("API ERROR:", error)

    return Response.json({ error: errorMessage }, { status: 500 })
  }
}
