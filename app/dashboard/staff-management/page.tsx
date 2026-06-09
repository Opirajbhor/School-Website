"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { uploadImage } from "@/lib/cloudinary/Image.Cloudinary"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { staffDataType } from "@/lib/types/type"
import StaffTable from "@/Custom-Components/Stuff-Section/StaffTable"
import { useEffect, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { imagePreview } from "@/lib/imagePreview"
import { Spinner } from "@/components/ui/spinner"

export default function StuffManagement() {
  const { register, handleSubmit, reset } = useForm<staffDataType>()
  const [preview, setPreview] = useState<string | null>(null)
  const [spin, setSpin] = useState<boolean>(false)
  const [load, setLoad] = useState<boolean>(false)
  // add staff panel open-close
  const [staffPanel, setStaffPanel] = useState(false)

  //   fetch data
  const [staffData, setStaffData] = useState<staffDataType[]>([])
  useEffect(() => {
    async function load() {
      const res = await fetch("/api/staff")
      const json = await res.json()
      setStaffData(json)
    }

    load()
  }, [load])
  //   submit button function
  // max image size
  const maxImageSize = 150 * 1024 //150KB

  const onSubmit = async (data: staffDataType) => {
    setSpin(true)

    let imgURl = ""
    try {
      if (data.image && data.image[0]) {
        if (data.image[0].size > maxImageSize) {
          return toast.error("Image too big! Image size must be under 150KB")
        }
        imgURl = await uploadImage(data.image[0])
      }
      const res = await fetch("/api/staff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data?.name,
          designation: data?.designation,
          subject: data?.subject,
          mpoIndex: data?.mpoIndex,
          joiningDate: data?.joiningDate,
          phone: data?.phone,
          comment: data?.comment,
          imageUrl: imgURl,
        }),
      })
      if (res.status === 200) {
        toast.success("Staff Successfully Added!")
        reset()
        setPreview(null)
        setLoad(!load)
        setStaffPanel(false)
      }
    } catch (error) {
      console.error(error)

      toast.error("teacher adding failed")
    } finally {
      setSpin(false)
    }
  }

  return (
    <>
      <div>
        <h1 className="mb-10 text-center text-2xl underline">
          Stuff Management ({staffData?.length})
        </h1>

        {/* panel */}
        <div>
          <Button
            onClick={(e) => {
              e.preventDefault()
              setStaffPanel(!staffPanel)
            }}
            className="mb-5 ml-5"
          >
            Add Staff {staffPanel ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </div>
        {/* Add teacher */}
        {staffPanel && (
          <form onSubmit={handleSubmit(onSubmit)} className="ml-5 w-200">
            {/* full name */}
            <div className="mb-5 space-y-2">
              <Label htmlFor="name" className="block text-sm">
                শিক্ষকের/কর্মচারীর নাম :
              </Label>
              <Input type="text" {...register("name")} required />
            </div>

            {/* designation */}
            <div className="mb-5 space-y-2">
              <Label htmlFor="designation" className="block text-sm">
                পদবী :
              </Label>
              <Input type="text" {...register("designation")} required />
            </div>

            {/* Subject */}
            <div className="mb-5 space-y-2">
              <Label htmlFor="subject" className="block text-sm">
                বিষয় :
              </Label>
              <Input type="text" {...register("subject")} />
            </div>

            {/* MPO index */}
            <div className="mb-5 space-y-2">
              <Label htmlFor="index" className="block text-sm">
                এমপিও ইনডেক্স :
              </Label>
              <Input type="text" {...register("mpoIndex")} />
            </div>

            {/* Join Date */}
            <div className="mb-5 space-y-2">
              <Label htmlFor="joinDate" className="block text-sm">
                যোগদানের তারিখ :
              </Label>
              <Input type="date" {...register("joiningDate")} required />
            </div>

            {/* Phone number */}
            <div className="mb-5 space-y-2">
              <Label htmlFor="index" className="block text-sm">
                মোবাইল :
              </Label>
              <Input maxLength={11} type="text" {...register("phone")} />
            </div>

            {/* Comment */}
            <div className="mb-5 space-y-2">
              <Label htmlFor="comment" className="block text-sm">
                শিক্ষকের/কর্মচারীর মন্তব্য :
              </Label>
              <Textarea {...register("comment")} required />
            </div>

            {/* image preview */}
            {preview && (
              <Image
                src={preview}
                width={300}
                height={150}
                alt="preview image"
                className="mb-3"
              />
            )}

            {/* image */}
            <div className="mb-5 space-y-2">
              <Label htmlFor="image" className="block text-sm">
                শিক্ষকের/কর্মচারীর ছবি :*
              </Label>
              <Input
                type="file"
                accept="image/*"
                {...register("image", {
                  onChange: (e) => {
                    if (e.target.files && e.target.files[0]) {
                      setPreview(imagePreview(e.target.files[0]))
                    }
                  },
                })}
                required
              />
            </div>

            <div className="mb-5 space-y-2">
              <Button disabled={spin} type="submit">
                {spin && <Spinner />} Submit
              </Button>
            </div>
          </form>
        )}
        <Toaster />
      </div>
      <StaffTable staffData={staffData ?? []} />
    </>
  )
}
