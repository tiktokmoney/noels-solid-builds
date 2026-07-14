import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Phone, Check } from "lucide-react";
import work3 from "@/assets/work3.asset.json";
import work8 from "@/assets/work8.asset.json";
import driveFinished from "@/assets/driveway-finished.jpg.asset.json";
import walkwayFinished from "@/assets/walkway-finished.jpg.asset.json";
import stampedFinished from "@/assets/stamped-finished.jpg.asset.json";
import slabFinished from "@/assets/slab-finished.jpg.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Driveways, Patios, Foundations | Noels Concrete LLC" },
      { name: "description", content: "Concrete services in Woodstock, GA: driveways, patios, retaining walls, stamped concrete, house foundations, and footings. Free on-site quotes." },
      { property: "og:title", content: "Concrete Services in Woodstock, GA — Noels Concrete LLC" },
      { property: "og:description", content: "Six concrete trades under one honest roof — driveways, patios, stamped concrete, retaining walls, foundations, and footings." },
      { property: "og:image", content: driveFinished.url },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { n: "01", title: "Driveways", img: driveFinished.url,
    blurb: "Fresh pours, tear-outs, and driveway expansions built to carry weight for decades.",
    details: ["Rebar / wire mesh reinforcement", "4″ – 6″ thickness spec'd to load", "Broom, smooth, or exposed finish", "Control joints cut clean"] },
  { n: "02", title: "Patios", img: walkwayFinished.url,
    blurb: "Backyard slabs, entertaining pads, and modern walkways finished the way you want.",
    details: ["Custom shapes & multi-level pours", "Broom, smooth, or stamped finishes", "Border details & inlays", "Sealed for weather & stains"] },
  { n: "03", title: "Retaining Walls", img: work8.url,
    blurb: "Structural walls that hold grade, manage runoff, and shape the yard the right way.",
    details: ["Poured & block construction", "Drainage & weep planning", "Backfill & compaction", "Cap options to match hardscape"] },
  { n: "04", title: "Stamped Concrete", img: stampedFinished.url,
    blurb: "Textured, color-matched finishes that read like natural stone, brick, or slate.",
    details: ["Slate, ashlar, brick & wood patterns", "Integral & release color", "Custom border patterns", "UV-stable sealer finish"] },
  { n: "05", title: "House Foundations", img: slabFinished.url,
    blurb: "Poured foundations engineered to sit flat, square, and true from day one.",
    details: ["Monolithic & stem-wall pours", "Rebar cages to spec", "Anchor bolts set on center", "Waterproofing prep"] },
  { n: "06", title: "Footings", img: work3.url,
    blurb: "Load-bearing footings for additions, decks, garages, and outbuildings.",
    details: ["Sized to load & soil", "Rebar-tied per code", "Frost-depth pours", "Inspection-ready forms"] },
];

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="relative border-b border-border grain-bg">
        <div className="container-x py-24 md:py-36 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="eyebrow">Services</div>
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.9]">
              Everything<br />
              <span className="font-serif text-accent">concrete</span> — done right.
            </h1>
          </div>
          <p className="md:col-span-4 text-lg text-muted-foreground leading-relaxed">
            Six years of hands-on residential concrete work. If it needs to be poured, formed, or finished, Noels Concrete handles it — with honest pricing and the owner on every job.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <article key={s.title} className="relative bg-card rounded-3xl overflow-hidden border border-border flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-4 left-4 size-12 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-lg">
                  {s.n}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="font-display text-4xl tracking-tight">{s.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.blurb}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 flex-1">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-1 grid place-items-center size-4 rounded-full bg-accent/20 text-accent shrink-0">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/85">{d}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 pill pill-ghost self-start">
                  Quote this service <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/60">
        <div className="container-x py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display text-4xl md:text-6xl">Ready to get <span className="font-serif text-accent">started</span>?</h2>
            <p className="mt-3 text-muted-foreground">Free on-site quotes across Woodstock and surrounding areas.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+16786298775" className="pill pill-solid"><Phone className="size-4" /> 678-629-8775</a>
            <Link to="/contact" className="pill pill-ghost">Request quote <ArrowUpRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
