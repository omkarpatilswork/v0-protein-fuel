"use client"

import type { ComponentProps } from "react"
import { Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatINR, itemById } from "@/lib/menu"
import { useOrder } from "./order-context"

export function OrderNowButton({ children = "Order Now", onClick, ...props }: ComponentProps<typeof Button>) {
  const { open } = useOrder()
  return (
    <Button
      {...props}
      onClick={(e) => {
        onClick?.(e)
        open()
      }}
    >
      {children}
    </Button>
  )
}

export function AddToOrder({ id }: { id: string }) {
  const { items, change } = useOrder()
  const qty = items[id] ?? 0
  const name = itemById(id).name

  if (qty === 0) {
    return (
      <Button size="sm" onClick={() => change(id, 1)} className="bg-accent text-accent-foreground hover:bg-accent/90">
        <Plus size={16} /> Add
      </Button>
    )
  }
  return (
    <div className="flex h-8 items-center rounded-md bg-primary text-primary-foreground">
      <button onClick={() => change(id, -1)} aria-label={`One less ${name}`} className="flex h-8 w-8 items-center justify-center">
        <Minus size={14} />
      </button>
      <span className="w-4 text-center text-sm font-bold">{qty}</span>
      <button onClick={() => change(id, 1)} aria-label={`One more ${name}`} className="flex h-8 w-8 items-center justify-center">
        <Plus size={14} />
      </button>
    </div>
  )
}

// Floating summary once something is in the order and the drawer is closed
export function OrderPill() {
  const { totals, isOpen, open } = useOrder()
  if (totals.count === 0 || isOpen) return null
  return (
    <button
      onClick={open}
      className="fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-primary py-3 pr-5 pl-4 text-primary-foreground shadow-2xl transition hover:scale-[1.02]"
    >
      <ShoppingBag size={18} className="text-accent" />
      <span className="text-sm font-semibold">
        {totals.count} {totals.count === 1 ? "item" : "items"} · {totals.protein}g protein · {formatINR(totals.price)}
      </span>
    </button>
  )
}
