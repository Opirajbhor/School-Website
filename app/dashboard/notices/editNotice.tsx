"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { api } from "@/lib/axios/axios"
import { notices } from "@/lib/types/type"
import { SquarePen, Trash } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
type Props = {
  item: notices
  connect: boolean
  setConnect: React.Dispatch<React.SetStateAction<boolean>>
}
export function NoticeAction({ item, setConnect, connect }: Props) {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm<notices>()

  // delete function
  const deleteFn = async () => {
    setLoading(true)
    const res = await api.delete("/notices", {
      data: { id: item.id },
    })
    setConnect(!connect)
  }
  // edit function
  const editFn = async (data: notices) => {
    console.log(data)
    setLoading(true)
    const res = await api.put("/notices", {
      data: { ...data },
    })
    console.log(res)
    setConnect(!connect)
    if (res.status === 200) {
      window.location.reload()
    }
  }

  return (
    <>
      {/* delete notice  */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Trash size={20} className="cursor-pointer text-red-500" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete Notice</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this notice?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button disabled={loading} onClick={() => deleteFn()}>
              {loading && <Spinner />} Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {/* edit notice */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <SquarePen size={20} className="cursor-pointer text-green-500" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit This Notice</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit(editFn)}>
            <div>
              <Label htmlFor="name-1" className="mb-2">
                Title
              </Label>
              <Input
                className="mb-3"
                id="name-1"
                {...register("title")}
                defaultValue={item?.title}
              />
            </div>
            <div>
              <Label htmlFor="username-1" className="mb-2">
                Description
              </Label>
              <Textarea
                id="username-1"
                {...register("description")}
                defaultValue={item?.description}
              />
            </div>
            <div className="hidden">
              <Input
                className="hidden"
                {...register("id")}
                defaultValue={item?.id}
              />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={loading}>
                {loading && <Spinner />} Edit
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
