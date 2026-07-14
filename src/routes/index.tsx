import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import {
  ArrowRight, Star, Phone, Hammer, Layers, Mountain, Building2,
  ShieldCheck, Award, MapPin, Home as HomeIcon, Grid3x3,
} from "lucide-react";

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
  head: () => ({
    meta: [
      { title: "Noels Concrete LLC — Concrete Contractor in Woodstock, GA" },
      { name: "description", content: "Family-run concrete contractor in Woodstock, GA. Driveways, patios, retaining walls, stamped concrete, foundations & footings. 6+ years experience. Free on-site quotes." },
      { property: "og:title", content: "Noels Concrete LLC — Woodstock, GA Concrete Contractor" },
      { property: "og:description", content: "Driveways, patios, stamped concrete, retaining walls & foundations. Owner-run crew serving Woodstock and surrounding areas." },
      { property: "og:image", content: work5.url },
      { name: "twitter:image", content: work5.url },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: HomeIcon, title: "Driveways", blurb: "Fresh pours, tear-outs, and expansions built flat, square, and ready to carry weight for decades.", img: work4.url, alt: "Concrete driveway pour", cta: "Driveway details" },
  { icon: Layers, title: "Patios", blurb: "Backyard slabs, entertaining pads, and modern walkways finished the way you want them.", img: work5.url, alt: "Finished concrete patio walkway", cta: "Patio details" },
  { icon: Mountain, title: "Retaining Walls", blurb: "Structural walls that hold grade, manage runoff, and shape the yard around them.", img: work8.url, alt: "Retaining wall with slate detail", cta: "Retaining walls" },
  { icon: Grid3x3, title: "Stamped Concrete", blurb: "Textured, color-matched finishes that read like stone, brick, or slate — sealed to last.", img: work7.url, alt: "Stamped concrete finish", cta: "Stamped options" },
  { icon: Building2, title: "House Foundations", blurb: "Poured foundations engineered to sit flat, square, and true — from day one.", img: work2.url, alt: "Framed foundation ready to pour", cta: "Foundation work" },
  { icon: Hammer, title: "Footings", blurb: "Load-bearing footings for additions, decks, garages, and outbuildings. Poured to spec.", img: work3.url, alt: "Poured concrete footings", cta: "Footings" },
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={work5.url} alt="" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        <div className="container-x relative py-20 sm:py-28 md:py-40 lg:py-48">
          <div className="max-w-3xl">
            <div className="section-eyebrow">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Woodstock, GA · Concrete Contractor
            </div>
            <h1 className="mt-6 font-display text-5xl xs:text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight break-words">
              Quality work.<br />
              <span className="text-primary">Solid</span> foundation.
            </h1>
            <p className="mt-7 text-lg text-foreground/80 max-w-xl leading-relaxed">
              Six years of hands-on concrete craftsmanship. Driveways, patios, retaining walls, stamped concrete, foundations, and footings — poured right the first time.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold px-7 py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors">
                <Phone className="size-4" /> Get a Free Quote
              </Link>
              <Link to="/gallery" className="inline-flex items-center gap-2 text-foreground font-semibold px-2 py-4 text-sm tracking-wider uppercase border-b border-primary hover:gap-3 transition-all">
                See the work <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[0,1,2,3,4].map(i => <Star key={i} className="size-4 fill-primary text-primary" />)}
                </div>
                <span className="text-sm"><span className="font-bold">Trusted</span> <span className="text-muted-foreground">· Owner on every job</span></span>
              </div>
              <div className="text-sm flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> Licensed & Insured</div>
              <div className="text-sm flex items-center gap-2"><Award className="size-4 text-primary" /> 6+ Years Experience</div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-border bg-background/80 backdrop-blur">
          <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { n: "6+", l: "Years Pouring" },
              { n: "06", l: "Services" },
              { n: "FREE", l: "On-Site Quotes" },
              { n: "100%", l: "Owner Run" },
            ].map((s) => (
              <div key={s.l} className="py-5 md:py-7 px-3 md:px-4 text-center">
                <div className="font-display text-3xl md:text-5xl text-primary">{s.n}</div>
                <div className="text-[10px] md:text-[11px] mt-1 tracking-[0.2em] uppercase text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="section-eyebrow">What we build</div>
              <h2 className="mt-3 font-display text-4xl md:text-6xl leading-tight max-w-xl">Six trades. One crew. Zero shortcuts.</h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              From a clean driveway pour to a full backyard transformation — every job starts with the same forms, the same standards, and the same owner on-site.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <div key={s.title} className="group relative bg-card overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.alt} className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3">
                    <s.icon className="size-5 text-primary" />
                    <h3 className="font-display text-2xl tracking-wide">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:gap-3 transition-all">
                    {s.cta} <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK SHOWCASE */}
      <section className="py-24 md:py-32 bg-card border-y border-border">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <div className="section-eyebrow justify-center">Recent pours</div>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">The work speaks first.</h2>
            <p className="mt-5 text-muted-foreground">A few jobs from around Woodstock and North Atlanta — before, during, and after the pour.</p>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-4 md:gap-5">
            <figure className="col-span-12 md:col-span-8 relative overflow-hidden group aspect-[16/10]">
              <img src={work5.url} alt="Finished slab walkway with slate gravel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background via-background/70 to-transparent">
                <div className="text-xs tracking-[0.2em] uppercase text-primary">Patio · Walkway</div>
                <div className="font-display text-2xl">Modern Slab Walkway</div>
              </figcaption>
            </figure>
            <figure className="col-span-6 md:col-span-4 relative overflow-hidden group aspect-[4/5]">
              <img src={work7.url} alt="Landscape pathway with pavers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-background via-background/70 to-transparent">
                <div className="text-xs tracking-[0.2em] uppercase text-primary">Pathway</div>
                <div className="font-display text-xl">Landscape Path</div>
              </figcaption>
            </figure>
            <figure className="col-span-6 md:col-span-4 relative overflow-hidden group aspect-[4/5]">
              <img src={work3.url} alt="Side-yard walkway in progress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-background via-background/70 to-transparent">
                <div className="text-xs tracking-[0.2em] uppercase text-primary">In Progress</div>
                <div className="font-display text-xl">Side-Yard Walkway</div>
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-8 relative overflow-hidden group aspect-[16/10]">
              <img src={work1.url} alt="Screeding the pour on a driveway" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background via-background/70 to-transparent">
                <div className="text-xs tracking-[0.2em] uppercase text-primary">On the jobsite</div>
                <div className="font-display text-2xl">Screeding the Pour</div>
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-4 relative overflow-hidden group aspect-[4/5]">
              <img src={work8.url} alt="Slate and slab patio detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <figcaption className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-background via-background/70 to-transparent">
                <div className="text-xs tracking-[0.2em] uppercase text-primary">Detail</div>
                <div className="font-display text-xl">Slate & Slab</div>
              </figcaption>
            </figure>
          </div>

          <div className="mt-10 text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary hover:gap-3 transition-all border-b border-primary pb-1">
              See the full gallery <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="section-eyebrow">How we work</div>
              <h2 className="mt-3 font-display text-4xl md:text-6xl leading-tight">Four steps from quote to cured.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                No mystery, no markup games. You'll know what we're pouring, how thick, and when it'll be ready to walk on — before we ever fire up the mixer.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold px-7 py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors">
                <Phone className="size-4" /> Start Your Quote
              </Link>
            </div>
            <ol className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border border border-border">
              {[
                { n: "01", t: "On-Site Walkthrough", d: "We come out, measure, and listen. Free quotes — every one built on what your site actually needs." },
                { n: "02", t: "Plan + Pricing", d: "Scope, thickness, reinforcement, finish. Flat number. Honest recommendations, no upsell." },
                { n: "03", t: "Prep + Pour", d: "Forms, base, rebar/mesh, then the pour. Noel and crew handle it start to finish." },
                { n: "04", t: "Finish + Cure", d: "Float, broom, stamp — your call. We seal, clean up, and walk it with you before we leave." },
              ].map((step) => (
                <li key={step.n} className="bg-card p-7">
                  <div className="font-display text-5xl text-primary/80">{step.n}</div>
                  <div className="mt-3 font-display text-xl tracking-wide">{step.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t border-border">
        <img src={work6.url} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <img src={logo.url} alt="" className="h-14 w-auto object-contain mb-6" />
              <div className="section-eyebrow">Free quote</div>
              <h2 className="mt-3 font-display text-4xl md:text-6xl leading-[1.05]">
                Got a job?<br /><span className="text-primary">Let's talk.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-md">
                Free on-site quotes across Woodstock and surrounding areas. Call, text, or drop your details — Noel gets back to you personally.
              </p>

              <div className="mt-10 space-y-4">
                <a href="tel:+16786298775" className="flex items-center gap-4 group">
                  <span className="grid place-items-center size-12 bg-primary/10 border border-primary/40 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="size-5" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Call or text</span>
                    <span className="block font-display text-2xl">678-629-8775</span>
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="grid place-items-center size-12 bg-primary/10 border border-primary/40 text-primary">
                    <MapPin className="size-5" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Service area</span>
                    <span className="block font-display text-2xl">Woodstock, GA & Surrounding</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-border bg-card/80 backdrop-blur p-6 md:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
