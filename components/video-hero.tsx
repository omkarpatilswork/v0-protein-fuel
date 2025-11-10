"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface VideoHeroProps {
  videoSrc: string
  posterSrc: string
  title: string
  subtitle: string
  showPlayButton?: boolean
}

export function VideoHero({ videoSrc, posterSrc, title, subtitle, showPlayButton = false }: VideoHeroProps) {
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

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-balance">{title}</h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl text-balance">{subtitle}</p>

        {showPlayButton && !isPlaying && (
          <button
            onClick={() => setIsPlaying(true)}
            className="mt-8 w-16 h-16 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Play size={24} className="text-accent-foreground ml-1" fill="currentColor" />
          </button>
        )}
      </div>
    </div>
  )
}
