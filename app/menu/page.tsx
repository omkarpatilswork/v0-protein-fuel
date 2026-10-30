import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AddToOrder, OrderNowButton } from "@/components/order/order-buttons"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { categories, formatINR, itemsIn, menu, proteinPer100 } from "@/lib/menu"

export const metadata: Metadata = {
  title: "Menu & macros",
  description: "Power wraps, fuel shakes and protein waffles, with protein, calories and price on every item.",
}

export default function MenuPage() {
  const best = [...menu].sort((a, b) => proteinPer100(b.protein, b.price) - proteinPer100(a.protein, a.price))[0]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24">
        <section className="bg-primary py-16 text-primary-foreground sm:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-5xl font-bold text-balance md:text-6xl">Our Menu</h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-balance text-primary-foreground/80">
              Every item crafted for maximum protein, minimum compromise. Macros on everything.
            </p>
            <nav aria-label="Menu sections" className="mt-8 flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="rounded-full border border-primary-foreground/25 px-5 py-2 text-sm font-semibold transition hover:bg-primary-foreground/10"
                >
                  {cat.name}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="border-b bg-muted/60">
          <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-4 text-center text-sm sm:flex-row sm:text-left">
            <p className="text-muted-foreground">
              Best value for protein: <span className="font-semibold text-foreground">{best.name}</span>, {proteinPer100(best.protein, best.price)}g per ₹100.
            </p>
            <OrderNowButton size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Build your order
            </OrderNowButton>
          </div>
        </section>

        {categories.map((cat, i) => (
          <section key={cat.id} id={cat.id} className={`scroll-mt-28 py-16 sm:py-20 ${i % 2 ? "bg-muted" : "bg-background"}`}>
            <div className="container mx-auto px-4">
              <div className="mx-auto mb-10 max-w-2xl text-center">
                <h2 className="text-4xl font-bold">{cat.name}</h2>
                <p className="mt-3 text-muted-foreground">{cat.blurb}</p>
              </div>

              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {itemsIn(cat.id).map((item) => (
                  <Card key={item.id} className="overflow-hidden py-0">
                    <div className="relative aspect-square bg-muted">
                      <Image src={item.image} alt={item.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                      <Badge className="absolute top-3 left-3 bg-white/90 text-foreground">{item.source}</Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <Badge className="bg-accent text-accent-foreground">{item.protein}g</Badge>
                      </div>
                      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      <dl className="mb-5 grid grid-cols-3 gap-2 rounded-lg bg-muted/70 p-2 text-center text-xs">
                        <div>
                          <dt className="text-muted-foreground">Protein</dt>
                          <dd className="font-semibold">{item.protein}g</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Calories</dt>
                          <dd className="font-semibold">{item.kcal}</dd>
                        </div>
                        <div>
                          <dt className="text-muted-foreground">Per ₹100</dt>
                          <dd className="font-semibold">{proteinPer100(item.protein, item.price)}g</dd>
                        </div>
                      </dl>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{formatINR(item.price)}</span>
                        <AddToOrder id={item.id} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        <p className="bg-background px-4 py-8 text-center text-xs text-muted-foreground">
          Macros are recipe targets for the concept menu, not lab-tested values.
        </p>
      </main>

      <Footer />
    </div>
  )
}
