import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="container-x flex items-center gap-6 h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo.url} alt="Noels Concrete LLC" className="h-11 w-11 rounded-full object-cover ring-1 ring-primary/40" />
          <div className="leading-tight whitespace-nowrap">
            <div className="font-display text-xl tracking-wider">NOELS CONCRETE</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground -mt-0.5">LLC · WOODSTOCK, GA</div>
          </div>
        </Link>
        <nav className="hidden lg:flex ml-auto items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="relative px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden md:inline-flex shrink-0 pill pill-solid ml-auto lg:ml-4">
          Free Quote
        </Link>
        <button onClick={() => setOpen(!open)} className="lg:hidden ml-auto text-foreground p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm uppercase tracking-[0.2em] font-bold text-foreground/80 hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 pill pill-solid justify-center">
              Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
