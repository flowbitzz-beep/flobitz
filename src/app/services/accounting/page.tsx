import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { HeroSection } from "@/components/hero-section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Financial Services — Flow Bitz",
  description:
    "Accounting, bookkeeping, VAT, and corporate tax support from Flow Bitz.",
};

const partners = ["FinVault", "LedgerPro", "Taxwise", "ClearBooks", "NumeriQ"];

const financeThumbnails = [
  {
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=200&q=75",
    alt: "Finance chart",
  },
  {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=200&q=75",
    alt: "Accounting",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&q=75",
    alt: "Financial data",
  },
];

export default function AccountingPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HeroSection
          wordOne="Smart"
          wordTwo="Finance"
          image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Flow Bitz finance professional"
          thumbnails={financeThumbnails}
          sectionLabel="Financial Services"
          sectionBody="Bookkeeping, VAT, and corporate tax support — precise, dependable, compliant."
          ctaHref="/contact"
          ctaLabel="Discuss your finances"
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
                Financial services
              </p>
              <h2 className="mt-4 max-w-2xl font-anton text-[clamp(2rem,5vw,3.2rem)] uppercase leading-tight tracking-tight text-indigo-600">
                Compliance-ready finance support
              </h2>
            </ScrollReveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
              {/* Left image */}
              <ScrollReveal delay={0.05}>
                <div className="relative aspect-[3/4] min-h-[22rem] w-full overflow-hidden rounded-2xl border border-black/5 shadow-sm sm:min-h-[28rem] lg:sticky lg:top-24">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85"
                    alt="Finance team reviewing documents"
                    fill
                    className="object-cover object-[center_40%]"
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
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-indigo-500 to-blue-600 text-xs font-bold text-white shadow-sm"
                          >
                            {String.fromCharCode(64 + i)}
                          </span>
                        ))}
                      </div>
                      <div>
                        <p className="text-2xl font-semibold tabular-nums text-indigo-600 sm:text-3xl font-anton tracking-wide">
                          100%
                        </p>
                        <p className="text-sm uppercase tracking-widest text-zinc-500 font-medium">Compliance rate</p>
                      </div>
                    </div>
                    <ul className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span>
                          <strong className="text-zinc-900">Bookkeeping & month-end</strong> — routines you can trust, delivered on time.
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        <span>
                          <strong className="text-zinc-900">VAT & corporate tax</strong> — registration, deregistration, and filing aligned with your structure.
                        </span>
                      </li>
                    </ul>
                    <div className="mt-10 space-y-3">
                      <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                        <span>Client satisfaction</span>
                        <span className="text-indigo-600">98%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/5">
                        <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.14}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {[
                      { title: "VAT Management", body: "Full VAT registration, deregistration, and timely filing support." },
                      { title: "Corporate Tax", body: "Tax registration and strategy aligned to your business structure." },
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
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-indigo-600 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-md transition hover:bg-indigo-700"
                  >
                    Discuss your finances
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
