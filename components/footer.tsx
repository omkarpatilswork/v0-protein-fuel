import Link from "next/link"
import { Instagram, Twitter, Facebook, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">PF</span>
              </div>
              <span className="font-bold text-xl">Protein Fuel</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Gains on Wheels. Healthy, protein-packed meals for busy professionals.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/menu"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Find Us Today
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Press & Media
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Locations</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Kharadi, Pune</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Viman Nagar, Pune</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Kalyani Nagar, Pune</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow the Truck</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/70">#GainsOnWheels</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Protein Fuel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
