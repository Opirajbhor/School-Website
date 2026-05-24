import { Button } from "@/components/ui/button"
import { dashboardLinks } from "@/lib/types/Interfaces"
import { School } from "lucide-react"
import Link from "next/link"

// dashboard links
const links: dashboardLinks[] = [
  {
    name: "Homepage",
    src: "/dashboard/homepage",
    icon: "",
  },
  {
    name: "Notices",
    src: "/dashboard/notices",
    icon: "",
  },
  {
    name: "About School",
    src: "/dashboard/about-school",
    icon: "<School />",
  },
  {
    name: "Staff Management",
    src: "/dashboard/staff-management",
    icon: "<School />",
  },
  {
    name: "Gallery",
    src: "/dashboard/gallery",
    icon: "<School />",
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
            className="w-full justify-start hover:bg-accent"
            asChild
          >
            <Link href={link.src}>{link.name}</Link>
          </Button>
        ))}
      </nav>
    </aside>
  )
}
