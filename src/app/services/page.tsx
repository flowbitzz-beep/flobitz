import { Metadata } from "next";
import { ServicesContent } from "@/components/pages/services-content";

export const metadata: Metadata = {
  title: "Our Services — The Ecosystem of Precision",
  description: "Comprehensive IT services, financial accounting, and creative graphic design solutions. Discover our expertise in web development, VAT filing, and visual identity.",
  openGraph: {
    title: "Flobitz Services — Technology, Finance & Design",
    description: "Bridging the gap between creative vision and technical power. High-end results for forward-thinking businesses.",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
