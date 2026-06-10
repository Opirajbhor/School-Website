import React from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GalleryGrid } from "./GalleryGrid"
import { galleryType } from "@/lib/types/type"
import { prisma } from "@/lib/prisma/prisma"
export const dynamic = "force-dynamic"
export default async function MediaGallery() {
  // fetch data
  const galleryData: galleryType[] = await prisma.gallery.findMany({
    orderBy: { createdAt: "desc" },
  })
  // --------------
  return (
    <section className="bg-background py-12">
      <div className="container px-4">
        {/* Header with Navigation */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-4">
            <h2 className="text-2xl font-bold whitespace-nowrap text-foreground">
              ছবি গ্যালারী
            </h2>
            <div className="h-px w-full bg-border" />
          </div>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid galleryData={galleryData}></GalleryGrid>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link href={"/gallery"}>
            <Button
              variant="secondary"
              className="group h-auto rounded-md bg-accent px-8 py-6 text-base text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              আরো দেখুন
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
