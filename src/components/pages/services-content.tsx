"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WarpBackground } from "@/components/ui/warp-background";
import { SmokeBackground } from "@/components/ui/smoke-background";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Globe, Code, MessageCircle, PenTool, Video, Calculator, FileText, Database } from "lucide-react";

export function ServicesContent() {
  const [techIndex, setTechIndex] = useState(0);
  const techImages = ["/image.png", "/image2.png"];

  useEffect(() => {
    const timer = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % techImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-[#FAF9F6]">
        <section className="relative min-h-dvh w-full overflow-hidden bg-[#FAF9F6] flex flex-col justify-center">
          <div className="absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
            <SmokeBackground smokeColor="#0f0e47" />
          </div>
          <div className="relative z-20 flex flex-col pt-24 sm:pt-28">
            <div className="flex flex-1 flex-col items-center justify-center px-4 pb-16 sm:px-8">
              <ScrollReveal delay={0.1}>
                <div className="text-center max-w-4xl">
                  <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,5.5rem)] uppercase tracking-tighter leading-[0.9] text-black">
                    The Ecosystem of <span className="text-zinc-500">Precision</span>
                  </h1>
                  <div className="mt-4 flex justify-center">
                    <span className="font-anton select-none text-[clamp(2rem,6vw,4.5rem)] leading-none tracking-[-0.02em] uppercase bg-clip-text text-transparent animate-smoke-text"
                          style={{ 
                            backgroundImage: 'radial-gradient(circle at 20% 30%, #E2E1DD 0%, transparent 50%), radial-gradient(circle at 80% 70%, #0f0e47 0%, transparent 60%), radial-gradient(circle at 10% 90%, #FAF9F6 0%, transparent 70%)',
                            backgroundColor: '#E2E1DD', WebkitBackgroundClip: 'text', WebkitTextStroke: '1px rgba(15, 23, 71, 0.05)'
                          }}>SERVICES</span>
                  </div>
                  <p className="mt-8 text-lg sm:text-xl text-zinc-600 leading-snug max-w-2xl mx-auto font-medium">
                    We bridge the gap between creative vision, technological power, and financial accuracy.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="it" className="relative py-24 sm:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f0e47 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <ScrollReveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f0e47]/5 border border-[#0f0e47]/10 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#0f0e47] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0f0e47]">Technology</span>
                  </div>
                  <h2 className="text-[clamp(2.5rem,8vw,4.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-[#0f0e47]">Digital Foundations</h2>
                  <p className="mt-8 text-lg text-zinc-500 max-w-xl">We build custom websites, software, and AI chatbots that help businesses work smarter, connect better, and grow faster.</p>
                </ScrollReveal>
                <div className="mt-12 space-y-8">
                  <ScrollReveal delay={0.1}>
                    <div className="flex gap-6 group">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#0f0e47] flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110"><Globe className="w-6 h-6" /></div>
                      <div>
                        <h3 className="text-lg font-bold text-black uppercase tracking-tight">Website Development</h3>
                        <p className="text-sm text-zinc-500 mt-2 leading-relaxed">Custom design, E-commerce, and mobile-friendly optimization built for high performance.</p>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                    <div className="flex gap-6 group">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110"><Code className="w-6 h-6" /></div>
                      <div>
                        <h3 className="text-lg font-bold text-black uppercase tracking-tight">Software Development</h3>
                        <p className="text-sm text-zinc-500 mt-2 leading-relaxed">Automate workflows with custom web apps and desktop solutions built to scale.</p>
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.3}>
                    <div className="flex gap-6 group">
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-zinc-300 flex items-center justify-center text-[#0f0e47] shadow-lg transition-transform group-hover:scale-110"><MessageCircle className="w-6 h-6" /></div>
                      <div>
                        <h3 className="text-lg font-bold text-black uppercase tracking-tight">AI Chatbots</h3>
                        <p className="text-sm text-zinc-500 mt-2 leading-relaxed">Intelligent support automation and lead generation to engage your users 24/7.</p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <ScrollReveal delay={0.4}>
                  <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl bg-zinc-50">
                    <AnimatePresence>
                      <motion.div key={techIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, ease: "linear" }} className="absolute inset-0">
                        <Image src={techImages[techIndex]} alt="Technology professional" fill className="object-cover" priority />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-[#0f0e47]/10 mix-blend-overlay" />
                    <div className="absolute bottom-10 right-10 flex gap-2 z-20">
                      {techImages.map((_, i) => (<div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === techIndex ? "bg-white w-4" : "bg-white/30"}`} />))}
                    </div>
                    <div className="absolute bottom-10 left-10 p-6 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl z-20"><p className="text-4xl font-black text-[#0f0e47] leading-none">50+</p><p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-2">Projects Delivered</p></div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section id="creative" className="relative py-24 sm:py-32 overflow-hidden text-white bg-transparent">
          <WarpBackground />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
            <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2 relative flex justify-center">
                <ScrollReveal><div className="relative w-[min(85vw,480px)]"><div className="relative aspect-square w-full animate-float"><Image src="/graphic-design-hero.png" alt="Crystalline glass flower" fill className="object-contain object-center drop-shadow-[0_0_80px_rgba(255,255,255,0.2)]" /></div><div className="absolute inset-0 rounded-full bg-white/5 blur-3xl -z-10" /></div></ScrollReveal>
              </div>
              <div className="w-full lg:w-1/2">
                <ScrollReveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#E2E1DD] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E2E1DD]">Creative Studio</span>
                  </div>
                  <h2 className="text-[clamp(2.5rem,8vw,4.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-white">Visual Identity</h2>
                  <p className="mt-8 text-lg text-zinc-300 max-w-xl">Your brand deserves clean, impactful visuals that actually work. We create consistent assets that build trust and drive results.</p>
                </ScrollReveal>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <ScrollReveal delay={0.1}>
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <PenTool className="w-8 h-8 text-[#E2E1DD] mb-4" />
                      <h3 className="font-bold uppercase tracking-tight text-white">Impactful Graphics</h3>
                      <p className="text-sm text-zinc-400 mt-2">Clean, functional designs tailored for your audience.</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <Globe className="w-8 h-8 text-[#E2E1DD] mb-4" />
                      <h3 className="font-bold uppercase tracking-tight text-white">Brand Identities</h3>
                      <p className="text-sm text-zinc-400 mt-2">Strong, consistent visuals that define your presence.</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.3}>
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <Video className="w-8 h-8 text-[#E2E1DD] mb-4" />
                      <h3 className="font-bold uppercase tracking-tight text-white">High-Quality Ads</h3>
                      <p className="text-sm text-zinc-400 mt-2">Professional creatives built for conversions.</p>
                    </div>
                  </ScrollReveal>
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-[#E2E1DD] to-white text-[#0f0e47] flex flex-col justify-center"><p className="text-3xl font-black leading-none italic">MOTION-LED</p><p className="text-[10px] font-bold uppercase tracking-widest mt-2">Storytelling Focused</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="finance" className="relative py-24 sm:py-32 overflow-hidden bg-[#FAF9F6]">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(15,23,71,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,71,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="w-full lg:w-1/3 pt-4">
                <ScrollReveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f0e47]/5 border border-[#0f0e47]/10 mb-6"><span className="w-2 h-2 rounded-full bg-[#0f0e47]" /><span className="text-[10px] font-bold uppercase tracking-widest text-[#0f0e47]">Financial</span></div>
                  <h2 className="text-[clamp(2.5rem,6vw,3.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-[#0f0e47]">Financial Precision</h2>
                  <p className="mt-8 text-base text-zinc-500">Simplifying your financial processes so you can focus on growth while we handle the numbers across Dubai and the UAE.</p>
                </ScrollReveal>
                <div className="mt-12 p-8 rounded-[2rem] bg-zinc-950 text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Calculator className="w-32 h-32" /></div>
                  <p className="text-5xl font-black tabular-nums tracking-tighter">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mt-2">Compliance Guaranteed</p>
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E2E1DD]"><span className="w-2 h-2 rounded-full bg-[#E2E1DD]" />UAE FTA GUIDELINES</div>
                </div>
              </div>
              <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <ScrollReveal delay={0.1}>
                  <div className="glass-panel p-8 rounded-3xl border border-black/5 hover:border-[#0f0e47]/20 transition-all group">
                    <Calculator className="w-6 h-6 text-[#0f0e47] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold uppercase tracking-tight text-black">Bookkeeping</h3>
                    <ul className="mt-4 space-y-2 text-xs text-zinc-500"><li>• Daily transaction recording</li><li>• Accounts payable & receivable</li><li>• Monthly financial reports</li></ul>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <div className="glass-panel p-8 rounded-3xl border border-black/5 hover:border-[#0f0e47]/20 transition-all group">
                    <FileText className="w-6 h-6 text-[#0f0e47] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold uppercase tracking-tight text-black">VAT Return Filing</h3>
                    <ul className="mt-4 space-y-2 text-xs text-zinc-500"><li>• Registration & Deregistration</li><li>• Calculation & Documentation</li><li>• Submission to FTA</li></ul>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <div className="glass-panel p-8 rounded-3xl border border-black/5 hover:border-[#0f0e47]/20 transition-all group">
                    <Database className="w-6 h-6 text-[#0f0e47] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold uppercase tracking-tight text-black">Data Management</h3>
                    <ul className="mt-4 space-y-2 text-xs text-zinc-500"><li>• Invoice Entry & Management</li><li>• Custom Excel reports</li><li>• MIS reporting and analysis</li></ul>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                  <div className="glass-panel p-8 rounded-3xl border border-black/5 hover:border-[#0f0e47]/20 transition-all group">
                    <Code className="w-6 h-6 text-[#0f0e47] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold uppercase tracking-tight text-black">Corporate Tax</h3>
                    <ul className="mt-4 space-y-2 text-xs text-zinc-500"><li>• Tax Registration</li><li>• Return Preparation</li><li>• Advisory for Optimization</li></ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-32">
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]"><svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-[#0f172a]"><path d="M0,0 C150,0 200,100 600,100 C1000,100 1050,0 1200,0 L1200,120 L0,120 Z" /></svg></div>
          <div className="relative z-10 bg-[#0f172a] text-white pb-32 pt-12 text-center">
            <div className="mx-auto max-w-2xl px-5">
              <ScrollReveal>
                <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white">Ready to <span className="text-zinc-400">transform?</span></h2>
                <p className="mt-6 text-zinc-400 mb-12 text-lg">Whether it's code, creativity, or compliance, we bring precision to everything we build.</p>
                <Link href="/contact" className="inline-flex items-center gap-4 rounded-full bg-white px-12 py-5 text-sm font-black uppercase tracking-[0.2em] text-[#0f0e47] shadow-2xl transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95">Start a conversation <span className="text-xl">→</span></Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
