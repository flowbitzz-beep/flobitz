"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative flex min-h-screen flex-col overflow-hidden pt-24 bg-[#FAF9F6]">
        <div className="mx-auto w-full max-w-7xl flex-1 px-5 sm:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 py-12 relative z-10">

          {/* Left Panel: Branding & Character & Info */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <ScrollReveal>
              <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,5rem)] uppercase tracking-tighter leading-none text-black flex flex-wrap items-center lg:justify-start justify-center gap-x-4">
                CONTACT
                <span className="relative inline-block bg-clip-text text-transparent animate-smoke-text"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 20% 30%, #E2E1DD 0%, transparent 50%), radial-gradient(circle at 80% 70%, #0f0e47 0%, transparent 60%), radial-gradient(circle at 10% 90%, #FAF9F6 0%, transparent 70%)',
                    backgroundColor: '#E2E1DD',
                    WebkitBackgroundClip: 'text',
                    WebkitTextStroke: '1px rgba(226, 225, 221, 0.4)'
                  }}>
                  US
                </span>
              </h1>
              <p className="mt-8 text-base sm:text-lg text-zinc-500 leading-snug max-w-md">
                Ready to grow your business? Let <span className="font-bold text-[#0f0e47]">Flobitz</span> help you achieve your goals
                with architectural precision and smart solutions.
              </p>
            </ScrollReveal>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-8 lg:gap-12">
              <ScrollReveal delay={0.2}>
                <div className="w-48 h-48 sm:w-64 sm:h-64 -ml-4 lg:-ml-12">
                  <DotLottieReact
                    src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
                    loop
                    autoplay
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="space-y-6 text-left">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#0f0e47]/5 flex items-center justify-center text-[#0f0e47] border border-[#0f0e47]/10 transition-colors group-hover:bg-[#0f0e47] group-hover:text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Call / WhatsApp</p>
                      <p className="text-sm font-bold text-[#0f0e47]">+1 (234) 567-890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#0f0e47]/5 flex items-center justify-center text-[#0f0e47] border border-[#0f0e47]/10 transition-colors group-hover:bg-[#0f0e47] group-hover:text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Email Us</p>
                      <p className="text-sm font-bold text-[#0f0e47]">hello@flobitz.com</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Panel: Functional Form */}
          <div className="w-full lg:w-[500px] relative">
            <ScrollReveal delay={0.2}>
              <div className="bg-white/[0.02] border border-black/5 backdrop-blur-3xl p-8 sm:p-10 rounded-[2.5rem] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                {/* Subtle Inner Glow */}
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

                <h2 className="text-xl font-bold text-black mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </main>
      <SiteFooter />
    </>
  );
}
