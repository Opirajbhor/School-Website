import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { prisma } from "@/lib/prisma/prisma"
import { SquarePen, Trash } from "lucide-react"
import AddNotice from "./add-notice/addNotice"

const data = await prisma.notice.findMany({
  orderBy: { createdAt: "desc" },
})

export default function NoticesDashboard() {
  return (
    <div>
      <h1 className="my-5 text-center text-2xl">All Notices ({data.length})</h1>
      <div className="my-3">
        <AddNotice></AddNotice>
      </div>
      <div className="rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SL</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item, i) => (
              <TableRow key={i}>
                {/* Sl */}
                <TableCell>{i + 1}</TableCell>
                {/* tittle */}
                <TableCell className="font-medium">{item.title}</TableCell>
                {/* description */}
                <TableCell className="font-medium">
                  {item.description}
                </TableCell>
                {/* date */}
                <TableCell>{item?.createdAt.toLocaleDateString()}</TableCell>
                {/* Actions */}
                <TableCell className="flex gap-2">
                  <Trash size={20} className="cursor-pointer text-red-500" />
                  <SquarePen
                    size={20}
                    className="cursor-pointer text-yellow-500"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
