import { prisma } from "@/lib/prisma/prisma"
import { footerAddress } from "@/lib/types/type"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

// dummy data
const info = {
  key: "abc",
  address: "Bajitpur, dhaka, Kishoreganj",
  phone01: "0123456789",
  mpoCode: "123456789",
  email: "yourname@email.com",
  eiin: "123456",
}
export async function GET() {
  const data = await prisma.footerAddress.findFirst({
    orderBy: { createdAt: "desc" },
  })
  if (data === null) {
    return NextResponse.json(info)
  }
  return NextResponse.json(data)
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const info: footerAddress = await prisma.footerAddress.upsert({
      where: { key: "abc" },
      update: {
        address: body?.address,
        phone01: body?.phone01,
        mpoCode: body?.mpoCode,
        email: body?.email,
        eiin: body?.eiin,
        phone02: body?.phone02 ?? "",
      },
      create: {
        key: "abc",
        address: body?.address,
        phone01: body?.phone01,
        mpoCode: body?.mpoCode,
        email: body?.email,
        eiin: body?.eiin,
        phone02: body?.phone02 ?? "",
      },
    })
    revalidatePath("/")

    return NextResponse.json(info)
  } catch (error) {
    console.error("PRISMA ERROR:", error)

    return NextResponse.json(
      {
        success: false,
        error,
      },
      { status: 500 }
    )
  }
}
