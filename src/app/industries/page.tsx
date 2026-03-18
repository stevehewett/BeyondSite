"use client";

import Image from "next/image";
import FadeIn from "@/components/beyond/FadeIn";
import Parallax from "@/components/beyond/Parallax";
import CountUp from "@/components/beyond/CountUp";

export default function IndustriesPage() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="relative min-h-[716px] flex items-end px-8 pb-20 overflow-hidden pt-24">
        {/* Background image */}
        <Parallax speed={0.4} className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/beyond/hero-industries.jpg"
            alt=""
            fill
            unoptimized
            className="object-cover opacity-50"
          />
        </Parallax>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-beyond-surface via-beyond-surface/40 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-beyond-tertiary-container text-[#002022] text-sm font-mono font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#002022] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#002022]" />
              </span>
              Industries We Serve
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
              Where the{" "}
              <span className="text-beyond-tertiary">Frontline</span> Meets AI
            </h1>
          </FadeIn>

          <FadeIn delay={0.4} y={30}>
            <p className="text-beyond-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
              The biggest opportunity for AI is on the frontline &mdash; the
              millions of workers and customers who interact with your brand
              every day. We build AI products for the sectors where this
              matters most.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 2: Industry Verticals ── */}
      <section className="px-8 py-24 space-y-24">
        {/* ── Industry 1: Retail & Hospitality ── */}
        <FadeIn>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-px bg-beyond-outline-variant/20 overflow-hidden rounded-sm">
            {/* Content — left */}
            <div className="md:col-span-7 bg-beyond-surface-low p-12 min-h-[500px] flex flex-col justify-center">
              <p className="text-beyond-tertiary text-sm font-mono tracking-widest uppercase mb-4">
                Sector 01
              </p>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                Retail &amp; Hospitality
              </h2>
              <p className="text-beyond-on-surface-variant text-lg leading-relaxed mb-4">
                With rising labour costs and pressure on cost to serve, the
                battleground is driving productivity through AI across the
                physical estate where much of the workforce sits.
              </p>
              <p className="text-beyond-on-surface-variant text-sm leading-relaxed mb-8">
                From grocery to quick-service restaurants to big-box retail, we
                build AI assistants for store operations, drive-through
                optimisation, and frontline employee experiences.
              </p>
              <div className="flex gap-4">
                <div className="bg-beyond-surface-high p-6 rounded-sm flex-1">
                  <p className="text-beyond-on-surface-variant text-xs font-mono uppercase tracking-widest mb-2">
                    Frontline Workers
                  </p>
                  <p className="font-headline text-3xl font-bold">
                    <CountUp end={30} suffix="M" />
                  </p>
                  <p className="text-beyond-on-surface-variant text-xs mt-1">
                    across NA &amp; Europe
                  </p>
                </div>
                <div className="bg-beyond-surface-high p-6 rounded-sm flex-1">
                  <p className="text-beyond-on-surface-variant text-xs font-mono uppercase tracking-widest mb-2">
                    Key Sub-Sectors
                  </p>
                  <p className="font-headline text-sm font-bold leading-relaxed mt-2">
                    Grocery, QSR, Big-Box, Convenience
                  </p>
                </div>
              </div>
            </div>

            {/* Image — right */}
            <div className="md:col-span-5 relative min-h-[300px]">
              <Image
                src="/images/beyond/retail.jpg"
                alt="Retail & Hospitality"
                fill
                unoptimized
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-beyond-tertiary/10 mix-blend-overlay" />
            </div>
          </div>
        </FadeIn>

        {/* ── Industry 2: Field Engineering & Manufacturing ── */}
        <FadeIn>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-px bg-beyond-outline-variant/20 overflow-hidden rounded-sm">
            {/* Image — left on desktop */}
            <div className="md:col-span-5 relative min-h-[300px] order-2 md:order-1">
              <Image
                src="/images/beyond/factory.jpg"
                alt="Field Engineering & Manufacturing"
                fill
                unoptimized
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-beyond-tertiary/10 mix-blend-overlay" />
            </div>

            {/* Content — right on desktop */}
            <div className="md:col-span-7 bg-beyond-surface-low p-12 min-h-[500px] flex flex-col justify-center order-1 md:order-2">
              <p className="text-beyond-tertiary text-sm font-mono tracking-widest uppercase mb-4">
                Sector 02
              </p>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                Field Engineering &amp; Manufacturing
              </h2>
              <p className="text-beyond-on-surface-variant text-lg leading-relaxed mb-4">
                Real-time troubleshooting and proactive facility management.
                Technical diagnostics and guidance to fix complex issues in
                rugged environments to maximise efficiency.
              </p>
              <p className="text-beyond-on-surface-variant text-sm leading-relaxed mb-8">
                Spanning defence, oil and gas, energy, and utilities &mdash; we
                build AI that works where your people work, from factory floors
                to remote field sites.
              </p>
              <div className="flex gap-4">
                <div className="bg-beyond-surface-high p-6 rounded-sm flex-1">
                  <p className="text-beyond-on-surface-variant text-xs font-mono uppercase tracking-widest mb-2">
                    Target Workforce
                  </p>
                  <p className="font-headline text-3xl font-bold">
                    <CountUp end={60} suffix="M" />
                  </p>
                  <p className="text-beyond-on-surface-variant text-xs mt-1">
                    manufacturing + field technicians
                  </p>
                </div>
                <div className="bg-beyond-surface-high p-6 rounded-sm flex-1">
                  <p className="text-beyond-on-surface-variant text-xs font-mono uppercase tracking-widest mb-2">
                    Key Sub-Sectors
                  </p>
                  <p className="font-headline text-sm font-bold leading-relaxed mt-2">
                    Defence, Oil &amp; Gas, Energy, Utilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Industry 3: Customer Experience & Commerce ── */}
        <FadeIn>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-px bg-beyond-outline-variant/20 overflow-hidden rounded-sm">
            {/* Content — left */}
            <div className="md:col-span-7 bg-beyond-surface-low p-12 min-h-[500px] flex flex-col justify-center">
              <p className="text-beyond-tertiary text-sm font-mono tracking-widest uppercase mb-4">
                Sector 03
              </p>
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                Customer Experience &amp; Commerce
              </h2>
              <p className="text-beyond-on-surface-variant text-lg leading-relaxed mb-4">
                Spend in hyper-personalisation, agentic commerce, and
                AI-powered marketing operations is predicted to grow
                significantly. Competition for consumer attention is
                intensifying as AI lowers the cost and time to transform CX.
              </p>
              <p className="text-beyond-on-surface-variant text-sm leading-relaxed mb-8">
                We build omni-channel AI-native commerce platforms and CRM
                systems that deliver personalised experiences at scale &mdash;
                from loyalty innovation to connected products.
              </p>
              <div className="flex gap-4">
                <div className="bg-beyond-surface-high p-6 rounded-sm flex-1">
                  <p className="text-beyond-on-surface-variant text-xs font-mono uppercase tracking-widest mb-2">
                    Market Spend
                  </p>
                  <p className="font-headline text-3xl font-bold">
                    <CountUp prefix="$" end={16} suffix="B+" />
                  </p>
                  <p className="text-beyond-on-surface-variant text-xs mt-1">
                    forecast AI spend in CX
                  </p>
                </div>
                <div className="bg-beyond-surface-high p-6 rounded-sm flex-1">
                  <p className="text-beyond-on-surface-variant text-xs font-mono uppercase tracking-widest mb-2">
                    Key Focus Areas
                  </p>
                  <p className="font-headline text-sm font-bold leading-relaxed mt-2">
                    Loyalty, Personalisation, Connected Products
                  </p>
                </div>
              </div>
            </div>

            {/* Image — right */}
            <div className="md:col-span-5 relative min-h-[300px]">
              <Image
                src="/images/beyond/fintech.jpg"
                alt="Customer Experience & Commerce"
                fill
                unoptimized
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-beyond-tertiary/10 mix-blend-overlay" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── Section 3: What We've Built ── */}
      <section className="bg-beyond-surface-lowest px-8 py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <FadeIn>
            <div className="mb-16">
              <p className="text-beyond-tertiary text-sm font-mono tracking-widest uppercase mb-4">
                Proven Assets
              </p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold">
                AI Products for the Frontline
              </h2>
              <p className="text-beyond-on-surface-variant text-lg max-w-2xl mt-4 leading-relaxed">
                Our team has already built and deployed frontline AI across some
                of the world&apos;s most demanding environments.
              </p>
            </div>
          </FadeIn>

          {/* Cards */}
          <FadeIn stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 bg-beyond-surface-container rounded-sm hover:bg-beyond-surface-high transition-colors duration-300">
                <span className="material-symbols-outlined text-beyond-tertiary text-4xl mb-6 block">
                  record_voice_over
                </span>
                <h3 className="font-headline text-xl font-semibold mb-3">
                  Voice AI Assistants
                </h3>
                <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                  Natural language AI assistants for store managers and
                  drive-through operations. Real-time guidance, troubleshooting,
                  and training &mdash; hands-free, in the flow of work.
                </p>
              </div>

              <div className="p-8 bg-beyond-surface-container rounded-sm hover:bg-beyond-surface-high transition-colors duration-300">
                <span className="material-symbols-outlined text-beyond-tertiary text-4xl mb-6 block">
                  phone_android
                </span>
                <h3 className="font-headline text-xl font-semibold mb-3">
                  Frontline SuperApps
                </h3>
                <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                  Unified mobile platforms that replace fragmented tools with a
                  single AI-powered experience for store operations,
                  communication, and real-time intelligence.
                </p>
              </div>

              <div className="p-8 bg-beyond-surface-container rounded-sm hover:bg-beyond-surface-high transition-colors duration-300">
                <span className="material-symbols-outlined text-beyond-tertiary text-4xl mb-6 block">
                  shopping_cart
                </span>
                <h3 className="font-headline text-xl font-semibold mb-3">
                  AI-Native Commerce &amp; CRM
                </h3>
                <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                  Omni-channel commerce platforms with hyper-personalisation,
                  agentic marketing automation, and loyalty innovation built
                  from the ground up with AI at the core.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 4: CTA ── */}
      <section className="px-8 py-32 flex flex-col items-center text-center">
        <FadeIn>
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
            Your frontline is{" "}
            <span className="text-beyond-tertiary">waiting for AI.</span>
          </h2>
          <p className="text-beyond-on-surface-variant text-lg max-w-xl leading-relaxed mb-10">
            Let&apos;s explore how AI can transform the experience for your
            workers and customers &mdash; starting in weeks, not years.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
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
              See Our Approach
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
