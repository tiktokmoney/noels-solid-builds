import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Phone, Camera } from "lucide-react";
import driveBefore from "@/assets/driveway-before.jpg.asset.json";
import driveDrying from "@/assets/driveway-drying.jpg.asset.json";
import driveFinished from "@/assets/driveway-finished.jpg.asset.json";
import walkwayBefore from "@/assets/walkway-before.jpg.asset.json";
import walkwayDuring from "@/assets/walkway-during.jpg.asset.json";
import walkwayFinished from "@/assets/walkway-finished.jpg.asset.json";
import stampedBefore from "@/assets/stamped-before.jpg.asset.json";
import stampedDuring from "@/assets/stamped-during.jpg.asset.json";
import stampedFinished from "@/assets/stamped-finished.jpg.asset.json";
import slabBefore from "@/assets/slab-before.jpg.asset.json";
import slabFinished from "@/assets/slab-finished.jpg.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Concrete Process, Start to Finish | Noels Concrete LLC" },
      { name: "description", content: "See our concrete work from pour to finish. Driveways, patios, and more around Woodstock, GA — documented before, during, and after by Noels Concrete LLC." },
      { property: "og:title", content: "Process Gallery — Noels Concrete LLC" },
      { property: "og:description", content: "Before, during, and after shots of real projects poured around Woodstock, GA." },
      { property: "og:image", content: driveFinished.url },
    ],
  }),
  component: GalleryPage,
});

type Phase = { src: string; phase: string; caption: string };
type Project = {
  service: string;
  title: string;
  location: string;
  blurb: string;
  phases: Phase[];
};

const projects: Project[] = [
  {
    service: "Driveway",
    title: "Residential Driveway Pour",
    location: "Woodstock, GA",
    blurb:
      "A full residential driveway — from forming and fresh pour, through the initial cure, to the finished broom-swept surface ready for daily use.",
    phases: [
      {
        src: driveBefore.url,
        phase: "Before",
        caption: "Forms set, subgrade prepped, fresh pour placed and screeded flat.",
      },
      {
        src: driveDrying.url,
        phase: "Drying",
        caption: "Curing under caution tape — dark, wet color shows the slab still setting up.",
      },
      {
        src: driveFinished.url,
        phase: "Finished",
        caption: "Clean broom finish, cut control joints, ready to hand back to the homeowner.",
      },
    ],
  },
  {
    service: "Patio Walkway",
    title: "Patio Walkway Installation",
    location: "Woodstock, GA",
    blurb:
      "A wooded backyard walkway — from formed sections and the first slabs poured, through the connecting stretch, to a finished modular path leading to the seating area.",
    phases: [
      {
        src: walkwayBefore.url,
        phase: "Before",
        caption: "Forms framed out along the tree line with the first slabs freshly poured and screeded.",
      },
      {
        src: walkwayDuring.url,
        phase: "During",
        caption: "Middle stretch poured and floated, tying the pathway between the fence and stone wall.",
      },
      {
        src: walkwayFinished.url,
        phase: "Finished",
        caption: "Cured modular slabs set in slate, leading cleanly out to the patio seating area.",
      },
    ],
  },
  {
    service: "Stamped Concrete",
    title: "Lakeside Stamped Patio",
    location: "Woodstock, GA",
    blurb:
      "A lakeside boathouse patio — from the formed subgrade, through freshly stamped and stained slabs, to a finished ashlar pattern wrapping the building.",
    phases: [
      {
        src: stampedBefore.url,
        phase: "Before",
        caption: "Curved forms staked out around the boathouse with the pad prepped and ready for pour.",
      },
      {
        src: stampedDuring.url,
        phase: "During",
        caption: "Freshly stamped and stained — wet color deepens the ashlar pattern as it sets.",
      },
      {
        src: stampedFinished.url,
        phase: "Finished",
        caption: "Cured stamped patio tying the boathouse, walkway, and flagstone landing together.",
      },
    ],
  },
  {
    service: "House Slab",
    title: "Residential House Slab",
    location: "Woodstock, GA",
    blurb:
      "A full residential house slab — from the boom-pump pour over vapor barrier and rebar, to the finished, floated foundation ready for framing.",
    phases: [
      {
        src: slabBefore.url,
        phase: "Before",
        caption: "Boom pump placing fresh concrete over the vapor barrier and rebar grid inside formed edges.",
      },
      {
        src: slabFinished.url,
        phase: "Finished",
        caption: "Cured, floated slab with clean edges and plumbing stubs — ready for framing to start.",
      },
    ],
  },
];

function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="relative border-b border-border grain-bg">
        <div className="container-x py-24 md:py-36 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="eyebrow">Gallery</div>
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.9]">
              Before, during, <span className="font-serif text-accent">after.</span>
            </h1>
          </div>
          <p className="md:col-span-4 text-lg text-muted-foreground leading-relaxed">
            Every project documented in three phases — so you can see exactly what goes into a slab that lasts.
          </p>
        </div>
      </section>

      {projects.map((p, idx) => (
        <section
          key={p.title}
          className={`py-20 md:py-28 ${idx % 2 === 1 ? "bg-card/60 border-y border-border" : ""}`}
        >
          <div className="container-x">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <div className="eyebrow">{p.service} · Process</div>
                <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[0.95]">
                  {p.title}
                </h2>
                <div className="mt-3 text-sm uppercase tracking-[0.24em] text-muted-foreground">
                  {p.location}
                </div>
              </div>
              <p className="max-w-md text-muted-foreground leading-relaxed">{p.blurb}</p>
            </div>

            <div className={`grid gap-5 md:gap-6 ${p.phases.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
              {p.phases.map((ph, i) => (
                <figure
                  key={ph.src}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card group"
                >
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="size-7 rounded-full bg-primary text-primary-foreground grid place-items-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-background/85 backdrop-blur text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
                      {ph.phase}
                    </span>
                  </div>
                  <img
                    src={ph.src}
                    alt={`${p.title} — ${ph.phase}`}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <figcaption className="p-5 border-t border-border">
                    <div className="font-display text-xl">{ph.phase}</div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {ph.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 md:py-24 border-t border-border">
        <div className="container-x">
          <div className="rounded-2xl border border-dashed border-border bg-card/40 p-10 md:p-16 text-center grain-bg">
            <div className="mx-auto size-14 rounded-full bg-primary/10 text-accent grid place-items-center">
              <Camera className="size-6" />
            </div>
            <h2 className="mt-6 font-display text-3xl md:text-5xl">
              More projects <span className="font-serif text-accent">coming soon</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground leading-relaxed">
              Patios, retaining walls, stamped concrete, footings, and foundations — each one documented from before, through drying, to the finished pour. Check back as new sets get added.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/60">
        <div className="container-x py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display text-4xl md:text-6xl">
              Want yours in the <span className="font-serif text-accent">next batch</span>?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Free on-site quotes across Woodstock and surrounding areas.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+16786298775" className="pill pill-solid">
              <Phone className="size-4" /> 678-629-8775
            </a>
            <Link to="/contact" className="pill pill-ghost">
              Request quote <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
