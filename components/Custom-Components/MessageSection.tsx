import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"
import { prisma } from "@/lib/prisma/prisma"

// const messages = [
//   {
//     title: "উপাধ্যক্ষের বাণী",
//     name: "মিসেস শিউলী আক্তার",
//     image: "/person1.jpg",
//     desc: `আমাদের স্কুলের লক্ষ্য হল শিক্ষার্থীদের একটি সুন্দর ও সুস্থ পরিবেশে মানসম্মত শিক্ষা প্রদান করা। আমরা শিক্ষার্থীদেরকে একজন ভালো মানুষ হিসেবে গড়ে তোলার লক্ষ্য কাজ করি। আমাদের স্কুলের উদ্দেশ্য হল শিক্ষার্থীদের তাদের সম্পূর্ণ সম্ভাবনা বিকাশে সাহায্য করা।`,
//   },
//   {
//     title: "অধ্যক্ষের বাণী",
//     name: "মোঃ মোস্তফা কামাল ভূঁইয়া",
//     image: "/person2.jpg",
//     desc: `প্রিয় শিক্ষার্থীরা, আজ আমি আপনাদের সামনে দাঁড়িয়েছি একজন শিক্ষক হিসেবে, একজন অভিভাবক হিসেবে, এবং একজন বন্ধু হিসেবে। আমি আপনাদের বলতে চাই, আপনারা সকলেই সক্ষম। আপনাদের নিজের উপর বিশ্বাস রাখতে হবে।`,
//   },
// ]

const messages = await prisma.messageHead.findMany({
  orderBy: { createdAt: "desc" },
})

console.log(messages)

export default function MessageSection() {
  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">
            স্কুল পরিচালকদের বাণী
          </h2>

          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              ‹
            </Button>
            <Button variant="outline" size="icon">
              ›
            </Button>
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
              <Button variant="secondary" className="mt-2">
                আরো পড়ুন →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
