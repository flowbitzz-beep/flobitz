import { Metadata } from "next";
import { ContactContent } from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Flobitz. Ready to grow your business? Let us help you achieve your goals with architectural precision and smart solutions.",
  openGraph: {
    title: "Connect with Flobitz — UAE Business Solutions",
    description: "Send us a message or contact us via WhatsApp to start your journey towards digital and financial excellence.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
