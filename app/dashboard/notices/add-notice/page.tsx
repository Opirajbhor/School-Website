"use client"
import React from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

type notice = {
  tittle: string
  description: string
}
export default function AddNotice() {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data: notice) => {
    const res = await fetch("/api/notices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const result = await res.json()
    console.log("Form Data:", result)
    toast.success("Notice Successfully Added!")
    reset()
  }
  return (
    <div>
      <h1>Add Notice</h1>
      <div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("tittle")} placeholder="Name" required />
          <textarea {...register("description")} placeholder="description" required />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <Toaster />
      </div>
    </div>
  )
}
