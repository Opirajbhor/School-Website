import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InfoCardProps {
  title: string
  value: string
}

export function DashboardInfoCard({
  title = "Total Student",
  value = "20",
}: Partial<InfoCardProps>) {
  return (
    <Card className="w-full max-w-[160px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Main Metric Value */}
        <div className="text-2xl font-bold tracking-tight">{value}</div>
      </CardContent>
    </Card>
  )
}
