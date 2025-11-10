"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xl">PF</span>
            </div>
            <span className="text-primary-foreground font-bold text-xl hidden sm:inline">Protein Fuel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Menu
            </Link>
            <Link
              href="/locations"
              className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Locations
            </Link>
            <Link href="/about" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              About
            </Link>
            <Link href="/press" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
              Press
            </Link>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Order Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="/locations"
              className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/about"
              className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/press"
              className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Press
            </Link>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Order Now</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
