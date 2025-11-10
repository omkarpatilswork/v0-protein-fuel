import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Calendar } from "lucide-react"

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <MapPin size={48} className="mx-auto mb-6 text-accent" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Find Us Today</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto text-balance leading-relaxed">
              We rotate between three prime IT hubs in Pune. Check today's location below.
            </p>
          </div>
        </section>

        {/* Today's Location */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto mb-12">
              <Card className="border-accent border-2">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-accent text-accent-foreground">Today</Badge>
                    <span className="text-muted-foreground">Thursday, October 30</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Kharadi - EON IT Park</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-accent" />
                      <span>Near Gate 2, EON IT Park, Kharadi</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={20} className="text-accent" />
                      <span>12:00 PM - 3:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-4xl font-bold mb-12 text-center">Weekly Schedule</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Monday & Thursday - Kharadi */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={20} className="text-accent" />
                    <span className="font-semibold">Mon & Thu</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Kharadi</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                      <span>EON IT Park, Near Gate 2</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                      <span>12:00 PM - 3:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tuesday & Friday - Viman Nagar */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={20} className="text-accent" />
                    <span className="font-semibold">Tue & Fri</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Viman Nagar</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                      <span>Zensar IT Park, Main Entrance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                      <span>12:00 PM - 3:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Wednesday & Saturday - Kalyani Nagar */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={20} className="text-accent" />
                    <span className="font-semibold">Wed & Sat</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Kalyani Nagar</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                      <span>Cerebrum IT Park, Food Court Area</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                      <span>12:00 PM - 3:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Coverage Area</h2>
            <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
              <img
                src="/map-of-pune-showing-kharadi-viman-nagar-kalyani-na.jpg"
                alt="Protein Fuel Coverage Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Corporate Tie-ups CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Want us at your office?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We offer corporate tie-ups for regular visits to your office campus. Bring healthy eating to your entire
              team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:corporate@proteinfuel.in" className="inline-block">
                <button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-3 rounded-lg font-semibold">
                  Contact for Corporate Tie-ups
                </button>
              </a>
              <a href="tel:+919876543210" className="inline-block">
                <button className="border border-border hover:bg-muted px-8 py-3 rounded-lg font-semibold">
                  Call: +91 98765 43210
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
