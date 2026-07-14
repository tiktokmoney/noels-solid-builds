import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Phone } from "lucide-react";
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
  { src: work5.url, label: "Modern Slab Walkway", tag: "Finished" },
  { src: work7.url, label: "Landscape Pathway",   tag: "Finished" },
  { src: work8.url, label: "Slate & Slab Detail", tag: "Detail" },
  { src: work3.url, label: "Side-Yard Walkway",   tag: "In Progress" },
  { src: work4.url, label: "Poured & Forming",    tag: "In Progress" },
  { src: work6.url, label: "Pool Access Path",    tag: "In Progress" },
  { src: work2.url, label: "Framed & Ready",      tag: "Before" },
  { src: work1.url, label: "Screeding the Pour",  tag: "Crew" },
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
              From forms to <span className="font-serif text-accent">finish.</span>
            </h1>
          </div>
          <p className="md:col-span-4 text-lg text-muted-foreground leading-relaxed">
            Recent projects across Woodstock and North Atlanta — the framed-up before, the pour day, and the finished install.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((g, i) => (
            <figure key={g.src} className="mb-6 break-inside-avoid relative overflow-hidden rounded-2xl group">
              <img
                src={g.src}
                alt={g.label}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/5 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">{g.tag}</div>
                  <div className="mt-1 font-display text-xl md:text-2xl">{g.label}</div>
                </div>
                <span className="size-9 rounded-full bg-primary text-primary-foreground grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="size-4" />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/60">
        <div className="container-x py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display text-4xl md:text-6xl">Want yours in the <span className="font-serif text-accent">next batch</span>?</h2>
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
