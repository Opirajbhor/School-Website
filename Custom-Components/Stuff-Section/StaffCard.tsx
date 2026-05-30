import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { staffDataType } from "@/lib/types/type"
import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const StaffCard = ({ staff }: { staff: staffDataType }) => {
  return (
    <Card className="flex flex-col items-center gap-4 rounded-xl p-4 shadow-sm md:flex-row">
      {/* Image */}
      <div className="relative h-40 w-40 overflow-hidden rounded-xl">
        <Image
          src={staff.imageUrl}
          alt={staff.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-semibold">{staff.name}</h3>
        <p className="text-sm text-muted-foreground">({staff.designation})</p>
        <p className="text-sm text-muted-foreground">({staff.mpoIndex})</p>

        {/* Icons */}
        <div className="flex gap-2 pt-2">
          <Phone size={16} />
          <p>{staff?.phone}</p>
        </div>

        {/* Button */}
        <Button variant="outline" className="mt-2">
          <Link href={`/teachers/${staff.name}`}>বিস্তারিত →</Link>
        </Button>
      </div>
    </Card>
  )
}

export default StaffCard
