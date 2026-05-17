"use client"

import Image from "next/image"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface PraisePoint {
  title: string
  description: string
}

interface TeacherData {
  name: string
  designation: string
  joiningDate: string
  comment: string
  praisePoints: PraisePoint[]
  imageUrl: string
}

const TEACHER_DATA: TeacherData = {
  name: "আবদুল্লাহ আল নোমান",
  designation: "সিনিয়র বাংলা শিক্ষক",
  joiningDate: "15 Jan, 2023",
  comment:
    "আমি একজন শিক্ষক হিসেবে, আমি আমার স্কুল সম্পর্কে বেশ ইতিবাচক মতামত পোষণ করি। আমার স্কুল একটি সুন্দর ও সুস্থ পরিবেশে মানসম্মত শিক্ষা প্রদান করে।",
  praisePoints: [
    {
      title: "শিক্ষার্থী-শিক্ষক সম্পর্ক",
      description:
        "শিক্ষকরা শিক্ষার্থীদের সাথে ভালো সম্পর্ক বজায় রাখেন।",
    },
    {
      title: "শিক্ষার মান",
      description:
        "বিদ্যালয়ে মানসম্মত শিক্ষা প্রদান করা হয়।",
    },
    {
      title: "শিক্ষার্থী কার্যক্রম",
      description:
        "বিভিন্ন সহশিক্ষা কার্যক্রম পরিচালিত হয়।",
    },
  ],
  imageUrl:
    "https://bschool.pages.dev/assets/images/teachers/details-img.png",
}

export default function StaffDetail() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-10">
      <Card>
        <CardContent className="grid gap-8 p-6 md:grid-cols-[300px_1fr]">
          
          {/* Left Side */}
          <div className="space-y-5">
            <div className="overflow-hidden rounded-md border">
              <Image
                src={TEACHER_DATA.imageUrl}
                alt={TEACHER_DATA.name}
                width={300}
                height={350}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold">
                {TEACHER_DATA.name}
              </h1>

              <Badge variant="secondary">
                {TEACHER_DATA.designation}
              </Badge>

              <p className="text-sm text-muted-foreground">
                যোগদান তারিখ: {TEACHER_DATA.joiningDate}
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            
            {/* Comment */}
            <div>
              <CardHeader className="px-0">
                <h2 className="text-xl font-semibold">
                  শিক্ষকের মন্তব্য
                </h2>
              </CardHeader>

              <Separator className="mb-4" />

              <p className="leading-7 text-muted-foreground">
                {TEACHER_DATA.comment}
              </p>
            </div>

            {/* Praise Points */}
            <div>
              <CardHeader className="px-0">
                <h2 className="text-xl font-semibold">
                  বিদ্যালয়ের বিশেষ দিক
                </h2>
              </CardHeader>

              <Separator className="mb-4" />

              <div className="space-y-5">
                {TEACHER_DATA.praisePoints.map((point, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h3 className="mb-2 font-semibold">
                        {point.title}
                      </h3>

                      <p className="text-sm leading-6 text-muted-foreground">
                        {point.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  )
}