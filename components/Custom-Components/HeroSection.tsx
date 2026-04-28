import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { heroData } from "@/lib/types/Interfaces"

export default function HeroSlider() {
  const data: heroData[] = [
    {
      src: "/images/hero1.jpg",
      tittle: "স্বাগতম এক্সওয়াইজেড স্কুল এবং কলেজ এর পক্ষ থেকে!",
    },
    {
      src: "/",
      tittle: "আমাদের বিদ্যালয় মাঠ",
    },
    {
      src: "/",
      tittle: "আমাদের বিদ্যালয়ের মূল ভবন",
    },
  ]

  return (
    <div className="w-full">
      <Carousel className="mx-auto w-full max-w-7xl">
        <CarouselContent>
          {/* Slide */}
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[75vh] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.tittle}
                  fill
                  priority
                  className="object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 text-center">
                  <h1 className="text-3xl leading-snug font-bold text-white md:text-5xl">
                    {item.tittle}
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
