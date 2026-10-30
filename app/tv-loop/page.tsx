"use client"

import { useRef, useState } from "react"
import { Maximize } from "lucide-react"

const playlist = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food_Truck_Brand_Film_Generation-CiZ0wG1T4myglgi6VeG1PH70jDy7eu.mp4",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Protein_Fuel_Brand_Film_Prompt-kdOpffAawyi6jLpnnXI2bW94GkFQoZ.mp4",
]

// Plays both brand films back to back, forever. Browsers only allow full screen after a tap.
export default function TVLoopPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [hintVisible, setHintVisible] = useState(true)

  const goFullscreen = () => {
    containerRef.current?.requestFullscreen?.().catch(() => {})
    setHintVisible(false)
  }

  return (
    <div ref={containerRef} className="fixed inset-0 bg-black" onClick={goFullscreen}>
      <video
        key={playlist[index]}
        src={playlist[index]}
        autoPlay
        muted
        playsInline
        poster="/assets/images/hero_frame_fallback.jpg"
        onEnded={() => setIndex((i) => (i + 1) % playlist.length)}
        className="h-full w-full object-cover"
      />
      {hintVisible && (
        <button
          onClick={goFullscreen}
          className="absolute right-6 bottom-6 flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
        >
          <Maximize size={16} /> Tap for full screen
        </button>
      )}
    </div>
  )
}
