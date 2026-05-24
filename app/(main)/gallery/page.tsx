import { GalleryGrid } from "@/Custom-Components/GalleryGrid"
import { prisma } from "@/lib/prisma/prisma"
import { galleryType } from "@/lib/types/type"

const galleryData: galleryType[] = await prisma.gallery.findMany({
  orderBy: { createdAt: "desc" },
})

export default function GalleryPage() {
  return (
    <div className="border-b bg-muted/30 py-7 text-center">
      <h1 className="mb-4 text-2xl font-bold text-foreground">ছবি গ্যালারী</h1>

      <div>
        <GalleryGrid galleryData={galleryData}></GalleryGrid>
      </div>
    </div>
  )
}
