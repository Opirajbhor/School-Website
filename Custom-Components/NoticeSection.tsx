import { Button, buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { prisma } from "@/lib/prisma/prisma"
import { Megaphone, AlertCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const notices = await prisma.notice.findMany({
  orderBy: { createdAt: "desc" },
  take: 5,
})

export default function NoticeBoard() {
  return (
    <section className="w-50% bg-muted/40 py-16">
      <div className="mx-auto max-w-3xl px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <Megaphone className="text-destructive" />
          <h2 className="text-2xl font-bold">নোটিশ বোর্ড</h2>
        </div>

        {/* Notices */}
        <div className="space-y-4">
          {notices.map((notice, i) => (
            <Card
              key={i}
              className="flex flex-row items-center justify-between rounded-xl p-4 shadow-sm"
            >
              <p className="text-sm font-medium">{notice.title}</p>

              <Link
                href={`/notices/${notice.id}`}
                className={buttonVariants({ variant: "secondary", size: "sm" })}
              >
                বিস্তারিত
              </Link>
            </Card>
          ))}
        </div>

        {/* Bottom Button */}
        <Link href={"/notices"} className="mt-6 flex justify-center">
          <Button className="gap-2">
            সকল নোটিশ <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </section>
  )
}
