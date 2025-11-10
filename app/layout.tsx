import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  title: "Protein Fuel - Gains on Wheels | Healthy Meals for IT Professionals",
  description:
    "Protein-packed meals delivered to your office. Wraps, shakes, and waffles designed for busy professionals in Pune.",
  generator: "v0.app",
  keywords: "protein meals, food truck, healthy food, office lunch, Pune, IT professionals",
  openGraph: {
    title: "Protein Fuel - Gains on Wheels",
    description: "Healthy, tasty, protein-packed meals wherever you work.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
