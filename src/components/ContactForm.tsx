import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "Noelmm97@gmail.com";

type ContactMethod = "Email" | "Call" | "Text";

export function ContactForm() {
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Driveway",
    message: "",
    contactMethod: "Email" as ContactMethod,
    consentCall: false,
    consentText: false,
  });

  const needsPhoneConsent = state.contactMethod === "Call" || state.contactMethod === "Text";
  const consentOk =
    !needsPhoneConsent ||
    (state.contactMethod === "Call" ? state.consentCall : state.consentText);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentOk) return;
    const permissionLine =
      state.contactMethod === "Call"
        ? `Permission to call: ${state.consentCall ? "Yes" : "No"}`
        : state.contactMethod === "Text"
        ? `Permission to text: ${state.consentText ? "Yes" : "No"}`
        : "";
    const subject = encodeURIComponent(`Quote — ${state.service} — ${state.name}`);
    const body = encodeURIComponent(
      `Name: ${state.name}\nPhone: ${state.phone}\nEmail: ${state.email}\nService: ${state.service}\nPreferred contact: ${state.contactMethod}${permissionLine ? `\n${permissionLine}` : ""}\n\n${state.message}`
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
      <Field label="Preferred contact method">
        <select
          value={state.contactMethod}
          onChange={(e) =>
            setState((s) => ({
              ...s,
              contactMethod: e.target.value as ContactMethod,
              consentCall: false,
              consentText: false,
            }))
          }
          className="field"
        >
          <option>Email</option>
          <option>Call</option>
          <option>Text</option>
        </select>
      </Field>

      {state.contactMethod === "Call" && (
        <label className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={state.consentCall}
            onChange={(e) => setState((s) => ({ ...s, consentCall: e.target.checked }))}
            className="mt-1 size-4 accent-accent"
          />
          <span className="text-sm text-foreground/85 leading-relaxed">
            I give Noels Concrete LLC permission to <span className="font-semibold">call</span> me at the phone number provided to discuss my project.
          </span>
        </label>
      )}

      {state.contactMethod === "Text" && (
        <label className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={state.consentText}
            onChange={(e) => setState((s) => ({ ...s, consentText: e.target.checked }))}
            className="mt-1 size-4 accent-accent"
          />
          <span className="text-sm text-foreground/85 leading-relaxed">
            I give Noels Concrete LLC permission to <span className="font-semibold">text</span> me at the phone number provided. Message and data rates may apply.
          </span>
        </label>
      )}

      <Field label="Project details">
        <textarea rows={5} value={state.message} onChange={set("message")} className="field" placeholder="Size, location, timeline, anything relevant…" />
      </Field>
      <button type="submit" disabled={!consentOk} className="pill pill-solid w-full justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed">
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
