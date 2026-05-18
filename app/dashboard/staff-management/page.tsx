"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import LoadingSpinner from "@/components/Custom-Components/Dashboard-Compo/LoadingSpinner"
import { uploadImage } from "@/lib/cloudinary/Image.Cloudinary"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { staffDataType } from "@/lib/types/type"
import StaffTable from "@/components/Custom-Components/Stuff-Section/StaffTable"
import { useEffect, useState } from "react"

export default function StuffManagement() {
  const { register, handleSubmit } = useForm<staffDataType>()
  const [staffData, setStaffData] = useState<staffDataType>()
  //   fetch data
  useEffect(() => {
    async function load() {
      const res = await fetch("/api/staff")
      const json = await res.json()
      setStaffData(json)
    }

    load()
  }, [])
  //   submit button function
  const onSubmit = async (data: staffDataType) => {
    const imgURl = await uploadImage(data?.image[0])

    const res = await fetch("/api/staff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data?.name,
        designation: data?.designation,
        subject: data?.subject,
        index: data?.index,
        joinDate: data?.joinDate,
        comment: data?.comment,
        imageUrl: imgURl!,
      }),
    })
    toast.success("Stuff Successfully Added!")
    // window.location.reload()
  }
  return (
    <>
      <div>
        <h1 className="mb-10 text-center text-2xl underline">
          Stuff Management
        </h1>
        {/* Add teacher */}
        <form onSubmit={handleSubmit(onSubmit)} className="ml-5 w-200">
          {/* full name */}
          <div className="mb-5 space-y-2">
            <Label htmlFor="name" className="block text-sm">
              শিক্ষকের/কর্মচারীর নাম *
            </Label>
            <Input type="text" {...register("name")} required />
          </div>

          {/* designation */}
          <div className="mb-5 space-y-2">
            <Label htmlFor="designation" className="block text-sm">
              পদবী *
            </Label>
            <Input type="text" {...register("designation")} required />
          </div>

          {/* Subject */}
          <div className="mb-5 space-y-2">
            <Label htmlFor="subject" className="block text-sm">
              বিষয়
            </Label>
            <Input type="text" {...register("subject")} />
          </div>

          {/* MPO index */}
          <div className="mb-5 space-y-2">
            <Label htmlFor="index" className="block text-sm">
              এমপিও ইনডেক্স
            </Label>
            <Input type="text" {...register("index")} />
          </div>

          {/* Join Date */}
          <div className="mb-5 space-y-2">
            <Label htmlFor="joinDate" className="block text-sm">
              যোগদানের তারিখ *
            </Label>
            <Input type="date" {...register("joinDate")} required />
          </div>

          {/* Comment */}
          <div className="mb-5 space-y-2">
            <Label htmlFor="comment" className="block text-sm">
              শিক্ষকের/কর্মচারীর মন্তব্য
            </Label>
            <Textarea {...register("comment")} required />
          </div>

          {/* image preview */}
          <Image
            src={"/placeholder.png"}
            width={50}
            height={50}
            alt="preview image"
          />

          {/* image */}
          <div className="mb-5 space-y-2">
            <Label htmlFor="image" className="block text-sm">
              শিক্ষকের/কর্মচারীর ছবি *
            </Label>
            <Input
              type="file"
              accept="image/*"
              {...register("image")}
              required
            />
          </div>

          <div className="mb-5 space-y-2">
            <Button type="submit">Add ‍Stuff</Button>
          </div>
        </form>
        <Toaster />
      </div>
      <StaffTable staffData={staffData}></StaffTable>
    </>
  )
}
