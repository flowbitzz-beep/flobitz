import { Metadata } from "next";
import { PrivacyContent } from "@/components/pages/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Your privacy is important to us. Learn how we handle your data at Flobitz.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
