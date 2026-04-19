"use client";

import { Lenis as ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";

const lenisOptions = {
  lerp: 0.07,          // Lower = silkier smooth scroll on desktop
  smoothWheel: true,
  wheelMultiplier: 1.1,
  autoRaf: true,
  anchors: true,
} satisfies LenisOptions;

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
