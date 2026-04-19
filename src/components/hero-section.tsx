"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

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
  // Refs for direct DOM mutation — avoids 60fps React re-renders
  const word1Ref = useRef<HTMLSpanElement>(null);
  const word2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf: number;
    const startTime = Date.now();

    const update = () => {
      const iTime = (Date.now() - startTime) / 1000;
      const waveDuration = 10.0;
      const waveTime = iTime % waveDuration;
      const wavePos = 1.3 - waveTime / (waveDuration * 0.5);
      const pct = wavePos * 100;

      if (word1Ref.current) {
        word1Ref.current.style.backgroundImage = `linear-gradient(to right, #E2E1DD 0%, #E2E1DD ${Math.max(0, pct - 15)}%, #0f0f45 ${pct}%, #E2E1DD ${Math.min(100, pct + 15)}%, #E2E1DD 100%)`;
      }
      if (word2Ref.current) {
        word2Ref.current.style.backgroundImage = `linear-gradient(to right, black 0%, black ${Math.max(0, pct - 10)}%, #0f0f45 ${pct}%, black ${Math.min(100, pct + 10)}%, black 100%)`;
      }

      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative min-h-svh w-full overflow-hidden bg-background">
      {/* Full-bleed character image or custom bg — right portion */}
      <div className="absolute inset-0 z-0 bg-background">
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
        {/* Left-side mask to fade out the WebGL lines, ensuring they emerge smoothly from the right side and text is highly readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FAF9F6] from-[15%] via-[#FAF9F6]/80 via-[40%] to-[rgba(250,249,246,0)]" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex min-h-svh flex-col">
        {/* Giant typography */}
        <div className="flex flex-1 flex-col justify-center px-6 pb-8 pt-28 sm:px-10 sm:pt-32 lg:px-16">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <span
              ref={word1Ref}
              className="block font-sans font-bold text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-tight bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(to right, #E2E1DD, #E2E1DD)' }}
            >
              {wordOne}
            </span>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
          >
            <span
              ref={word2Ref}
              className="block font-sans font-bold text-[clamp(3.5rem,11vw,9rem)] uppercase leading-[0.9] tracking-tight bg-clip-text text-transparent drop-shadow-sm"
              style={{ WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(to right, black, black)' }}
            >
              {wordTwo}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-4 sm:mt-5 max-w-lg"
          >
            <p className="text-base sm:text-lg text-zinc-500 leading-snug">
              {sectionBody}
            </p>
            <Link
              href={ctaHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#b642f8]/20 bg-[#b642f8] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#b642f8]/90"
            >
              {ctaLabel} <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
