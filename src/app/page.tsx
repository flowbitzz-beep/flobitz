import { Metadata } from "next";
import { HomeContent } from "@/components/pages/home-content";

export const metadata: Metadata = {
  title: "Engineering Digital Excellence",
  description: "Flobitz provides high-fidelity IT services, financial accounting, and creative branding solutions with architectural precision.",
  openGraph: {
    title: "Flobitz — The Ecosystem of Precision",
    description: "Technology, finance & design combined to accelerate your business.",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
