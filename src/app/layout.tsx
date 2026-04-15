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

export const metadata: Metadata = {
  title: "Flow Bitz — Technology, Accounting & Creative",
  description:
    "Flow Bitz delivers IT, accounting, graphic design, and video production for modern teams.",
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
        className={`${inter.className} min-h-full overflow-x-hidden bg-[#03050f] font-sans text-zinc-100 antialiased`}
      >
        <SmoothScroll>
          <div className="flex min-h-full flex-col">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
