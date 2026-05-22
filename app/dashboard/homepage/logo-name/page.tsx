"use client"
import Image from "next/image"
import { gallaryType, logoName } from "@/lib/types/type"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { uploadImage } from "@/lib/cloudinary/Image.Cloudinary"
import toast, { Toaster } from "react-hot-toast"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { imagePreview } from "@/lib/imagePreview"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { api } from "@/lib/axios/axios"
import LoadingSpinner from "@/components/Custom-Components/Dashboard-Compo/LoadingSpinner"
import { Spinner } from "@/components/ui/spinner"

export default function LogoName() {
  const queryClient = useQueryClient()
  const { register, handleSubmit } = useForm<logoName>()

  // Logo and Name Data Fetch
  const {
    data: logoName,
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["logoName"],

    queryFn: async () => {
      const res = await api.get("/logo-name")
      return res.data
    },
  })
  const [preview, setPreview] = useState<string | null>(logoName?.imageUrl)
  const previewImage = preview || logoName?.imageUrl
  const [spin, setSpin] = useState(false)

  //   submit button function
  const onSubmit = async (data: logoName) => {
    setSpin(true)
    let imgURl = logoName?.imageURl
    const imageFile = data.image?.[0]
    if (imageFile) {
      imgURl = await uploadImage(imageFile)
    }
    const res = await api.put("/logo-name", {
      name: data?.name,
      slogan: data?.slogan,
      imageUrl: imgURl,
    })
    // refetch updated data
    await queryClient.invalidateQueries({
      queryKey: ["logoName"],
    })
    toast.success(" Successfully Changed")

    window.location.reload()
  }

  // isLoading
  if (isFetching) {
    return <LoadingSpinner />
  }
  // isLoading
  if (isLoading) {
    return <LoadingSpinner />
  }
  // error
  if (error) {
    return <h1>Data Fetching Error</h1>
  }

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-center text-2xl underline">
          Logo and Name Section
        </h1>
      </div>

      {/* form */}

      <form onSubmit={handleSubmit(onSubmit)} className="ml-5 w-200">
        {/* full name */}
        <div className="mb-5 space-y-2">
          <Label htmlFor="name" className="block text-sm">
            বিদ্যালয়ের নাম *
          </Label>
          <Input
            type="text"
            {...register("name")}
            defaultValue={logoName?.name}
            required
          />
        </div>

        <div>
          <textarea
            className="h-auto min-h-[200px] w-full resize-none overflow-auto rounded-2xl border-2 border-black p-3"
            {...register("slogan")}
            placeholder="slogan"
            defaultValue={logoName?.slogan}
            required
          />
        </div>
        {/* image preview */}
        {previewImage && (
          <Image src={previewImage} alt="preview" width={200} height={200} />
        )}

        {/* image */}
        <div className="my-5 space-y-2">
          <Label htmlFor="image" className="block text-sm">
            বিদ্যালয়ের লোগো *
          </Label>
          <Input
            type="file"
            accept="image/*"
            {...register("image", {
              onChange: (e) => {
                setPreview(imagePreview(e.target.files[0]))
              },
            })}
          />
        </div>

        <div className="mb-5 space-y-2">
          <Button type="submit" disabled={spin}>
            {spin ? (
              <>
                <Spinner className="text-2xl" /> Updating...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>

      <Toaster />
    </div>
  )
}
