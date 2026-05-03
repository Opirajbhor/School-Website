import HeaderDashboard from "@/components/Custom-Components/Dashboard-Compo/Header"
import DashboardSidebar from "@/components/Custom-Components/Dashboard-Compo/DashboardSidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ReactNode } from "react"
type Props = {
  children: ReactNode
}
export default function DashboardLayout({ children }: Props) {
  return (
    <TooltipProvider>
      <HeaderDashboard></HeaderDashboard>
      <div className="mt-5 flex">
        <DashboardSidebar></DashboardSidebar>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </TooltipProvider>
  )
}
