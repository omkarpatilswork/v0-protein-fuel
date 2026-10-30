import { daysAt, stops } from "@/lib/schedule"

// A schematic of the weekly loop through east Pune. Not to scale.
export function RouteMap() {
  const list = Object.values(stops)
  return (
    <figure className="overflow-hidden rounded-2xl border bg-card">
      <svg viewBox="0 0 600 360" role="img" aria-labelledby="route-title route-desc" className="h-auto w-full">
        <title id="route-title">Protein Fuel weekly route</title>
        <desc id="route-desc">
          A schematic map of east Pune showing the three stops: Kalyani Nagar on Wednesday and Saturday, Viman Nagar on Tuesday and Friday, and Kharadi
          on Monday and Thursday.
        </desc>
        <rect width="600" height="360" fill="var(--muted)" />
        {/* city blocks */}
        {Array.from({ length: 7 }, (_, r) =>
          Array.from({ length: 11 }, (_, c) => (
            <rect
              key={`${r}-${c}`}
              x={14 + c * 54}
              y={14 + r * 50}
              width="44"
              height="40"
              rx="6"
              fill="var(--background)"
              opacity={(r * 3 + c) % 4 === 0 ? 0.5 : 0.85}
            />
          )),
        )}
        {/* Mula-Mutha river */}
        <path d="M0 300 C 90 280, 130 320, 210 290 S 330 250, 390 290 S 520 330, 600 300" fill="none" stroke="#7fb8e0" strokeWidth="18" strokeLinecap="round" opacity="0.85" />
        <text x="452" y="340" fontSize="12" fill="#3f7fae" fontWeight="600">
          Mula-Mutha river
        </text>
        {/* Nagar Road */}
        <path d="M20 250 C 150 230, 250 170, 330 150 S 480 150, 590 120" fill="none" stroke="var(--foreground)" strokeOpacity="0.18" strokeWidth="12" strokeLinecap="round" />
        <text x="44" y="236" fontSize="12" fill="var(--muted-foreground)" fontWeight="600" transform="rotate(-8 44 236)">
          Nagar Road
        </text>
        {/* the truck's loop */}
        <path
          d={`M${stops.kalyani.map.x} ${stops.kalyani.map.y} Q 210 120 ${stops.viman.map.x} ${stops.viman.map.y} Q 420 110 ${stops.kharadi.map.x} ${stops.kharadi.map.y} Q 320 270 ${stops.kalyani.map.x} ${stops.kalyani.map.y}`}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="4"
          strokeDasharray="10 9"
          strokeLinecap="round"
        />
        <text x="276" y="36" fontSize="12" fill="var(--muted-foreground)" fontWeight="600">
          ✈ Airport
        </text>
        {list.map((s) => (
          <g key={s.id} transform={`translate(${s.map.x} ${s.map.y})`}>
            <circle r="26" fill="var(--accent)" opacity="0.18" />
            <circle r="13" fill="var(--accent)" stroke="var(--background)" strokeWidth="4" />
            <rect x="-70" y="22" width="140" height="44" rx="10" fill="var(--background)" stroke="var(--border)" />
            <text y="41" textAnchor="middle" fontSize="15" fontWeight="700" fill="var(--foreground)">
              {s.area}
            </text>
            <text y="58" textAnchor="middle" fontSize="12" fill="var(--accent)" fontWeight="700">
              {daysAt(s.id).join(" & ")}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="border-t px-4 py-2 text-xs text-muted-foreground">Schematic, not to scale. Lunch service 12:00 – 3:00 PM, Monday to Saturday.</figcaption>
    </figure>
  )
}
