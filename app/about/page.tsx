import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Beef, Clock, HelpCircle, IndianRupee, MapPinned, Utensils } from "lucide-react"

export const metadata: Metadata = {
  title: "The idea",
  description: "Why Protein Fuel exists, what it bets on, and what still needs proving.",
}

const FILM_LAUNCH =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food_Truck_Brand_Film_Generation-CiZ0wG1T4myglgi6VeG1PH70jDy7eu.mp4"

const bets = [
  { icon: Beef, title: "Protein first", body: "Every item is built around 25–40g of protein, and the number is printed on the menu." },
  { icon: Utensils, title: "Tasty, not virtuous", body: "Wraps, shakes and waffles: food people already want, rebuilt to be good for them." },
  { icon: MapPinned, title: "Go to the crowd", body: "A truck can follow lunch demand across IT parks instead of waiting for it in one spot." },
  { icon: Clock, title: "Pre-order to beat the rush", body: "Orders placed from the desk turn a 20-minute queue into a 2-minute pickup." },
]

const questions = [
  { icon: IndianRupee, q: "Will people pay ₹140–220 for lunch from a truck?", how: "A few pop-up days at one park, with the real menu and real prices." },
  { icon: MapPinned, q: "Which park has the strongest lunch demand?", how: "Count footfall and pre-orders at each stop before fixing the route." },
  { icon: Clock, q: "Can one truck serve the 1 PM rush fast enough?", how: "Time every order in a trial service and see where the queue breaks." },
  { icon: HelpCircle, q: "Do people come back, or try it once?", how: "Track repeat visits per person across the first few weeks." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24">
        <section className="bg-primary py-16 text-primary-foreground sm:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-5xl font-bold text-balance md:text-6xl">The idea</h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-balance text-primary-foreground/80">
              Make high-protein food tasty, quick and close to where people work. Protein Fuel is a concept: this site is the pitch.
            </p>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <div className="container mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">The lunch problem</h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  In Pune&apos;s IT parks, the lunch choices are usually fast and heavy, healthy and bland, or good and forty minutes away. People who
                  train, or just want to stay sharp in the afternoon, end up with a protein bar at their desk.
                </p>
                <p>
                  Protein Fuel is a food truck that parks at a different IT park each weekday and serves three things: wraps, shakes and waffles, each
                  with its protein and calories printed on the menu.
                </p>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <video autoPlay muted loop playsInline className="h-full w-full object-cover" poster="/assets/images/hero_frame_fallback.jpg">
                <source src={FILM_LAUNCH} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl">What it bets on</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {bets.map((b) => (
                <Card key={b.title} className="py-0">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <b.icon className="text-accent" size={30} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{b.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">What still needs proving</h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-muted-foreground">
              Nothing is open yet. These are the questions a first trial would have to answer.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {questions.map((item) => (
                <div key={item.q} className="flex gap-4 rounded-2xl border p-5">
                  <item.icon className="mt-1 shrink-0 text-accent" size={22} />
                  <div>
                    <p className="font-semibold">{item.q}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.how}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 sm:py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">How the truck could look</h2>
            <p className="mb-8 text-lg text-muted-foreground">Concept art for the truck and the service window.</p>
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image src="/food-truck-team-preparing-healthy-meals.jpg" alt="Concept art of the Protein Fuel truck with staff preparing meals" fill sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
