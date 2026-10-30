"use client"

import { useEffect, useState } from "react"
import { Clock, MapPin } from "lucide-react"
import { serviceHours, stopStatus, type StopStatus } from "@/lib/schedule"

const stateCopy = {
  before: { badge: "Today", note: "Opens at 12:00 PM" },
  serving: { badge: "Serving now", note: "Until 3:00 PM" },
  after: { badge: "Done for today", note: "" },
  off: { badge: "Day off", note: "The truck rests on Sundays" },
}

// Rendered on the client because "today" depends on the current time in Pune
export function TodayStop({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [status, setStatus] = useState<StopStatus | null>(null)

  useEffect(() => {
    const update = () => setStatus(stopStatus(new Date()))
    update()
    const timer = setInterval(update, 60_000)
    return () => clearInterval(timer)
  }, [])

  const muted = tone === "dark" ? "text-primary-foreground/70" : "text-muted-foreground"

  if (!status) {
    return <div className={`h-[148px] animate-pulse rounded-2xl ${tone === "dark" ? "bg-white/10" : "bg-muted"}`} aria-hidden />
  }

  const copy = stateCopy[status.state]
  const showToday = status.stop && status.state !== "after"
  const stop = showToday ? status.stop! : status.next.stop
  const when = showToday ? null : status.next.tomorrow ? "Tomorrow" : status.next.day

  return (
    <div className={`rounded-2xl border-2 border-accent p-6 text-left sm:p-8 ${tone === "dark" ? "bg-white/5" : "bg-card"}`}>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
          {status.state === "serving" && <span className="h-2 w-2 animate-pulse rounded-full bg-white" />}
          {copy.badge}
        </span>
        {when && <span className={`text-sm ${muted}`}>Next stop: {when}</span>}
      </div>
      <h3 className="font-display text-2xl font-bold sm:text-3xl">{stop.area}</h3>
      <div className={`mt-3 space-y-2 ${muted}`}>
        <p className="flex items-center gap-2.5">
          <MapPin size={18} className="shrink-0 text-accent" />
          {stop.spot}
        </p>
        <p className="flex items-start gap-2.5">
          <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
          <span className="flex flex-wrap gap-x-2">
            <span className="whitespace-nowrap">{serviceHours}</span>
            {copy.note && showToday && <span className="whitespace-nowrap">· {copy.note}</span>}
          </span>
        </p>
      </div>
    </div>
  )
}
