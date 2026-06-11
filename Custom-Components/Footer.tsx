import { prisma } from "@/lib/prisma/prisma"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import FooterSchoolAddress from "./FooterSchoolAddress"
const Footer = async () => {
  const info = await prisma.logoName.findFirst()
  return (
    <footer className="w-full border-t bg-background pt-6 text-muted-foreground">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">

    {/* Brand Section */}
    <aside className="space-y-4">
      <div className="flex items-center gap-2 text-lg font-bold text-foreground">
        <Image
          src={info?.imageUrl || "/logo.png"}
          width={45}
          height={45}
          alt="logo"
        />
        <span>{info?.name}</span>
      </div>

      <p className="text-sm leading-relaxed">
        {info?.slogan}
      </p>
    </aside>

    {/* Links Section */}
    <nav className="">
      <h6 className="text-lg font-bold uppercase tracking-wide text-foreground">
        অন্যান্য লিংক সমূহ
      </h6>

      <div className="flex flex-col space-y-2">
        <Link
          href="https://www.dhakaeducationboard.gov.bd/"
          className="text-sm transition hover:text-foreground hover:underline"
        >
          ঢাকা শিক্ষা বোর্ড
        </Link>

        <Link
          href="https://dshe.gov.bd/"
          className="text-sm transition hover:text-foreground hover:underline"
        >
          মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর
        </Link>

        <Link
          href="https://shed.gov.bd/"
          className="text-sm transition hover:text-foreground hover:underline"
        >
          মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ
        </Link>
      </div>
    </nav>

    {/* Address Section */}
    <div>
      <FooterSchoolAddress />
    </div>
  </div>

  {/* Bottom Section */}
  <div className="mt-8 border-t border-border px-4 py-6 text-center text-sm sm:px-6 lg:px-8">
    <p>
      <span>{info?.name}</span> &copy; {new Date().getFullYear()} — All rights reserved.
    </p>

    <p className="mt-1">
      Developed by: <span className="text-primary font-medium">Opi Rajbhor</span>
    </p>
  </div>
</footer>
  )
}

export default Footer
