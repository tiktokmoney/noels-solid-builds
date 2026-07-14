import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Phone, Check, ShieldCheck, Award, MapPin, Handshake } from "lucide-react";
import work1 from "@/assets/work1.asset.json";
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
  { icon: ShieldCheck, t: "Honest Pricing", d: "Flat quotes, no games, no upsell. What we quote is what you pay." },
  { icon: Award, t: "6+ Years Hands-On", d: "Years in the industry — under the sun, in the forms, behind the trowel." },
  { icon: HandshakeIcon, t: "Owner on Every Job", d: "Noel is on-site start to finish. No subs you've never met." },
  { icon: MapPin, t: "Local to Woodstock", d: "Based here. Working here. Answering the phone here." },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="relative border-b border-border overflow-hidden">
        <img src={work1.url} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="container-x relative py-20 md:py-32">
          <div className="section-eyebrow">About</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            Hi, I'm <span className="text-primary">Noel.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Owner of Noels Concrete LLC. I started this company with one simple goal: high-quality concrete work with honest pricing, dependable service, and results that last.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden aspect-[4/5] border border-border">
              <img src={work1.url} alt="Noel and crew on a fresh pour" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden aspect-square border border-border">
                <img src={work5.url} alt="Finished walkway" className="w-full h-full object-cover" />
              </div>
              <div className="relative overflow-hidden aspect-square border border-border">
                <img src={work8.url} alt="Slate patio detail" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-foreground/85 leading-relaxed">
            <div className="section-eyebrow">The story</div>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
              Built on craftsmanship, honesty, and satisfaction from start to finish.
            </h2>
            <p>
              With 6 years and counting of hands-on experience in the concrete industry, I've developed a strong understanding of what it takes to deliver durable, long-lasting results.
            </p>
            <p>
              Every project deserves attention to detail — whether it's a new driveway, patio, sidewalk, slab, or foundation. I take pride in treating every customer's property with respect and making sure the job is done right the first time.
            </p>
            <p>
              When you choose us, you can expect quality craftsmanship, honest recommendations, and a commitment to your satisfaction from start to finish. Thank you for considering us for your next project — I look forward to earning your trust and helping bring your vision to life.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3 pt-6 border-t border-border">
              {[
                "6+ years hands-on experience",
                "Honest, upfront pricing",
                "Free on-site quotes",
                "Owner on every job",
                "Licensed & insured",
                "Woodstock & surrounding areas",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 grid place-items-center size-4 bg-primary text-primary-foreground shrink-0">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card border-y border-border">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <div className="section-eyebrow justify-center">What you can expect</div>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">The Noels standard.</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {values.map((v) => (
              <div key={v.t} className="bg-card p-8">
                <v.icon className="size-8 text-primary" />
                <h3 className="mt-5 font-display text-2xl tracking-wide">{v.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display text-3xl md:text-5xl">Let's talk about your project.</h2>
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
