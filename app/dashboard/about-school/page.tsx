"use client"

import { Input } from "@/components/ui/input"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { uploadImage } from "@/lib/cloudinary/Image.Cloudinary"
import Image from "next/image"
import LoadingSpinner from "@/Custom-Components/Dashboard-Compo/LoadingSpinner"

export default function AboutSchool() {
  const [info, setInfo] = useState(null)

  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data: Request) => {
    const imgURl = await uploadImage(data?.image[0])

    const res = await fetch("/api/about-school", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data?.title || info?.title,
        description: data?.description || info?.description,
        imageUrl: imgURl || info?.imageUrl,
      }),
    })
    toast.success("Info Successfully Added!")
    window.location.reload()
  }

  //   fetch data
  useEffect(() => {
    async function load() {
      const res = await fetch("/api/about-school")
      const json = await res.json()
      setInfo(json)
    }

    load()
  }, [])
  if (info == null) {
    return <LoadingSpinner />
  }
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
            className="h-auto min-h-[200px] w-full resize-none overflow-auto rounded-2xl border-2 border-black p-3"
            {...register("description")}
            placeholder="description"
            defaultValue={info?.description}
            required
          />
          <Image
            src={info?.imageUrl}
            width={400}
            height={550}
            alt="preview image"
          ></Image>

          <Input
            className="h-12 rounded-2xl border-2 border-black p-3"
            type="file"
            accept="image/*"
            {...register("image")}
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
