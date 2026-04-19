"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PrivacyContent() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#FAF9F6] pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <ScrollReveal>
            <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,5rem)] uppercase tracking-tighter leading-none text-black mb-12">
              Privacy <span className="text-zinc-300">Policy.</span>
            </h1>
          </ScrollReveal>

          <div className="space-y-12 text-zinc-600 leading-relaxed">
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0f0e47] mb-4">1. Introduction</h2>
                <p>At Flobitz, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0f0e47] mb-4">2. Information Collection</h2>
                <p>We collect information that you provide directly to us, such as when you fill out our contact form, subscribe to our newsletter, or engage with our services. This may include your name, email address, phone number, and business details.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0f0e47] mb-4">3. Use of Information</h2>
                <p>The information we collect is used to provide, maintain, and improve our services, to communicate with you about your projects, and to send you updates about our "Ecosystem of Precision."</p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0f0e47] mb-4">4. Data Security</h2>
                <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and is only accessible by authorized personnel.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0f0e47] mb-4">5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:flowbitzz@gmail.com" className="text-[#0f0e47] font-bold hover:underline">flowbitzz@gmail.com</a>.</p>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
