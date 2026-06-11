import { prisma } from "@/lib/prisma/prisma"
import React from "react"
type notice = {
  id: string
  title: string
  fileUrl: string | null
  description: string | null
}

export default async function Header() {
  // 1. Fetch institutional data
  const info = await prisma.footerAddress.findFirst()

  // 2. Fetch the 3 most recent notices
  const notices: notice[] = await prisma.notice.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
  })

  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 border-b border-border bg-card px-4 py-3 text-sm font-medium text-muted-foreground shadow-sm lg:flex-row lg:items-center lg:justify-between lg:gap-6">
      {/* Left Section: Moving Marquee Ticker */}
      <div className=" w-full min-w-0 flex-1 items-center py-1 flex">
        {/* Static Badge (Stays anchored on the left) */}
        <div className="z-10 shrink-0 bg-card pr-3 pl-2">
          <div className="relative rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white dark:bg-emerald-700">
            আপডেট
            <div className="absolute top-1/2 -right-1 h-0 w-0 -translate-y-1/2 border-t-[5px] border-b-[5px] border-l-[5px] border-t-transparent border-b-transparent border-l-emerald-600 dark:border-l-emerald-700" />
          </div>
        </div>

        {/* Scrolling Track */}
        <div className="relative flex flex-1 overflow-hidden select-none">
          <style>{`
            @keyframes inline-marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-inline-marquee {
              animation: inline-marquee 30s linear infinite;
            }
            .animate-inline-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Render the contents twice [1, 2] to establish a seamless infinite loop */}
          <div className="animate-inline-marquee flex cursor-pointer gap-20 text-sm font-medium whitespace-nowrap">
            {[1, 2].map((_, instanceIndex) => (
              <div key={instanceIndex} className="flex items-center gap-16">
                {notices.map((notice, noticeIndex) => (
                  <div
                    key={`${instanceIndex}-${notice.id || noticeIndex}`}
                    className="flex items-center gap-4"
                  >
                    <p className="font-normal text-foreground">
                      {notice.title}
                    </p>
                    {/* Visual separation divider between individual notice updates */}
                    <span className="font-light text-muted-foreground/30">
                      |
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section: Institutional Dynamic Data */}
      <div className="lg:flex hidden shrink-0 flex-wrap items-center gap-x-4 gap-y-1 text-xs font-normal text-muted-foreground md:text-sm">
        {/* EIIN No */}
        <div className="flex items-center gap-1.5">
          <span>EIIN No:</span>
          <span className="font-bold text-foreground">
            {info?.eiin || "N/A"}
          </span>
        </div>

        <div className="hidden h-4 w-px bg-border sm:block" />

        {/* MPO Code */}
        <div className="flex items-center gap-1.5">
          <span>MPO Code:</span>
          <span className="font-bold text-foreground">
            {info?.mpoCode || "N/A"}
          </span>
        </div>

        <div className="hidden h-4 w-px bg-border sm:block" />

        {/* E-mail */}
        <div className="flex items-center gap-1.5">
          <span>E-mail:</span>
          <span className="font-bold text-foreground">
            {info?.email || "N/A"}
          </span>
        </div>
      </div>
    </div>
  )
}
