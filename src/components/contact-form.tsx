"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const subject = String(fd.get("subject") ?? "").trim() || "Flow Bitz inquiry";
    const message = String(fd.get("message") ?? "").trim();
    const mailSubject = encodeURIComponent(`Flow Bitz: ${subject}`);
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:hello@flowbitz.com?subject=${mailSubject}&body=${mailBody}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-black/5 bg-black/[0.02] px-4 py-3.5 text-zinc-900 outline-none transition-all placeholder:text-zinc-300 focus:border-[#0f0e47]/20 focus:bg-white focus:ring-4 focus:ring-[#0f0e47]/5 shadow-sm"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-black/5 bg-black/[0.02] px-4 py-3.5 text-zinc-900 outline-none transition-all placeholder:text-zinc-300 focus:border-[#0f0e47]/20 focus:bg-white focus:ring-4 focus:ring-[#0f0e47]/5 shadow-sm"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          Inquiry Subject
        </label>
        <input
          id="subject"
          name="subject"
          className="w-full rounded-xl border border-black/5 bg-black/[0.02] px-4 py-3.5 text-zinc-900 outline-none transition-all placeholder:text-zinc-300 focus:border-[#0f0e47]/20 focus:bg-white focus:ring-4 focus:ring-[#0f0e47]/5 shadow-sm"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-xl border border-black/5 bg-black/[0.02] px-4 py-3.5 text-zinc-900 outline-none transition-all placeholder:text-zinc-300 focus:border-[#0f0e47]/20 focus:bg-white focus:ring-4 focus:ring-[#0f0e47]/5 shadow-sm"
          placeholder="Tell us about your project or goals..."
        />
      </div>
      <button
        type="submit"
        className="group relative w-full overflow-hidden rounded-xl bg-[#0f0e47] py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#1a1a6b] active:scale-[0.98] shadow-lg shadow-[#0f0e47]/10"
      >
        <span className="relative z-10 transition-transform group-hover:-translate-y-px">
          Send Message
        </span>
      </button>
      {sent ? (
        <p className="text-center text-xs font-bold text-[#0f0e47] animate-pulse">
          Your inquiry has been sent. We'll be in touch.
        </p>
      ) : null}
    </form>
  );
}
