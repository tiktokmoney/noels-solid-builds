import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import work6 from "@/assets/work6.asset.json";
import logo from "@/assets/logo.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Free Quotes | Noels Concrete LLC" },
      { name: "description", content: "Call 678-629-8775 or email Noelmm97@gmail.com for a free on-site concrete quote in Woodstock, GA and surrounding areas. Noels Concrete LLC." },
      { property: "og:title", content: "Contact Noels Concrete LLC — Woodstock, GA" },
      { property: "og:description", content: "Free on-site quotes. Call, text, or email — Noel gets back to you personally." },
      { property: "og:image", content: work6.url },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="relative border-b border-border grain-bg">
        <div className="container-x py-20 md:py-28 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="eyebrow">Contact</div>
            <h1 className="mt-6 font-display text-6xl md:text-8xl leading-[0.9]">
              Let's pour something<br />
              <span className="font-serif text-accent">that lasts.</span>
            </h1>
          </div>
          <p className="md:col-span-4 text-lg text-muted-foreground leading-relaxed">
            Free on-site quotes across Woodstock and surrounding areas. Call, text, or send the details — Noel will get back to you personally, usually the same day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* FORM — now on the LEFT */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-card border border-border rounded-3xl p-7 md:p-10">
              <div className="eyebrow">Request a free quote</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">Tell us about the project.</h2>
              <p className="mt-2 text-sm text-muted-foreground">A few quick details and we'll follow up to schedule your on-site walkthrough.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* INFO — now on the RIGHT */}
          <aside className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-border">
              <img src={work6.url} alt="Recent Noels Concrete project" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                <img src={logo.url} alt="" className="size-11 rounded-full ring-1 ring-primary/40" />
                <div>
                  <div className="font-display text-xl">NOELS CONCRETE LLC</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">Woodstock · GA</div>
                </div>
              </div>
            </div>

            <ContactRow icon={Phone} label="Call or text" value="678-629-8775" href="tel:+16786298775" />
            <ContactRow icon={Mail} label="Email" value="Noelmm97@gmail.com" href="mailto:Noelmm97@gmail.com" />
            <ContactRow icon={MapPin} label="Service area" value="Woodstock, GA + Surrounding" />
            <ContactRow icon={Clock} label="Hours" value="Mon – Sat · 8 AM – 6 PM" />

            <div className="rounded-2xl border border-accent/40 bg-accent/10 p-5">
              <p className="text-sm leading-relaxed">
                <span className="font-serif text-primary text-base">Prefer to talk?</span> Noel answers the phone personally. Text works too — send a photo of the space and we'll ballpark it before we even come out.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const Wrap: React.ElementType = href ? "a" : "div";
  const wrapProps = href ? { href } : {};
  return (
    <Wrap {...wrapProps} className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 hover:border-primary/40 transition-colors group">
      <span className="grid place-items-center size-11 rounded-full bg-accent/15 text-accent group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">{label}</div>
        <div className="mt-0.5 font-display text-xl md:text-2xl truncate">{value}</div>
      </div>
    </Wrap>
  );
}
