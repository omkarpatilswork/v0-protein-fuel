import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Leaf, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Our Story</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto text-balance leading-relaxed">
              A vision to make protein meals tasty, accessible, and convenient for busy professionals
            </p>
          </div>
        </section>

        {/* Launch Video */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-6">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/assets/images/hero_frame_fallback.jpg"
                >
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food_Truck_Brand_Film_Generation-CiZ0wG1T4myglgi6VeG1PH70jDy7eu.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-center text-muted-foreground text-lg">
                Our Journey Begins — A vision to make protein meals tasty & accessible
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why we exist</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We saw IT professionals struggling with unhealthy lunch options — either expensive, time-consuming, or
                nutritionally empty. So we built Protein Fuel to solve all three problems at once.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Target className="text-accent" size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Mission-Driven</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Making healthy eating accessible to every working professional
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="text-accent" size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Quality First</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fresh ingredients, no shortcuts, maximum nutrition
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="text-accent" size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Community</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Building a movement of health-conscious professionals
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-accent" size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Innovation</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Constantly improving our menu and service
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Office Focus Video */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-6">
                <video
                  controls
                  preload="none"
                  className="w-full h-full object-cover"
                  poster="/assets/images/hero_frame_fallback.jpg"
                >
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Protein_Fuel_Brand_Film_Prompt-kdOpffAawyi6jLpnnXI2bW94GkFQoZ.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-center text-muted-foreground text-lg">
                The Future of Office Food — We're redefining lunch breaks for IT professionals
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Built by food lovers, for professionals</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our team combines culinary expertise with a deep understanding of what busy professionals need. We're
                not just serving food — we're building a healthier work culture, one meal at a time.
              </p>
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img src="/food-truck-team-preparing-healthy-meals.jpg" alt="Protein Fuel Team" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
