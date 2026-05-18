import React, { useState } from "react"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import { staffDataType } from "@/lib/types/type"

type StaffTableProps = {
  staffData: staffDataType[]
}
export default function StaffTable({ staffData }: StaffTableProps) {
  console.log(staffData)
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const totalItems = staffData?.length
  const totalPages = Math.ceil(totalItems / rowsPerPage)

  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = Math.min(startIndex + rowsPerPage, totalItems)

  const currentData = staffData?.slice(startIndex, endIndex)

  return (
    <div className="mx-auto w-full max-w-6xl p-4 font-sans text-foreground antialiased">
      {/* Table Container with shadcn border and background structure */}
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              {/* Table Header: using bg-muted/50 and text-muted-foreground */}
              <tr className="border-b border-border bg-muted/50 text-xs font-medium text-muted-foreground">
                <th className="px-6 py-3.5 font-medium">Name</th>
                <th className="px-6 py-3.5 font-medium">Designation</th>
                <th className="px-6 py-3.5 font-medium">Subject</th>
                <th className="px-6 py-3.5 font-medium">Index</th>
                <th className="px-6 py-3.5 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {staffData?.map((user) => (
                // Table Rows: using hover:bg-muted/50 transitions
                <tr
                  key={user?.id}
                  className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
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

      {/* Pagination Container */}
      <div className="mt-4 flex flex-col items-center justify-between gap-4 px-2 text-xs text-muted-foreground sm:flex-row">
        {/* Dropdown Selector styling mirroring shadcn Select component */}
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <div className="relative inline-block">
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value))
                setCurrentPage(1)
              }}
              className="cursor-pointer appearance-none rounded-md border border-input bg-background py-1.5 pr-8 pl-3 text-xs font-medium text-foreground shadow-sm transition-colors outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex items-center gap-6">
          <span className="font-medium text-muted-foreground">
            {startIndex + 1} - {endIndex} of {totalItems}
          </span>

          <div className="flex items-center gap-1">
            {/* Previous Page Arrow */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium transition-colors ${
                  currentPage === page
                    ? "border border-input bg-accent font-semibold text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Page Arrow */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-input bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
