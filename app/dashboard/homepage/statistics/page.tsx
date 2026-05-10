"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

export default function Statistics() {
  const { register, handleSubmit } = useForm()
  const [info, setInfo] = useState({})

  const onSubmit = async (data) => {
    const entries = Object.entries(data).map(([key, value]) => ({
      key,
      value: String(value),
    }))

    const res = await fetch("/api/statistics", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entries),
    })

    const result = await res.json()
    toast.success("Successfully Updated!")
    window.location.reload()
  }
  //   fetch data

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/statistics")
      const json = await res.json()
      setInfo(json)
    }

    load()
  }, [])
  return (
    <div>
      <h1 className="mt-5 text-center underline">প্রতিষ্ঠানের পরিসংখ্যান</h1>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 ml-10 space-y-2">
          <Label className="block text-sm">সর্বোমোট শিক্ষার্থী</Label>
          <Input
            required
            type="number"
            className="h-10 w-full"
            {...register("students")}
          />
        </div>
        <div className="mb-3 ml-10 space-y-2">
          <Label className="block text-sm">শিক্ষক/শিক্ষিকা</Label>
          <Input
            required
            type="number"
            className="h-10 w-full"
            {...register("teachers")}
          />
        </div>
        <div className="mb-3 ml-10 space-y-2">
          <Label className="block text-sm">অফিশ কর্মচারী</Label>
          <Input
            required
            type="number"
            className="h-10 w-full"
            {...register("stuff")}
          />
        </div>
        <div className="mb-3 ml-10 space-y-2">
          <Label className="block text-sm">সর্বমোট কক্ষ</Label>
          <Input
            required
            type="number"
            className="h-10 w-full"
            {...register("totalRoom")}
          />
        </div>
        <div className="mb-3 ml-10 space-y-2">
          <Label className="block text-sm">বিদ্যালয় ভবন</Label>
          <Input
            required
            type="number"
            className="h-10 w-full"
            {...register("building")}
          />
        </div>
        <Button type="submit" className="mt-5 ml-10 w-100">
          Update
        </Button>
      </form>
      <Toaster />
    </div>
  )
}
