"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Rocket, Workflow, Users, Star } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmokeBackground } from "@/components/ui/smoke-background";

function Counter({ from, to }: { from: number, to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.floor(value).toString();
          }
        },
        onComplete: () => setIsCompleted(true),
      });
      return () => controls.stop();
    }
  }, [isInView, from, to]);

  return (
    <motion.span
      ref={nodeRef}
      animate={isCompleted ? { scale: [1, 1.1, 1] } : { scale: 1 }}
      transition={isCompleted ? { duration: 0.6, ease: "easeOut" } : { type: "spring", stiffness: 300, damping: 20 }}
    >
      {from}
    </motion.span>
  );
}

function BentoCard({ value, to, label, icon, bgColor, borderColor, hoverShadow, className = "", delay = 0 }: any) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ScrollReveal delay={delay} className={className}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative overflow-hidden rounded-[2.5rem] border ${borderColor} ${bgColor} transition-all duration-700 hover:shadow-2xl ${hoverShadow} h-full flex flex-col justify-center px-10 py-12`}
      >
        <motion.div
          className="absolute -right-6 -top-6 h-56 w-56 opacity-[0.05] transition-colors duration-500 group-hover:opacity-[0.1]"
          animate={{ rotate: isHovered ? 20 : 0, scale: isHovered ? 1.25 : 1, x: isHovered ? 15 : 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 25 }}
          style={{ color: "#0f0f45" }}
        >
          {icon}
        </motion.div>
        <div className="relative z-10">
          <p className="font-sans font-bold text-[clamp(4rem,8vw,6rem)] uppercase tracking-tighter leading-none text-[#0f0f45]">
            <Counter from={value} to={to} />+
          </p>
          <p className="mt-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-[#0f0f45]/60 max-w-[180px]">{label}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function AboutContent() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col flex-1">
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#FAF9F6]">
          <div className="absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
            <SmokeBackground smokeColor="#0f0e47" />
          </div>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 relative z-10 pt-20">
            <ScrollReveal>
              <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,6rem)] uppercase tracking-tighter leading-none text-black flex flex-wrap items-baseline gap-x-4">
                ABOUT
                <span className="relative inline-block bg-clip-text text-transparent animate-smoke-text"
                      style={{ 
                        backgroundImage: 'radial-gradient(circle at 20% 30%, #E2E1DD 0%, transparent 50%), radial-gradient(circle at 80% 70%, #0f0e47 0%, transparent 60%), radial-gradient(circle at 10% 90%, #FAF9F6 0%, transparent 70%)',
                        backgroundColor: '#E2E1DD', WebkitBackgroundClip: 'text', WebkitTextStroke: '1px rgba(226, 225, 221, 0.4)'
                      }}>US</span>
              </h1>
              <p className="mt-12 max-w-2xl text-base sm:text-lg text-zinc-500 leading-snug">
                Flobitz is a dynamic and forward-thinking company delivering high-quality IT, financial, and graphic design solutions to businesses of all sizes. With over 3+ years of industry experience, we have built a strong foundation of trust, innovation, and excellence.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-transparent py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ScrollReveal>
                <div className="group h-full rounded-[2.5rem] border border-[#06b6d4]/10 bg-cyan-50/30 p-12 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 mb-8 transition-transform group-hover:scale-110"><Users className="h-6 w-6 text-cyan-500" /></div>
                  <h2 className="text-3xl font-black uppercase tracking-tight text-[#0f0f45]">Our Team</h2>
                  <p className="mt-8 text-lg text-zinc-600 leading-relaxed">Our team consists of multi-talented professionals specializing in technology, finance, and creative design. We work collaboratively to provide smart, efficient, and customized solutions tailored to each client's needs.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="group h-full rounded-[2.5rem] border border-[#b642f8]/10 bg-purple-50/30 p-12 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 mb-8 transition-transform group-hover:scale-110"><Star className="h-6 w-6 text-[#b642f8]" /></div>
                  <h2 className="text-3xl font-black uppercase tracking-tight text-[#0f0f45]">Our Belief</h2>
                  <p className="mt-8 text-lg text-zinc-600 leading-relaxed">At Flobitz, we believe in delivering not just services, but value and results. Our commitment to quality, transparency, and client satisfaction makes us a trusted partner for businesses looking to grow and succeed.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="relative py-20 lg:py-32 bg-transparent">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <ScrollReveal>
                 <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#0f0f45]/60 mb-6">Impact</p>
                 <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-black uppercase tracking-tight leading-[0.9] text-[#0f0f45]">Proven <br /><span className="text-zinc-300">Success.</span></h2>
                 <p className="mt-8 text-lg text-zinc-500 leading-relaxed max-w-md">Over the years, we have successfully completed 50+ projects for clients across various industries, helping them improve performance, strengthen their digital presence, and achieve their business goals.</p>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <BentoCard value={0} to={50} label="Completed Projects" bgColor="bg-[#F5F3FF]" borderColor="border-[#DDD6FE]" hoverShadow="hover:shadow-purple-500/10" icon={<Rocket />} />
                <BentoCard delay={0.1} value={0} to={15} label="Ongoing Partnerships" bgColor="bg-[#F0FDF4]" borderColor="border-[#BBF7D0]" hoverShadow="hover:shadow-emerald-500/10" icon={<Workflow />} />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative mt-32">
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]"><svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-[#0f172a]"><path d="M0,0 C150,0 200,100 600,100 C1000,100 1050,0 1200,0 L1200,120 L0,120 Z" /></svg></div>
          <div className="relative z-10 bg-[#0f172a] text-white pb-24 pt-12">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <ScrollReveal className="flex-1 text-center md:text-left"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#b642f8]/80">Next Step</p><h2 className="mt-4 font-sans font-bold text-3xl sm:text-5xl uppercase tracking-tighter leading-tight text-white">Ready to build <br /><span className="text-zinc-400">your success?</span></h2></ScrollReveal>
                <ScrollReveal delay={0.2}><motion.a href="/contact" whileHover={{ scale: 1.05 }} className="flex items-center gap-4 rounded-full bg-white px-10 py-5 text-[#0f172a] font-black transition-all shadow-2xl hover:shadow-[#b642f8]/30"><Rocket className="h-5 w-5" /><span className="text-xs uppercase tracking-[0.15em]">Let's Connect</span></motion.a></ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
