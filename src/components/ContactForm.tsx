import { useState } from "react";
import { ArrowRight } from "lucide-react";

const EMAIL = "Noelmm97@gmail.com";

export function ContactForm() {
  const [state, setState] = useState<{ name: string; phone: string; email: string; service: string; message: string }>({
    name: "", phone: "", email: "", service: "Driveway", message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote request — ${state.service} — ${state.name}`);
    const body = encodeURIComponent(
      `Name: ${state.name}\nPhone: ${state.phone}\nEmail: ${state.email}\nService: ${state.service}\n\n${state.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const set = <K extends keyof typeof state>(k: K) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setState((s) => ({ ...s, [k]: e.target.value }));

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">Name</span>
          <input required value={state.name} onChange={set("name")} className="field" placeholder="Your name" />
        </label>
        <label className="block">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">Phone</span>
          <input required value={state.phone} onChange={set("phone")} className="field" placeholder="(678) 555-0123" />
        </label>
      </div>
      <label className="block">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</span>
        <input type="email" required value={state.email} onChange={set("email")} className="field" placeholder="you@email.com" />
      </label>
      <label className="block">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">Service</span>
        <select value={state.service} onChange={set("service")} className="field">
          <option>Driveway</option>
          <option>Patio</option>
          <option>Retaining Wall</option>
          <option>Stamped Concrete</option>
          <option>House Foundation</option>
          <option>Footings</option>
          <option>Other</option>
        </select>
      </label>
      <label className="block">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">Project details</span>
        <textarea rows={5} value={state.message} onChange={set("message")} className="field" placeholder="Tell us about the job — size, location, timing…" />
      </label>
      <button type="submit" className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-semibold px-7 py-4 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors">
        Request Free Quote <ArrowRight className="size-4" />
      </button>
      <p className="text-xs text-muted-foreground">
        Or call/text <a href="tel:+16786298775" className="text-primary font-semibold">678-629-8775</a> — Noel usually gets back the same day.
      </p>
    </form>
  );
}
