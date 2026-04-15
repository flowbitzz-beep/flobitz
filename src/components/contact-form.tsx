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
      className="glass-panel mx-auto max-w-lg space-y-5 rounded-2xl p-8"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-zinc-400">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-indigo-500/30 transition placeholder:text-zinc-500 focus:border-indigo-400/60 focus:ring-2"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-zinc-400">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-indigo-500/30 transition placeholder:text-zinc-500 focus:border-indigo-400/60 focus:ring-2"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-2 block text-sm text-zinc-400">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-indigo-500/30 transition placeholder:text-zinc-500 focus:border-indigo-400/60 focus:ring-2"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-zinc-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-indigo-500/30 transition placeholder:text-zinc-500 focus:border-indigo-400/60 focus:ring-2"
          placeholder="Tell us about your project or goals."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full border border-indigo-500/40 bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:bg-indigo-700"
      >
        Contact us today
      </button>
      {sent ? (
        <p className="text-center text-sm text-indigo-300">
          If your email client did not open, write us at{" "}
          <a href="mailto:hello@flowbitz.com" className="font-medium underline">
            hello@flowbitz.com
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
