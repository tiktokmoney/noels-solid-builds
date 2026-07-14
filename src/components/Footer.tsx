import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-x py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Noels Concrete LLC" className="h-14 w-14 rounded-full object-cover ring-1 ring-primary/40" />
            <div>
              <div className="font-display text-2xl tracking-wider">NOELS CONCRETE LLC</div>
              <div className="text-xs tracking-[0.3em] text-accent">QUALITY WORK · SOLID FOUNDATION</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
            <span className="font-serif text-primary text-base">Owner-run</span> concrete work across Woodstock and North Atlanta. Built by hand, quoted honestly, and finished to last.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow">Sitemap</div>
          <ul className="mt-5 space-y-2 text-sm">
            {[
              { l: "Home", to: "/" as const },
              { l: "Services", to: "/services" as const },
              { l: "Gallery", to: "/gallery" as const },
              { l: "About", to: "/about" as const },
              { l: "Contact", to: "/contact" as const },
            ].map((i) => (
              <li key={i.l}><Link to={i.to} className="text-foreground/80 hover:text-primary flex items-center gap-1 group">{i.l} <ArrowUpRight className="size-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow">Reach Noel</div>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3"><Phone className="size-4 text-accent mt-0.5" /> <a href="tel:+16786298775" className="hover:text-primary">678-629-8775</a></li>
            <li className="flex items-start gap-3 break-all"><Mail className="size-4 text-accent mt-0.5" /> <a href="mailto:Noelmm97@gmail.com" className="hover:text-primary">Noelmm97@gmail.com</a></li>
            <li className="flex items-start gap-3"><MapPin className="size-4 text-accent mt-0.5" /> Woodstock, GA + Surrounding</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          <div>© {new Date().getFullYear()} Noels Concrete LLC</div>
          <div>Licensed · Insured · Woodstock, GA</div>
        </div>
      </div>
    </footer>
  );
}
