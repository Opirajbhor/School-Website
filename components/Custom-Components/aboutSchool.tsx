"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function AboutSection() {
  const [info, setInfo] = useState(null)

  //   fetch data
  useEffect(() => {
    async function load() {
      const res = await fetch("/api/about-school")
      const json = await res.json()
      console.log(json)
      setInfo(json)
    }

    load()
  }, [])
  return (
    <section className="w-full bg-background py-16">
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Image */}
        <div className="relative h-[450px] w-full overflow-hidden rounded-xl md:w-[60%]">
          <Image
            src={info?.imageUrl}
            alt="school"
            fill
            className="object-cover"
          />

          {/* dark overlay bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Card */}
        <div className="relative mt-6 w-full md:absolute md:top-12 md:right-0 md:mt-0 md:w-[55%]">
          <div className="space-y-4 rounded-xl bg-card p-6 text-card-foreground shadow-lg md:p-8">
            <h2 className="text-2xl font-bold md:text-3xl">{info?.title}</h2>

            <div className="h-1 w-16 rounded-full bg-primary" />

            <p className="text-sm leading-relaxed text-muted-foreground">
              {info?.description}
            </p>

            <Button>বিস্তারিত পড়ুন</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
