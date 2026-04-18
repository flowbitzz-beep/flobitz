import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { HeroSection } from "@/components/hero-section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "IT Services — Flow Bitz",
  description:
    "Custom development, cloud solutions, and AI chatbots from Flow Bitz.",
};

const partners = ["Tribepad", "Vertex Labs", "Pulse HQ", "Frame Studio", "Opus Labs"];

const techThumbnails = [
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14431b9?auto=format&fit=crop&w=200&q=75",
    alt: "Code",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&q=75",
    alt: "Circuit board",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&q=75",
    alt: "Developer",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HeroSection
          wordOne="Smart"
          wordTwo="Technology"
          image="/hero-technology-light.png"
          imageAlt="Flow Bitz tech professional"
          thumbnails={techThumbnails}
          sectionLabel="IT Services"
          sectionBody="Custom development, cloud solutions, and AI chatbots — built to scale."
          ctaHref="/contact"
          ctaLabel="Start a project"
        />

        {/* Partner ribbon */}
        <section className="border-y border-black/5 bg-black/[0.01] py-7 sm:py-9">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 sm:flex-nowrap sm:justify-between sm:gap-x-0 sm:px-8">
            {partners.map((name, i) => (
              <Fragment key={name}>
                {i > 0 && (
                  <span className="hidden h-5 w-px shrink-0 bg-black/5 sm:block" aria-hidden />
                )}
                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.28em] sm:text-[11px] ${
                    i === 2
                      ? "rounded-md bg-indigo-50 px-3 py-1.5 text-indigo-600 ring-1 ring-indigo-200"
                      : "text-zinc-500"
                  }`}
                >
                  {name}
                </span>
              </Fragment>
            ))}
          </div>
        </section>

        {/* About split */}
        <section className="px-4 py-20 sm:px-8 sm:py-28 lg:py-32 bg-transparent">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-indigo-600">
                IT services
              </p>
              <h2 className="mt-4 max-w-2xl font-anton text-[clamp(2rem,5vw,3.2rem)] uppercase leading-tight tracking-tight text-indigo-600">
                Power your business digitally
              </h2>
            </ScrollReveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
              {/* Left image */}
              <ScrollReveal delay={0.05}>
                <div className="relative aspect-[3/4] min-h-[22rem] w-full overflow-hidden rounded-2xl border border-black/5 shadow-md sm:min-h-[28rem] lg:sticky lg:top-24">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85"
                    alt="Developer working on technology solutions"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/5" />
                </div>
              </ScrollReveal>

              {/* Right content */}
              <div className="flex flex-col gap-8">
                <ScrollReveal delay={0.1}>
                  <div className="glass-panel rounded-2xl p-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <span
                            key={i}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-indigo-500 to-cyan-600 text-xs font-bold text-white shadow-sm"
                          >
                            {String.fromCharCode(64 + i)}
                          </span>
                        ))}
                      </div>
                      <div>
                        <p className="text-2xl font-semibold tabular-nums text-indigo-600 sm:text-3xl font-anton tracking-wide">
                          50+
                        </p>
                        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">Projects delivered</p>
                      </div>
                    </div>
                    <ul className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span>
                          <strong className="text-zinc-900">Custom development</strong> — modern web and software built for your exact workflow.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                        <span>
                          <strong className="text-zinc-900">Cloud & AI</strong> — scalable cloud architecture, AI chatbots, and automation that fit how you operate.
                        </span>
                      </li>
                    </ul>
                    <div className="mt-10 space-y-3">
                      <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                        <span>Project success rate</span>
                        <span className="text-indigo-600">96%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/5">
                        <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-sm" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.14}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {[
                      { title: "Web & Apps", body: "Fast, modern websites and custom applications for any scale." },
                      { title: "Cloud & DevOps", body: "Reliable infrastructure, CI/CD pipelines, and managed hosting." },
                    ].map((card) => (
                      <div key={card.title} className="glass-panel rounded-2xl p-6 sm:p-7">
                        <h3 className="text-base font-semibold text-zinc-900">{card.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-600">{card.body}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.18}>
                  <Link
                    href="/contact"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 uppercase tracking-widest"
                  >
                    Start a project
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
