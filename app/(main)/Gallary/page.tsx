import { GallaryGrid } from "@/Custom-Components/GallaryGrid"
import { prisma } from "@/lib/prisma/prisma"
import { gallaryType } from "@/lib/types/type"

const galleryData: gallaryType[] = await prisma.gallary.findMany({
  orderBy: { createdAt: "desc" },
})

export default function GallaryPage() {
  return (
    <div className="border-b bg-muted/30 py-7 text-center">
      <h1 className="mb-4 text-2xl font-bold text-foreground">ছবি গ্যালারী</h1>

      <div>
        <GallaryGrid galleryData={galleryData}></GallaryGrid>
      </div>
    </div>
  )
}
