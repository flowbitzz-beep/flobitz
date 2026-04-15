import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "About us — Flow Bitz",
  description:
    "Flow Bitz delivers IT, financial, and graphic design solutions with over three years of experience.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 pb-24 pt-24 sm:px-6 sm:pt-28">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400">
            About Flow Bitz
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Brief intro
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.06} className="mt-10 space-y-6 text-lg leading-relaxed text-zinc-400">
          <p>
            Flow Bitz is a dynamic and forward-thinking company delivering high-quality
            IT, financial, and graphic design solutions to businesses of all sizes. With
            over{" "}
            <strong className="text-white">3+ years of industry experience</strong>, we
            have built a strong foundation of trust, innovation, and excellence.
          </p>
          <p>
            Our team consists of{" "}
            <strong className="text-white">multi-talented professionals</strong>{" "}
            specializing in technology, finance, and creative design. We work
            collaboratively to provide smart, efficient, and customized solutions
            tailored to each client&apos;s needs.
          </p>
          <p>
            Over the years, we have successfully completed{" "}
            <strong className="text-white">50+ projects</strong> for clients across
            various industries, helping them improve performance, strengthen their
            digital presence, and achieve their business goals. Currently, we are
            actively working on{" "}
            <strong className="text-white">15+ ongoing projects</strong>, ensuring
            continuous growth and long-term partnerships.
          </p>
          <p>
            At Flow Bitz, we believe in delivering not just services, but{" "}
            <strong className="text-white">value and results</strong>. Our commitment
            to quality, transparency, and client satisfaction makes us a trusted partner
            for businesses looking to grow and succeed in today&apos;s competitive market.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <Link
            href="/contact"
            className="mt-12 inline-flex rounded-full border border-indigo-500/40 bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/15 transition hover:bg-indigo-700"
          >
            Contact us today
          </Link>
        </ScrollReveal>
      </main>
      <SiteFooter />
    </>
  );
}
