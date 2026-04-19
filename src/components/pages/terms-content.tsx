"use client";

import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function TermsContent() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#FAF9F6] pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <ScrollReveal>
            <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,5rem)] uppercase tracking-tighter leading-none text-black mb-12">
              Terms & <span className="text-zinc-300">Conditions.</span>
            </h1>
          </ScrollReveal>

          <div className="space-y-12 text-zinc-600 leading-relaxed">
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0f0e47] mb-4">1. Acceptance of Terms</h2>
                <p>By accessing or using the services provided by Flobitz ("the Company"), you agree to the following terms and conditions. If you do not agree, please do not use our services.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0f0e47] mb-4">2. Services</h2>
                <p>Flobitz provides IT solutions, financial accounting services, and creative branding/graphic design. The specific scope of work for any project is defined in the individual service agreement between the Company and the Client.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0f0e47] mb-4">3. Client Responsibilities</h2>
                <p>Clients are responsible for providing accurate and timely information required for the effective execution of services. Delays in providing such information may impact project timelines and deliverables.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0f0e47] mb-4">4. Intellectual Property</h2>
                <p>Unless otherwise agreed in writing, all creative works, code, and designs produced by Flobitz remain the property of the Company until full payment is received, at which point ownership transfers to the Client.</p>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <section>
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#0f0e47] mb-4">5. Governing Law</h2>
                <p>These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates.</p>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
