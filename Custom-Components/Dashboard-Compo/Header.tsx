import { prisma } from "@/lib/prisma/prisma"
import Link from "next/link"
import React from "react"

const logoName = await prisma.logoName.findFirst()

const HeaderDashboard = () => {
  return (
    <div className="mt-3 flex items-center justify-between">
      <div>
        <Link href={"/"} className="mt-5 text-left text-base">
          Back to Homepage
        </Link>
      </div>
      <div>
        <h1>{logoName?.name}</h1>
      </div>

      <div>
        <Link href={`/logout`}>
          <button className="rounded-2xl bg-secondary p-2">Logout</button>
        </Link>
      </div>
    </div>
  )
}

export default HeaderDashboard
