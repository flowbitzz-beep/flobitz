import { Metadata } from "next";
import { AboutContent } from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Flobitz, a dynamic company delivering high-quality IT, financial, and graphic design solutions. Meet our team and discover our beliefs.",
  openGraph: {
    title: "About Flobitz — Innovation & Trust",
    description: "Discover our journey, our team, and our commitment to architectural precision in every business solution.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
