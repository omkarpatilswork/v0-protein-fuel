"use client"

import { useState } from "react"
import { Check, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

// Uses the native share sheet where there is one, otherwise copies the link
export function ShareButton({ title, hash }: { title: string; hash: string }) {
  const [copied, setCopied] = useState(false)

  const share = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${hash}`
    try {
      if (navigator.share) {
        await navigator.share({ title, url })
        return
      }
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Cancelled share sheet or blocked clipboard: nothing to do
    }
  }

  return (
    <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={share}>
      {copied ? <Check size={16} /> : <Share2 size={16} />}
      {copied ? "Link copied" : "Share"}
    </Button>
  )
}
