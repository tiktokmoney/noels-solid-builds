import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Phone, Mail, MapPin, Check } from "lucide-react";

import logo from "@/assets/logo.asset.json";
import work1 from "@/assets/work1.asset.json";
import work2 from "@/assets/work2.asset.json";
import work3 from "@/assets/work3.asset.json";
import work4 from "@/assets/work4.asset.json";
import work5 from "@/assets/work5.asset.json";
import work6 from "@/assets/work6.asset.json";
import work7 from "@/assets/work7.asset.json";
import work8 from "@/assets/work8.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "678-629-8775";
const PHONE_HREF = "tel:+16786298775";
const EMAIL = "Noelmm97@gmail.com";

const services = [
  { n: "01", title: "Driveways", desc: "Fresh pours, tear-outs, and expansions built to carry weight for decades." },
  { n: "02", title: "Patios", desc: "Backyard slabs, entertaining pads, and modern paver-style walkways." },
  { n: "03", title: "Retaining Walls", desc: "Structural walls that hold grade, manage runoff, and shape your yard." },
  { n: "04", title: "Stamped Concrete", desc: "Textured, colored finishes that read like stone, brick, or slate." },
  { n: "05", title: "House Foundations", desc: "Poured foundations engineered to sit flat, square, and true." },
  { n: "06", title: "Footings", desc: "Load-bearing footings for additions, decks, garages, and outbuildings." },
];

