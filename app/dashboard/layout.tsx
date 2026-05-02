import { TooltipProvider } from "@/components/ui/tooltip"
import { ReactNode } from "react"
type Props = {
  children: ReactNode
}
export default function DashboardLayout({ children }: Props) {
  return <TooltipProvider>{children}</TooltipProvider>
}
