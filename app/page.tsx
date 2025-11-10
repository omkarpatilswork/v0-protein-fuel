import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { VideoHero } from "@/components/video-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Zap, Heart, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <VideoHero
          videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food_Truck_Brand_Film_Generation-CiZ0wG1T4myglgi6VeG1PH70jDy7eu.mp4"
          posterSrc="/assets/images/hero_frame_fallback.jpg"
          title="Gains on Wheels"
          subtitle="Healthy, tasty, protein-packed meals wherever you work"
        />

        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-4 px-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
            Order Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8"
          >
            <Link href="/locations" className="flex items-center gap-2">
              <MapPin size={20} />
              Find Today's Location
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">35g+</div>
              <div className="text-sm text-primary-foreground/70">Protein Per Meal</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">{"<"}15min</div>
              <div className="text-sm text-primary-foreground/70">Quick Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-primary-foreground/70">Fresh Ingredients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">3</div>
              <div className="text-sm text-primary-foreground/70">Pune Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Quick. Healthy. Protein-packed.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Every meal designed to fuel your workday without compromise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <img
                  src="/protein-wrap-with-grilled-chicken-and-fresh-vegeta.jpg"
                  alt="Protein Wraps"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Power Wraps</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Grilled chicken, paneer, or tofu with fresh veggies in whole wheat wraps
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">35-40g protein</span>
                  <span className="text-lg font-bold">₹180-220</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <img
                  src="/protein-shake-with-berries-and-banana.jpg"
                  alt="Protein Shakes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Fuel Shakes</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Whey or plant-based protein blended with fresh fruits and superfoods
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">30g protein</span>
                  <span className="text-lg font-bold">₹150-180</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <img
                  src="/protein-waffles-with-berries-and-syrup.jpg"
                  alt="Protein Waffles"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Protein Waffles</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Fluffy protein-packed waffles with Greek yogurt and fresh berries
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">25g protein</span>
                  <span className="text-lg font-bold">₹140-170</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Office Focus Section with Video */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <video
                controls
                preload="none"
                className="w-full h-full object-cover"
                poster="/assets/images/hero_frame_fallback.jpg"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Protein_Fuel_Brand_Film_Prompt-kdOpffAawyi6jLpnnXI2bW94GkFQoZ.mp4" type="video/mp4" />
              </video>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Smart food for smart people</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From code sprints to client calls — fuel your day with real protein. Catch our truck below your office.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Quick & Convenient</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Order ahead, grab in under 5 minutes. No lunch break wasted.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Actually Healthy</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      No compromises. High protein, low processed ingredients, maximum taste.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Built for Teams</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Corporate tie-ups available. Bring healthy eating to your entire office.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Watch Full Story →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Finder CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <MapPin size={48} className="mx-auto mb-6 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Find us today</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-balance">
            We rotate between Kharadi, Viman Nagar, and Kalyani Nagar. Check today's location and timing.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/locations" className="flex items-center gap-2">
              <Clock size={20} />
              View Today's Schedule
            </Link>
          </Button>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Fueling Pune's workdays</h2>
            <p className="text-xl text-muted-foreground">Join the movement. #GainsOnWheels</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-bold">Rahul K.</div>
                    <div className="text-sm text-muted-foreground">Software Engineer</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Finally, a lunch option that doesn't make me feel sluggish. The wraps are incredible!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Heart className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-bold">Priya M.</div>
                    <div className="text-sm text-muted-foreground">Product Manager</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Best protein shakes in Pune. Love that they come to our office campus!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Zap className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-bold">Arjun S.</div>
                    <div className="text-sm text-muted-foreground">Fitness Enthusiast</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Macro-friendly and delicious. Perfect for my cutting phase!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
