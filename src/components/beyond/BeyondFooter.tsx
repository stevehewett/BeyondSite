import Link from "next/link";

const FOOTER_LINKS = [
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export default function BeyondFooter() {
  return (
    <footer className="w-full px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-[#0e0e0e] border-t border-white/5">
      <Link href="/" className="text-xl font-black text-white font-headline tracking-tighter">
        BEYOND.
      </Link>
      <div className="flex flex-wrap justify-center gap-8">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-headline text-xs tracking-widest uppercase text-white/40 hover:text-beyond-tertiary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="font-headline text-xs tracking-widest uppercase text-white/40">
        &copy; 2026 BEYOND. THE AI-NATIVE AGENCY.
      </div>
    </footer>
  );
}
