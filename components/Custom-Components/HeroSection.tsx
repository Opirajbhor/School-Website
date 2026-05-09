import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { heroData } from "@/lib/types/Interfaces"
import { prisma } from "@/lib/prisma/prisma"

const data = await prisma.banner.findMany()
console.log(data)
export default function HeroSlider() {



  return (
    <div className="w-full">
      <Carousel className="mx-auto w-full max-w-7xl">
        <CarouselContent>
          {/* Slide */}
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[75vh] overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  priority
                  className="object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 text-center">
                  <h1 className="text-3xl leading-snug font-bold text-white md:text-5xl">
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

        {/* arrows */}
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  )
}
