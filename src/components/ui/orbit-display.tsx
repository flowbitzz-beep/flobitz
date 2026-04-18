"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface OrbitItem {
  icon: string | React.ReactNode;
  label: string;
}

interface OrbitDisplayProps {
  items: OrbitItem[];
}

export function OrbitDisplay({ items }: OrbitDisplayProps) {
  // Distribute items across 3 orbits
  const innerOrbit = items.slice(0, 2);
  const middleOrbit = items.slice(2, 4);
  const outerOrbit = items.slice(4, 6);

  return (
    <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.01)_0%,transparent_70%)]">
      {/* Central Brand Point with Flobitz Logo */}
      <div className="relative z-20 flex h-28 w-28 items-center justify-center rounded-[2rem] bg-white shadow-2xl shadow-[#0f0f45]/10 border border-[#0f0f45]/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f45] to-[#b642f8] opacity-[0.02]" />
        <div className="relative h-16 w-16">
          <Image
            src="/Flobitz.png"
            alt="Flobitz Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Inner Orbit (Radius: 110px) */}
      <OrbitRing 
        radius={110} 
        duration={35} 
        items={innerOrbit} 
        reverse={false}
      />

      {/* Middle Orbit (Radius: 210px) */}
      <OrbitRing 
        radius={210} 
        duration={50} 
        items={middleOrbit} 
        reverse={true}
      />

      {/* Outer Orbit (Radius: 310px) */}
      <OrbitRing 
        radius={310} 
        duration={75} 
        items={outerOrbit} 
        reverse={false}
      />
    </div>
  );
}

function OrbitRing({ 
  radius, 
  duration, 
  items, 
  reverse 
}: { 
  radius: number; 
  duration: number; 
  items: OrbitItem[]; 
  reverse: boolean;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Visual Ring */}
      <div 
        className="rounded-full border border-black/[0.025]"
        style={{ width: radius * 2, height: radius * 2 }}
      />
      
      {/* Rotating Container */}
      <motion.div
        className="absolute"
        style={{ width: radius * 2, height: radius * 2 }}
        animate={{ rotate: reverse ? -360 : 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, idx) => {
          const angle = (idx * 360) / items.length;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={idx}
              className="absolute flex flex-col items-center justify-center gap-2"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Icon Container (Counter-rotated) */}
              <motion.div
                className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.03] text-2xl transition-all duration-300 hover:scale-110 hover:border-[#b642f8]/20 hover:shadow-[#b642f8]/5"
                animate={{ rotate: reverse ? 360 : -360 }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
              >
                {item.icon}
              </motion.div>
              
              {/* Informative Label (Counter-rotated to stay readable) */}
              <motion.div
                className="pointer-events-none"
                animate={{ rotate: reverse ? 360 : -360 }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
              >
                <div className="whitespace-nowrap rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#0f0f45] shadow-sm border border-black/[0.02]">
                  {item.label}
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
