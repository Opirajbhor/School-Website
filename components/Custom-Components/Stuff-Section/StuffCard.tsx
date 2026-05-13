import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import React from "react"

const StuffCard = ({ stuff }) => {
  return (
    <Card className="flex flex-col items-center gap-4 rounded-xl p-4 shadow-sm md:flex-row">
      {/* Image */}
      <div className="relative h-40 w-40 overflow-hidden rounded-xl">
        <Image
          src={stuff.image}
          alt={stuff.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-semibold">{stuff.name}</h3>
        <p className="text-sm text-muted-foreground">({stuff.role})</p>

        {/* Icons */}
        <div className="flex gap-2 pt-2">
          <Button size="icon" variant="secondary">
            <Phone size={16} />
          </Button>
          <Button size="icon" variant="secondary">
            <Mail size={16} />
          </Button>
          <Button size="icon" variant="secondary">
            <Mail size={16} />
          </Button>
          <Button size="icon" variant="secondary">
            <Mail size={16} />
          </Button>
        </div>

        {/* Button */}
        <Button variant="outline" className="mt-2">
          বিস্তারিত →
        </Button>
      </div>
    </Card>
  )
}

export default StuffCard
