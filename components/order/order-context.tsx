"use client"

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"
import { itemById } from "@/lib/menu"
import { OrderDrawer } from "./order-drawer"

interface OrderTotals {
  count: number
  price: number
  protein: number
  kcal: number
}

interface OrderContextValue {
  items: Record<string, number>
  totals: OrderTotals
  isOpen: boolean
  open: () => void
  close: () => void
  change: (id: string, delta: number) => void
  clear: () => void
}

const OrderContext = createContext<OrderContextValue | null>(null)

export function OrderProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({})
  const [isOpen, setIsOpen] = useState(false)

  const change = useCallback((id: string, delta: number) => {
    setItems((prev) => {
      const qty = Math.max(0, (prev[id] ?? 0) + delta)
      const next = { ...prev, [id]: qty }
      if (qty === 0) delete next[id]
      return next
    })
  }, [])

  const totals = useMemo(() => {
    const t: OrderTotals = { count: 0, price: 0, protein: 0, kcal: 0 }
    for (const [id, qty] of Object.entries(items)) {
      const item = itemById(id)
      t.count += qty
      t.price += item.price * qty
      t.protein += item.protein * qty
      t.kcal += item.kcal * qty
    }
    return t
  }, [items])

  const value: OrderContextValue = {
    items,
    totals,
    isOpen,
    open: useCallback(() => setIsOpen(true), []),
    close: useCallback(() => setIsOpen(false), []),
    change,
    clear: useCallback(() => setItems({}), []),
  }

  return (
    <OrderContext.Provider value={value}>
      {children}
      <OrderDrawer />
    </OrderContext.Provider>
  )
}

export function useOrder() {
  const ctx = useContext(OrderContext)
  if (!ctx) throw new Error("useOrder must be used inside OrderProvider")
  return ctx
}
