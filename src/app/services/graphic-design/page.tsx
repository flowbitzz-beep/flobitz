import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

/** Hero focal — local crystalline flower (transparent PNG). */
const HERO_IMAGE = "/graphic-design-hero.png";

export default function GraphicDesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <h1 className="sr-only">Graphic design services — Flow Bitz</h1>
        {/* Hero — studio reference: purple → black, giant type behind, focal art, bottom bar */}
        <section className="relative min-h-dvh w-full overflow-hidden bg-background">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-100/50 via-background via-35% to-background"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_28%,rgba(99,102,241,0.08),transparent_60%)]"
            aria-hidden
          />

          {/* Oversized word behind focal (z-10) */}
          <div
            className="pointer-events-none absolute inset-x-0 top-[12vh] z-[5] flex justify-center sm:top-[10vh]"
            aria-hidden
          >
            <span className="font-anton select-none text-[clamp(4.5rem,22vw,14rem)] leading-[0.85] tracking-[-0.02em] text-indigo-600/[0.06]">
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
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/5 via-transparent to-violet-500/5 ring-1 ring-black/5 sm:rounded-[2.5rem]" />
                </div>
                <div
                  className="pointer-events-none absolute -bottom-1 left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-violet-300/70 to-transparent sm:h-28"
                  aria-hidden
                />
              </div>
            </div>


          </div>
        </section>




        {/* About — split layout */}
        <section className="border-t border-black/5 bg-transparent px-4 py-16 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <ScrollReveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-indigo-600">
                About us
              </p>
              <h2 className="mt-4 max-w-2xl font-anton text-[clamp(2rem,5vw,3.2rem)] uppercase leading-tight tracking-tight text-indigo-600">
                The role of user experience in modern design
              </h2>
            </ScrollReveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
              <ScrollReveal delay={0.05}>
                <div className="relative aspect-[3/4] min-h-[22rem] w-full overflow-hidden rounded-2xl border border-black/5 shadow-sm sm:min-h-[28rem] lg:sticky lg:top-24">
                  <Image
                    src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=900&q=85"
                    alt="Portrait-oriented cinematic scene"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-violet-500/5" />
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
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-indigo-500 to-blue-600 text-xs font-bold text-white shadow-sm"
                          >
                            {String.fromCharCode(64 + i)}
                          </span>
                        ))}
                      </div>
                      <div>
                        <p className="text-2xl font-semibold tabular-nums text-indigo-600 sm:text-3xl font-anton tracking-wide">
                          4K+
                        </p>
                        <p className="text-sm uppercase tracking-widest text-zinc-500 font-medium">Happy collaborators</p>
                      </div>
                    </div>
                    <ul className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span>
                          <strong className="text-zinc-900">Sustainable creativity</strong>
                          — systems and components you can extend, not one-off files
                          that age overnight.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        <span>
                          <strong className="text-zinc-900">Strategy</strong> — narrative,
                          hierarchy, and motion timed to how people actually scroll.
                        </span>
                      </li>
                    </ul>
                    <div className="mt-10 space-y-3">
                      <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                        <span>Delivery</span>
                        <span className="text-indigo-600">82%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/5">
                        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 shadow-sm" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.14}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {[
                      {
                        title: "Brand & identity",
                        body: "Logos, type, color, and motion rules tuned for light UI.",
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
                        <h3 className="text-base font-semibold text-zinc-900">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                          {card.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.18}>
                  <Link
                    href="/contact"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-indigo-600 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-md transition hover:bg-indigo-700"
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
