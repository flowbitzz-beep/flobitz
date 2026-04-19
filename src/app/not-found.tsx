import { Metadata } from "next";
import { NotFoundContent } from "@/components/pages/not-found-content";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist in the Flobitz ecosystem.",
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return <NotFoundContent />;
}
