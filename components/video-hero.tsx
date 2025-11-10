"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface VideoHeroProps {
  videoSrc: string
  posterSrc: string
  showPlayButton?: boolean
}

export function VideoHero({ videoSrc, posterSrc, showPlayButton = false }: VideoHeroProps) {
  const [isPlaying, setIsPlaying] = useState(!showPlayButton)

  return (
    <div className="relative w-full h-full group">
      <video
        autoPlay={!showPlayButton}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <div className="relative h-full flex items-center justify-center px-4">
        {showPlayButton && !isPlaying && (
          <button
            onClick={() => setIsPlaying(true)}
            className="w-16 h-16 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Play size={24} className="text-accent-foreground ml-1" fill="currentColor" />
          </button>
        )}
      </div>
    </div>
  )
}
