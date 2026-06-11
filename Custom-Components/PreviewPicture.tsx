"use client"

import Image from "next/image"
import { galleryType } from "@/lib/types/type"

type PreviewImageProps = {
  image: galleryType
  onClose: () => void
}

export function PreviewImage({ image, onClose }: PreviewImageProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 cursor-pointer text-3xl text-white"
        onClick={onClose}
      >
        X
      </button>

      <div
        className="relative h-[90vh] w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.imageUrl}
          alt={image?.tittle}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}
