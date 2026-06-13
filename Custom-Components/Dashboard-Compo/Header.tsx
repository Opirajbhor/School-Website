import ModeToggle from "@/components/ui/modeToggle"
import { prisma } from "@/lib/prisma/prisma"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import React from "react"
import LogoutButton from "./Logout"

export default async function HeaderDashboard() {
  // data fetch
  const logoName = await prisma.logoName.findFirst()
  // -----
  return (
    <div className="mt-3 flex items-center justify-between border-b-2">
      <div>
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 text-left text-base text-primary"
        >
          <ArrowLeft /> Back to Homepage
        </Link>
      </div>

      <div>
        <h1>
          {"Dashboard - "} {logoName?.name}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <ModeToggle></ModeToggle>
        <LogoutButton />
      </div>
    </div>
  )
}
