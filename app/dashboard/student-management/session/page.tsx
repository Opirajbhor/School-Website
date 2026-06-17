"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import LoadingSpinner from "@/Custom-Components/Dashboard-Compo/LoadingSpinner"
import { api } from "@/lib/axios/axios"
import { session } from "@/lib/types/type"
import { ChevronDown, ChevronUp, Trash2 } from "lucide-react"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

export default function Session() {
  const { register, handleSubmit, reset } = useForm<session>()
  const [data, setData] = useState<session[]>([])
  const [loading, setLoading] = useState(false)
  const [panel, setPanel] = useState<boolean>(false)
  const [reload, setReload] = useState<boolean>(false)
  const [submitLoading, setSubmitLoading] = useState<boolean>(false)

  //   add session
  const onSubmit = async (data: session) => {
    setSubmitLoading(true)
    if (!data) {
      return toast.error("fields can not be empty")
    }
    try {
      const res = await api.post("/student-management/session", {
        ...data,
        session_status: "Active",
      })
      if (res.status === 200) {
        toast.success("Session Successfully Added!")
        reset()
        setReload(true)
      }
    } catch {
      toast.error("something went wrong")
    } finally {
      setSubmitLoading(false)
    }
  }

  // delete function
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false)
  const handleDelete = async (id: string) => {
    setDeleteLoading(true)
    setLoading(true)
    try {
      const res = await api.delete("/student-management/session", {
        data: id,
      })
      if (res.status === 200) {
        toast.success("successfully deleted session")
      }
      setReload(true)
    } catch {
      toast.error("failed to delete session")
    }
  }

  // LOAD DATA
  useEffect(() => {
    async function load() {
      const res = await api.get("/student-management/session")
      setData(res.data)
      setLoading(true)
      setReload(false)
      setDeleteLoading(false)
    }
    load()
  }, [reload])

  if (loading === false) {
    return <LoadingSpinner />
  }
  return (
    <div>
      <h1 className="my-5 text-center text-2xl">Session Management</h1>

      {/* panel */}
      <div>
        <Button
          onClick={(e) => {
            e.preventDefault()
            setPanel(!panel)
          }}
          className="mb-5 ml-5"
        >
          Add Photo {panel ? <ChevronUp /> : <ChevronDown />}
        </Button>

        {panel && (
          <form onSubmit={handleSubmit(onSubmit)} className="ml-5 w-200">
            {/* full name */}
            <div className="mb-5 space-y-2">
              <Label htmlFor="name" className="block text-sm">
                সেশন :
              </Label>
              <Input type="number" {...register("session_name")} required />
            </div>

            <div className="mb-5 space-y-2">
              <Button disabled={submitLoading}>
                {submitLoading && <Spinner />} Submit
              </Button>
            </div>
          </form>
        )}
      </div>

      {/* table */}
      <div className="rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SL</TableHead>
              <TableHead>Session Year</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, i) => (
              <TableRow key={i}>
                {/* Sl */}
                <TableCell>{i + 1}</TableCell>
                {/* tittle */}
                <TableCell className="font-medium">
                  {item.session_name}
                </TableCell>
                {/* status */}
                <TableCell className="font-medium">
                  <Badge>{item.session_status}</Badge>
                </TableCell>

                {/* Actions */}
                <TableCell className="flex gap-2">
                  <Button
                    className="bg-red-400 text-white hover:bg-red-600"
                    disabled={deleteLoading}
                    onClick={() => handleDelete(item?.id)}
                  >
                    {deleteLoading && <Spinner />} <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Toaster />
    </div>
  )
}
