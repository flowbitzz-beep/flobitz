"use client";

import { Lenis as ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";

const lenisOptions = {
  lerp: 0.14,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1,
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
