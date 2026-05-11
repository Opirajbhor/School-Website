"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { uploadImage } from "@/lib/cloudinary/Image.Cloudinary"
import React from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

export default function BannerPage() {
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data: Request) => {
    const imgURl = await uploadImage(data?.image[0])
    const res = await fetch("/api/banner", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: data.banner,
        title: data?.title || info?.title,
        imageUrl: imgURl || info?.imageUrl,
      }),
    })

    toast.success("Info Successfully Added!")
    window.location.reload()
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
          <NativeSelect {...register("banner")}>
            <NativeSelectOption value="banner-01">Banner 01</NativeSelectOption>
            <NativeSelectOption value="banner-02">Banner 02</NativeSelectOption>
            <NativeSelectOption value="banner-03">Banner 03</NativeSelectOption>
          </NativeSelect>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="block text-sm">
            Banner Title
          </Label>
          <Input
            type="text"
            required
            {...register("title")}
            name="title"
            id="titlle"
          />
        </div>
        {/* <Image
          src={info?.imageUrl}
          width={400}
          height={550}
          alt="preview image"
        ></Image> */}

        <div className="space-y-0.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="pwd" className="text-sm">
              Upload Image
            </Label>
          </div>
          <Input
            {...register("image")}
            type="file"
            required
            accept="image/*"
            className="input sz-md variant-mixed mt-1 cursor-pointer"
          />
        </div>

        <Button type="submit" className="mt-5 w-full">
          Update
        </Button>
      </form>
      <Toaster />
    </div>
  )
}
