"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedGradientBackgroundProps {
  startingGap?: number;
  Breathing?: boolean;
  gradientColors?: string[];
  gradientStops?: number[];
  animationSpeed?: number;
  breathingRange?: number;
  containerClassName?: string;
  topOffset?: number;
}

/**
 * Animated Gradient Background component from 21st.dev (hammamikhairi/animated-gradient-background).
 * Creates a fluid, breathing radial glow.
 */
export const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  startingGap = 125,
  Breathing = true,
  gradientColors = ["#0f0e47", "#1a1a6b", "#0f0e47", "#1e3a8a", "#1e40af", "#3b82f6", "#e2e1dd"],
  gradientStops = [0, 15, 30, 45, 60, 85, 100],
  animationSpeed = 0.02,
  breathingRange = 10,
  containerClassName = "",
  topOffset = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentGap, setCurrentGap] = useState(startingGap);
  const timeRef = useRef(0);

  useEffect(() => {
    let animationFrame: number;

    const animateGradient = () => {
      timeRef.current += animationSpeed;

      if (Breathing) {
        const breathingOffset = Math.sin(timeRef.current) * breathingRange;
        setCurrentGap(startingGap + breathingOffset);
      }

      animationFrame = requestAnimationFrame(animateGradient);
    };

    animationFrame = requestAnimationFrame(animateGradient);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [startingGap, Breathing, animationSpeed, breathingRange]);

  const containerStyle: React.CSSProperties = {
    background: `radial-gradient(circle at center ${topOffset}%, ${gradientColors
      .map((color, index) => `${color} ${gradientStops[index] + (currentGap - startingGap)}%`)
      .join(", ")})`,
  };

  return (
    <motion.div
      key="animated-gradient-background"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`absolute inset-0 overflow-hidden ${containerClassName} -z-10`}
    >
      <div
        ref={containerRef}
        style={containerStyle}
        className="absolute inset-0 transition-transform opacity-40 sm:opacity-60"
      />
    </motion.div>
  );
};

export default AnimatedGradientBackground;
