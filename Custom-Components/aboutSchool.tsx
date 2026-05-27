import Image from "next/image"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma/prisma"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default async function AboutSection() {
  //   fetch data
  const info = await prisma.aboutSchool.findFirst()

  return (
    <section className="w-full bg-background">
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Image */}
        <div className="relative h-112.5 w-full overflow-hidden rounded-xl md:w-[60%]">
          <Image
            src={info?.imageUrl || "/logo.png"}
            alt="school"
            fill
            className="object-cover"
          />

          {/* dark overlay bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
        </div>

        {/* Card */}
        <div className="relative mt-6 w-full md:absolute md:top-12 md:right-0 md:mt-0 md:w-[55%]">
          <div className="space-y-4 rounded-xl bg-card p-6 text-card-foreground shadow-lg md:p-8">
            <h2 className="text-2xl font-bold md:text-3xl">{info?.title}</h2>

            <div className="h-1 w-16 rounded-full bg-primary" />

            <p className="text-sm leading-relaxed text-muted-foreground">
              {info?.description}
            </p>
            <Link href={"/about-school"}>
              <Button>
                বিস্তারিত পড়ুন <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
