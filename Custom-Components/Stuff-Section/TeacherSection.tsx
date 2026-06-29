import { Button } from "@/components/ui/button"
import StaffCard from "./StaffCard"
import { prisma } from "@/lib/prisma/prisma"
import Link from "next/link"
import { staffDataType } from "@/lib/types/type"

export default async function TeacherSection() {
  const teachers: staffDataType[] = await prisma.staff.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <section className="w-full bg-background py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-4">
            <h2 className="text-xl font-bold whitespace-nowrap text-foreground lg:text-2xl">
              স্কুল শিক্ষক মন্ডলী
            </h2>
            <div className="h-px w-full bg-border" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-3 md:grid-cols-2 lg:gap-6">
          {teachers.map((teacher, i) => (
            <StaffCard staff={teacher} key={i} />
          ))}
        </div>

        {/* Bottom */}
        <Link href={"/teachers"} className="mt-6 flex justify-center">
          <Button>সকল শিক্ষকবৃন্দ →</Button>
        </Link>
      </div>
    </section>
  )
}
