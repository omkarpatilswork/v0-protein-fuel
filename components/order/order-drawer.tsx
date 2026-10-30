"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { Check, MapPin, Minus, Plus, ShoppingBag, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { categories, formatINR, itemById, itemsIn, proteinPer100 } from "@/lib/menu"
import { SERVICE_END, SERVICE_START, stopStatus, type StopStatus } from "@/lib/schedule"
import { useOrder } from "./order-context"

const slots = Array.from({ length: (SERVICE_END - SERVICE_START) / 15 }, (_, i) => {
  const m = SERVICE_START + i * 15
  const h = Math.floor(m / 60)
  return `${h > 12 ? h - 12 : h}:${String(m % 60).padStart(2, "0")} PM`
})

export function OrderDrawer() {
  const { items, totals, isOpen, close, change, clear } = useOrder()
  const [status, setStatus] = useState<StopStatus | null>(null)
  const [slot, setSlot] = useState(slots[2])
  const [placed, setPlaced] = useState<{ code: string; summary: string } | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    setStatus(stopStatus(new Date()))
    panelRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close()
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, close])

  // Pre-orders go to today's stop until the lunch window closes, then to the next day out
  const pickup = useMemo(() => {
    if (!status) return null
    if (status.stop && status.state !== "after") return { day: "Today", stop: status.stop }
    return { day: status.next.tomorrow ? "Tomorrow" : status.next.day, stop: status.next.stop }
  }, [status])

  const place = () => {
    const code = `PF-${(totals.protein * 7 + totals.price).toString(36).toUpperCase().slice(-4)}`
    const summary = Object.entries(items)
      .map(([id, qty]) => `${qty} × ${itemById(id).name}`)
      .join(", ")
    setPlaced({ code, summary })
    clear()
  }

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? "" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={close} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Build your order"
        tabIndex={-1}
        className={`absolute top-0 right-0 flex h-full w-full max-w-[440px] flex-col bg-background shadow-2xl outline-none transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b px-5 py-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">Pre-order</p>
            <h2 className="font-display text-2xl font-bold">Build your order</h2>
          </div>
          <button onClick={close} aria-label="Close" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-border">
            <X size={20} />
          </button>
        </header>

        {placed ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Check size={32} />
            </span>
            <h3 className="font-display mt-5 text-2xl font-bold">That&apos;s the flow</h3>
            <p className="mt-2 text-muted-foreground">
              Protein Fuel is still a concept, so nothing was sent and nobody was charged. In the real thing you&apos;d show this code at the
              window and skip the queue.
            </p>
            <p className="font-display mt-6 rounded-xl border-2 border-dashed border-accent px-6 py-3 text-3xl font-bold tracking-widest">{placed.code}</p>
            <p className="mt-3 text-sm text-muted-foreground">{placed.summary}</p>
            <Button
              className="mt-8 bg-primary text-primary-foreground"
              onClick={() => {
                setPlaced(null)
                close()
              }}
            >
              Back to the site
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {categories.map((cat) => (
                <section key={cat.id} className="mb-5">
                  <h3 className="mb-2 text-sm font-semibold text-muted-foreground">{cat.name}</h3>
                  <ul className="space-y-2">
                    {itemsIn(cat.id).map((item) => {
                      const qty = items[item.id] ?? 0
                      return (
                        <li key={item.id} className="flex items-center gap-3 rounded-xl border p-2">
                          <Image src={item.image} alt="" width={56} height={56} className="h-14 w-14 shrink-0 rounded-lg object-cover" />
                          <div className="min-w-0 flex-1">
                            <p className="truncate font-semibold">{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              <span className="font-semibold text-accent">{item.protein}g protein</span> · {item.kcal} kcal ·{" "}
                              {formatINR(item.price)}
                            </p>
                          </div>
                          {qty === 0 ? (
                            <button
                              onClick={() => change(item.id, 1)}
                              aria-label={`Add ${item.name}`}
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground"
                            >
                              <Plus size={18} />
                            </button>
                          ) : (
                            <div className="flex h-9 shrink-0 items-center rounded-full bg-primary text-primary-foreground">
                              <button onClick={() => change(item.id, -1)} aria-label={`One less ${item.name}`} className="flex h-9 w-9 items-center justify-center">
                                <Minus size={16} />
                              </button>
                              <span className="w-4 text-center text-sm font-bold">{qty}</span>
                              <button onClick={() => change(item.id, 1)} aria-label={`One more ${item.name}`} className="flex h-9 w-9 items-center justify-center">
                                <Plus size={16} />
                              </button>
                            </div>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </section>
              ))}
            </div>

            <footer className="border-t bg-muted/60 px-5 pt-4 pb-5">
              <dl className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-background py-2">
                  <dt className="text-[11px] text-muted-foreground">Protein</dt>
                  <dd className="font-display text-xl font-bold text-accent">{totals.protein}g</dd>
                </div>
                <div className="rounded-xl bg-background py-2">
                  <dt className="text-[11px] text-muted-foreground">Calories</dt>
                  <dd className="font-display text-xl font-bold">{totals.kcal}</dd>
                </div>
                <div className="rounded-xl bg-background py-2">
                  <dt className="text-[11px] text-muted-foreground">Total</dt>
                  <dd className="font-display text-xl font-bold">{formatINR(totals.price)}</dd>
                </div>
              </dl>
              {totals.count > 0 && (
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  {proteinPer100(totals.protein, totals.price)}g of protein for every ₹100
                </p>
              )}

              {pickup && (
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <MapPin size={16} className="shrink-0 text-accent" />
                  <span className="min-w-0 flex-1 truncate">
                    <span className="font-semibold">{pickup.day}</span> · {pickup.stop.area}
                  </span>
                  <label className="sr-only" htmlFor="pickup-slot">
                    Pickup time
                  </label>
                  <select
                    id="pickup-slot"
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="h-9 rounded-lg border bg-background px-2 text-sm font-semibold"
                  >
                    {slots.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              )}

              <Button
                disabled={totals.count === 0}
                onClick={place}
                className="mt-3 h-12 w-full bg-accent text-base font-semibold text-accent-foreground hover:bg-accent/90"
              >
                <ShoppingBag size={18} />
                {totals.count === 0 ? "Add something to start" : `Pre-order ${totals.count} ${totals.count === 1 ? "item" : "items"} · ${formatINR(totals.price)}`}
              </Button>
              <p className="mt-2 text-center text-[11px] text-muted-foreground">Concept demo: no payment, nothing is sent.</p>
            </footer>
          </>
        )}
      </div>
    </div>
  )
}
