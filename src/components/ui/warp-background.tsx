"use client";

import { Warp } from "@paper-design/shaders-react";
import { Suspense } from "react";

export function WarpBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-[#0f0e47] overflow-hidden">
      <Suspense fallback={<div className="w-full h-full bg-[#0f0e47]" />}>
        <Warp
          style={{ width: "100%", height: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={0.4}
          colors={[
            "hsl(215, 60%, 40%)", // Rich Royal Blue
            "hsl(255, 50%, 45%)", // Deep Amethyst
            "hsl(200, 70%, 45%)", // Intense Deep Sky
            "hsl(280, 45%, 40%)", // Midnight Purple
          ]}
        />
      </Suspense>
    </div>
  );
}
