import StuffCard from "@/Custom-Components/Stuff-Section/StuffCard"
import { prisma } from "@/lib/prisma/prisma"
import React from "react"

const teachers = await prisma.staff.findMany({
  orderBy: { createdAt: "desc" },
})
const Teachers = () => {
  return (
    <div>
      {/* Header */}
      <div className="my-8 flex flex-col items-center">
        <h2 className=" text-center text-2xl font-bold md:text-3xl">
          স্কুল শিক্ষক মন্ডলী
        </h2>
        <div className="mt-1 h-1 w-70 rounded-full bg-primary" />
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {teachers.map((teacher, i) => (
          <StuffCard staff={teacher} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Teachers
