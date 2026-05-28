import { Card, CardContent } from "@/components/ui/card"
import LoadingSpinner from "@/Custom-Components/Dashboard-Compo/LoadingSpinner"
import {
  ChartColumn,
  Feather,
  InspectionPanel,
  LogOut,
  MessagesSquare,
  SwitchCamera,
} from "lucide-react"
import Link from "next/link"

export default function HomepageCustomization() {
  const tabs = [
    {
      link: "/dashboard/homepage/logo-name",
      name: "নাম ও লগো পরিবর্তন",
      icon: <Feather />,
    },
    {
      link: "/dashboard/homepage/banner",
      name: "ব্যানার পরিবর্তন",
      icon: <SwitchCamera />,
    },
    {
      link: "/dashboard/homepage/statistics",
      name: "পরিসংখ্যান",
      icon: <ChartColumn />,
    },
    {
      link: "/dashboard/homepage/headMasterMessage",
      name: "প্রধান শিক্ষকের বাণী",
      icon: <MessagesSquare />,
    },
    {
      link: "/dashboard/homepage/chairmanMessage",
      name: "সভাপতি মহোদয়ের বাণী",
      icon: <MessagesSquare />,
    },
    {
      link: "/dashboard/homepage/footer",
      name: "বিদ্যালয় তথ্য পরিবর্তন",
      icon: <InspectionPanel />,
    },
  ]
  setTimeout(() => <LoadingSpinner />, 1000)
  return (
    <div>
      <div>
        <h1 className="my-5 text-center underline">Homepage Customization</h1>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tabs.map((tab, i) => (
          <Link key={i} href={tab.link}>
            <Card className="group relative overflow-hidden px-2 py-6 shadow-xs transition-all hover:shadow-md">
              <CardContent>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    {tab.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {tab.name}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
