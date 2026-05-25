"use client"
import { Button } from "@/components/ui/button"
import { dashboardLinks } from "@/lib/types/Interfaces"
import { House, Images, Info, Mails, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

// dashboard links
const links: dashboardLinks[] = [
  {
    name: "Homepage",
    src: "/dashboard/homepage",
    icon: <House />,
  },
  {
    name: "Notices",
    src: "/dashboard/notices",
    icon: <Mails />,
  },
  {
    name: "About School",
    src: "/dashboard/about-school",
    icon: <Info />,
  },
  {
    name: "Staff Management",
    src: "/dashboard/staff-management",
    icon: <Users />,
  },
  {
    name: "Gallery",
    src: "/dashboard/gallery",
    icon: <Images />,
  },
]

export default function DashboardSidebar() {
  const currentPath = usePathname()
  console.log(currentPath)
  return (
    <aside className="min-h-screen w-64 space-y-4 border-r bg-background p-4">
      {/* <h2 className="text-xl font-bold">Dashboard</h2> */}

      <nav className="flex flex-col gap-2">
        {links.map((link, i) => {
          const isActive = currentPath === link?.src
          console.log(isActive)
          return (
            <Button
              key={i}
              variant="ghost"
              className={`w-full justify-start hover:bg-accent ${isActive && "bg-primary text-primary-foreground"}`}
              asChild
            >
              <Link href={link.src}>
                {link.icon} {link.name}
              </Link>
            </Button>
          )
        })}
      </nav>
    </aside>
  )
}
