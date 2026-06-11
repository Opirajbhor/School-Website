import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import ModeToggle from "../components/ui/modeToggle"
import Image from "next/image"
import { prisma } from "@/lib/prisma/prisma"
import MobileNavbar from "./MobileNavbar"
export default async function Navbar() {
  // Logo and name Data Fetch
  const logoName = await prisma.logoName.findFirst()
  const navLinks = [
    {
      href: "/",
      title: "মূলপাতা",
    },
    {
      href: "/about-school",
      title: "বিদ্যালয় সম্পর্কে",
    },
    {
      href: "/teachers",
      title: "শিক্ষকগণ",
    },
    {
      href: "/notices",
      title: "নোটিশসমূহ",
    },
    {
      href: "/gallery",
      title: "গ্যালারী",
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
                <h1 className="text-sm font-semibold lg:text-lg">
                  {logoName?.name}
                </h1>
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
                  {link?.title}
                </Link>
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenu>

        {/* Right */}
        <div className="flex items-center justify-center gap-2">
          <ModeToggle></ModeToggle>
          <MobileNavbar navLinks={navLinks}></MobileNavbar>
          <Link href={"/dashboard/homepage"}>
            <Button className="hidden md:flex">Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
