"use client";

import FadeIn from "@/components/beyond/FadeIn";
import SplitText from "@/components/beyond/SplitText";

const brands = [
  "Costco",
  "Currys",
  "Diageo",
  "Pernod Ricard",
  "Walmart",
  "Burger King",
  "Aldi",
  "BAE Systems",
  "John Lewis",
  "Costa",
  "IKEA",
  "Morrisons",
  "BT",
  "Carrefour",
  "Est\u00e9e Lauder",
  "Henkel",
  "Unilever",
  "Nestl\u00e9",
  "Campari Group",
  "Richemont",
  "Best Buy",
  "Matalan",
  "Clas Ohlson",
  "adidas",
  "Co-op",
  "Waitrose",
  "Cornershop",
  "du",
];

/* Split into two rows for the ticker */
const row1 = brands.slice(0, 14);
const row2 = brands.slice(14);

const highlights = [
  {
    icon: "storefront",
    title: "Retail & Hospitality",
    description:
      "Store operations AI, drive-through innovation, employee experience apps, loyalty & CRM, and frontline productivity across grocery, QSR, big-box retail, and luxury.",
  },
  {
    icon: "precision_manufacturing",
    title: "Defence & Field Engineering",
    description:
      "Operations and training AI for complex environments, technical diagnostics, and field engineering guidance in rugged, mission-critical settings.",
  },
  {
    icon: "campaign",
    title: "Marketing & CX Innovation",
    description:
      "Global marketing innovation, connected products, omni-channel customer experiences, and hyper-personalisation for consumer brands at scale.",
  },
  {
    icon: "inventory_2",
    title: "FMCG & Supply Chain",
    description:
      "AI-driven supply chain optimisation, demand forecasting, and connected retail experiences for the world\u2019s largest fast-moving consumer goods companies.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-8 pt-40 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <p className="text-beyond-tertiary text-sm font-mono tracking-widest uppercase mb-6">
              Collective Expertise
            </p>
          </FadeIn>

          <SplitText
            as="h1"
            className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8"
          >
            Built on Decades of Doing.
          </SplitText>

          <FadeIn delay={0.4} y={30}>
            <p className="text-beyond-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              The Beyond team brings deep, hands-on experience building and
              deploying AI products, innovation programmes, and frontline
              technology across 30+ of the world&apos;s most recognised brands.
              This isn&apos;t theory &mdash; it&apos;s pattern recognition
              earned through delivery.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Infinite Scrolling Logo Ticker ── */}
      <section className="py-14 bg-beyond-surface-lowest overflow-hidden border-y border-beyond-outline-variant/10">
        <div className="relative">
          {/* Row 1 — scrolls left */}
          <div className="flex animate-scroll-left whitespace-nowrap mb-8">
            {[...row1, ...row1, ...row1, ...row1].map((name, i) => (
              <div
                key={`r1-${i}`}
                className="flex-shrink-0 mx-6 md:mx-10 flex items-center"
              >
                <span className="font-headline text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-beyond-on-surface/15 uppercase whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 — scrolls right */}
          <div className="flex animate-scroll-right whitespace-nowrap">
            {[...row2, ...row2, ...row2, ...row2].map((name, i) => (
              <div
                key={`r2-${i}`}
                className="flex-shrink-0 mx-6 md:mx-10 flex items-center"
              >
                <span className="font-headline text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-beyond-on-surface/8 uppercase whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Weight of Experience ── */}
      <section className="py-24 px-8 bg-beyond-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-beyond-tertiary" />
                <span className="text-beyond-tertiary text-xs tracking-[0.2em] uppercase font-medium">
                  Why It Matters
                </span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-beyond-on-surface mb-6 leading-tight">
                Every brand is a lesson.
                <br />
                <span className="text-beyond-tertiary">
                  Every deployment, a pattern.
                </span>
              </h2>
              <p className="text-beyond-on-surface-variant text-lg leading-relaxed mb-6">
                We&apos;ve seen what works and what doesn&apos;t at the
                frontline &mdash; across retail, defence, FMCG, and luxury.
                We know the difference between a boardroom AI strategy and
                one that actually changes how a store manager starts their
                day.
              </p>
              <p className="text-beyond-on-surface-variant text-lg leading-relaxed">
                This collective experience is codified into how Beyond
                operates: from the way our Infinity Engine agents are trained,
                to the instincts that shape every product we ship.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div className="bg-beyond-surface-low rounded-2xl p-8">
                <p className="font-headline text-5xl md:text-6xl font-bold text-beyond-tertiary mb-2">
                  30+
                </p>
                <p className="text-beyond-on-surface text-lg font-semibold">
                  Global brands worked with
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-beyond-surface-low rounded-2xl p-8">
                  <p className="font-headline text-4xl font-bold text-beyond-on-surface mb-2">
                    15+
                  </p>
                  <p className="text-beyond-on-surface-variant text-sm">
                    Years of frontline AI &amp; innovation experience
                  </p>
                </div>
                <div className="bg-beyond-surface-low rounded-2xl p-8">
                  <p className="font-headline text-4xl font-bold text-beyond-on-surface mb-2">
                    &pound;100M+
                  </p>
                  <p className="text-beyond-on-surface-variant text-sm">
                    In incremental growth driven for clients
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Sectors of Expertise ── */}
      <section className="py-24 px-8 bg-beyond-surface-low">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-beyond-tertiary" />
              <span className="text-beyond-tertiary text-xs tracking-[0.2em] uppercase font-medium">
                Sectors of Expertise
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-beyond-on-surface mb-16">
              Where we&apos;ve delivered.
            </h2>
          </FadeIn>

          <FadeIn stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="monolith-border rounded-xl p-10 hover:bg-beyond-surface-container transition-colors duration-300"
                >
                  <span className="material-symbols-outlined text-beyond-tertiary text-3xl mb-4 block">
                    {h.icon}
                  </span>
                  <h3 className="font-headline text-xl font-semibold mb-3">
                    {h.title}
                  </h3>
                  <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Brand Grid ── */}
      <section className="py-24 px-8 bg-beyond-surface">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-beyond-on-surface mb-4 text-center">
              Brands we&apos;ve worked with
            </h2>
            <p className="text-beyond-on-surface-variant text-center mb-16 max-w-xl mx-auto">
              Across the team&apos;s careers &mdash; from consulting
              and agency leadership to hands-on product delivery.
            </p>
          </FadeIn>

          <FadeIn stagger={0.03}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-px bg-beyond-outline-variant/20">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="bg-beyond-surface-low flex items-center justify-center p-6 md:p-8 hover:bg-beyond-surface-container transition-colors duration-300 group"
                >
                  <span className="font-headline text-sm md:text-base font-bold text-beyond-on-surface/40 group-hover:text-beyond-tertiary transition-colors text-center uppercase tracking-tight">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 px-8 text-center bg-beyond-surface-lowest">
        <FadeIn>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-beyond-on-surface mb-6 max-w-3xl mx-auto">
            Bring this experience{" "}
            <span className="text-beyond-tertiary">to your frontline.</span>
          </h2>
          <p className="text-beyond-on-surface-variant text-lg max-w-xl mx-auto leading-relaxed mb-10">
            We&apos;ve done this before &mdash; at brands you know. Let&apos;s
            talk about what we can build together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="kinetic-gradient px-8 py-4 rounded-full text-white font-semibold text-lg transition-transform hover:scale-105"
            >
              Talk to Us
            </a>
            <a
              href="/solutions"
              className="border border-white/20 px-8 py-4 rounded-full text-beyond-on-surface font-semibold text-lg transition-transform hover:scale-105"
            >
              See Our Solutions
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
