import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ShareButton } from "@/components/share-button"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Tv } from "lucide-react"
import { menu, range } from "@/lib/menu"
import { stops } from "@/lib/schedule"

export const metadata: Metadata = {
  title: "Brand films",
  description: "The Protein Fuel launch film, the office edition and a one-page fact sheet.",
}

const films = [
  {
    id: "launch",
    title: "Launch film",
    body: "The brand story: the truck, the food and the lunch-break feel the concept is going for.",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food_Truck_Brand_Film_Generation-CiZ0wG1T4myglgi6VeG1PH70jDy7eu.mp4",
  },
  {
    id: "office",
    title: "Office edition",
    body: "A cut for people in IT parks, built around speed and convenience at lunch.",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Protein_Fuel_Brand_Film_Prompt-kdOpffAawyi6jLpnnXI2bW94GkFQoZ.mp4",
  },
]

export default function PressPage() {
  const facts = [
    ["What", "A food-truck concept serving high-protein wraps, shakes and waffles"],
    ["Where", `${Object.values(stops).map((s) => s.area).join(", ")} in east Pune, one stop per weekday`],
    ["Menu", `${menu.length} items, ${range(menu.map((m) => m.protein))}g protein each, ₹${range(menu.map((m) => m.price))}`],
    ["Hours", "12:00 – 3:00 PM, Monday to Saturday"],
    ["Status", "Concept. Not trading yet, and no orders are taken."],
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24">
        <section className="bg-primary py-16 text-primary-foreground sm:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-5xl font-bold text-balance md:text-6xl">Brand films</h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-balance text-primary-foreground/80">
              Two short films made for the concept, plus the facts in one place.
            </p>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
              {films.map((film) => (
                <Card key={film.id} id={film.id} className="scroll-mt-28 overflow-hidden py-0">
                  <div className="relative aspect-video bg-black">
                    <video controls preload="none" className="h-full w-full object-cover" poster="/assets/images/hero_frame_fallback.jpg">
                      <source src={film.src} type="video/mp4" />
                    </video>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="mb-2 text-2xl font-bold">{film.title}</h2>
                    <p className="mb-4 leading-relaxed text-muted-foreground">{film.body}</p>
                    <div className="flex flex-wrap gap-2">
                      <ShareButton title={`Protein Fuel · ${film.title}`} hash={film.id} />
                      <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                        <a href={film.src} target="_blank" rel="noreferrer">
                          <ExternalLink size={16} />
                          Open the video file
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 rounded-2xl bg-muted p-6 sm:flex-row">
              <div className="flex items-center gap-3">
                <Tv className="shrink-0 text-accent" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">TV loop:</span> both films back to back, full screen, for a screen on the truck.
                </p>
              </div>
              <Button asChild className="bg-primary text-primary-foreground">
                <Link href="/tv-loop">Open the TV loop</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 sm:py-20">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="mb-8 text-center text-4xl font-bold">Fact sheet</h2>
            <Card className="py-0">
              <CardContent className="p-0">
                <dl className="divide-y">
                  {facts.map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[96px_1fr] gap-4 px-6 py-4 sm:grid-cols-[140px_1fr]">
                      <dt className="font-semibold">{k}</dt>
                      <dd className="text-muted-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
            <p className="mt-6 text-center text-muted-foreground">#GainsOnWheels</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
