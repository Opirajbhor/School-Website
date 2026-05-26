"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown, ChevronUp } from "lucide-react"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

type notice = {
  tittle: string
  description: string
}
type Props = {
  connect: boolean
  setConnect: React.Dispatch<React.SetStateAction<boolean>>
}
export default function AddNotice({ setConnect, connect }: Props) {
  const [panel, setPanel] = useState(false)

  const { register, handleSubmit, reset } = useForm<notice>()
  const onSubmit = async (data: notice) => {
    const res = await fetch("/api/notices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const result = await res.json()
    toast.success("Notice Successfully Added!")
    reset()
    setConnect(!connect)
  }
  return (
    <>
      <Button onClick={() => setPanel(!panel)}>
        Add Notice{panel ? <ChevronUp /> : <ChevronDown />}
      </Button>
      {panel && (
        <div>
          <h1 className="my-5 text-center">Add a New Notice</h1>
          <div>
            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Name */}
              <div className="mb-5 space-y-2">
                <Label htmlFor="name" className="block text-sm">
                  নোটিশের বিষয় *
                </Label>
                <Input type="text" {...register("tittle")} required />
              </div>
              {/* description */}
              <div className="mb-5 space-y-2">
                <Label htmlFor="comment" className="block text-sm">
                  বিস্তারিত নোটিশ *
                </Label>
                <Textarea {...register("description")} required />
              </div>

              <button type="submit" className="bg-primary text-secondary">
                Submit
              </button>
            </form>
          </div>
          <div>
            <Toaster />
          </div>
        </div>
      )}
    </>
  )
}
