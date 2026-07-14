import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.asset.json";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="w-full px-6 lg:px-10 flex items-center gap-6 h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo.url} alt="Noels Concrete LLC" className="h-12 w-auto object-contain" />
          <div className="leading-tight whitespace-nowrap hidden sm:block">
            <div className="font-display text-lg tracking-wider">NOELS CONCRETE</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground">QUALITY WORK · SOLID FOUNDATION</div>
          </div>
        </Link>
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-1 xl:gap-2">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="px-3 py-2 text-[12px] xl:text-[13px] font-semibold uppercase tracking-[0.15em] text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a href="tel:+16786298775" className="hidden md:inline-flex shrink-0 items-center gap-2 bg-primary text-primary-foreground font-semibold px-4 py-2.5 text-sm tracking-wide hover:bg-primary/90 transition-colors whitespace-nowrap">
          <Phone className="size-4" /> 678-629-8775
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden ml-auto text-foreground p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm uppercase tracking-wider text-foreground/80 hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:+16786298775" className="mt-3 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-4 py-3 text-sm">
              <Phone className="size-4" /> 678-629-8775
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
