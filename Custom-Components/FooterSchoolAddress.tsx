import React from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { prisma } from "@/lib/prisma/prisma"

export default async function FooterSchoolAddress() {
  const info = await prisma.footerAddress.findFirst()
  return (
    <div className="relative w-full max-w-md rounded-lg font-sans text-card-foreground">
      {/* Header Section */}
      <div className="mb-2 flex items-center">
        <h2 className="text-xl font-bold tracking-wide">যোগাযোগ</h2>
      </div>

      {/* Content List */}
      <div className="space-y-3">
        {/* Address */}
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
            <MapPin size={16} className="fill-primary/10" />
          </div>
          <p className="pt-1 text-[15px] leading-relaxed font-medium text-muted-foreground">
            {info ? info?.address : "Bajitpur, Kishoreganj,  Dhaka "}
          </p>
        </div>

        {/* Phone Numbers */}
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
            <Phone size={16} className="fill-primary/10" />
          </div>
          <div className="space-y-0.5 pt-1 text-[15px] font-medium text-muted-foreground">
            <p>+880 {info ? info?.phone01 : "1234 567890"}</p>
            <p> {info?.phone02 && `+88 ${info?.phone02}`}</p>
          </div>
        </div>

        {/* Emails */}
        <div className="mb-3 flex items-center gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
            <Mail size={16} />
          </div>
          <div className="space-y-0.5 pt-1 text-[15px] font-medium text-muted-foreground">
            <p className="cursor-pointer transition-colors hover:text-primary">
              {info ? info?.email : "name@email.com"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
