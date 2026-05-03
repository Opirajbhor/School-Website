"use client"

import * as React from "react"
import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  LayoutDashboardIcon,
  ListIcon,
  ChartBarIcon,
  FolderIcon,
  UsersIcon,
  CameraIcon,
  FileTextIcon,
  Settings2Icon,
  CircleHelpIcon,
  SearchIcon,
  DatabaseIcon,
  FileChartColumnIcon,
  FileIcon,
  CommandIcon,
} from "lucide-react"
import { useEffect, useState } from "react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Notices",
      url: "/dashboard/notices",
      icon: <ListIcon />,
    },
    {
      title: "Teachers",
      url: "/dashboard/teachers",
      icon: <ChartBarIcon />,
    },
    {
      title: "Stuff",
      url: "/dashboard/stuff",
      icon: <FolderIcon />,
    },
    {
      title: "Managing committee",
      url: "/dashboard/managing-committee",
      icon: <UsersIcon />,
    },
  ],
}

export default function Page() {}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // name data fetch---------
  const [info, setInfo] = useState(null)
  useEffect(() => {
    async function load() {
      const res = await fetch("http://localhost:3000/api/school-info")
      const json = await res.json()
      setInfo(json)
    }

    load()
  }, [])
  console.log("schoolInfo-", info)
  if (!info) return <div>Loading...</div>
  // --------------

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="/dashboard">
                <CommandIcon className="size-5!" />
                <span className="text-base font-semibold">{info?.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
