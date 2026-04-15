import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Flow Bitz. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
          <Link href="/#services" className="transition hover:text-white">
            Services
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
