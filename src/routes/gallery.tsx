import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Phone } from "lucide-react";
import work1 from "@/assets/work1.asset.json";
import work2 from "@/assets/work2.asset.json";
import work3 from "@/assets/work3.asset.json";
import work4 from "@/assets/work4.asset.json";
import work5 from "@/assets/work5.asset.json";
import work6 from "@/assets/work6.asset.json";
import work7 from "@/assets/work7.asset.json";
import work8 from "@/assets/work8.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Recent Concrete Work | Noels Concrete LLC" },
      { name: "description", content: "Recent driveways, patios, walkways, and stamped concrete projects around Woodstock, GA. Before, in-progress, and finished work by Noels Concrete LLC." },
      { property: "og:title", content: "Recent Work — Noels Concrete LLC" },
      { property: "og:description", content: "A look at patios, walkways, and driveways poured around Woodstock, GA." },
      { property: "og:image", content: work5.url },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: work5.url, label: "Modern Slab Walkway", tag: "Finished", span: "col-span-12 md:col-span-8 aspect-[16/10]" },
  { src: work7.url, label: "Landscape Pathway", tag: "Finished", span: "col-span-6 md:col-span-4 aspect-[4/5]" },
  { src: work8.url, label: "Slate & Slab Detail", tag: "Finished", span: "col-span-6 md:col-span-4 aspect-square" },
  { src: work3.url, label: "Side-Yard Walkway", tag: "In Progress", span: "col-span-6 md:col-span-4 aspect-square" },
  { src: work4.url, label: "Poured & Forming", tag: "In Progress", span: "col-span-12 md:col-span-4 aspect-square" },
  { src: work6.url, label: "Pool Access Path", tag: "In Progress", span: "col-span-12 md:col-span-8 aspect-[16/10]" },
  { src: work2.url, label: "Framed & Ready", tag: "Before", span: "col-span-6 md:col-span-4 aspect-[4/5]" },
  { src: work1.url, label: "Screeding the Pour", tag: "Crew", span: "col-span-6 md:col-span-4 aspect-[4/5]" },
];

function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="relative border-b border-border overflow-hidden">
        <img src={work5.url} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="container-x relative py-20 md:py-32">
          <div className="section-eyebrow">Gallery</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            From forms<br />to <span className="text-primary">finish.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Recent patio, walkway, and driveway projects around Woodstock and North Atlanta — the before, the pour day, and the finished install.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-3 md:gap-5">
            {items.map((g) => (
              <figure key={g.src + g.label} className={`relative overflow-hidden group ${g.span}`}>
                <img src={g.src} alt={g.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between gap-3 bg-gradient-to-t from-background via-background/70 to-transparent">
                  <div className="font-display text-lg md:text-xl tracking-wide">{g.label}</div>
                  <span className="bg-primary text-primary-foreground text-[10px] px-2 py-1 font-bold uppercase tracking-widest">{g.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-x py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display text-3xl md:text-5xl">Want yours in the next batch?</h2>
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
