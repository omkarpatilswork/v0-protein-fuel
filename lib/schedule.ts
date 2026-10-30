export interface Stop {
  id: string
  area: string
  spot: string
  // Position on the schematic route map (viewBox 0 0 600 360)
  map: { x: number; y: number }
}

export const stops: Record<string, Stop> = {
  kharadi: { id: "kharadi", area: "Kharadi", spot: "EON IT Park, near Gate 2", map: { x: 470, y: 200 } },
  viman: { id: "viman", area: "Viman Nagar", spot: "Weikfield IT Citi Infopark, Nagar Road", map: { x: 300, y: 110 } },
  kalyani: { id: "kalyani", area: "Kalyani Nagar", spot: "Cerebrum IT Park, food court side", map: { x: 170, y: 220 } },
}

// Index 0 is Sunday, matching Date.getDay()
export const week: { day: string; short: string; stopId: string | null }[] = [
  { day: "Sunday", short: "Sun", stopId: null },
  { day: "Monday", short: "Mon", stopId: "kharadi" },
  { day: "Tuesday", short: "Tue", stopId: "viman" },
  { day: "Wednesday", short: "Wed", stopId: "kalyani" },
  { day: "Thursday", short: "Thu", stopId: "kharadi" },
  { day: "Friday", short: "Fri", stopId: "viman" },
  { day: "Saturday", short: "Sat", stopId: "kalyani" },
]

export const SERVICE_START = 12 * 60
export const SERVICE_END = 15 * 60
export const serviceHours = "12:00 – 3:00 PM"

export const daysAt = (stopId: string) => week.filter((d) => d.stopId === stopId).map((d) => d.short)

export type StopState = "before" | "serving" | "after" | "off"

export interface StopStatus {
  dayIndex: number
  state: StopState
  stop: Stop | null
  // The next day the truck is out, used after hours and on Sundays
  next: { day: string; stop: Stop; tomorrow: boolean }
}

// The truck runs on Pune time, whatever time zone the visitor is in
export function stopStatus(now: Date): StopStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ""
  const dayIndex = week.findIndex((d) => d.short === get("weekday"))
  const minutes = Number(get("hour")) * 60 + Number(get("minute"))

  const today = week[dayIndex]
  const stop = today.stopId ? stops[today.stopId] : null
  const state: StopState = !stop ? "off" : minutes < SERVICE_START ? "before" : minutes < SERVICE_END ? "serving" : "after"

  let offset = 1
  while (!week[(dayIndex + offset) % 7].stopId) offset++
  const nextDay = week[(dayIndex + offset) % 7]

  return {
    dayIndex,
    state,
    stop,
    next: { day: nextDay.day, stop: stops[nextDay.stopId!], tomorrow: offset === 1 },
  }
}
