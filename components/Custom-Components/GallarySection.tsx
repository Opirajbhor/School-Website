import React from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GallaryGrid } from "./GallaryGrid"
import { gallaryType } from "@/lib/types/type"

const galleryData: gallaryType[] = [
  {
    id: "1",
    tittle: "বিদ্যালয়ের সামনের ছবি",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    id: "2",
    tittle: "বিদ্যালয়ের ভিতরের ছবির একাংশ।",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    id: "3",
    tittle: "বার্ষিক ক্রীড়া অনুষ্ঠানের ছবির একাংশ",
    imageUrl: "/api/placeholder/600/400",
  },
]

const MediaGallery = () => {
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
        <GallaryGrid galleryData={galleryData}></GallaryGrid>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button
            variant="secondary"
            className="group h-auto rounded-md bg-accent px-8 py-6 text-base text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Link href={"/gallary"}>আরো দেখুন</Link>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default MediaGallery
