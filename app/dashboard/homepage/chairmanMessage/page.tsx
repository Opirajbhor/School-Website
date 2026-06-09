"use client"
import { Input } from "@/components/ui/input"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { uploadImage } from "@/lib/cloudinary/Image.Cloudinary"
import Image from "next/image"
import LoadingSpinner from "@/Custom-Components/Dashboard-Compo/LoadingSpinner"
import { MessageData, MessageForm } from "@/lib/types/Interfaces"

export default function Message() {
  const [info, setInfo] = useState<MessageData[] | null>(null)

  const { register, handleSubmit } = useForm<MessageForm>()
  const onSubmit = async (data: MessageForm) => {
    const maxImageSize = 500 * 1024 //500KB
    const imageFile = data.image?.[0]
    if (!imageFile) {
      return toast.error("image file is required")
    }
    if (imageFile.size > maxImageSize) {
      return toast.error("Image too big! Image size must be under 500KB")
    }
    const imgURl = await uploadImage(imageFile)

    const res = await fetch("/api/message", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: "chairman",
        title: "সভাপতি মহোদয়ের বাণী",
        name: data?.name,
        desc: data?.desc,
        ...(imgURl && { image: imgURl }),
      }),
    })
    toast.success("Message Successfully Added!")
    window.location.reload()
  }

  //   fetch data
  useEffect(() => {
    async function load() {
      const res = await fetch("/api/message")
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
          <h1 className="text-left text-2xl">সভাপতি মহোদয়ের বাণী</h1>

          <input
            className="h-10 rounded-2xl border-2 border-black p-3"
            {...register("name")}
            placeholder="Name"
            defaultValue={info[0]?.name}
            required
          />
          <textarea
            className="h-auto min-h-50 w-full resize-none overflow-auto rounded-2xl border-2 border-black p-3"
            {...register("desc")}
            placeholder="description"
            defaultValue={info[0]?.desc}
            required
          />
          <div className="relative h-20 w-20 overflow-hidden rounded-lg">
            <Image
              src={info[0]?.image || "./image.jpg"}
              alt={info[0]?.title ||"charman"}
              fill
              className="object-cover"
            />
          </div>

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
