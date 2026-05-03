import { Button } from "@/components/ui/button"
import { dashboardLinks } from "@/lib/types/Interfaces"
import Link from "next/link"

// dashboard links
const links: dashboardLinks[] = [
  {
    name: "Dashboard",
    src: "/dashboard",
    icon: "",
  },
  {
    name: "Notices",
    src: "/dashboard/notices",
    icon: "",
  },
]

export default function DashboardSidebar() {
  return (
    <aside className="min-h-screen w-64 space-y-4 border-r bg-background p-4">
      <h2 className="text-xl font-bold">Dashboard</h2>

      <nav className="flex flex-col gap-2">
        {links.map((link, i) => (
          <Button
            key={i}
            variant="ghost"
            className="w-full justify-start"
            asChild
          >
            <Link href={link.src}>{link.name}</Link>
          </Button>
        ))}
      </nav>
    </aside>
  )
}
