import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: ["400"],
  display: "swap",
});

const baseUrl = "https://flobitz.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Flobitz — Technology, Accounting & Creative",
    template: "%s | Flobitz",
  },
  description:
    "Engineering digital excellence through high-end IT services, financial accounting, and creative branding solutions. Precision-driven results for modern businesses.",
  keywords: ["IT Services", "Accounting UAE", "Graphic Design Dubai", "Software Development", "Business Consultancy"],
  authors: [{ name: "Flobitz Team" }],
  creator: "Flobitz",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: baseUrl,
    title: "Flobitz — The Ecosystem of Precision",
    description: "High-fidelity IT, financial, and creative solutions for businesses looking to scale with architectural precision.",
    siteName: "Flobitz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flobitz — Precision Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flobitz — Technology, Accounting & Creative",
    description: "Engineering digital excellence with precision and transparency.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${anton.variable} h-full antialiased`}>
      <body
        className={`${inter.className} min-h-full overflow-x-hidden font-sans antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
          <div className="flex min-h-full flex-col">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
