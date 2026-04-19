"use client";

import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ShaderBackground } from "@/components/ui/shader-background";
import { OrbitDisplay } from "@/components/ui/orbit-display";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Rocket } from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────── */

const services = [
  {
    title: "IT Services",
    tag: "Technology",
    theme: {
      primary: "#06b6d4",
      bg: "bg-cyan-50/50",
      border: "border-cyan-100",
      dot: "bg-cyan-500",
      badge: "High Tech",
    },
    description: "Custom web & software development, cloud solutions, and AI chatbots that power your business digitally.",
    href: "/services#it",
    icon: (
      <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M7 8l3 3-3 3M13 14h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Financial Services",
    tag: "Accounting",
    theme: {
      primary: "#10b981",
      bg: "bg-emerald-50/50",
      border: "border-emerald-100",
      dot: "bg-emerald-500",
      badge: "Scale Up",
    },
    description: "Bookkeeping, VAT registration & filing, and corporate tax support — clear processes, dependable results.",
    href: "/services#finance",
    icon: (
      <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M7 14l4-5 4 3 4-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    tag: "Creative",
    theme: {
      primary: "#ec4899",
      bg: "bg-pink-50/50",
      border: "border-pink-100",
      dot: "bg-pink-500",
      badge: "Design Lab",
    },
    description: "Branding, logo design, video editing, visual content, and social media that make your business stand out.",
    href: "/services#creative",
    icon: (
      <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="0.8" />
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9" stroke="currentColor" strokeWidth="0.8" />
        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

const whyChoose = [
  { icon: "⚡", label: "Expert team" },
  { icon: "🧠", label: "Innovative solutions" },
  { icon: "🤝", label: "Client-centric approach" },
  { icon: "💰", label: "Affordable pricing" },
  { icon: "🔄", label: "End-to-end services" },
  { icon: "🚀", label: "Fast delivery" },
];

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

const steps = [
  { n: "01", title: "Understand", body: "We deeply learn your goals, challenges, and vision.", color: "#ec4899" },
  { n: "02", title: "Plan", body: "We design a clear strategy and roadmap tailored to you.", color: "#06b6d4" },
  { n: "03", title: "Execute", body: "Our team builds, iterates, and refines with precision.", color: "#10b981" },
  { n: "04", title: "Deliver", body: "You receive a polished result with ongoing support.", color: "#b642f8" },
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Link
          href={service.href}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={cardRef}
          className={`group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border ${service.theme.border} ${service.theme.bg} p-10 shadow-sm backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-${service.theme.dot.replace('bg-', '')}/10`}
        >
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${service.theme.primary}15, transparent 40%)`,
            }}
          />
          <motion.div 
            className="absolute -right-8 -top-8 h-64 w-64 opacity-[0.07] transition-colors duration-500 group-hover:opacity-[0.12]"
            animate={{ rotate: isHovered ? 15 : 0, scale: isHovered ? 1.2 : 1, x: isHovered ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            style={{ color: service.theme.primary }}
          >
            {service.icon}
          </motion.div>

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className={`inline-flex items-center gap-2 rounded-full border ${service.theme.border} bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600`}>
                <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${service.theme.dot}`} />
                {service.theme.badge}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 group-hover:scale-110">
                <span style={{ color: service.theme.primary }}>
                  <div className="h-5 w-5">{service.icon}</div>
                </span>
              </span>
            </div>
            <div className="mt-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: service.theme.primary }}>{service.tag}</p>
              <h3 className="mt-3 font-sans font-bold text-[clamp(1.5rem,4vw,2rem)] uppercase tracking-tight leading-none transition-colors whitespace-nowrap" style={{ color: service.theme.primary }}>{service.title}</h3>
              <div className="mt-5 text-base leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-800">{service.description}</div>
            </div>
            <div className="mt-auto pt-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-0 transition-all duration-500 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0" style={{ color: service.theme.primary }}>Experience excellence <span aria-hidden>→</span></div>
          </div>
        </Link>
      </motion.div>
    </ScrollReveal>
  );
}

function BentoCard({ value, to, label, icon, bgColor, borderColor, hoverShadow, className = "", delay = 0 }: any) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ScrollReveal delay={delay} className={className}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative overflow-hidden rounded-[2.5rem] border ${borderColor} ${bgColor} transition-all duration-500 hover:shadow-2xl ${hoverShadow} h-full flex flex-col justify-center px-10 py-12`}
      >
        <motion.div
          className="absolute -right-6 -top-6 h-56 w-56 opacity-[0.05] transition-colors duration-500 group-hover:opacity-[0.1]"
          animate={{ rotate: isHovered ? 20 : 0, scale: isHovered ? 1.25 : 1, x: isHovered ? 15 : 0, y: isHovered ? -10 : 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 25 }}
          style={{ color: "#0f0f45" }}
        >
          {icon}
        </motion.div>
        <div className="relative z-10">
          <p className="font-sans font-bold text-[clamp(4.5rem,10vw,7.5rem)] uppercase tracking-tighter leading-none text-[#0f0f45]">
            <Counter from={value} to={to} />+
          </p>
          <p className="mt-4 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-[#0f0f45]/60 max-w-[200px]">{label}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

function MarqueeItem({ icon, label }: any) {
  return (
    <div className="flex items-center gap-4 rounded-full border border-black/5 bg-white/80 px-8 py-4 shadow-sm backdrop-blur-md transition-all hover:border-[#b642f8]/20 hover:shadow-lg">
      <span className="text-2xl">{icon}</span>
      <span className="text-sm font-bold uppercase tracking-widest text-[#0f0f45]">{label}</span>
      <div className="h-1.5 w-1.5 rounded-full bg-[#b642f8]/30 ml-2" />
    </div>
  );
}

export function HomeContent() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HeroSection
          wordOne="BUILD WITH"
          wordTwo="PERFECTION"
          bgComponent={<ShaderBackground />}
          sectionLabel=""
          sectionBody="Technology, finance & design — combined to accelerate your business."
          ctaHref="/contact"
          ctaLabel="Get started"
        />

        <section id="services" className="scroll-mt-20 bg-transparent py-32 lg:py-48">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0f0f45]/60">What we offer</p>
                  <h2 className="mt-4 font-sans font-semibold text-[clamp(2rem,6vw,3.5rem)] uppercase tracking-tight leading-tight text-black whitespace-nowrap">
                    Precision <span className="text-zinc-300">Solutions</span>
                  </h2>
                </div>
                <div className="max-w-sm mb-2">
                  <p className="text-zinc-500 leading-relaxed text-sm lg:text-base">
                    From enterprise software to creative branding, we provide the architectural glue that holds your vision together.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-transparent py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f0f45 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
            <div className="grid gap-20 lg:grid-cols-2 lg:gap-32 lg:items-start">
              <div className="lg:sticky lg:top-32">
                <ScrollReveal>
                  <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#0f0f45]/60">The Impact</p>
                  <h2 className="mt-6 font-sans font-bold text-[clamp(2.5rem,6vw,4rem)] uppercase tracking-tight leading-[0.9] text-black">
                    Built on <br /><span className="text-zinc-300">Results.</span>
                  </h2>
                  <div className="mt-10 space-y-8 max-w-md">
                    <p className="text-lg text-zinc-500 leading-relaxed">
                      Our methodology blends architectural precision with rapid visual innovation. Every project is a commitment to performance and brand longevity.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {["Agile", "Certified", "End-to-End"].map(tag => (
                        <span key={tag} className="inline-flex items-center rounded-full bg-zinc-100 px-4 py-1.5 text-xs font-semibold text-zinc-800 border border-black/5">{tag}</span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                <BentoCard value={0} to={50} label="Projects successfully completed" className="sm:col-span-2" bgColor="bg-[#F5F3FF]" borderColor="border-[#DDD6FE]" hoverShadow="hover:shadow-purple-500/10" icon={(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" /><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" /></svg>)} />
                <BentoCard delay={0.1} value={0} to={15} label="Ongoing partnerships" bgColor="bg-[#F0FDF4]" borderColor="border-[#BBF7D0]" hoverShadow="hover:shadow-emerald-500/10" icon={(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>)} />
                <BentoCard delay={0.2} value={0} to={3} label="Years of excellence" bgColor="bg-[#F0F9FF]" borderColor="border-[#BAE6FD]" hoverShadow="hover:shadow-blue-500/10" icon={(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>)} />
              </div>
            </div>
          </div>
        </section>

        <section id="methodology" className="bg-transparent py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal><div className="mb-12 text-center"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0f0f45]/60">The Journey</p><h2 className="mt-4 font-sans font-bold text-[clamp(2rem,6vw,3.5rem)] uppercase tracking-tight leading-[0.9] text-black">Our <br /><span className="text-zinc-300">Methodology.</span></h2></div></ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {steps.map((step, i) => (
                <ScrollReveal key={step.n} delay={0.1 * i}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-black/5 bg-white p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-[#0f0f45]/5" style={{ "--theme-color": step.color, "--theme-color-light": `${step.color}4D`, borderColor: `${step.color}15` } as any}>
                    <div className="absolute inset-0 border-2 border-transparent transition-colors duration-700 group-hover:border-[var(--theme-color-light)] pointer-events-none rounded-[2.5rem]" />
                    <div className="relative z-10 flex items-center gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-sans font-black text-xl transition-all duration-500 group-hover:scale-110 shadow-sm" style={{ backgroundColor: `${step.color}15`, color: step.color }}>{step.n}</span>
                      <h3 className="font-sans font-bold text-2xl uppercase tracking-tight text-[#0f0f45] transition-colors duration-500 group-hover:text-black">{step.title}</h3>
                    </div>
                    <p className="mt-6 text-base leading-relaxed text-zinc-500 group-hover:text-zinc-800 transition-colors duration-500 relative z-10">{step.body}</p>
                    <div className="absolute -bottom-8 -right-8 h-32 w-32 opacity-[0.05] grayscale transition-all duration-700 group-hover:opacity-30 group-hover:grayscale-0 group-hover:scale-110" style={{ color: "var(--theme-color)" }}><div className="h-full w-full rounded-full border-[8px] border-dashed border-current" /></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-transparent py-48 border-t border-black/5 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-20 text-center"><ScrollReveal><p className="text-xs font-bold uppercase tracking-[0.4em] text-[#0f0f45]/60">Expertise</p><h2 className="mt-6 font-sans font-bold text-[clamp(2rem,6vw,4rem)] uppercase tracking-tight text-black">Core excellence</h2></ScrollReveal></div>
          <div className="relative flex whitespace-nowrap">
            <motion.div className="flex gap-8 group" animate={{ x: "-50%" }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
              {[...whyChoose, ...whyChoose, ...whyChoose, ...whyChoose].map((item, i) => (<MarqueeItem key={i} icon={item.icon} label={item.label} />))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="relative mt-32">
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]"><svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-[#0f172a]"><path d="M0,0 C150,0 200,100 600,100 C1000,100 1050,0 1200,0 L1200,120 L0,120 Z" /></svg></div>
          <div className="relative z-10 bg-[#0f172a] text-white pb-20 pt-6">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 pb-20 border-b border-white/5">
                <ScrollReveal className="flex-1 text-center md:text-left"><p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#b642f8]/80">Next Step</p><h2 className="mt-4 font-sans font-bold text-3xl sm:text-5xl uppercase tracking-tighter leading-tight text-white">Bring your <span className="text-zinc-400">vision to life.</span></h2></ScrollReveal>
                <div className="flex flex-wrap items-center justify-center gap-5"><ScrollReveal delay={0.2}><motion.a href="/contact" whileHover={{ scale: 1.05 }} className="flex items-center gap-4 rounded-full bg-white px-10 py-5 text-[#0f172a] font-black transition-all shadow-2xl hover:shadow-[#b642f8]/30"><Rocket className="h-5 w-5" /><span className="text-xs uppercase tracking-[0.15em]">Start Project</span></motion.a></ScrollReveal></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
