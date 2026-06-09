import { prisma } from "@/lib/prisma/prisma"
import { staffDataType } from "@/lib/types/type"
import { NextResponse } from "next/server"

const teacher: staffDataType = {
  name: "আবদুল্লাহ আল নোমান",
  designation: "সিনিয়র বাংলা শিক্ষক",
  mpoIndex: "123456",
  joiningDate: "10/05/2010",
  subject: "সমাজ",
  phone: "01452124454",
  comment:
    "আমি একজন শিক্ষক হিসেবে, আমি আমার স্কুল সম্পর্কে বেশ ইতিবাচক মতামত পোষণ করি। আমার স্কুল একটি সুন্দর ও সুস্থ পরিবেশে মানসম্মত শিক্ষা প্রদান করে।",

  imageUrl: "/photo.jpg",
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params
    const info = await prisma.staff.findFirst({
      where: { name },
    })

    if (info === null) {
      return NextResponse.json(teacher)
    }
    console.log(name)
    console.log(info)
    return NextResponse.json(info)
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to get teacher info", err },
      { status: 500 }
    )
  }
}
