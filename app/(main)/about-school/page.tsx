import Image from "next/image"
import { prisma } from "@/lib/prisma/prisma"

//   fetch data
const info = await prisma.aboutSchool.findFirst()

export default function AboutSection() {
  return (
    <section className="w-full bg-background py-16">
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Image */}
        <div className="relative h-112.5 max-w-7xl overflow-hidden rounded-xl">
          <Image
            src={info?.imageUrl || "/logo.png"}
            alt="school"
            fill
            className="object-cover"
          />

          {/* dark overlay bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
        </div>
      </div>
      {/* Card */}
      <div className="mt-6 w-full">
        <div className="space-y-4 rounded-xl bg-card p-6 text-card-foreground shadow-lg md:p-8">
          <h2 className="text-3xl font-bold md:text-3xl">{info?.title}</h2>

          <div className="h-1 w-16 rounded-full bg-primary" />

          <p className="text-2xl text-justify leading-relaxed line-clamp-[12] text-muted-foreground">
            {info?.description}
          </p>
        </div>
      </div>
    </section>
  )
}
