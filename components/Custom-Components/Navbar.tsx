"use client"

import Link from "next/link"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import ModeToggle from "../ui/modeToggle"
import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/axios/axios"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Logo and name Data Fetch
  const { data: logoName } = useQuery({
    queryKey: ["getGallary"],

    queryFn: async () => {
      const res = await api.get("/logo-name")
      return res.data
    },
  })

  const navLinks = [
    {
      href: "/",
      tittle: "মূলপাতা",
    },
    {
      href: "/about-school",
      tittle: "বিদ্যালয় সম্পর্কে",
    },
    {
      href: "/teachers",
      tittle: "শিক্ষকগণ",
    },
    {
      href: "/notices",
      tittle: "নোটিশসমূহ",
    },
  ]

  return (
    <nav className="border-b bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-3">
          {logoName && (
            <>
              <div className="text-2xl">
                <Image
                  src={logoName.imageUrl}
                  width={50}
                  height={50}
                  alt="logo"
                ></Image>
              </div>
              <div>
                <h1 className="text-lg font-semibold">{logoName?.name}</h1>
                <p className="text-xs text-muted-foreground">
                  {logoName?.slogan}
                </p>
              </div>
            </>
          )}
        </Link>

        {/* Desktop Menu (shadcn) */}
        <NavigationMenu className="hidden md:flex">
          <div className="flex items-center gap-3">
            {navLinks.map((link, i) => (
              <NavigationMenuLink key={i} asChild>
                <Link
                  href={link?.href}
                  className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
                >
                  {link?.tittle}
                </Link>
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenu>

        {/* Right */}
        <div className="flex items-center gap-2">
          <ModeToggle></ModeToggle>
          <Button className="hidden md:flex">
            <Link href={"/dashboard"}>Login</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </Button>
        </div>
      </div>
    </nav>
  )
}
