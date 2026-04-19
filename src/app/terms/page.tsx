import { Metadata } from "next";
import { TermsContent } from "@/components/pages/terms-content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms and conditions for using Flobitz services.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return <TermsContent />;
}
