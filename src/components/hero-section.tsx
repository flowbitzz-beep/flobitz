"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

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
  const [waveImpact, setWaveImpact] = useState(0); // 0 to 1 intensity

  useEffect(() => {
    let raf: number;
    const startTime = Date.now();
    
    const update = () => {
      const iTime = (Date.now() - startTime) / 1000;
      const waveDuration = 10.0; // Synced with shader
      const waveTime = iTime % waveDuration;
      // Mirror the shader's Gaussian wavePos logic: 1.3 -> -0.5
      const wavePos = 1.3 - (waveTime / (waveDuration * 0.5));
      
      // We want to trigger the glisten when the Gaussian wavePos is over the text
      // Text is roughly at uv.x [0.1, 0.5]. 
      // This maps wavePos directly to a normalized impact on the text.
      setWaveImpact(wavePos);
      
      raf = requestAnimationFrame(update);
    };
    
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  function smoothstep(min: number, max: number, value: number) {
    const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
    return x * x * (3 - 2 * x);
  }

  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-background">
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
      <div className="relative z-10 flex min-h-dvh flex-col">
        {/* Giant typography */}
        <div className="flex flex-1 flex-col justify-center px-6 pb-8 pt-28 sm:px-10 sm:pt-32 lg:px-16">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <span 
              className="block font-sans font-bold text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.9] tracking-tight bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, #E2E1DD 0%, #E2E1DD ${Math.max(0, waveImpact * 100 - 15)}%, #0f0f45 ${waveImpact * 100}%, #E2E1DD ${Math.min(100, waveImpact * 100 + 15)}%, #E2E1DD 100%)`,
                WebkitBackgroundClip: 'text',
              }}
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
              className="block font-sans font-bold text-[clamp(3.5rem,11vw,9rem)] uppercase leading-[0.9] tracking-tight bg-clip-text text-transparent drop-shadow-sm"
              style={{
                backgroundImage: `linear-gradient(to right, black 0%, black ${Math.max(0, waveImpact * 100 - 10)}%, #0f0f45 ${waveImpact * 100}%, black ${Math.min(100, waveImpact * 100 + 10)}%, black 100%)`,
                WebkitBackgroundClip: 'text',
              }}
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
