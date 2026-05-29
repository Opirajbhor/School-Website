import { prisma } from "@/lib/prisma/prisma"
import { staffDataType } from "@/lib/types/type"
import { NextResponse } from "next/server"

const teachers = [
  {
    name: "আব্দুল্লাহ আল নোমান",
    slug: "আব্দুল্লাহ-আল-নোমান",
    role: "সিনিয়র বাংলা শিক্ষক",
    image: "/t1.jpg",
  },
  {
    name: "মাহবুব সরকার",
    role: "সিনিয়র ইংরেজি শিক্ষক",
    image: "/t2.jpg",
  },
  {
    name: "সোনিয়া আক্তার",
    role: "গণিত শিক্ষিকা",
    image: "/t3.jpg",
  },
  {
    name: "তাসনিম জারা শাওন",
    role: "সিনিয়র বিজ্ঞান শিক্ষিকা",
    image: "/t4.jpg",
  },
]

export async function GET() {
  try {
    const info = await prisma.staff.findMany()
    // const info = null
    if (info === null) {
      return NextResponse.json(teachers)
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
      index: data?.index,
      joinDate: new Date(data?.joinDate),
      comment: data?.comment,
      imageUrl: data.imageUrl!,
    },
  })

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
      index: data?.index,
      joinDate: new Date(data.joinDate),
      comment: data?.comment,
      imageUrl: data?.imageUrl,
    },
    create: {
      name: data?.name,
      designation: data?.designation,
      subject: data?.subject,
      index: data?.index,
      joinDate: new Date(data.joinDate),
      comment: data?.comment,
      imageUrl: data?.imageUrl,
    },
  })

  return NextResponse.json(info)
}
