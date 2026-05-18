import React, { useState } from "react"
import Image from "next/image"
import { staffDataType } from "@/lib/types/type"

type StaffTableProps = {
  staffData: staffDataType[]
}
export default function StaffTable({ staffData }: StaffTableProps) {
  console.log(staffData)
  const totalItems = staffData?.length

  return (
    <div className="mx-auto w-full max-w-6xl p-4 font-sans text-foreground antialiased">
      {/* Table Container with shadcn border and background structure */}
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              {/* Table Header: using bg-muted/50 and text-muted-foreground */}
              <tr className="border-b border-border bg-muted/50 text-xs font-medium text-muted-foreground">
                <th className="px-6 py-3.5 font-medium">SL ({totalItems})</th>
                <th className="px-6 py-3.5 font-medium">Name</th>
                <th className="px-6 py-3.5 font-medium">Designation</th>
                <th className="px-6 py-3.5 font-medium">Subject</th>
                <th className="px-6 py-3.5 font-medium">Index</th>
                <th className="px-6 py-3.5 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {staffData?.map((user, i) => (
                // Table Rows: using hover:bg-muted/50 transitions
                <tr
                  key={user?.id}
                  className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  {/* serial */}
                  <td className="px-6 py-3.5 whitespace-nowrap text-muted-foreground">
                    {i + 1}
                  </td>
                  {/* Name Column */}
                  <td className="px-6 py-3.5 font-medium whitespace-nowrap text-foreground">
                    <div className="flex items-center gap-3">
                      {user?.imageUrl ? (
                        <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-border">
                          <Image
                            src={user?.imageUrl}
                            alt={user?.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                          {user?.name.charAt(0)}
                        </div>
                      )}
                      <span>{user?.name}</span>
                    </div>
                  </td>
                  {/* Designation */}
                  <td className="px-6 py-3.5 whitespace-nowrap text-muted-foreground">
                    {user?.designation}
                  </td>
                  {/* Subject Column */}
                  <td className="px-6 py-3.5 whitespace-nowrap text-foreground">
                    <span>{user?.subject}</span>
                  </td>
                  {/* Index Column */}
                  <td className="px-6 py-3.5 whitespace-nowrap text-foreground">
                    <span>{user?.index}</span>
                  </td>
                  {/* Date Column */}
                  <td className="px-6 py-3.5 whitespace-nowrap text-muted-foreground">
                    {user?.joinDate
                      ? new Date(user.joinDate).toLocaleDateString()
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
