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
    href: "/services",
    label: "Services",
    isActive: (pathname) => pathname === "/services",
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
          ? "border-none bg-white/70 shadow-sm backdrop-blur-xl backdrop-saturate-150"
          : "border-none bg-transparent shadow-none backdrop-blur-none",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 outline-none ring-indigo-400/40 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:gap-3.5"
        >
          <Image
            src="/Flobitz.png"
            alt="Flobitz logo"
            width={44}
            height={44}
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            priority
          />
          <span className="text-[1.05rem] font-semibold tracking-tight text-zinc-900 sm:text-lg">
            Flobitz
          </span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-8 lg:gap-10">
          {navItems.map((item) => {
            const active = item.isActive(pathname, hash);
            return (
              <div key={item.href} className="relative flex items-center h-full">
                <Link
                  href={item.href}
                  className={[
                    "relative whitespace-nowrap py-4 text-[10px] font-medium uppercase tracking-[0.14em] transition-colors sm:text-[11px] sm:tracking-[0.2em] px-2",
                    active ? "text-[#0f0e47]" : "text-zinc-500 hover:text-[#0f0e47]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
