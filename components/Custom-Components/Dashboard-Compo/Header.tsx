import Link from "next/link"
import React from "react"

const HeaderDashboard = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="mt-5 text-left text-base">Header Dashboard</h1>
      </div>
      <div>
        <button className="bg-secondary">
          <Link href={`/logout`}>Logout</Link>
        </button>
      </div>
    </div>
  )
}

export default HeaderDashboard
