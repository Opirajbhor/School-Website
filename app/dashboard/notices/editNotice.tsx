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
import { api } from "@/lib/axios/axios"
import { SquarePen, Trash } from "lucide-react"
import { useState } from "react"
type Props = {
  id: string
  connect: boolean
  setConnect: React.Dispatch<React.SetStateAction<boolean>>
}
export function DeleteNotice({ id, setConnect, connect }: Props) {
  const [loading, setLoading] = useState(false)
  const deleteFn = async () => {
    setLoading(true)
    const res = await api.delete("/notices", {
      data: { id },
    })
    setConnect(!connect)
  }

  return (
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
  )
}

{
  /* <SquarePen size={20} className="cursor-pointer text-yellow-500" /> */
  // ;<div>
  //   <div>
  //     <Label htmlFor="name-1">Name</Label>
  //     <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
  //   </div>
  //   <div>
  //     <Label htmlFor="username-1">Username</Label>
  //     <Input id="username-1" name="username" defaultValue="@peduarte" />
  //   </div>
  // </div>
}
