import HeaderDashboard from "@/Custom-Components/Dashboard-Compo/Header"
import DashboardSidebar from "@/Custom-Components/Dashboard-Compo/DashboardSidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ReactNode } from "react"
type Props = {
  children: ReactNode
}
export default function DashboardLayout({ children }: Props) {
  return (
    <TooltipProvider>
      <HeaderDashboard></HeaderDashboard>
      <div className=" flex">
        <DashboardSidebar></DashboardSidebar>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </TooltipProvider>
  )
}
