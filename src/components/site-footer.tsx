import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#0f172a] text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xl transition-transform group-hover:scale-110">
                <Image
                  src="/Flobitz.png"
                  alt="Flobitz logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter">Flobitz</span>
            </Link>
            <p className="mt-6 text-sm text-white/40 leading-relaxed max-w-sm">
              Engineering digital excellence through technology, finance, and creative design.
            </p>
          </div>

          {/* Links Column 1: Services */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/services/technology" className="hover:text-white transition">IT Services</Link></li>
              <li><Link href="/services/accounting" className="hover:text-white transition">Accounting</Link></li>
              <li><Link href="/services/graphic-design" className="hover:text-white transition">Graphic Design</Link></li>
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/about" className="hover:text-white transition">About us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 pt-12 border-t border-white/5 md:flex-row">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            © {new Date().getFullYear()} Flobitz. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white hover:shadow-lg hover:shadow-[#0077b5]/20 focus:outline-none focus:ring-2 focus:ring-[#0077b5]"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-[#e4405f] hover:border-[#e4405f] hover:text-white hover:shadow-lg hover:shadow-[#e4405f]/20 focus:outline-none focus:ring-2 focus:ring-[#e4405f]"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.42.679.819.896 1.377.164.422.359 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.558-.477.957-.896 1.377-.42.419-.819.679-1.377.896-.422.164-1.057.359-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.419-.42-.679-.819-.896-1.377-.164-.422-.359-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.419.819-.679 1.377-.896.422-.164 1.057-.359 2.227-.413 1.265-.058 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.149.26-2.912.556-.788.307-1.457.718-2.122 1.383-.665.665-1.076 1.334-1.383 2.122-.296.763-.499 1.635-.556 2.912-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.149.556 2.912.307.788.718 1.457 1.383 2.122.665.665 1.334 1.076 2.122 1.383.763.296 1.635.499 2.912.556 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.149-.26 2.912-.556.788-.307 1.457-.718 2.122-1.383.665-.665 1.076-1.334 1.383-2.122.296-.763.499-1.635.556-2.912.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.149-.556-2.912-.307-.788-.718-1.457-1.383-2.122-.665-.665-1.334-1.076-2.122-1.383-.763-.296-1.635-.499-2.912-.556-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
