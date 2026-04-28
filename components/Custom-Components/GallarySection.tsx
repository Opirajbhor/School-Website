import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryItem {
  id: number;
  title: string;
  subtitle?: string;
  imageUrl: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "বিদ্যালয়ের সামনের ছবি",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    id: 2,
    title: "বিদ্যালয়ের ভিতরের ছবির একাংশ।",
    subtitle: "এক্সওয়াইজেড স্কুল এবং কলেজ",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    id: 3,
    title: "বার্ষিক ক্রীড়া অনুষ্ঠানের ছবির একাংশ",
    imageUrl: "/api/placeholder/600/400",
  },
];

const MediaGallery = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container px-4">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4 flex-1">
            <h2 className="text-2xl font-bold whitespace-nowrap text-foreground">
              ছবি এবং ভিডিও গ্যালারী
            </h2>
            <div className="h-[1px] w-full bg-border" />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-md border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-md border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted shadow-soft transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-white text-lg font-medium leading-snug">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-white/80 text-sm mt-1 font-light">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button
            variant="secondary"
            className="rounded-md bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors px-8 py-6 h-auto text-base group"
          >
            আরো দেখুন
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;