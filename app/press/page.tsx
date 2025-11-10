import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2, Download } from "lucide-react"

export default function PressPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Press & Media</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto text-balance leading-relaxed">
              Brand films, media assets, and press releases for Protein Fuel
            </p>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Brand Films</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Official Launch Film */}
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <video
                    controls
                    preload="none"
                    className="w-full h-full object-cover"
                    poster="/assets/images/hero_frame_fallback.jpg"
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food_Truck_Brand_Film_Generation-CiZ0wG1T4myglgi6VeG1PH70jDy7eu.mp4" type="video/mp4" />
                  </video>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Official Launch Film</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our cinematic brand story showcasing the Protein Fuel experience, food quality, and lifestyle
                    appeal.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Share2 size={16} />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Download size={16} />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Corporate Edition */}
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <video
                    controls
                    preload="none"
                    className="w-full h-full object-cover"
                    poster="/assets/images/hero_frame_fallback.jpg"
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Protein_Fuel_Brand_Film_Prompt-kdOpffAawyi6jLpnnXI2bW94GkFQoZ.mp4" type="video/mp4" />
                  </video>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Corporate Edition</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Targeted film for IT professionals and office workers, highlighting convenience and health benefits.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Share2 size={16} />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Download size={16} />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Press Kit */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Press Kit</h2>

              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">About Protein Fuel</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Protein Fuel is Pune's first mobile food truck dedicated to serving high-protein, nutritious
                        meals to busy professionals. Operating across Kharadi, Viman Nagar, and Kalyani Nagar, we bring
                        healthy eating directly to office campuses with our signature wraps, shakes, and waffles.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2">Key Facts</h3>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                        <li>35g+ protein per meal</li>
                        <li>100% fresh ingredients, no preservatives</li>
                        <li>Service in under 15 minutes</li>
                        <li>3 rotating locations across Pune tech hubs</li>
                        <li>Corporate tie-ups available</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2">Media Contact</h3>
                      <p className="text-muted-foreground">
                        Email: press@proteinfuel.in
                        <br />
                        Phone: +91 98765 43210
                      </p>
                    </div>

                    <div className="pt-4">
                      <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                        Download Full Press Kit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Follow Our Journey</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay updated with daily locations, new menu items, and behind-the-scenes content
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg">
                Instagram
              </Button>
              <Button variant="outline" size="lg">
                Twitter
              </Button>
              <Button variant="outline" size="lg">
                Facebook
              </Button>
            </div>
            <p className="mt-6 text-muted-foreground">#GainsOnWheels</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
