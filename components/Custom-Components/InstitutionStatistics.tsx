import { prisma } from "@/lib/prisma/prisma"
import React from "react"

interface InstitutionStat {
  key: string
  value: string
  label: string
}

const infoData = await prisma.statistics.findMany({
  orderBy: { createdAt: "desc" },
})

const stats: InstitutionStat[] = [
  {
    key: infoData[3]?.key || "Students",
    value: infoData[3]?.value || "0",
    label: "সর্বোমোট শিক্ষার্থী",
  },
  {
    key: infoData[4]?.key || "Teachers",
    value: infoData[4]?.value || "0",
    label: "শিক্ষক/শিক্ষিকা",
  },
  {
    key: infoData[2]?.key || "Stuff",
    value: infoData[2]?.value || "0",
    label: "অফিশ কর্মচারী",
  },
  {
    key: infoData[0]?.key || "Building",
    value: infoData[0]?.value || "0",
    label: "সর্বোমোট কক্ষ",
  },
  {
    key: infoData[1]?.key || "Total Room",
    value: infoData[1]?.value || "0",
    label: "বিদ্যালয় ভবন",
  },
]

const InstitutionStatistics = () => {
  return (
    <section className="bg-background py-16">
      <div className="container px-4">
        {/* Section Heading */}
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold whitespace-nowrap text-foreground">
            প্রতিষ্ঠানের পরিসংখ্যান
          </h2>
          <div className="h-[1px] w-full bg-border" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex aspect-square flex-col items-center justify-center rounded-full border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
            >
              <span className="mb-2 text-4xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="text-center text-sm font-medium text-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InstitutionStatistics
