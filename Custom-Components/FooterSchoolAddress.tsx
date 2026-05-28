import React from "react"
import { MapPin, Phone, Mail, Info } from "lucide-react"

export default function FooterSchoolAddress() {
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
            Flat #B4, House No: 71, Road: 27,
            <br />
            Gulshan-1, Dhaka 1212
          </p>
        </div>

        {/* Phone Numbers */}
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
            <Phone size={16} className="fill-primary/10" />
          </div>
          <div className="space-y-0.5 pt-1 text-[15px] font-medium text-muted-foreground">
            <p>+880 1234 567890</p>
            <p>+880 1234 567890</p>
          </div>
        </div>

        {/* Emails */}
        <div className="mb-3 flex items-center gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
            <Mail size={16} />
          </div>
          <div className="space-y-0.5 pt-1 text-[15px] font-medium text-muted-foreground">
            <p className="cursor-pointer transition-colors hover:text-primary">
              info@xyzschool.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
