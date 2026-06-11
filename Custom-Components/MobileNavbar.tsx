"use client"
import { useState } from "react"
import Link from "next/link"
type NavLink = {
  href: string
  title: string
}
export default function MobileNavbar({ navLinks }: { navLinks: NavLink[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="space-y-1.5"
        aria-label="Toggle menu"
      >
        <span className="block h-0.5 w-6 bg-foreground"></span>
        <span className="block h-0.5 w-6 bg-foreground"></span>
        <span className="block h-0.5 w-6 bg-foreground"></span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-background shadow-lg transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-primary"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
