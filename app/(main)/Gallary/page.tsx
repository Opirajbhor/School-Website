import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function GallaryPage() {
  return
  (<Card className="group relative overflow-hidden rounded-2xl border-none p-0 after:absolute after:h-full after:w-full after:bg-linear-to-b after:from-transparent after:from-40% after:to-gray-950">
    <Image
      src="https://images.shadcnspace.com/assets/gallery/galary-01-img-4.webp"
      alt="Pilgrimage Destination"
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <div className="absolute bottom-0 z-10 flex flex-col gap-1 ps-8 pb-8">
      <h3 className="text-lg font-semibold text-white">
        Pilgrimage Destination
      </h3>
      <p className="text-sm text-white/80">29 Destinations</p>
    </div>
  </Card>)
}
