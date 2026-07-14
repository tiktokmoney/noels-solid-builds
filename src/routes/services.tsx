import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Phone, Home as HomeIcon, Layers, Mountain, Grid3x3, Building2, Hammer, Check } from "lucide-react";
import work2 from "@/assets/work2.asset.json";
import work3 from "@/assets/work3.asset.json";
import work4 from "@/assets/work4.asset.json";
import work5 from "@/assets/work5.asset.json";
import work7 from "@/assets/work7.asset.json";
import work8 from "@/assets/work8.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Driveways, Patios, Foundations | Noels Concrete LLC" },
      { name: "description", content: "Concrete services in Woodstock, GA: driveways, patios, retaining walls, stamped concrete, house foundations, and footings. Free on-site quotes." },
      { property: "og:title", content: "Concrete Services in Woodstock, GA — Noels Concrete LLC" },
      { property: "og:description", content: "Six concrete trades under one honest roof. Driveways, patios, stamped concrete, retaining walls, foundations, and footings." },
      { property: "og:image", content: work4.url },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: HomeIcon, title: "Driveways", img: work4.url,
    blurb: "Fresh pours, tear-outs, and driveway expansions built to carry weight for decades.",
    details: ["Rebar / wire mesh reinforcement", "4\"–6\" thickness spec'd to load", "Broom, smooth, or exposed finish", "Control joints cut clean"],
  },
  {
    icon: Layers, title: "Patios", img: work5.url,
    blurb: "Backyard slabs, entertaining pads, and modern walkways finished the way you want.",
    details: ["Custom shapes & multi-level pours", "Broom, smooth, or stamped finishes", "Border details & inlays", "Sealed for weather & stains"],
  },
  {
    icon: Mountain, title: "Retaining Walls", img: work8.url,
    blurb: "Structural walls that hold grade, manage runoff, and shape your yard the right way.",
    details: ["Poured & block construction", "Drainage & weep planning", "Backfill & compaction", "Cap options to match hardscape"],
  },
  {
    icon: Grid3x3, title: "Stamped Concrete", img: work7.url,
    blurb: "Textured, color-matched finishes that read like natural stone, brick, or slate.",
    details: ["Slate, ashlar, brick & wood patterns", "Integral & release color", "Custom border patterns", "UV-stable sealer finish"],
  },
  {
    icon: Building2, title: "House Foundations", img: work2.url,
    blurb: "Poured foundations engineered to sit flat, square, and true from day one.",
    details: ["Monolithic & stem-wall pours", "Rebar cages to spec", "Anchor bolts set on center", "Waterproofing prep"],
  },
  {
    icon: Hammer, title: "Footings", img: work3.url,
    blurb: "Load-bearing footings for additions, decks, garages, and outbuildings.",
    details: ["Sized to load & soil", "Rebar-tied per code", "Frost-depth pours", "Inspection-ready forms"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="relative border-b border-border overflow-hidden">
        <img src={work4.url} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="container-x relative py-20 md:py-32">
          <div className="section-eyebrow">Services</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            Everything <span className="text-primary">concrete</span> —<br />done right.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Six years of hands-on residential concrete work. If it needs to be poured, formed, or finished, Noels Concrete handles it — with honest pricing and an owner on every job.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x space-y-16 md:space-y-24">
          {services.map((s, i) => (
            <article key={s.title} className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? "lg:[&>figure]:order-2" : ""}`}>
              <figure className="lg:col-span-6 relative overflow-hidden aspect-[5/4]">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest">
                  0{i + 1}
                </div>
              </figure>
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3">
                  <s.icon className="size-6 text-primary" />
                  <h2 className="font-display text-4xl md:text-5xl tracking-wide">{s.title}</h2>
                </div>
                <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{s.blurb}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 grid place-items-center size-4 bg-primary text-primary-foreground shrink-0">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/85">{d}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary hover:gap-3 transition-all border-b border-primary pb-1">
                  Quote this service <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-x py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display text-3xl md:text-5xl">Ready to get started?</h2>
            <p className="mt-2 text-muted-foreground">Free on-site quotes across Woodstock and surrounding areas.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+16786298775" className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold px-7 py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors">
              <Phone className="size-4" /> 678-629-8775
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-primary text-primary font-semibold px-7 py-4 text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors">
              Request Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
