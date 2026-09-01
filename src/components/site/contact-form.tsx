"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { ContactResponse, Locale, PortfolioContent } from "@/types/portfolio";

const initialState = {
  name: "",
  email: "",
  message: "",
  consent: false,
  honeypot: "",
};

export function ContactForm({ locale, content }: { locale: Locale; content: PortfolioContent }) {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<ContactResponse | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });

      const result = (await response.json()) as ContactResponse;
      setFeedback(result);

      if (result.ok) {
        setForm(initialState);
      }
    } catch {
      setFeedback({ ok: false, message: content.cta.errorMessage });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm">
      <label className="grid gap-2 text-sm text-foreground">
        {content.form.name}
        <Input
          value={form.name}
          onChange={(event) => setForm((previous) => ({ ...previous, name: event.target.value }))}
          placeholder={content.form.name}
          required
        />
      </label>

      <label className="grid gap-2 text-sm text-foreground">
        {content.form.email}
        <Input
          type="email"
          value={form.email}
          onChange={(event) => setForm((previous) => ({ ...previous, email: event.target.value }))}
          placeholder={content.form.email}
          required
        />
      </label>

      <label className="grid gap-2 text-sm text-foreground">
        {content.form.message}
        <Textarea
          value={form.message}
          onChange={(event) => setForm((previous) => ({ ...previous, message: event.target.value }))}
          placeholder={content.form.message}
          required
        />
      </label>

      <label className="hidden" aria-hidden>
        {content.form.honeypotLabel}
        <Input
          value={form.honeypot}
          onChange={(event) => setForm((previous) => ({ ...previous, honeypot: event.target.value }))}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 rounded border-border accent-accent"
          checked={form.consent}
          onChange={(event) => setForm((previous) => ({ ...previous, consent: event.target.checked }))}
          required
        />
        {content.form.consentLabel}
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" disabled={loading}>
          {loading ? content.cta.sendingLabel : content.cta.submitLabel}
        </Button>
        {feedback ? (
          <p className={`text-sm ${feedback.ok ? "text-emerald-400" : "text-accent"}`}>{feedback.message}</p>
        ) : null}
      </div>
    </form>
  );
}