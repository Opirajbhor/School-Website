import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"
import { prisma } from "@/lib/prisma/prisma"
import Link from "next/link"

export default async function MessageSection() {
  // fetch data
  const messages = await prisma.messageHead.findMany({
    orderBy: { createdAt: "desc" },
  })
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}

        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-4">
            <h2 className="text-xl font-bold whitespace-nowrap text-foreground lg:text-2xl">
              স্কুল পরিচালকদের বাণী
            </h2>
            <div className="h-px w-full bg-border" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {messages.map((item, i) => (
            <Card key={i} className="space-y-4 rounded-xl p-6 shadow-sm">
              {/* Top */}
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Quote className="text-primary" />
                    <h3 className="text-lg font-semibold">{item?.title}</h3>
                  </div>

                  <div className="mt-1 h-1 w-12 rounded-full bg-primary" />

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item?.name}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item?.desc}
              </p>

              {/* Button */}
              <Link href={"/message"}>
                <Button variant="secondary" className="mt-2">
                  আরো পড়ুন →
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
