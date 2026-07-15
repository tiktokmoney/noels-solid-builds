import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Phone, MapPin } from "lucide-react";

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
      { property: "og:title", content: "Noels Concrete LLC — Concrete Contractor in Woodstock, GA" },
      { property: "og:description", content: "Family-run concrete contractor in Woodstock, GA. Driveways, patios, retaining walls, stamped concrete, foundations & footings. 6+ years experience. Free on-site quotes." },
      { property: "og:image", content: work5.url },
      { name: "twitter:image", content: work5.url },
    ],
  }),
  component: HomePage,
});

const services = [
  { n: "01", title: "Driveways",         blurb: "Fresh pours, tear-outs, and expansions engineered flat, square, and ready for weight.", img: work4.url },
  { n: "02", title: "Patios",            blurb: "Backyard slabs and modern walkways finished the way you actually want to live outside.", img: work5.url },
  { n: "03", title: "Retaining Walls",   blurb: "Structural walls that hold grade, manage runoff, and shape the yard around them.",        img: work8.url },
  { n: "04", title: "Stamped Concrete",  blurb: "Textured, color-matched finishes that read like stone, brick, or slate — sealed to last.",  img: work7.url },
  { n: "05", title: "House Foundations", blurb: "Poured foundations built to sit flat, square, and true — from the very first course.",     img: work2.url },
  { n: "06", title: "Footings",          blurb: "Load-bearing footings for additions, decks, garages, and outbuildings. Poured to spec.",   img: work3.url },
];

const process = [
  { n: "01", t: "On-Site Walkthrough", d: "Noel comes out, measures, and listens. Every quote is built on what your site actually needs — no template estimates." },
  { n: "02", t: "Plan + Flat Price",   d: "Scope, thickness, reinforcement, finish. One honest number. No 'we'll see when we get there.'" },
  { n: "03", t: "Prep + Pour",         d: "Forms, base, rebar and mesh, then the pour. Owner and crew handle it start to finish — never a sub." },
  { n: "04", t: "Finish + Walk-Through", d: "Float, broom, or stamp — your call. We seal, we clean up, and we walk it with you before we leave." },
];

