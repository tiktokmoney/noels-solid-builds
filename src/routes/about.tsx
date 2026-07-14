import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Phone, Check, Handshake, ShieldCheck, MapPin, Award } from "lucide-react";
import work1 from "@/assets/work1.asset.json";
import work4 from "@/assets/work4.asset.json";
import work5 from "@/assets/work5.asset.json";
import work8 from "@/assets/work8.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Noel — Owner, Noels Concrete LLC | Woodstock, GA" },
      { name: "description", content: "Meet Noel, owner of Noels Concrete LLC. 6+ years of hands-on concrete craftsmanship serving Woodstock and surrounding areas with honest pricing and dependable service." },
      { property: "og:title", content: "About Noels Concrete LLC" },
      { property: "og:description", content: "Owner-run concrete contractor built on craftsmanship, honesty, and results that last." },
      { property: "og:image", content: work1.url },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, t: "Honest Pricing",   d: "Flat quotes. No games. What we quote is what you pay." },
  { icon: Award,       t: "6+ Years Hands-On", d: "Years in the field — under the sun, in the forms, behind the trowel." },
  { icon: Handshake,   t: "Owner Every Job",   d: "Noel is on-site start to finish. Never a sub you've never met." },
  { icon: MapPin,      t: "Local to Woodstock", d: "Based here. Working here. Answering the phone here." },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero — big portrait card on the left */}
      <section className="relative border-b border-border grain-bg">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-border">
              <img src={work1.url} alt="Noel finishing a fresh concrete pour" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur border border-primary/40 rounded-xl p-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">Owner</div>
                <div className="mt-1 font-display text-2xl">Noel — on the trowel</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow">About</div>
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.9]">
              Hi, I'm <span className="font-serif text-accent">Noel.</span>
            </h1>
            <p className="mt-8 text-xl text-foreground/80 leading-relaxed max-w-xl">
              I started Noels Concrete LLC with one simple goal: <span className="font-serif text-primary text-2xl">high-quality concrete work</span> with honest pricing, dependable service, and results that last.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <div className="eyebrow">The story</div>
            <h2 className="mt-5 font-display text-4xl md:text-6xl leading-[0.95]">
              Built on <span className="font-serif text-accent">craftsmanship</span> and honesty.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-7 text-lg text-foreground/85 leading-relaxed">
            <p>
              With 6 years and counting of hands-on experience in the concrete industry, I've developed a strong understanding of what it takes to deliver durable, long-lasting results.
            </p>
            <p>
              Every project deserves attention to detail — whether it's a new driveway, patio, sidewalk, slab, or foundation. I take pride in treating every customer's property with respect and making sure the job is done right the first time.
            </p>
            <p>
              When you choose us, you can expect quality craftsmanship, honest recommendations, and a commitment to your satisfaction from start to finish. Thank you for considering us for your next project — I look forward to earning your trust and helping bring your vision to life.
            </p>

            <div className="pt-8 border-t border-border grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "6+ years hands-on experience",
                "Honest, upfront pricing",
                "Free on-site quotes",
                "Owner on every job",
                "Licensed & insured",
                "Woodstock & surrounding areas",
              ].map((p) => (
                <div key={p} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 grid place-items-center size-5 rounded-full bg-accent/20 text-accent shrink-0">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-card/60 border-y border-border">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="eyebrow">What you can expect</div>
            <h2 className="mt-5 font-display text-5xl md:text-7xl leading-[0.95]">The Noels <span className="font-serif text-accent">standard.</span></h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl bg-background border border-border p-7 hover:border-primary/40 transition-colors">
                <div className="size-11 rounded-full bg-accent/15 text-accent grid place-items-center">
                  <v.icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl tracking-tight">{v.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peek at work */}
      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-3 gap-5">
          {[work5, work4, work8].map((w) => (
            <div key={w.url} className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={w.url} alt="Recent Noels Concrete project" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="container-x mt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="font-display text-3xl md:text-5xl">Let's talk about <span className="font-serif text-accent">your project</span>.</h2>
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
