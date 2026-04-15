"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type HeroThumbnail = {
  src: string;
  alt: string;
};

type HeroSectionProps = {
  wordOne: string;
  wordTwo: string;
  image?: string;
  imageAlt?: string;
  bgComponent?: React.ReactNode;
  thumbnails?: HeroThumbnail[];
  sectionLabel: string;
  sectionBody: string;
  ctaHref?: string;
  ctaLabel?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection({
  wordOne,
  wordTwo,
  image,
  imageAlt,
  bgComponent,
  thumbnails = [],
  sectionLabel,
  sectionBody,
  ctaHref = "/contact",
  ctaLabel = "Discover more",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-[#03050f]">
      {/* Full-bleed character image or custom bg — right portion */}
      <div className="absolute inset-0 z-0 bg-black">
        {bgComponent ? (
          bgComponent
        ) : (
          image && (
            <Image
              src={image}
              alt={imageAlt || ""}
              fill
              className="object-cover object-[70%_center]"
              sizes="100vw"
              priority
            />
          )
        )}
        {/* Left dark gradient so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black from-[20%] via-black/75 via-[45%] to-transparent pointer-events-none" />
        {/* Top vignette */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />
        {/* Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        {/* Indigo atmospheric glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_72%_45%,rgba(99,102,241,0.15),transparent_65%)]" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex min-h-dvh flex-col">
        {/* Giant typography */}
        <div className="flex flex-1 flex-col justify-center px-6 pb-8 pt-28 sm:px-10 sm:pt-32 lg:px-16">
          <motion.span
            className="block font-anton text-[clamp(2.8rem,11vw,8rem)] uppercase leading-[0.88] tracking-tight text-white/[0.08]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            {wordOne}
          </motion.span>
          <motion.span
            className="block font-anton text-[clamp(4.5rem,19vw,14rem)] uppercase leading-[0.85] tracking-tight text-white"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
          >
            {wordTwo}
          </motion.span>
        </div>

        {/* Bottom info bar */}
        <motion.div
          className="grid gap-6 border-t border-white/10 bg-black/25 px-6 py-6 backdrop-blur-sm sm:grid-cols-2 sm:items-center sm:px-10 lg:px-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
        >
          {/* Thumbnails */}
          <div className="flex gap-2.5">
            {thumbnails.map((t, i) => (
              <div
                key={i}
                className="relative h-14 w-14 overflow-hidden rounded-xl border border-white/15 shadow-md sm:h-[3.75rem] sm:w-[3.75rem]"
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  className="object-cover object-[70%_center]"
                  sizes="72px"
                />
              </div>
            ))}
          </div>

          {/* Right info */}
          <div className="sm:text-right">
            <p className="text-base font-semibold text-white sm:text-lg">{sectionLabel}</p>
            <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-zinc-400 sm:ml-auto">
              {sectionBody}
            </p>
            <Link
              href={ctaHref}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-indigo-400/50 hover:bg-indigo-500/20"
            >
              {ctaLabel} <span aria-hidden>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
