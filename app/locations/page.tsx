import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TodayStop } from "@/components/today-stop"
import { RouteMap } from "@/components/route-map"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Calendar } from "lucide-react"
import { daysAt, serviceHours, stops } from "@/lib/schedule"

export const metadata: Metadata = {
  title: "Find us today",
  description: "Where the truck parks each weekday: Kharadi, Viman Nagar and Kalyani Nagar, 12:00 to 3:00 PM.",
}

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24">
        <section className="bg-primary py-16 text-primary-foreground sm:py-20">
          <div className="container mx-auto px-4 text-center">
            <MapPin size={48} className="mx-auto mb-6 text-accent" />
            <h1 className="mb-6 text-5xl font-bold text-balance md:text-6xl">Find Us Today</h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-balance text-primary-foreground/80">
              One truck, three IT hubs in east Pune, a different stop each weekday.
            </p>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-14 max-w-2xl">
              <TodayStop />
            </div>

            <h2 className="mb-10 text-center text-4xl font-bold">Weekly Schedule</h2>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              {Object.values(stops).map((stop) => (
                <Card key={stop.id} className="py-0">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <Calendar size={20} className="text-accent" />
                      <span className="font-semibold">{daysAt(stop.id).join(" & ")}</span>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{stop.area}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                        <span>{stop.spot}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                        <span>{serviceHours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">Sundays off.</p>
          </div>
        </section>

        <section className="bg-muted py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center text-4xl font-bold">The weekly loop</h2>
            <div className="mx-auto max-w-4xl">
              <RouteMap />
            </div>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold">Want the truck at your office park?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
              Protein Fuel is still an idea, and where it parks first depends on where people would actually queue. If your campus should be on the
              loop, say so.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="https://www.omkarpatil.in">Tell Omkar</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
