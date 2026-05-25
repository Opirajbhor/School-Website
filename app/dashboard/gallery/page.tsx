"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { galleryType } from "@/lib/types/type"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Trash2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { uploadImage } from "@/lib/cloudinary/Image.Cloudinary"
import toast, { Toaster } from "react-hot-toast"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { imagePreview } from "@/lib/imagePreview"
import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/axios/axios"
import LoadingSpinner from "@/Custom-Components/Dashboard-Compo/LoadingSpinner"

type singleType = {
  id: string
  tittle: string
  imageUrl: string
}
export default function Gallery() {
  const { register, handleSubmit } = useForm<galleryType>()
  const [preview, setPreview] = useState<string | null>(null)
  const [panel, setPanel] = useState(false)

  // Gallery Data Fetch
  const {
    data: galleryData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Gallery"],
    queryFn: async () => {
      const res = await api.get("/gallery")

      return res.data
    },
  })
  //   fetch data
  useEffect(() => {
    async function load() {
      const res = await api.get("/gallery")
    }

    load()
  }, [])

  //   submit button function
  const onSubmit = async (data: galleryType) => {
    const imageFile = data.image?.[0]
    if (!imageFile) {
      return toast.error("image file is required")
    }
    const imgURl = await uploadImage(imageFile)
    const res = await api.post("/gallery", {
      ...data,
      imageUrl: imgURl,
    })
    toast.success("Photo Successfully Added!")

    window.location.reload()
  }
  // delete function
  const handleDelete = async (id: string) => {
    const res = await api.delete("/gallery", {
      data: id,
    })
    window.location.reload()
  }

  // isLoading
  if (isLoading) {
    return LoadingSpinner
  }
  // error
  if (error) {
    return <h1>Data Fetching Error</h1>
  }

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-center text-2xl underline">Gallery Section</h1>
      </div>
      {/* panel */}
      <div>
        <Button
          onClick={(e) => {
            e.preventDefault()
            setPanel(!panel)
          }}
          className="mb-5 ml-5"
        >
          Add Photo {panel ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </div>
      {/* form */}
      {panel && (
        <form onSubmit={handleSubmit(onSubmit)} className="ml-5 w-200">
          {/* full name */}
          <div className="mb-5 space-y-2">
            <Label htmlFor="name" className="block text-sm">
              ছবির বিষয়ের নাম *
            </Label>
            <Input type="text" {...register("tittle")} required />
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
              {...register("image", {
                onChange: (e) => {
                  setPreview(imagePreview(e.target.files[0]))
                },
              })}
              required
            />
          </div>

          <div className="mb-5 space-y-2">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      )}

      {/* gallery grid */}
      <p className="my-5 text-center text-muted-foreground underline">
        বিদ্যালয়ের বিভিন্ন কার্যক্রমের কিছু মুহূর্ত
      </p>
      <div className="ml-5 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {galleryData?.map((item: singleType) => (
          <Card
            key={item?.id}
            className="group cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-lg"
          >
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item?.imageUrl}
                  alt={item?.tittle}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex items-center justify-between p-2 text-center">
                <p className="line-clamp-1 text-xs font-medium">
                  {item?.tittle}
                </p>

                {/* delete button */}
                <Button
                  size="icon"
                  variant="destructive"
                  className="h-4 w-4 text-red-400  hover:text-red-500"
                  onClick={() => handleDelete(item?.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Toaster />
    </div>
  )
}
