"use client"
import LoadingSpinner from "@/Custom-Components/Dashboard-Compo/LoadingSpinner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { api } from "@/lib/axios/axios"
import { footerAddress } from "@/lib/types/type"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

export default function Statistics() {
  const { register, handleSubmit, reset } = useForm<footerAddress>()
  const [info, setInfo] = useState<footerAddress | null>(null)
  const [spin, setSpin] = useState<boolean>(false)

  //   data submit function
  const onSubmit = async (data: footerAddress) => {
    setSpin(true)
    console.log(data)
    try {
      const res = await api.put("/footer-address", {
        ...data,
        key: "abc",
      })
      if (res.status === 200) {
        toast.success("Successfully Updated!")
        setInfo(data)
      }
    } catch (err) {
      toast.error("info update failed")
    } finally {
      setSpin(false)
    }
  }
  //   fetch data
  useEffect(() => {
    async function load() {
      const { data } = await api.get("/footer-address")
      setInfo(data)
      reset(data)
    }

    load()
  }, [reset])
  if (info == null) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <h1 className="mt-5 text-center underline">প্রতিষ্ঠানের তথ্য পরিবর্তন</h1>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 ml-10 space-y-2">
          <Label className="block text-sm">ইআইআইএন :</Label>
          <Input
            required
            type="number"
            className="h-10 w-full"
            defaultValue={info?.eiin}
            {...register("eiin")}
          />
        </div>
        <div className="mb-3 ml-10 space-y-2">
          <Label className="block text-sm">এমপিও কোড :</Label>
          <Input
            required
            type="number"
            className="h-10 w-full"
            defaultValue={info?.mpoCode}
            {...register("mpoCode")}
          />
        </div>

        <div className="mb-3 ml-10 space-y-2">
          <Label className="block text-sm">ঠিকানা :</Label>
          <Input
            required
            type="text"
            className="h-10 w-full"
            defaultValue={info?.address}
            {...register("address")}
          />
        </div>
        <div className="mb-3 ml-10 space-y-2">
          <Label className="block text-sm">মোবাইল-০১ :</Label>
          <Input
            required
            type="number"
            className="h-10 w-full"
            defaultValue={info?.phone01}
            {...register("phone01")}
          />
        </div>
        <div className="mb-3 ml-10 space-y-2">
          <Label className="block text-sm">মোবাইল-০2 :</Label>
          <Input
            type="number"
            className="h-10 w-full"
            defaultValue={info?.phone02}
            {...register("phone02")}
          />
        </div>
        <div className="mb-3 ml-10 space-y-2">
          <Label className="block text-sm">ই-মেইল :</Label>
          <Input
            required
            type="email"
            className="h-10 w-full"
            {...register("email")}
            defaultValue={info?.email}
          />
        </div>
        <Button disabled={spin} type="submit" className="mt-5 ml-10 w-100">
          {spin && <Spinner />}
          Update
        </Button>
      </form>
      <Toaster />
    </div>
  )
}
