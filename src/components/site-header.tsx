"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const SCROLL_THRESHOLD = 48;

type NavItem = {
  href: string;
  label: string;
  isActive: (pathname: string, hash: string) => boolean;
};

const navItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    isActive: (pathname, hash) =>
      pathname === "/" && (hash === "" || hash === "#"),
  },
  {
    href: "/#services",
    label: "Services",
    isActive: (pathname, hash) => pathname === "/" && hash === "#services",
  },
  {
    href: "/about",
    label: "About",
    isActive: (pathname) => pathname === "/about",
  },
  {
    href: "/contact",
    label: "Contact",
    isActive: (pathname) => pathname === "/contact",
  },
];

function useHash() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const read = () => setHash(typeof window !== "undefined" ? window.location.hash : "");
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  return hash;
}

export function SiteHeader() {
  const pathname = usePathname();
  const hash = useHash();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(scrollY.get() > SCROLL_THRESHOLD);
  }, [scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > SCROLL_THRESHOLD);
  });

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-[background-color,backdrop-filter,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "motion-reduce:transition-none",
        scrolled
          ? "border-b border-white/10 bg-black/40 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent shadow-none backdrop-blur-none",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 outline-none ring-indigo-400/40 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03050f] sm:gap-3.5"
        >
          <Image
            src="/Flobitz.png"
            alt="Flow Bitz logo"
            width={44}
            height={44}
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            priority
          />
          <span className="text-[1.05rem] font-semibold tracking-tight text-white sm:text-lg">
            Flow Bitz
          </span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-8 lg:gap-10">
          {navItems.map((item) => {
            const active = item.isActive(pathname, hash);
            const isServices = item.label === "Services";
            
            return (
              <div key={item.href} className={`relative flex items-center h-full ${isServices ? "group/nav" : ""}`}>
                <Link
                  href={item.href}
                  className={[
                    "relative whitespace-nowrap py-4 text-[10px] font-medium uppercase tracking-[0.14em] transition-colors sm:text-[11px] sm:tracking-[0.2em] px-2",
                    active ? "text-white" : "text-zinc-400 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                  <span
                    className={[
                      "pointer-events-none absolute bottom-2 left-1/2 h-px w-9 max-w-[min(100%,2.25rem)] -translate-x-1/2 bg-white transition-opacity duration-300",
                      active ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    aria-hidden
                  />
                </Link>
                {isServices && (
                  <div className="absolute left-1/2 top-[80%] pt-4 w-56 -translate-x-1/2 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50">
                    <div className="bg-[#03050f]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl py-2">
                      <Link href="/services/technology" className="block px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-white/5 transition-all">
                        IT Services
                      </Link>
                      <Link href="/services/graphic-design" className="block px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-white/5 transition-all outline-none">
                        Graphic Design
                      </Link>
                      <Link href="/services/accounting" className="block px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 hover:text-white hover:bg-white/5 transition-all">
                        Financial Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
