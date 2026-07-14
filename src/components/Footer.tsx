import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import logo from "@/assets/logo.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-x py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Noels Concrete LLC" className="h-14 w-auto object-contain" />
            <div>
              <div className="font-display text-2xl tracking-wider">NOELS CONCRETE LLC</div>
              <div className="text-xs tracking-[0.25em] text-primary">DRIVEWAYS · PATIOS · FOUNDATIONS</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
            Woodstock's honest concrete contractor. Owner-run, hands-on, and built on the belief that the work speaks louder than the pitch.
          </p>
        </div>
        <div>
          <div className="section-eyebrow">Contact</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3"><Phone className="size-4 text-primary mt-0.5" /> 678-629-8775</li>
            <li className="flex items-start gap-3"><MapPin className="size-4 text-primary mt-0.5" /> Woodstock, GA</li>
            <li className="flex items-start gap-3"><Clock className="size-4 text-primary mt-0.5" /> Mon–Sat · 8 AM – 6 PM</li>
            <li className="flex items-start gap-3 break-all"><Mail className="size-4 text-primary mt-0.5" /> Noelmm97@gmail.com</li>
          </ul>
        </div>
        <div>
          <div className="section-eyebrow">Service Area</div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Woodstock · Canton · Marietta · Kennesaw · Acworth · Roswell · Alpharetta · Greater North Atlanta
          </p>
          <div className="mt-5 flex flex-col gap-1 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-primary">Services</Link>
            <Link to="/gallery" className="hover:text-primary">Gallery</Link>
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Noels Concrete LLC. All rights reserved.</div>
          <div className="tracking-widest">LICENSED · INSURED · WOODSTOCK, GA</div>
        </div>
      </div>
    </footer>
  );
}
