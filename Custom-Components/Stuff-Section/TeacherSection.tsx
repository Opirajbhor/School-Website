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
    <section className="w-full bg-background lg:py-16 py-8">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <h2 className="mb-8 lg:text-2xl text-xl font-bold md:text-3xl">
          স্কুল শিক্ষক মন্ডলী
        </h2>

        {/* Grid */}
        <div className="grid lg:gap-6 gap-3 md:grid-cols-2">
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
