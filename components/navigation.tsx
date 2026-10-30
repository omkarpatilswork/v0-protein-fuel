"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { OrderNowButton } from "@/components/order/order-buttons"

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "The idea" },
  { href: "/press", label: "Films" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 right-0 left-0 z-50">
      <div className="bg-accent px-4 py-1.5 text-center text-xs font-semibold text-accent-foreground sm:text-sm">
        Concept brand · not open yet. Ordering on this site is a demo.
      </div>
      <div className="border-b border-border bg-white/95 shadow-sm backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-orange-600 shadow-md">
                <span className="font-display text-lg font-black text-accent-foreground">PF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg leading-tight font-bold text-foreground">Protein Fuel</span>
                <span className="text-xs font-semibold text-accent">Gains on Wheels</span>
              </div>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`font-medium transition-colors hover:text-accent ${pathname === link.href ? "text-accent" : "text-foreground/70"}`}
                >
                  {link.label}
                </Link>
              ))}
              <OrderNowButton className="rounded-lg bg-accent font-semibold text-accent-foreground hover:bg-accent/90" />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="space-y-1 border-t border-border py-4 md:hidden">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-2 py-2.5 font-medium transition-colors hover:text-accent ${
                    pathname === link.href ? "text-accent" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <OrderNowButton
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
