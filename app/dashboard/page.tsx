import { DashboardInfoCard } from "@/Custom-Components/Dashboard-Compo/CardInfo"
import { prisma } from "@/lib/prisma/prisma"

export default async function Page() {
  const schoolInfo = await prisma.statistics.findMany()

  return (
    <div className="grid grid-cols-6 items-center justify-around gap-3">
      {schoolInfo.map((item) => (
        <DashboardInfoCard
          key={item.id}
          title={item?.key}
          value={item?.value}
        />
      ))}
    </div>
  )
}
