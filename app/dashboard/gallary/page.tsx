"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { gallaryType } from "@/lib/types/type"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { uploadImage } from "@/lib/cloudinary/Image.Cloudinary"
import toast from "react-hot-toast"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { imagePreview } from "@/lib/imagePreview"

const galleryData: gallaryType[] = [
  {
    id: "1",
    imageUrl: "/gallery1.jpg",
    tittle: "বার্ষিক ক্রীড়া অনুষ্ঠান",
  },
  {
    id: "2",
    imageUrl: "/gallery2.jpg",
    tittle: "শহীদ দিবস পালন",
  },
  {
    id: "3",
    imageUrl: "/gallery3.jpg",
    tittle: "বিজ্ঞান মেলা",
  },
  {
    id: "4",
    imageUrl: "/gallery4.jpg",
    tittle: "শিক্ষা সফর",
  },
  {
    id: "5",
    imageUrl: "/gallery5.jpg",
    tittle: "সাংস্কৃতিক অনুষ্ঠান",
  },
  {
    id: "6",
    imageUrl: "/gallery6.jpg",
    tittle: "পুরস্কার বিতরণী",
  },
]

export default function Gallary() {
  const { register, handleSubmit } = useForm<gallaryType>()
  const [preview, setPreview] = useState<string | null>(null)
  const [gallaryPanel, setStaffPanel] = useState(false)

  //   submit button function
  const onSubmit = async (data: gallaryType) => {
    const imgURl = await uploadImage(data?.image[0])

    // const res = await fetch("/api/gallary", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     ...data,
    //     imageUrl: imgURl!,
    //   }),
    // })
    // toast.success("Photo Successfully Added!")

    // window.location.reload()
    console.log(data)
  }
  // delete function
  const handleDelete = (id: number) => {
    console.log("Delete:", id)
  }

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-center text-2xl underline">Gallary Section</h1>
      </div>
      {/* panel */}
      <div>
        <Button
          onClick={(e) => {
            e.preventDefault()
            setStaffPanel(!gallaryPanel)
          }}
          className="mb-5 ml-5"
        >
          Add Photo
        </Button>
      </div>
      {/* form */}
      {gallaryPanel && (
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
        {galleryData?.map((item) => (
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
                  className="h-4 w-4 text-white hover:text-red-500"
                  onClick={() => handleDelete(item?.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
