import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoHero } from "@/components/video-hero"
import { TodayStop } from "@/components/today-stop"
import { OrderNowButton } from "@/components/order/order-buttons"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Dumbbell, Laptop, MapPin, Presentation, Zap, Heart, Users } from "lucide-react"
import { categories, formatINR, itemById, itemsIn, menu, range } from "@/lib/menu"
import { serviceHours, stops } from "@/lib/schedule"

const FILM_LAUNCH =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food_Truck_Brand_Film_Generation-CiZ0wG1T4myglgi6VeG1PH70jDy7eu.mp4"
const FILM_CORPORATE =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Protein_Fuel_Brand_Film_Prompt-kdOpffAawyi6jLpnnXI2bW94GkFQoZ.mp4"

const personas = [
  {
    icon: Laptop,
    who: "The engineer mid-sprint",
    need: "Lunch in ten minutes, not forty, and no 3 PM slump.",
    pick: "chicken-power-wrap",
  },
  {
    icon: Presentation,
    who: "The PM between calls",
    need: "Something to grab on the way back up, that isn't another samosa.",
    pick: "chocolate-fuel",
  },
  {
    icon: Dumbbell,
    who: "The lifter on a cut",
    need: "Hit a protein target without a sad salad or a protein bar.",
    pick: "savory-special",
  },
]

export default function HomePage() {
  const proteinRange = range(menu.map((m) => m.protein))
  const priceRange = range(menu.map((m) => m.price))

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative h-screen min-h-[640px]">
        <VideoHero videoSrc={FILM_LAUNCH} posterSrc="/assets/images/hero_frame_fallback.jpg" />

        <div className="absolute right-0 bottom-0 left-0 flex flex-col items-center px-4 pb-10 sm:pb-14">
          <div className="mb-6 text-center sm:mb-8">
            <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-accent uppercase">Pune · IT parks · lunch</p>
            <h1 className="mb-3 text-5xl font-bold text-white sm:mb-4 sm:text-6xl md:text-7xl">Gains on Wheels</h1>
            <p className="px-2 text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
              Healthy, tasty, protein-packed meals that come to where you work
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col justify-center gap-3 px-4 sm:max-w-none sm:flex-row sm:gap-4">
            <OrderNowButton
              size="lg"
              className="h-12 w-full bg-accent px-8 text-base text-accent-foreground hover:bg-accent/90 sm:h-14 sm:w-auto sm:text-lg"
            >
              Build your order
            </OrderNowButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full border-white/30 bg-white/10 px-8 text-base text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:h-14 sm:w-auto sm:text-lg"
            >
              <Link href="/locations">
                <MapPin size={20} />
                Find today&apos;s stop
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <dl className="grid grid-cols-2 gap-6 text-center sm:gap-8 md:grid-cols-4">
            {[
              { value: `${proteinRange}g`, label: "Protein per item" },
              { value: `₹${priceRange}`, label: "Every item on the menu" },
              { value: `${Object.keys(stops).length}`, label: "IT parks on the weekly loop" },
              { value: "12–3", label: "Lunch window, PM" },
            ].map((stat) => (
              <div key={stat.label} className="py-2">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display mb-2 text-3xl font-bold text-accent sm:text-5xl">{stat.value}</dd>
                <dd className="text-sm font-medium text-primary-foreground/75 sm:text-base">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Product showcase */}
      <section className="bg-background py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-4xl leading-tight font-bold text-balance sm:mb-6 sm:text-5xl md:text-6xl">Quick. Healthy. Delicious.</h2>
            <p className="mx-auto max-w-3xl px-4 text-lg leading-relaxed text-balance text-muted-foreground sm:text-xl">
              Three things, done well. Every item lists its protein and calories, so you know what you&apos;re eating.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {categories.map((cat) => {
              const items = itemsIn(cat.id)
              return (
                <Link key={cat.id} href={`/menu#${cat.id}`} className="group">
                  <Card className="h-full overflow-hidden border-0 py-0 transition-all duration-300 hover:shadow-2xl">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6 sm:p-8">
                      <h3 className="mb-2 text-2xl font-bold sm:text-3xl">{cat.name}</h3>
                      <p className="mb-6 leading-relaxed text-muted-foreground">{cat.blurb}</p>
                      <div className="flex items-center justify-between border-t pt-4">
                        <span className="text-sm font-semibold text-accent">{range(items.map((i) => i.protein))}g protein</span>
                        <span className="text-xl font-bold text-foreground">₹{range(items.map((i) => i.price))}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="mt-8 text-center sm:mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/menu">See the full menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Office focus */}
      <section className="bg-muted py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl sm:rounded-2xl">
              <video controls preload="none" className="h-full w-full object-cover" poster="/assets/images/hero_frame_fallback.jpg">
                <source src={FILM_CORPORATE} type="video/mp4" />
              </video>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-balance sm:mb-6 sm:text-4xl md:text-5xl">Smart food for smart people</h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground sm:mb-8 sm:text-xl">
                From code sprints to client calls, fuel your day with real protein. The truck parks outside your office park at lunch.
              </p>

              <div className="mb-6 space-y-4 sm:mb-8">
                {[
                  { icon: Zap, title: "Order ahead, skip the queue", body: "Pre-order from your desk and pick up at your slot. No lunch break wasted." },
                  { icon: Heart, title: "Actually healthy", body: "High protein, minimally processed ingredients, and food that still tastes like a treat." },
                  { icon: Users, title: "Built for teams", body: "Pre-order for the whole pod in one go and pick it up together." },
                ].map((point) => (
                  <div key={point.title} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 sm:h-12 sm:w-12">
                      <point.icon className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-semibold sm:text-lg">{point.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{point.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
                <Link href="/press">Watch the brand films →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Find us today */}
      <section className="bg-primary py-12 text-primary-foreground sm:py-16 md:py-20">
        <div className="container mx-auto grid max-w-5xl items-center gap-8 px-4 md:grid-cols-2">
          <div>
            <MapPin size={40} className="mb-4 text-accent" />
            <h2 className="mb-4 text-3xl font-bold text-balance sm:text-4xl md:text-5xl">Find us today</h2>
            <p className="mb-6 text-base text-primary-foreground/75 sm:text-lg">
              The truck rotates between Kharadi, Viman Nagar and Kalyani Nagar, {serviceHours}, Monday to Saturday.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/locations">
                <Clock size={20} />
                See the weekly schedule
              </Link>
            </Button>
          </div>
          <TodayStop tone="dark" />
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-background py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl md:text-5xl">Who it&apos;s for</h2>
            <p className="text-lg text-muted-foreground sm:text-xl">Three lunch problems the truck is designed around.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {personas.map((p) => {
              const item = itemById(p.pick)
              return (
                <Card key={p.who} className="py-0">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <p.icon className="text-accent" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{p.who}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{p.need}</p>
                    <div className="mt-5 flex items-center gap-3 rounded-xl bg-muted p-3">
                      <Image src={item.image} alt="" width={48} height={48} className="h-12 w-12 rounded-lg object-cover" />
                      <div className="text-sm">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-accent">{item.protein}g protein</span> · {formatINR(item.price)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
