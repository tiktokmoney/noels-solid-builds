import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "Noelmm97@gmail.com";

export function ContactForm() {
  const [state, setState] = useState({ name: "", phone: "", email: "", service: "Driveway", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote — ${state.service} — ${state.name}`);
    const body = encodeURIComponent(
      `Name: ${state.name}\nPhone: ${state.phone}\nEmail: ${state.email}\nService: ${state.service}\n\n${state.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const set = <K extends keyof typeof state>(k: K) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setState((s) => ({ ...s, [k]: e.target.value }));

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name">
          <input required value={state.name} onChange={set("name")} className="field" placeholder="Your name" />
        </Field>
        <Field label="Phone">
          <input required value={state.phone} onChange={set("phone")} className="field" placeholder="(678) 555-0123" />
        </Field>
      </div>
      <Field label="Email">
        <input type="email" required value={state.email} onChange={set("email")} className="field" placeholder="you@email.com" />
      </Field>
      <Field label="Service">
        <select value={state.service} onChange={set("service")} className="field">
          <option>Driveway</option>
          <option>Patio</option>
          <option>Retaining Wall</option>
          <option>Stamped Concrete</option>
          <option>House Foundation</option>
          <option>Footings</option>
          <option>Other</option>
        </select>
      </Field>
      <Field label="Project details">
        <textarea rows={5} value={state.message} onChange={set("message")} className="field" placeholder="Size, location, timeline, anything relevant…" />
      </Field>
      <button type="submit" className="pill pill-solid w-full justify-center py-4">
        Send Quote Request <ArrowUpRight className="size-4" />
      </button>
      <p className="text-xs text-muted-foreground">
        Or call/text <a href="tel:+16786298775" className="text-primary font-semibold">678-629-8775</a> — Noel usually replies same day.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}
