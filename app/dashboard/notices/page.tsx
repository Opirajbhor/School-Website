import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma/prisma"
import Link from "next/link"

const data = await prisma.notice.findMany({
  orderBy: { createdAt: "desc" },
})

export default function NoticesDashboard() {
  return (
    <div>
      <h1 className="my-5 text-center text-2xl">All Notices</h1>
      <div className="my-5 flex gap-2">
        <Button className="item-right">
          <Link href={"/dashboard/notices/add-notice"}>Add Notice</Link>
        </Button>
      </div>
      <div className="rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SL</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
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
                <TableCell className="font-medium">{item.description}</TableCell>
                {/* date */}
                <TableCell>{item?.createdAt.toLocaleDateString()}</TableCell>
                {/* Actions */}
                <TableCell className="text-right"></TableCell>
              </TableRow> 
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
