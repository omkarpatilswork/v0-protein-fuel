"use client"

import { useEffect, useRef } from "react"

export default function TVLoopPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Request fullscreen on mount
    if (videoRef.current) {
      videoRef.current.requestFullscreen?.()
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black">
      <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food_Truck_Brand_Film_Generation-CiZ0wG1T4myglgi6VeG1PH70jDy7eu.mp4" type="video/mp4" />
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Protein_Fuel_Brand_Film_Prompt-kdOpffAawyi6jLpnnXI2bW94GkFQoZ.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
