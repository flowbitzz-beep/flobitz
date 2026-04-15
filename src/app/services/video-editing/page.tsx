import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Video editing — Flow Bitz",
  description:
    "Video editing and visual content that makes your business stand out.",
};

export default function VideoEditingPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 pb-20 pt-24 sm:px-6 sm:pt-28">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">
            Video editing
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Visual content that stands out
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Part of our creative offering: video editing and motion-led storytelling
            alongside branding and social assets — so your message stays consistent
            everywhere.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <ul className="mt-10 space-y-4 text-zinc-300">
            {[
              "Social cuts, explainers, and launch films with a clear narrative arc",
              "Captions, aspect ratios, and platform-ready masters",
              "Aligned art direction with your wider graphic design work",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400" />
                {line}
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <Link
            href="/contact"
            className="mt-12 inline-flex rounded-full border border-violet-400/45 bg-violet-500/20 px-8 py-3 text-sm font-semibold text-white transition hover:bg-violet-500/30"
          >
            Contact us today
          </Link>
        </ScrollReveal>
      </main>
      <SiteFooter />
    </>
  );
}
