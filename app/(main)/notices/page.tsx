import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { prisma } from "@/lib/prisma/prisma"
import { Megaphone } from "lucide-react"
import Link from "next/link"

const notices = await prisma.notice.findMany({
  orderBy: { createdAt: "desc" },
})

export default function NoticeBoard() {
  return (
    <section className="w-50% bg-muted/40 py-16">
      <div className="mx-auto max-w-3xl px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <Megaphone className="text-destructive" />
          <h2 className="text-2xl font-bold">সকল নোটিশ সমূহ</h2>
        </div>

        {/* Notices */}
        <div className="space-y-4">
          {notices.map((notice, i) => (
            <Card
              key={i}
              className="flex flex-row items-center justify-between rounded-xl p-4 shadow-sm"
            >
              <div className="flex gap-2">
                <p>{i + 1}. </p>
                <p className="text-sm font-medium">{notice.title}</p>
              </div>

              <div className="flex items-center gap-5">
                <p>{notice?.createdAt.toDateString()}</p>
                <Link
                  href={`/notices/${notice.id}`}
                  className={buttonVariants({
                    variant: "secondary",
                    size: "sm",
                  })}
                >
                  বিস্তারিত
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
