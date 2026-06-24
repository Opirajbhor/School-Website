"use client"
import React, { useState } from "react"
import Image from "next/image"
import { staffDataType } from "@/lib/types/type"
import { Trash } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { api } from "@/lib/axios/axios"

type StaffTableProps = {
  staffData: staffDataType[]
  load: boolean
  setLoad: React.Dispatch<React.SetStateAction<boolean>>
}
export default function StaffTable({
  staffData,
  setLoad,
  load,
}: StaffTableProps) {
  const [loading, setLoading] = useState(false)

  const totalItems = staffData?.length
  // delete function
  const deleteFn = async (id: string) => {
    setLoading(true)
    await api.delete("/staff", {
      data: { id: id },
    })
    setLoad(!load)
  }
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
                <th>Actions</th>
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
                    <span>{user?.mpoIndex}</span>
                  </td>
                  {/* Date Column */}
                  <td className="px-6 py-3.5 whitespace-nowrap text-muted-foreground">
                    {user?.joiningDate
                      ? new Date(user.joiningDate).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td>
                    {/* delete notice  */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <Trash
                            size={20}
                            className="cursor-pointer text-red-500"
                          />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-sm">
                        <DialogHeader>
                          <DialogTitle>Delete Profile</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete this Profile?
                          </DialogDescription>
                        </DialogHeader>

                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button
                            disabled={loading || !user?.id}
                            onClick={() => {
                              if (user?.id) deleteFn(user.id)
                            }}
                          >
                            {loading && <Spinner />} Delete
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
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
