"use client"
import React, { useState } from "react"
import Image from "next/image"
import { galleryType } from "@/lib/types/type"
import { PreviewImage } from "./PreviewPicture"
type GalleryGridProps = {
  galleryData: galleryType[]
}
export function GalleryGrid({ galleryData }: GalleryGridProps) {
  const [select, setSelect] = useState<galleryType | null>(null)
  return (
    <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {galleryData?.map((item: galleryType) => (
        <div
          onClick={() => setSelect(item)}
          key={item?.id}
          className="group shadow-soft relative lg:aspect-4/3 aspect-4/2 cursor-pointer overflow-hidden rounded-xl bg-muted transition-all duration-300 hover:shadow-xl"
        >
          <Image
            src={item?.imageUrl}
            alt={item?.tittle}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute right-0 bottom-0 left-0 p-6 text-center">
            <h3 className="text-lg leading-snug font-medium text-white">
              {item?.tittle}
            </h3>
          </div>
        </div>
      ))}
      {select && (
        <PreviewImage image={select} onClose={() => setSelect(null)} />
      )}
    </div>
  )
}
