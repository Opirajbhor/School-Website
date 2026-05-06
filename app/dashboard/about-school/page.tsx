"use client"

import { Input } from "@/components/ui/input"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

export default function AboutSchool() {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data: Request) => {
    const res = await fetch("/api/about-school", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const result = await res.json()
    console.log("Form Data:", result)
    toast.success("Info Successfully Added!")
    reset()
  }

  //   fetch data
  const [info, setInfo] = useState(null)
  useEffect(() => {
    async function load() {
      const res = await fetch("/api/about-school")
      const json = await res.json()
      setInfo(json)
    }

    load()
  }, [])
  return (
    <div>
      <h1 className="text-center text-2xl underline">About School Section</h1>
      <div>
        <form
          className="mt-10 flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="h-10 rounded-2xl border-2 border-black p-3"
            {...register("title")}
            placeholder="Title"
            defaultValue={info?.title}
            required
          />
          <textarea
            className="h-auto max-h-[250px] min-h-[100px] w-full resize-none overflow-auto rounded-2xl border-2 border-black p-3"
            {...register("description")}
            placeholder="description"
            defaultValue={info?.description}
            required
          />
          <Input
            className="h-12 rounded-2xl border-2 border-black p-3"
            type="file"
            accept="image/*"
            defaultValue={info?.imageUrl || ""}
          />
          <button className="rounded-2xl bg-accent p-3" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  )
}
