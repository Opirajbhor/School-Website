import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import ModeToggle from "../ui/modeToggle"
import Image from "next/image"
import { prisma } from "@/lib/prisma/prisma"

// Logo and name Data Fetch
const logoName = await prisma.logoName.findFirst()
export default function Navbar() {
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
                  className="block text-2xl text-muted-foreground duration-150 hover:text-accent-foreground"
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
        </div>
      </div>
    </nav>
  )
}
