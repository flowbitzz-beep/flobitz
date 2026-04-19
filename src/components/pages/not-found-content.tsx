"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SmokeBackground } from "@/components/ui/smoke-background";

export function NotFoundContent() {
  return (
    <>
      <SiteHeader />
      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#FAF9F6]">
        <div className="absolute inset-0 z-0">
          <SmokeBackground smokeColor="#0f0e47" />
        </div>
        <div className="relative z-10 flex flex-col items-center px-4 text-center">
          <ScrollReveal>
             <div className="font-anton select-none text-[clamp(6rem,30vw,20rem)] leading-none tracking-tighter text-[#0f0e47]/10 uppercase mb-4">404</div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-[#0f0e47]">
              Lost in the <span className="text-zinc-400">Ecosystem?</span>
            </h1>
            <p className="mt-6 text-zinc-500 max-w-sm mx-auto leading-relaxed">
              We couldn't find the page you were looking for. Let's get you back to the center of precision.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12">
              <Link href="/" className="inline-flex items-center gap-4 rounded-full bg-[#0f0e47] px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-white shadow-2xl transition-all hover:bg-zinc-900 hover:scale-105 active:scale-95">
                Return Home <span className="text-xl">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
