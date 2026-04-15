"use client";

import type { ReactNode } from "react";
import { ShaderBackground } from "@/components/ui/shader-background";

type HomeHeroProps = {
  children: ReactNode;
};

export function HomeHero({ children }: HomeHeroProps) {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-[#07030f]">
      <ShaderBackground />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_90%_70%_at_50%_-5%,rgba(99,102,241,0.32),transparent_52%),radial-gradient(ellipse_55%_45%_at_100%_25%,rgba(59,130,246,0.16),transparent),linear-gradient(to_bottom,rgba(3,5,15,0.35),rgba(3,5,15,0.72),rgba(3,5,15,0.94))]"
        aria-hidden
      />
      <div className="relative z-10 flex min-h-dvh flex-col justify-center px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20">
        {children}
      </div>
    </section>
  );
}
