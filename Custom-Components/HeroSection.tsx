import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { prisma } from "@/lib/prisma/prisma"
export default async function HeroSlider() {
  const data = await prisma.banner.findMany()
  return (
    <div className="w-full">
      <Carousel className="mx-auto w-full max-w-7xl">
        <CarouselContent>
          {/* Slide */}
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[55vh] sm:h-[65vh] lg:h-[85vh] overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  priority
                  className="object-cover"
                />

                {/* text overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 text-center">
                  <h1 className="lg:-mb-70 -mb-50 text-2xl lg:text-3xl leading-snug font-bold text-white">
                    {item.title}
                  </h1>
                </div>

                {/* dots */}
                <div className="absolute bottom-6 left-6 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-primary"></span>
                  <span className="h-3 w-3 rounded-full bg-primary/40"></span>
                  <span className="h-3 w-3 rounded-full bg-primary/40"></span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
