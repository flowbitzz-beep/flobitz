import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Contact us — Flow Bitz",
  description:
    "Get in touch with Flow Bitz for IT, financial, and creative services.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col px-4 pb-24 pt-24 sm:px-6 sm:pt-28">
        <div className="mx-auto w-full max-w-2xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Contact us
            </h1>
            <p className="mt-4 text-lg text-zinc-400">
              Ready to grow your business? Let Flow Bitz help you achieve your goals
              with smart solutions.
            </p>
          </ScrollReveal>
        </div>
        <div className="mx-auto mt-14 w-full max-w-lg">
          <ScrollReveal delay={0.08}>
            <ContactForm />
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="mt-8 text-center text-sm text-zinc-400">
              Prefer email directly?{" "}
              <a
                href="mailto:hello@flowbitz.com"
                className="font-medium text-indigo-300 underline-offset-2 hover:text-indigo-200 hover:underline"
              >
                hello@flowbitz.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
