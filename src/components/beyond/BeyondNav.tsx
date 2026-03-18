"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/mission", label: "Mission" },
  { href: "/experience", label: "Experience" },
  { href: "/infinity-engine", label: "Infinity Engine" },
  { href: "/industries", label: "Industries" },
  { href: "/solutions", label: "Solutions" },
];

export default function BeyondNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full flex justify-between items-center px-8 max-w-none bg-beyond-surface/60 backdrop-blur-xl z-50 shadow-2xl shadow-black/40 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <Link href="/" className="text-2xl font-black tracking-tighter text-white uppercase font-headline">
          BEYOND
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-headline font-bold tracking-tighter uppercase transition-colors ${
                pathname === link.href
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://beyond-infinity-engine.vercel.app/login"
            className="font-headline font-bold tracking-tighter uppercase text-white/60 hover:text-white transition-colors text-sm hidden sm:block"
          >
            Login
          </a>
          <Link
            href="/contact"
            className="kinetic-gradient text-[#1a1c1c] px-6 py-2.5 text-sm font-headline font-black tracking-tighter uppercase hover:opacity-80 transition-all active:scale-95 hover:shadow-[0_0_20px_rgba(125,244,255,0.3)]"
          >
            Get Started
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white ml-2"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-beyond-surface/95 backdrop-blur-xl pt-24 px-8 md:hidden">
          <div className="flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-headline text-3xl font-black tracking-tighter uppercase ${
                  pathname === link.href ? "text-white" : "text-white/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://beyond-infinity-engine.vercel.app/login"
              onClick={() => setMobileOpen(false)}
              className="font-headline text-3xl font-black tracking-tighter uppercase text-white/60"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </>
  );
}
