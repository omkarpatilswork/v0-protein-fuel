"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-accent-foreground font-black text-lg sm:text-xl">PF</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-foreground font-bold text-lg leading-tight">Protein Fuel</span>
              <span className="text-xs text-accent font-semibold">Gains on Wheels</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-foreground/70 hover:text-accent font-medium transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-foreground/70 hover:text-accent font-medium transition-colors">
              Menu
            </Link>
            <Link href="/locations" className="text-foreground/70 hover:text-accent font-medium transition-colors">
              Locations
            </Link>
            <Link href="/about" className="text-foreground/70 hover:text-accent font-medium transition-colors">
              About
            </Link>
            <Link href="/press" className="text-foreground/70 hover:text-accent font-medium transition-colors">
              Press
            </Link>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-lg">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border">
            <Link
              href="/"
              className="block text-foreground/70 hover:text-accent font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="block text-foreground/70 hover:text-accent font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/locations"
              className="block text-foreground/70 hover:text-accent font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/about"
              className="block text-foreground/70 hover:text-accent font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/press"
              className="block text-foreground/70 hover:text-accent font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Press
            </Link>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Order Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
