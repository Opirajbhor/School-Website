"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { Spinner } from "@/components/ui/spinner"
import { api } from "@/lib/axios/axios"
import { uploadImage } from "@/lib/cloudinary/Image.Cloudinary"
import { imagePreview } from "@/lib/imagePreview"
import { heroData } from "@/lib/types/Interfaces"
import Image from "next/image"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

export default function BannerPage() {
  const { register, handleSubmit, reset } = useForm<heroData>()
  const [preview, setPreview] = useState<string | null>(null)
  const [spin, setSpin] = useState<boolean>(false)

  const onSubmit = async (data: heroData) => {
    setSpin(true)
    const currImage = data?.image[0]
    if (!currImage) {
      setSpin(false)
      return toast.error("image file is required")
    }
    const imgURl = await uploadImage(currImage)

    await api.put("/banner", {
      ...data,
      imageUrl: imgURl,
    })
    toast.success("Banner Successfully Added!")
    reset()
    setPreview(null)
    setSpin(false)
  }

  return (
    <div className="mx-auto max-w-200 space-y-6">
      <div>
        <h1 className="text-center text-2xl underline">
          Change Homepage Banner
        </h1>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <NativeSelect {...register("key")} className="my-3">
            <NativeSelectOption value="banner-01">Banner 01</NativeSelectOption>
            <NativeSelectOption value="banner-02">Banner 02</NativeSelectOption>
            <NativeSelectOption value="banner-03">Banner 03</NativeSelectOption>
          </NativeSelect>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="block text-sm">
            Banner Title
          </Label>
          <Input type="text" required {...register("title")} name="title" />
        </div>
        {preview && (
          <Image
            src={preview}
            width={400}
            height={200}
            priority
            className="object-cover py-5"
            alt="preview image"
          />
        )}

        <div className="space-y-0.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="pwd" className="text-sm">
              Upload Image
            </Label>
          </div>
          <Input
            {...register("image", {
              onChange: (e) => {
                setPreview(imagePreview(e.target.files[0]))
              },
            })}
            type="file"
            required
            accept="image/*"
            className="input sz-md variant-mixed mt-1 cursor-pointer"
          />
        </div>

        <Button disabled={spin} type="submit" className="mt-5 w-full">
          {spin && <Spinner />} Update
        </Button>
      </form>
      <Toaster />
    </div>
  )
}
