import { prisma } from "@/lib/prisma/prisma"
import { staffDataType } from "@/lib/types/type"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

const fallbackTeachers = [
  {
    name: "আব্দুল্লাহ আল নোমান",
    designation: "সিনিয়র বাংলা শিক্ষক",
    subject: "বাংলা",
    imageUrl: "/t1.jpg",
    mpoIndex: null,
    joiningDate: null,
    comment: "",
    phone: "",
  },
  {
    name: "মাহবুব সরকার",
    designation: "সিনিয়র ইংরেজি শিক্ষক",
    subject: "ইংরেজি",
    imageUrl: "/t2.jpg",
    mpoIndex: null,
    joiningDate: null,
    comment: "",
    phone: "",
  },
]

export async function GET() {
  try {
    const info = await prisma.staff.findMany()
    // const info = null
    if (!info || info.length === 0) {
      return NextResponse.json(fallbackTeachers)
    }
    return NextResponse.json(info)
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch school info", err },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  const data: staffDataType = await req.json()

  const info = await prisma.staff.create({
    data: {
      name: data?.name,
      designation: data?.designation,
      subject: data?.subject,
      mpoIndex: data?.mpoIndex,
      joiningDate: data?.joiningDate,
      comment: data?.comment,
      phone: data?.phone,
      imageUrl: data.imageUrl!,
    },
  })
  revalidatePath("/")
  revalidatePath("/teachers")
  return NextResponse.json(info)
}

export async function PUT(req: Request) {
  const data: staffDataType = await req.json()

  const info = await prisma.staff.upsert({
    where: { id: data?.id },
    update: {
      name: data?.name,
      designation: data?.designation,
      subject: data?.subject,
      mpoIndex: data?.mpoIndex,
      phone: data?.phone,

      joiningDate: data.joiningDate,
      comment: data?.comment,
      imageUrl: data?.imageUrl,
    },
    create: {
      name: data?.name,
      designation: data?.designation,
      subject: data?.subject,
      mpoIndex: data?.mpoIndex,
      phone: data?.phone,
      joiningDate: data.joiningDate,
      comment: data?.comment,
      imageUrl: data?.imageUrl,
    },
  })
  revalidatePath("/")
  revalidatePath("/teachers")
  return NextResponse.json(info)
}
