import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ShaderBackground } from "@/components/ui/shader-background";

/* ─── Data ─────────────────────────────────────────────────── */

const services = [
  {
    title: "IT Services",
    tag: "Technology",
    description:
      "Custom web & software development, cloud solutions, and AI chatbots that power your business digitally.",
    href: "/services/technology",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 8l3 3-3 3M13 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Financial Services",
    tag: "Accounting",
    description:
      "Bookkeeping, VAT registration & filing, and corporate tax support — clear processes, dependable results.",
    href: "/services/accounting",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 14l4-5 4 3 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    tag: "Creative",
    description:
      "Branding, logo design, video editing, visual content, and social media that make your business stand out.",
    href: "/services/graphic-design",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const stats = [
  { value: "50+", label: "Projects completed" },
  { value: "15+", label: "Ongoing projects" },
  { value: "3+",  label: "Years of experience" },
];

const whyChoose = [
  { icon: "⚡", label: "Expert team" },
  { icon: "🧠", label: "Innovative solutions" },
  { icon: "🤝", label: "Client-centric approach" },
  { icon: "💰", label: "Affordable pricing" },
  { icon: "🔄", label: "End-to-end services" },
  { icon: "🚀", label: "Fast delivery" },
];

const steps = [
  { n: "01", title: "Understand", body: "We deeply learn your goals, challenges, and vision." },
  { n: "02", title: "Plan",       body: "We design a clear strategy and roadmap tailored to you." },
  { n: "03", title: "Execute",    body: "Our team builds, iterates, and refines with precision." },
  { n: "04", title: "Deliver",    body: "You receive a polished result with ongoing support." },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">

        {/* ── Hero ── */}
        <HeroSection
          wordOne="Smart"
          wordTwo="Business"
          bgComponent={<ShaderBackground />}
          thumbnails={[
            { src: "/hero-technology.png", alt: "IT services" },
            { src: "/hero-finance.png",    alt: "Financial services" },
            { src: "/hero-design.png",     alt: "Graphic design" },
          ]}
          sectionLabel="Flow Bitz Agency"
          sectionBody="Technology, finance & design — combined to accelerate your business."
          ctaHref="/contact"
          ctaLabel="Get started"
        />

        {/* ── Services ── */}
        <section id="services" className="scroll-mt-20 bg-black px-4 py-32 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
                What we offer
              </p>
            </ScrollReveal>

            <div className="mt-16 flex flex-col gap-12">
              {services.map((s, i) => (
                <ScrollReveal key={s.href} delay={0.05 * i} className="group border-b border-white/5 pb-12 last:border-0 last:pb-0">
                  <Link href={s.href} className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
                    <div className="flex items-center gap-6 md:w-1/3">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 transition-transform group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:text-indigo-300">
                        {s.icon}
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 transition-colors group-hover:text-indigo-400">
                          {s.tag}
                        </p>
                        <h3 className="mt-1 font-anton text-3xl uppercase tracking-wide text-white transition-colors group-hover:text-indigo-100">
                          {s.title}
                        </h3>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-lg leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300">
                        {s.description}
                      </p>
                      <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-indigo-400 opacity-0 transition-all group-hover:opacity-100">
                        Explore <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats + About ── */}
        <section className="bg-black px-4 py-32 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 lg:items-center">

              {/* Stats */}
              <div>
                <ScrollReveal>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
                    By the numbers
                  </p>
                  <h2 className="mt-3 font-anton text-[clamp(2rem,5vw,3.2rem)] uppercase tracking-tight text-white">
                    Built on results
                  </h2>
                </ScrollReveal>
                <div className="mt-10 grid grid-cols-3 gap-6">
                  {stats.map((s, i) => (
                    <ScrollReveal key={s.label} delay={0.07 * i}>
                      <div className="text-center">
                        <p className="font-anton text-[clamp(2.5rem,6vw,4rem)] uppercase text-white drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                          {s.value}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-widest text-zinc-500">{s.label}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* About text */}
              <ScrollReveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-zinc-400">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
                  About Flow Bitz
                </p>
                <p>
                  Flow Bitz is a dynamic, forward-thinking company delivering high-quality IT, financial, and
                  graphic design solutions to businesses of all sizes. With over{" "}
                  <strong className="text-white">3+ years of industry experience</strong>, we have built a
                  strong foundation of trust, innovation, and excellence.
                </p>
                <p>
                  Our team of{" "}
                  <strong className="text-white">multi-talented professionals</strong> works collaboratively
                  to provide smart, efficient, and customized solutions tailored to each client's goals.
                </p>
                <Link
                  href="/about"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-indigo-400 transition hover:text-indigo-300 uppercase"
                >
                  Read more about us <span aria-hidden>→</span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Why Choose ── */}
        <section className="bg-black px-4 py-32 sm:px-6 border-t border-white/5">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
                Why us
              </p>
              <h2 className="mt-3 font-anton text-[clamp(2rem,5vw,3.5rem)] uppercase tracking-tight text-white">
                Why choose Flow Bitz
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
              {whyChoose.map((item, i) => (
                <ScrollReveal key={item.label} delay={0.05 * i}>
                  <div className="flex items-center gap-6">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-2xl">
                      {item.icon}
                    </span>
                    <span className="text-lg font-medium text-white">{item.label}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="bg-black px-4 py-32 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
                How we work
              </p>
              <h2 className="mt-3 font-anton text-[clamp(2rem,5vw,3.5rem)] uppercase tracking-tight text-white">
                Our Process
              </h2>
            </ScrollReveal>

            <div className="mt-16 flex flex-col gap-10">
              {steps.map((step, i) => (
                <ScrollReveal key={step.n} delay={0.07 * i} className="flex gap-6 md:gap-12">
                  <div className="flex flex-col items-center gap-4">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 font-anton text-2xl text-indigo-400">
                      {step.n}
                    </span>
                    {i !== steps.length - 1 && (
                      <div className="h-full w-px bg-white/10" aria-hidden />
                    )}
                  </div>
                  <div className="pb-10 pt-2">
                    <h3 className="font-anton text-3xl uppercase tracking-wide text-white">{step.title}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-zinc-400">{step.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-black px-4 py-32 sm:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-indigo-950/20 shadow-[inset_0_0_80px_rgba(99,102,241,0.05)] border border-indigo-500/10 px-8 py-20 text-center sm:px-16">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
                Get in touch
              </p>
              <h2 className="mt-4 font-anton text-[clamp(2.5rem,6vw,5rem)] uppercase tracking-tight text-white">
                Ready to grow?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Let Flow Bitz help you achieve your goals with smart technology, finance, and creative solutions.
              </p>
              <Link
                href="/contact"
                className="mt-12 inline-flex rounded-full bg-white px-12 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200 uppercase tracking-widest"
              >
                Let's talk
              </Link>
            </div>
          </ScrollReveal>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
