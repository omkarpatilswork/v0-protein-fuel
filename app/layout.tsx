import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { OrderProvider } from "@/components/order/order-context"
import { OrderPill } from "@/components/order/order-buttons"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  metadataBase: new URL("https://v0-protein-fuel.vercel.app"),
  title: {
    default: "Protein Fuel · Gains on Wheels",
    template: "%s · Protein Fuel",
  },
  description:
    "A food-truck concept for Pune's IT parks: high-protein wraps, shakes and waffles with the macros on every item. Not open yet.",
  keywords: ["protein meals", "food truck", "healthy food", "office lunch", "Pune", "Kharadi", "Viman Nagar", "Kalyani Nagar"],
  openGraph: {
    title: "Protein Fuel · Gains on Wheels",
    description: "Healthy, tasty, protein-packed lunches that come to your office park. A food-truck concept for Pune.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1b26",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <OrderProvider>
          {children}
          <OrderPill />
        </OrderProvider>
        <Analytics />
      </body>
    </html>
  )
}