const gallery = [
  { src: work5.url, label: "Modern Slab Walkway", tag: "After" },
  { src: work7.url, label: "Landscape Pathway", tag: "After" },
  { src: work8.url, label: "Slate & Slab Patio", tag: "After" },
  { src: work3.url, label: "Side-Yard Walkway", tag: "In Progress" },
  { src: work4.url, label: "Poured & Forming", tag: "In Progress" },
  { src: work6.url, label: "Pool Access Path", tag: "In Progress" },
  { src: work2.url, label: "Framed & Ready", tag: "Before" },
  { src: work1.url, label: "Screeding the Pour", tag: "Crew" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="Noels Concrete LLC" className="h-10 w-auto md:h-12" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-widest md:flex">
            <a href="#services" className="hover:text-accent-foreground/70">Services</a>
            <a href="#work" className="hover:text-accent-foreground/70">Work</a>
            <a href="#about" className="hover:text-accent-foreground/70">About</a>
            <a href="#contact" className="hover:text-accent-foreground/70">Contact</a>
          </nav>
          <a href={PHONE_HREF} className="hidden items-center gap-2 bg-foreground px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-background transition hover:bg-concrete-dark md:inline-flex">
            <Phone className="h-3.5 w-3.5" /> {PHONE}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden border-b border-foreground/10">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-14 pb-20 md:grid-cols-12 md:px-8 md:pt-24 md:pb-28">
          <div className="relative z-10 md:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 border border-foreground/20 bg-background/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 bg-foreground" /> Woodstock, GA · Free On-Site Quotes
            </div>
            <h1 className="text-[13vw] leading-[0.85] md:text-[8.5rem]">
              Quality Work.
              <br />
              <span className="text-stroke">Solid</span> Foundation.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Six years of hands-on concrete craftsmanship. Driveways, patios, retaining walls,
              stamped concrete, foundations, and footings — poured right the first time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 bg-foreground px-6 py-4 text-sm font-bold uppercase tracking-widest text-background transition hover:bg-concrete-dark">
                Request Free Quote <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 border border-foreground px-6 py-4 text-sm font-bold uppercase tracking-widest transition hover:bg-foreground hover:text-background">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-foreground/15 pt-8">
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Experience</dt>
                <dd className="mt-1 font-display text-4xl">6+ YRS</dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Services</dt>
                <dd className="mt-1 font-display text-4xl">06</dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Quotes</dt>
                <dd className="mt-1 font-display text-4xl">FREE</dd>
              </div>
            </dl>
          </div>

          <div className="relative md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-foreground/15 bg-muted">
              <img src={work5.url} alt="Finished modern slab walkway with slate gravel" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="bg-background px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest">Featured Build</div>
                <div className="bg-foreground px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-background">Woodstock, GA</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden aspect-square w-40 overflow-hidden border border-foreground/15 md:block">
              <img src={work8.url} alt="Slate patio detail" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-foreground/10 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">/ Services</div>
              <h2 className="mt-3 text-5xl md:text-7xl">Everything concrete — done right.</h2>
            </div>
            <p className="text-muted-foreground md:col-span-4 md:text-right">
              Residential concrete work built for the long haul. If it needs to be poured, formed, or finished, we handle it.
            </p>
          </div>

          <div className="mt-14 grid gap-0 border-t border-foreground/15 md:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.n}
                className={`group relative border-foreground/15 p-8 transition hover:bg-foreground hover:text-background md:border-b md:p-10 ${
                  i % 3 !== 2 ? "md:border-r" : ""
                } ${i < 3 ? "" : ""} border-b`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-2xl text-muted-foreground group-hover:text-background/60">{s.n}</span>
                  <ArrowUpRight className="h-5 w-5 opacity-0 transition group-hover:opacity-100" />
                </div>
                <h3 className="mt-8 text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-background/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-b border-foreground/10 bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">/ Recent Work</div>
              <h2 className="mt-3 text-5xl md:text-7xl">From forms to finish.</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              A look at recent patio and walkway projects — from framed prep and pour day through the finished install.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {gallery.map((g, i) => (
              <figure
                key={g.src}
                className={`group relative overflow-hidden border border-foreground/15 bg-muted ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
                }`}
              >
                <img src={g.src} alt={g.label} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-foreground/85 to-transparent p-3 text-background md:p-4">
                  <span className="text-xs font-medium uppercase tracking-widest">{g.label}</span>
                  <span className="bg-background px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-foreground">{g.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-foreground/10 bg-concrete-dark text-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-5">
            <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-background/60">/ About</div>
            <h2 className="mt-3 text-5xl md:text-6xl">Hi, I'm Noel.</h2>
            <div className="mt-8 aspect-[4/3] overflow-hidden border border-background/15">
              <img src={work1.url} alt="Noel and crew finishing a driveway pour" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-background/85 md:col-span-7 md:pt-14">
            <p>
              I'm the owner of Noels Concrete LLC. I started this company with one simple goal:
              to provide high-quality concrete work with honest pricing, dependable service, and
              results that last.
            </p>
            <p>
              Every project deserves attention to detail — whether it's a new driveway, patio,
              sidewalk, slab, or foundation. I take pride in treating every customer's property
              with respect and making sure the job is done right the first time.
            </p>
            <p>
              When you choose us, you can expect quality craftsmanship, honest recommendations,
              and a commitment to your satisfaction from start to finish. Thank you for
              considering us for your next project — I look forward to earning your trust and
              helping bring your vision to life.
            </p>

            <ul className="mt-8 grid gap-3 border-t border-background/20 pt-8 sm:grid-cols-2">
              {[
                "6+ years hands-on experience",
                "Honest, upfront pricing",
                "Free on-site quotes",
                "Owner on every job",
                "Woodstock & surrounding areas",
                "Built to last — done right the first time",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center bg-background text-concrete-dark">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-background/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">/ Get a Quote</div>
              <h2 className="mt-3 text-6xl md:text-8xl">
                Let's pour
                <br />
                <span className="text-stroke">something</span>
                <br />
                that lasts.
              </h2>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                Free on-site quotes across Woodstock and surrounding areas. Call, text, or email —
                Noel will get back to you personally.
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="divide-y divide-foreground/15 border border-foreground/15">
                <a href={PHONE_HREF} className="group flex items-center justify-between gap-6 p-6 transition hover:bg-foreground hover:text-background md:p-8">
                  <div className="flex items-center gap-5">
                    <Phone className="h-6 w-6" />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-background/60">Call or Text</div>
                      <div className="mt-1 font-display text-3xl md:text-4xl">{PHONE}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-6 w-6" />
                </a>
                <a href={`mailto:${EMAIL}`} className="group flex items-center justify-between gap-6 p-6 transition hover:bg-foreground hover:text-background md:p-8">
                  <div className="flex items-center gap-5">
                    <Mail className="h-6 w-6" />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-background/60">Email</div>
                      <div className="mt-1 break-all font-display text-2xl md:text-3xl">{EMAIL}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-6 w-6 flex-none" />
                </a>
                <div className="flex items-center gap-5 p-6 md:p-8">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Service Area</div>
                    <div className="mt-1 font-display text-2xl md:text-3xl">Woodstock, GA + Surrounding</div>
                  </div>
                </div>
              </div>

              <a href={PHONE_HREF} className="mt-6 flex w-full items-center justify-center gap-2 bg-foreground px-6 py-5 text-sm font-bold uppercase tracking-widest text-background transition hover:bg-concrete-dark">
                Book Your Free On-Site Quote <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-foreground/10 bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:px-8">
          <div className="flex items-center gap-4">
            <img src={logo.url} alt="Noels Concrete LLC" className="h-10 w-auto invert" />
            <div className="text-[11px] font-bold uppercase tracking-widest text-background/70">
              Quality Work · Solid Foundation
            </div>
          </div>
          <div className="text-xs uppercase tracking-widest text-background/60">
            © {new Date().getFullYear()} Noels Concrete LLC · Licensed & Insured · Woodstock, GA
          </div>
        </div>
      </footer>
    </div>
  );
}
