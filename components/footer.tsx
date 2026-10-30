import Link from "next/link"
import { MapPin } from "lucide-react"
import { stops, daysAt } from "@/lib/schedule"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                <span className="font-display text-lg font-bold text-accent-foreground">PF</span>
              </div>
              <span className="font-display text-xl font-bold">Protein Fuel</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Gains on Wheels. A food-truck concept for high-protein lunches that taste like a treat.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Explore</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/menu", label: "Menu & macros" },
                { href: "/locations", label: "Find us today" },
                { href: "/about", label: "The idea" },
                { href: "/press", label: "Brand films" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Weekly route</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {Object.values(stops).map((stop) => (
                <li key={stop.id} className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>
                    {stop.area} · {daysAt(stop.id).join(" & ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Behind the truck</h3>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              A concept by{" "}
              <a href="https://www.omkarpatil.in" className="font-semibold text-primary-foreground underline-offset-4 hover:underline">
                Omkar Patil
              </a>
              . Not open yet: no orders are taken and nothing is charged.
            </p>
            <a
              href="https://github.com/omkarpatilswork/v0-protein-fuel"
              className="mt-3 inline-block text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              How it&apos;s built →
            </a>
            <p className="mt-3 text-sm text-primary-foreground/70">#GainsOnWheels</p>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Protein Fuel · a concept brand</p>
        </div>
      </div>
    </footer>
  )
}
