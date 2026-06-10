import { prisma } from "@/lib/prisma/prisma"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import FooterSchoolAddress from "./FooterSchoolAddress"
const Footer = async () => {
  const info = await prisma.logoName.findFirst()
  return (
    <footer className="w-full border-t bg-background pt-5 text-muted-foreground">
      {/* Main content wrapper with shadcn container/padding guidelines */}
      <div className="flex w-full justify-between sm:flex sm:flex-row">
        {/* Brand Section */}
        <aside className="w-2.5/6 mb-8 space-y-4 md:mb-0">
          <div className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Image
              src={info?.imageUrl || "/logo.png"}
              width={50}
              height={50}
              alt="logo"
            ></Image>
            <span>{info?.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {info?.slogan}
          </p>
        </aside>
        {/* Navigation Links Grid */}
        <div className="w-1.5/6 grid grid-cols-2 md:gap-12">
          {/* Services Column */}
          <nav className="flex flex-col space-y-3">
            <h6 className="text-xl font-bold tracking-wide text-foreground uppercase">
              অন্যান্য লিংক সমূহ
            </h6>
            <Link
              href="https://www.dhakaeducationboard.gov.bd/"
              className="text-sm transition-colors hover:text-foreground hover:underline"
            >
              ঢাকা শিক্ষা বোর্ড
            </Link>
            <Link
              href="https://dshe.gov.bd/"
              className="text-sm transition-colors hover:text-foreground hover:underline"
            >
              মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর
            </Link>
            <Link
              href="https://shed.gov.bd/"
              className="text-sm transition-colors hover:text-foreground hover:underline"
            >
              মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ
            </Link>
          </nav>
          {/* school adress */}
        </div>
        {/* footer address */}
        <div className="w-2/6">
          <FooterSchoolAddress />
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mx-auto max-w-7xl border-t border-border px-6 py-6 md:flex md:items-center md:justify-center lg:px-8">
        <aside className="text-md text-center leading-5 text-muted-foreground">
          <p>
            <span>{info?.name}</span> &copy; {new Date().getFullYear()} - All
            rights reserved.
          </p>
          <p>
            Developed by: <span className="text-primary">Opi Rajbhor</span>
          </p>
        </aside>
      </div>
    </footer>
  )
}

export default Footer
