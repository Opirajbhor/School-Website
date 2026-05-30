"use client"

import { Input } from "@/components/ui/input"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { uploadImage } from "@/lib/cloudinary/Image.Cloudinary"
import Image from "next/image"
import LoadingSpinner from "@/Custom-Components/Dashboard-Compo/LoadingSpinner"
import { aboutSchool } from "@/lib/types/Interfaces"
import { api } from "@/lib/axios/axios"
import { imagePreview } from "@/lib/imagePreview"
import { Spinner } from "@/components/ui/spinner"

export default function AboutSchool() {
  const [info, setInfo] = useState<aboutSchool | null>(null)
  const [preview, setPreview] = useState<string | null>("null")
  const [spin, setSpinner] = useState<boolean>(false)

  const { register, handleSubmit } = useForm<aboutSchool>()

  // post submit
  const onSubmit = async (data: aboutSchool) => {
    setSpinner(true)
    const imageFile = data.image?.[0]
    const maxImageSize = 500 * 1024 //500KB
    if (!imageFile) {
      setSpinner(false)
      return toast.error("image file is required")
    }
    if (imageFile.size > maxImageSize) {
      setSpinner(false)

      return toast.error("Image too big! Image size must be under 500KB")
    }
    try {
      const imgURl = await uploadImage(imageFile)
      const res = await api.put("/about-school", {
        data: {
          title: data?.title || info?.title,
          description: data?.description || info?.description,
          imageUrl: imgURl || info?.imageUrl,
        },
      })
      if (res.status === 200) {
        toast.success("Successfully added")
      }
    } catch (err) {
      toast.error("something went wrong!")
    } finally {
      setSpinner(false)
    }
  }

  //   fetch data
  useEffect(() => {
    async function load() {
      const res = await fetch("/api/about-school")
      const json = await res.json()
      setInfo(json)
      setPreview(json?.imageUrl)
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
            className="h-auto min-h-50 w-full resize-none overflow-auto rounded-2xl border-2 border-black p-3"
            {...register("description")}
            placeholder="description"
            defaultValue={info?.description}
            required
          />
          <Image
            src={preview || "/image.jpg"}
            width={400}
            height={550}
            alt="preview image"
          ></Image>

          <Input
            className="h-12 rounded-2xl border-2 border-black p-3"
            type="file"
            accept="image/*"
            {...register("image", {
              onChange: (e) => {
                setPreview(imagePreview(e.target.files[0]))
              },
            })}
          />
          <button
            disabled={spin}
            className="flex items-center justify-center gap-2 rounded-2xl bg-accent p-3"
            type="submit"
          >
            <span>{spin && <Spinner />}</span>
            <span>Submit</span>
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  )
}
