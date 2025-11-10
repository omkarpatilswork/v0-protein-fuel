import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function MenuPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Our Menu</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto text-balance leading-relaxed">
              Every item crafted for maximum protein, minimum compromise
            </p>
          </div>
        </section>

        {/* Power Wraps */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Power Wraps</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5">
                  <img
                    src="/chicken-wrap.jpg"
                    alt="Chicken Power Wrap"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">Chicken Power Wrap</h3>
                    <Badge className="bg-accent text-accent-foreground">40g</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Grilled chicken breast, mixed greens, tomatoes, cucumber, whole wheat wrap with protein mayo
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">₹220</span>
                    <span className="text-sm text-muted-foreground">450 cal</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5">
                  <img
                    src="/paneer-tikka-wrap-with-vegetables.jpg"
                    alt="Paneer Tikka Wrap"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">Paneer Tikka Wrap</h3>
                    <Badge className="bg-accent text-accent-foreground">35g</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Tandoori paneer, bell peppers, onions, mint chutney, whole wheat wrap
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">₹200</span>
                    <span className="text-sm text-muted-foreground">420 cal</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5">
                  <img
                    src="/tofu-wrap-with-vegetables.jpg"
                    alt="Tofu Delight Wrap"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">Tofu Delight Wrap</h3>
                    <Badge className="bg-accent text-accent-foreground">32g</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Marinated tofu, avocado, sprouts, hummus, multigrain wrap
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">₹180</span>
                    <span className="text-sm text-muted-foreground">380 cal</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fuel Shakes */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Fuel Shakes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5">
                  <img src="/chocolate-protein-shake.jpg" alt="Chocolate Fuel" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">Chocolate Fuel</h3>
                    <Badge className="bg-accent text-accent-foreground">30g</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Whey protein, banana, cocoa, almond milk, dates
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">₹180</span>
                    <span className="text-sm text-muted-foreground">320 cal</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5">
                  <img src="/berry-protein-shake.png" alt="Berry Blast" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">Berry Blast</h3>
                    <Badge className="bg-accent text-accent-foreground">28g</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Mixed berries, whey protein, Greek yogurt, honey
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">₹170</span>
                    <span className="text-sm text-muted-foreground">290 cal</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5">
                  <img src="/green-protein-smoothie.png" alt="Green Machine" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">Green Machine</h3>
                    <Badge className="bg-accent text-accent-foreground">25g</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Spinach, pea protein, mango, chia seeds, coconut water
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">₹150</span>
                    <span className="text-sm text-muted-foreground">260 cal</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Protein Waffles */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Protein Waffles</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5">
                  <img
                    src="/protein-waffle-with-berries.jpg"
                    alt="Classic Berry Waffle"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">Classic Berry Waffle</h3>
                    <Badge className="bg-accent text-accent-foreground">25g</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Protein waffle, Greek yogurt, mixed berries, honey drizzle
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">₹170</span>
                    <span className="text-sm text-muted-foreground">350 cal</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5">
                  <img
                    src="/chocolate-protein-waffle.jpg"
                    alt="Chocolate Dream Waffle"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">Chocolate Dream</h3>
                    <Badge className="bg-accent text-accent-foreground">27g</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Chocolate protein waffle, peanut butter, banana slices
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">₹160</span>
                    <span className="text-sm text-muted-foreground">380 cal</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5">
                  <img
                    src="/savory-protein-waffle.jpg"
                    alt="Savory Protein Waffle"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">Savory Special</h3>
                    <Badge className="bg-accent text-accent-foreground">28g</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Protein waffle, scrambled eggs, avocado, cherry tomatoes
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">₹140</span>
                    <span className="text-sm text-muted-foreground">340 cal</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
