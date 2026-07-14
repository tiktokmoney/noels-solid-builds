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

      <section className="relative border-b border-border overflow-hidden">
        <img src={work6.url} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="container-x relative py-20 md:py-28">
          <div className="section-eyebrow">Contact</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            Let's pour<br />something <span className="text-primary">that lasts.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Free on-site quotes across Woodstock and surrounding areas. Call, text, or send us the details — Noel will get back to you personally, usually the same day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 space-y-8">
            <img src={logo.url} alt="Noels Concrete LLC" className="h-16 w-auto object-contain" />

            <div className="divide-y divide-border border border-border">
              <a href="tel:+16786298775" className="flex items-center gap-5 p-6 group hover:bg-card transition-colors">
                <span className="grid place-items-center size-12 bg-primary/10 border border-primary/40 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Phone className="size-5" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Call or text</div>
                  <div className="font-display text-2xl md:text-3xl">678-629-8775</div>
                </div>
              </a>
              <a href="mailto:Noelmm97@gmail.com" className="flex items-center gap-5 p-6 group hover:bg-card transition-colors">
                <span className="grid place-items-center size-12 bg-primary/10 border border-primary/40 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Mail className="size-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Email</div>
                  <div className="font-display text-xl md:text-2xl break-all">Noelmm97@gmail.com</div>
                </div>
              </a>
              <div className="flex items-center gap-5 p-6">
                <span className="grid place-items-center size-12 bg-primary/10 border border-primary/40 text-primary shrink-0">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Service area</div>
                  <div className="font-display text-xl md:text-2xl">Woodstock, GA & Surrounding</div>
                </div>
              </div>
              <div className="flex items-center gap-5 p-6">
                <span className="grid place-items-center size-12 bg-primary/10 border border-primary/40 text-primary shrink-0">
                  <Clock className="size-5" />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Hours</div>
                  <div className="font-display text-xl md:text-2xl">Mon – Sat · 8 AM – 6 PM</div>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Prefer to talk?</span> Noel answers the phone personally. Text works too — send a photo of the space and we'll ballpark it before we even come out.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-border bg-card p-6 md:p-10">
              <div className="section-eyebrow">Request a free quote</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl leading-tight">Tell us about the project.</h2>
              <p className="mt-2 text-sm text-muted-foreground">A few quick details and we'll follow up to schedule your on-site walkthrough.</p>
              <div className="mt-8">
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
