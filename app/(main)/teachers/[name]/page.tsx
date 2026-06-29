"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { staffDataType } from "@/lib/types/type"
import { api } from "@/lib/axios/axios"

export default function StaffDetail() {
  const [info, setInfo] = useState<staffDataType>()
  const currStaff = usePathname()
  const decoded = decodeURIComponent(currStaff)
  const splitName = decoded.split("/")
  const getName = splitName.at(-1)

  //   fetch data
  useEffect(() => {
    async function load() {
      const res = await api.get(`staff/${getName}`)
      setInfo(res.data)
    }

    load()
  }, [getName])

  return (
    <div className="container mx-auto max-w-5xl px-4 py-10">
      <Card>
        <CardContent className="grid gap-8 p-6 md:grid-cols-[300px_1fr]">
          {/* Left Side */}
          <div className="space-y-5">
            <div className="overflow-hidden rounded-md border">
              <Image
                src={info?.imageUrl || "/staff.png"}
                alt={info?.name || "image"}
                width={300}
                height={350}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">{info?.name}</h1>

              <Badge className="text-sm bg-accent text-muted-foreground">
                {info?.designation} <span>({info?.subject})</span>
              </Badge>

              <p className="text-sm text-muted-foreground">
                যোগদান তারিখ: {info?.joiningDate}
              </p>
              <p className="text-sm text-muted-foreground">
                MPO-INDEX: {info?.mpoIndex}
              </p>
              <p className="text-sm text-muted-foreground">
                Phone: {info?.phone}
              </p>
            </div>
            {/* Comment */}
            <div>
              <CardHeader className="px-0">
                <h2 className="text-xl font-semibold">শিক্ষকের মন্তব্য</h2>
              </CardHeader>

              <Separator className="mb-4" />

              <p className="leading-7 text-muted-foreground">{info?.comment}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
