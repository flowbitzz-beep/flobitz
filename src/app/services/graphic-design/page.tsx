import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

/** Hero focal — local crystalline flower (transparent PNG). */
const HERO_IMAGE = "/graphic-design-hero.png";

const partners = [
  "Tribepad",
  "Vertex Labs",
  "Pulse HQ",
  "Frame Studio",
  "Opus Labs",
];

export default function GraphicDesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <h1 className="sr-only">Graphic design services — Flow Bitz</h1>
        {/* Hero — studio reference: purple → black, giant type behind, focal art, bottom bar */}
        <section className="relative min-h-dvh w-full overflow-hidden bg-black">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#6366f1] via-[#312e81] via-35% to-black"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_28%,rgba(196,181,253,0.35),transparent_60%)]"
            aria-hidden
          />

          {/* Oversized word behind focal (z-10) */}
          <div
            className="pointer-events-none absolute inset-x-0 top-[12vh] z-[5] flex justify-center sm:top-[10vh]"
            aria-hidden
          >
            <span className="font-anton select-none text-[clamp(4.5rem,22vw,14rem)] leading-[0.85] tracking-[-0.02em] text-white/[0.09]">
              DESIGN
            </span>
          </div>

          <div className="relative z-20 flex min-h-dvh flex-col pt-24 sm:pt-28">
            <div className="flex flex-1 flex-col items-center justify-center px-4 pb-8 sm:px-8">
              <div className="relative w-[min(88vw,480px)] sm:w-[min(78vw,520px)]">
                <div className="relative aspect-[4/5] w-full sm:aspect-square">
                  <Image
                    src={HERO_IMAGE}
                    alt="Crystalline glass flower — graphic design hero"
                    fill
                    className="object-contain object-center drop-shadow-[0_0_60px_rgba(167,139,250,0.45)]"
                    sizes="(max-width: 640px) 88vw, 520px"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/50 via-transparent to-violet-500/10 mix-blend-multiply ring-1 ring-white/10 sm:rounded-[2.5rem]" />
                </div>
                <div
                  className="pointer-events-none absolute -bottom-1 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-violet-300/70 to-transparent sm:h-28"
                  aria-hidden
                />
              </div>
            </div>


          </div>
        </section>

        {/* Logo ribbon */}
        <section className="border-y border-white/10 bg-white/[0.04] py-7 sm:py-9">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 sm:flex-nowrap sm:justify-between sm:gap-x-0 sm:px-8">
            {partners.map((name, i) => (
              <Fragment key={name}>
                {i > 0 ? (
                  <span
                    className="hidden h-5 w-px shrink-0 bg-white/15 sm:block"
                    aria-hidden
                  />
                ) : null}
                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.28em] sm:text-[11px] ${i === 3
                    ? "rounded-md bg-[#12081f] px-3 py-1.5 text-white ring-1 ring-white/20"
                    : "text-zinc-500"
                    }`}
                >
                  {name}
                </span>
              </Fragment>
            ))}
          </div>
        </section>

        {/* About — split layout */}
        <section className="border-t border-white/10 px-4 py-16 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-indigo-400">
                About us
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
                The role of user experience in modern design
              </h2>
            </ScrollReveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
              <ScrollReveal delay={0.05}>
                <div className="relative aspect-[3/4] min-h-[22rem] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_-24px_rgba(99,102,241,0.45)] sm:min-h-[28rem] lg:sticky lg:top-24">
                  <Image
                    src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=900&q=85"
                    alt="Portrait-oriented cinematic scene"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07030f] via-transparent to-violet-950/20" />
                </div>
              </ScrollReveal>

              <div className="flex flex-col gap-10">
                <ScrollReveal delay={0.1}>
                  <div className="glass-panel rounded-2xl p-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <span
                            key={i}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#030510] bg-gradient-to-br from-indigo-500 to-blue-600 text-xs font-bold text-white"
                          >
                            {String.fromCharCode(64 + i)}
                          </span>
                        ))}
                      </div>
                      <div>
                        <p className="text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                          4K+
                        </p>
                        <p className="text-sm text-zinc-400">Happy collaborators</p>
                      </div>
                    </div>
                    <ul className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                        <span>
                          <strong className="text-white">Sustainable creativity</strong>
                          — systems and components you can extend, not one-off files
                          that age overnight.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        <span>
                          <strong className="text-white">Strategy</strong> — narrative,
                          hierarchy, and motion timed to how people actually scroll.
                        </span>
                      </li>
                    </ul>
                    <div className="mt-10 space-y-3">
                      <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-500">
                        <span>Delivery</span>
                        <span className="text-indigo-300/90">82%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.14}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {[
                      {
                        title: "Brand & identity",
                        body: "Logos, type, color, and motion rules tuned for dark UI.",
                      },
                      {
                        title: "Campaign systems",
                        body: "Modular templates for launches, paid social, and email.",
                      },
                    ].map((card) => (
                      <div
                        key={card.title}
                        className="glass-panel rounded-2xl p-6 sm:p-7"
                      >
                        <h3 className="text-base font-semibold text-white">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                          {card.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.18}>
                  <Link
                    href="/contact"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/15 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_28px_-8px_rgba(99,102,241,0.55)] transition hover:bg-indigo-500/25"
                  >
                    Start a design sprint
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
