"use client";

import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b bg-background">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-2xl">🌾</div>
          <div>
            <h1 className="font-semibold text-lg">XYZ School & College</h1>
            <p className="text-xs text-muted-foreground">
              a revolutionary way to educate
            </p>
          </div>
        </div>

        {/* Desktop Menu (shadcn) */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>

            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
                  মূলপাতা
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>পরিচিতি</NavigationMenuTrigger>
              <NavigationMenuContent className="p-2 space-y-2 w-44">
                <Link href="/about/history" legacyBehavior passHref>
                  <NavigationMenuLink>ইতিহাস</NavigationMenuLink>
                </Link>
                <Link href="/about/mission" legacyBehavior passHref>
                  <NavigationMenuLink>মিশন</NavigationMenuLink>
                </Link>
                <Link href="/about/principal" legacyBehavior passHref>
                  <NavigationMenuLink>প্রধান শিক্ষক</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>জনবল</NavigationMenuTrigger>
              <NavigationMenuContent className="p-2 space-y-2 w-44">
                <Link href="/staff/teachers" legacyBehavior passHref>
                  <NavigationMenuLink>শিক্ষক</NavigationMenuLink>
                </Link>
                <Link href="/staff/admin" legacyBehavior passHref>
                  <NavigationMenuLink>প্রশাসন</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>শিক্ষার্থী</NavigationMenuTrigger>
              <NavigationMenuContent className="p-2 space-y-2 w-44">
                <Link href="/students/list" legacyBehavior passHref>
                  <NavigationMenuLink>তালিকা</NavigationMenuLink>
                </Link>
                <Link href="/students/admission" legacyBehavior passHref>
                  <NavigationMenuLink>ভর্তি</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>পরীক্ষার ফলাফল</NavigationMenuTrigger>
              <NavigationMenuContent className="p-2 space-y-2 w-44">
                <Link href="/result/jsc" legacyBehavior passHref>
                  <NavigationMenuLink>JSC</NavigationMenuLink>
                </Link>
                <Link href="/result/ssc" legacyBehavior passHref>
                  <NavigationMenuLink>SSC</NavigationMenuLink>
                </Link>
                <Link href="/result/hsc" legacyBehavior passHref>
                  <NavigationMenuLink>HSC</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/gallery" legacyBehavior passHref>
                <NavigationMenuLink>ছবির গ্যালারি</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink>যোগাযোগ</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* Right */}
        <div className="flex items-center gap-2">
          <Button className="hidden md:flex">Login</Button>

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
  );
}