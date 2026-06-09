"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { api } from "@/lib/axios/axios"
import { uploadImage } from "@/lib/cloudinary/Image.Cloudinary"
import { imagePreview } from "@/lib/imagePreview"
import { notices } from "@/lib/types/type"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

type Props = {
  connect: boolean
  setConnect: React.Dispatch<React.SetStateAction<boolean>>
}
export default function AddNotice({ setConnect, connect }: Props) {
  const [panel, setPanel] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)

  const { register, handleSubmit, reset } = useForm<notices>()
  const onSubmit = async (data: notices) => {
    const imageFile = data.file?.[0]
    const maxImageSize = 500 * 1024 //500KB
    if (imageFile && imageFile.size > maxImageSize) {
      return toast.error("Image too big! Image size must be under 500KB")
    }
    try {
      // upload
      let imgURl = ""
      if (imageFile) {
        imgURl = await uploadImage(imageFile)
        if (!imgURl) {
          return toast.error("Image upload failed")
        }
      }
      const res = await api.post("notices", {
        title: data.title,
        description: data.description,
        fileUrl: imgURl,
      })
      if (res.status === 200) {
        toast.success("Notice Successfully Added!")
        reset()
        setConnect(!connect)
      }
    } catch (error) {
      console.error(error)
      toast.error("Failed to add notice")
    }
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
                <Input type="text" {...register("title")} required />
              </div>
              {/* description */}
              <div className="mb-5 space-y-2">
                <Label htmlFor="comment" className="block text-sm">
                  বিস্তারিত নোটিশ *
                </Label>
                <Textarea {...register("description")} required />
              </div>
              {/* image preview */}
              {preview && (
                <Image src={preview} alt="preview" width={200} height={200} />
              )}

              {/* image */}
              <div className="my-5 space-y-2">
                <Label htmlFor="image" className="block text-sm">
                  ছবি *
                </Label>
                <Input
                  type="file"
                  accept="image/*"
                  {...register("file", {
                    onChange: (e) => {
                      setPreview(imagePreview(e.target.files[0]))
                    },
                  })}
                  required
                />
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
