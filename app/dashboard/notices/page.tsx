"use client"
import React, { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import AddNotice from "./add-notice/addNotice"
import { DeleteNotice } from "./editNotice"
import { api } from "@/lib/axios/axios"
import LoadingSpinner from "@/Custom-Components/Dashboard-Compo/LoadingSpinner"
import { notices } from "@/lib/types/type"

export default function NoticesDashboard() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [connect, setConnect] = useState(false)

  useEffect(() => {
    async function load() {
      const res = await api.get("/notices")
      setData(res.data)
      setLoading(true)
    }

    load()
  }, [connect])
  console.log(connect)
  if (loading === false) {
    return <LoadingSpinner />
  }
  return (
    <div>
      <h1 className="my-5 text-center text-2xl">All Notices ({data.length})</h1>
      <div className="my-3">
        <AddNotice setConnect={setConnect} connect={connect}></AddNotice>
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
            {data.map((item: notices, i) => (
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
                <TableCell>
                  {new Date(item?.createdAt).toLocaleDateString()}
                </TableCell>
                {/* Actions */}
                <TableCell className="flex gap-2">
                  {item?.id && (
                    <DeleteNotice
                      id={item.id}
                      setConnect={setConnect}
                      connect={connect}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