const ticker = [
  "6+ YEARS HANDS-ON",
  "OWNER ON EVERY JOB",
  "FREE ON-SITE QUOTES",
  "LICENSED · INSURED",
  "WOODSTOCK · CANTON · MARIETTA",
  "POURED RIGHT THE FIRST TIME",
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* HERO — split layout, dark type panel left, hero image right */}
      <section className="relative border-b border-border grain-bg">
        <div className="container-x grid lg:grid-cols-12 gap-0 lg:min-h-[calc(100vh-5rem)]">
          <div className="lg:col-span-6 py-16 lg:py-24 pr-0 lg:pr-14 flex flex-col justify-between">
            <div>
              <div className="eyebrow">Woodstock, GA · Est. 2019</div>
              <h1 className="mt-8 font-display text-[15vw] xs:text-8xl lg:text-[8.5rem] leading-[0.9] tracking-tight">
                Quality<br />
                work.<br />
                <span className="font-serif text-primary block mt-2 text-[13vw] xs:text-7xl lg:text-[7.5rem]">Solid</span>
                foundation.
              </h1>
              <p className="mt-10 max-w-md text-lg text-foreground/75 leading-relaxed">
                Six years of hands-on concrete craftsmanship. Driveways, patios, retaining walls, stamped concrete, foundations, and footings — poured right the first time.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="pill pill-solid">
                  Request Free Quote <ArrowUpRight className="size-4" />
                </Link>
                <a href="tel:+16786298775" className="pill pill-ghost">
                  <Phone className="size-4" /> 678-629-8775
                </a>
              </div>
            </div>

            <dl className="mt-16 grid grid-cols-3 border-t border-border pt-8">
              {[
                { t: "6+", l: "years pouring" },
                { t: "06", l: "trades in-house" },
                { t: "100%", l: "owner-run" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-4xl md:text-5xl text-primary">{s.t}</dt>
                  <dd className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 relative min-h-[70vh] lg:min-h-full">
            <div className="absolute inset-0 lg:-mr-[calc((100vw-82rem)/2)] xl:mr-0">
              <img src={work5.url} alt="Finished slab walkway with slate gravel — Noels Concrete work" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/10 to-background/60 lg:to-background/30" />
              {/* Floating tag card */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-xs bg-background/95 backdrop-blur border border-primary/40 rounded-xl p-5">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                  <span className="size-1.5 rounded-full bg-accent animate-pulse" /> Recently poured
                </div>
                <div className="mt-2 font-display text-2xl">Modern slab walkway</div>
                <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1"><MapPin className="size-3" /> Woodstock, GA</div>
              </div>
            </div>
          </div>
        </div>

        {/* MARQUEE TICKER */}
        <div className="border-t border-border py-4 overflow-hidden bg-card/40">
          <div className="marquee-track">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i} className="flex items-center gap-6 px-8 font-display text-lg tracking-widest text-primary/80">
                {t}
                <span className="text-accent">✳</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — editorial horizontal rows, alternating */}
      <section className="py-24 md:py-36">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-6 items-end mb-16">
            <div className="md:col-span-8">
              <div className="eyebrow">What we build</div>
              <h2 className="mt-5 font-display text-5xl md:text-7xl leading-[0.95]">
                Six trades.<br />
                <span className="font-serif text-accent">One</span> honest crew.
              </h2>
            </div>
            <p className="md:col-span-4 text-muted-foreground text-lg leading-relaxed">
              Every job starts with the same forms, the same standards, and the same owner on-site — from a clean driveway pour to a full backyard rebuild.
            </p>
          </div>

          <ul className="border-t border-border">
            {services.map((s, i) => (
              <li key={s.title} className="group border-b border-border">
                <Link to="/services" className="grid md:grid-cols-12 gap-6 items-center py-8 md:py-10 transition-colors hover:bg-card/60 px-2 md:px-4 -mx-2 md:-mx-4 rounded-2xl">
                  <div className="md:col-span-1 font-display text-3xl md:text-4xl text-primary/60 group-hover:text-primary transition-colors">{s.n}</div>
                  <div className="md:col-span-4 font-display text-3xl md:text-5xl tracking-tight">{s.title}</div>
                  <div className="md:col-span-4 text-muted-foreground text-sm md:text-base leading-relaxed">{s.blurb}</div>
                  <div className="md:col-span-2 relative aspect-[4/3] overflow-hidden rounded-xl md:opacity-0 md:group-hover:opacity-100 md:translate-x-2 md:group-hover:translate-x-0 transition-all duration-500">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-1 flex md:justify-end">
                    <span className="size-10 rounded-full border border-primary/40 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WORK — asymmetric masonry, portrait dominant */}
      <section className="py-24 md:py-32 bg-card/60 border-y border-border">
        <div className="container-x">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-14">
            <div>
              <div className="eyebrow">Recent pours</div>
              <h2 className="mt-5 font-display text-5xl md:text-7xl">
                <span className="font-serif text-accent">The work</span><br />
                speaks first.
              </h2>
            </div>
            <Link to="/gallery" className="pill pill-ghost">See the full gallery <ArrowUpRight className="size-4" /></Link>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <GalleryCard span="col-span-12 md:col-span-5 aspect-[4/5]" src={work7.url} label="Landscape Pathway" tag="Finished" />
            <GalleryCard span="col-span-12 md:col-span-7 aspect-[4/3]" src={work5.url} label="Modern Slab Walkway" tag="Finished" />
            <GalleryCard span="col-span-6 md:col-span-4 aspect-square" src={work3.url} label="Side-Yard Walkway" tag="In Progress" />
            <GalleryCard span="col-span-6 md:col-span-4 aspect-square" src={work1.url} label="Screeding the Pour" tag="Crew" />
            <GalleryCard span="col-span-12 md:col-span-4 aspect-square" src={work8.url} label="Slate & Slab Detail" tag="Detail" />
          </div>
        </div>
      </section>

      {/* PROCESS — vertical timeline */}
      <section className="py-24 md:py-36">
        <div className="container-x grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="eyebrow">How it goes</div>
            <h2 className="mt-5 font-display text-5xl md:text-7xl leading-[0.95]">
              Four steps.<br />
              <span className="font-serif text-accent">No mystery.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              You'll know what we're pouring, how thick, and when it'll be walk-ready before we ever fire up the mixer.
            </p>
            <Link to="/contact" className="mt-8 pill pill-solid">
              Start Your Quote <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <ol className="lg:col-span-8 relative">
            <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
            {process.map((step) => (
              <li key={step.n} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 size-12 rounded-full bg-background border-2 border-primary text-primary font-display grid place-items-center text-lg">
                  {step.n}
                </div>
                <h3 className="font-display text-3xl md:text-4xl">{step.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-lg">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative border-y border-border overflow-hidden">
        <img src={work6.url} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="container-x relative py-20 md:py-28 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <img src={logo.url} alt="" className="size-12 rounded-full ring-1 ring-primary/40 mb-6" />
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Got a job? <span className="font-serif text-accent">Let's talk.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground text-lg">
              Free on-site quotes across Woodstock and surrounding areas. Noel gets back the same day.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
            <a href="tel:+16786298775" className="pill pill-solid justify-center py-5 text-base">
              <Phone className="size-4" /> 678-629-8775
            </a>
            <Link to="/contact" className="pill pill-ghost justify-center py-5">
              Request quote online <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function GalleryCard({ span, src, label, tag }: { span: string; src: string; label: string; tag: string }) {
  return (
    <figure className={`relative overflow-hidden group rounded-2xl ${span}`}>
      <img src={src} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">{tag}</div>
          <div className="mt-1 font-display text-xl md:text-2xl">{label}</div>
        </div>
        <span className="size-9 rounded-full bg-primary text-primary-foreground grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="size-4" />
        </span>
      </figcaption>
    </figure>
  );
}
