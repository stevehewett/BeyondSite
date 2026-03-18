"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/beyond/FadeIn";
import Parallax from "@/components/beyond/Parallax";
import SplitText from "@/components/beyond/SplitText";
import CountUp from "@/components/beyond/CountUp";

export default function BeyondHomePage() {
  return (
    <>
      {/* ─── Section 1: Hero ─── */}
      <section className="relative min-h-[921px] flex items-center px-8 md:px-20 overflow-hidden">
        {/* Background image with parallax */}
        <Parallax speed={0.3} className="absolute inset-0 z-0">
          <Image
            src="/images/beyond/hero-surface.jpg"
            alt=""
            fill
            unoptimized
            className="object-cover opacity-40 mix-blend-luminosity"
            priority
          />
        </Parallax>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-beyond-surface via-beyond-surface/80 to-transparent" />

        {/* Hero content */}
        <div className="relative z-20 max-w-4xl">
          <FadeIn>
            {/* Teal accent line + label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-beyond-tertiary" />
              <span className="text-beyond-tertiary text-sm tracking-[0.2em] uppercase font-medium">
                The AI-Native Agency
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <div className="mb-8">
            <SplitText
              as="h1"
              className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-beyond-on-surface"
            >
              AI-Native
            </SplitText>
            <SplitText
              as="h1"
              className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-beyond-secondary"
            >
              Hybrid Consulting.
            </SplitText>
          </div>

          <FadeIn delay={0.2}>
            <p className="text-beyond-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              The clock speed of business has changed. Your frontline workers
              and customers can&apos;t wait for legacy partners to catch up.
              You need a new breed of agency that builds and ships AI at the
              pace the world now demands.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="kinetic-gradient inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-sm tracking-wide uppercase transition-transform hover:scale-105"
              >
                Talk to Us
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/infinity-engine"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-beyond-surface-high text-beyond-on-surface font-semibold text-sm tracking-wide uppercase border border-beyond-outline-variant transition-colors hover:bg-beyond-surface-highest"
              >
                How It Works
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 2: Experience Banner ─── */}
      <section className="py-10 px-8 md:px-20 bg-beyond-surface-lowest border-y border-beyond-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-beyond-on-surface-variant text-sm tracking-[0.15em] uppercase">
            Our founders have delivered AI &amp; innovation for 30+ global brands
          </p>
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-beyond-tertiary text-sm font-semibold tracking-wide uppercase hover:text-white transition-colors"
          >
            See Our Experience
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* ─── Section 3: The Problem ─── */}
      <section className="py-32 px-8 md:px-20 bg-beyond-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — The gap */}
          <FadeIn>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-beyond-tertiary" />
                <span className="text-beyond-tertiary text-xs tracking-[0.2em] uppercase font-medium">
                  The Problem
                </span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-beyond-on-surface mb-6 leading-tight">
                AI investment is soaring.
                <br />
                <span className="text-beyond-tertiary">
                  Frontline impact isn&apos;t.
                </span>
              </h2>
              <p className="text-beyond-on-surface-variant text-lg leading-relaxed mb-8">
                Boardrooms are full of AI strategies. Consultancies are billing
                millions for transformation roadmaps. But on the shop floor, in
                the warehouse, at the drive-through &mdash; nothing has changed.
              </p>
              <p className="text-beyond-on-surface-variant text-lg leading-relaxed">
                The gap between AI ambition and frontline reality is where
                billions are being wasted. Your workers are still using the same
                tools they had five years ago. Your customers can tell.
              </p>
            </div>
          </FadeIn>

          {/* Right — The gap stat */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div className="bg-beyond-surface-low rounded-2xl p-10">
                <p className="font-headline text-6xl md:text-7xl font-bold text-beyond-tertiary mb-2">
                  30%
                </p>
                <p className="text-beyond-on-surface text-lg font-semibold mb-2">
                  of all code will be AI-generated by end of 2026
                </p>
                <div className="h-px w-full bg-beyond-outline-variant/20 my-6" />
                <p className="font-headline text-4xl md:text-5xl font-bold text-beyond-on-surface-variant/30 mb-2">
                  Yet most enterprises
                </p>
                <p className="text-beyond-on-surface-variant text-lg">
                  are still running 6-month discovery phases before writing
                  a single line
                </p>
              </div>
              <p className="text-beyond-on-surface-variant text-sm italic pl-4 border-l-2 border-beyond-tertiary">
                The technology is ready. The frontline is waiting. The only
                thing missing is a partner who can actually ship.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 4: Beyond vs Legacy ─── */}
      <section className="py-24 px-8 md:px-20 bg-beyond-surface-lowest">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-center text-beyond-on-surface mb-16">
              A different kind of partner.
            </h2>
          </FadeIn>
          <FadeIn stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pair 1 */}
              <div className="bg-beyond-surface rounded-2xl p-8 border border-beyond-outline-variant/10">
                <p className="text-beyond-on-surface-variant/40 text-lg line-through mb-2">
                  99-slide strategy decks
                </p>
                <p className="font-headline text-2xl font-bold text-beyond-on-surface">
                  Working AI in your workers&apos; hands
                </p>
                <p className="text-beyond-on-surface-variant text-sm mt-3 leading-relaxed">
                  Your store managers and field engineers don&apos;t need
                  another report. They need tools that work today.
                </p>
              </div>

              {/* Pair 2 */}
              <div className="bg-beyond-surface rounded-2xl p-8 border border-beyond-outline-variant/10">
                <p className="text-beyond-on-surface-variant/40 text-lg line-through mb-2">
                  Quarter-long discovery phases
                </p>
                <p className="font-headline text-2xl font-bold text-beyond-on-surface">
                  Pilot-ready in 4 weeks
                </p>
                <p className="text-beyond-on-surface-variant text-sm mt-3 leading-relaxed">
                  Six AI agents working in concert with senior human
                  strategists &mdash; compressing months into a single sprint.
                </p>
              </div>

              {/* Pair 3 */}
              <div className="bg-beyond-surface rounded-2xl p-8 border border-beyond-outline-variant/10">
                <p className="text-beyond-on-surface-variant/40 text-lg line-through mb-2">
                  Paying for seats and headcount
                </p>
                <p className="font-headline text-2xl font-bold text-beyond-on-surface">
                  Paying for outcomes that compound
                </p>
                <p className="text-beyond-on-surface-variant text-sm mt-3 leading-relaxed">
                  No per-seat licensing. No billing by the hour.
                  Commercial models tied to the value we create together.
                </p>
              </div>

              {/* Pair 4 */}
              <div className="bg-beyond-surface rounded-2xl p-8 border border-beyond-outline-variant/10">
                <p className="text-beyond-on-surface-variant/40 text-lg line-through mb-2">
                  Adapting your business to fit generic software
                </p>
                <p className="font-headline text-2xl font-bold text-beyond-on-surface">
                  AI shaped to your brand and frontline
                </p>
                <p className="text-beyond-on-surface-variant text-sm mt-3 leading-relaxed">
                  Every product is built around your people, your processes,
                  and your customers &mdash; not a one-size-fits-all template.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 5: The Market Opportunity ─── */}
      <section className="py-32 px-8 md:px-20 bg-beyond-surface">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-beyond-tertiary" />
              <span className="text-beyond-tertiary text-xs tracking-[0.2em] uppercase font-medium">
                The Opportunity
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-beyond-on-surface mb-6 leading-tight">
              The clock speed of business has{" "}
              <span className="text-beyond-tertiary">changed forever.</span>
            </h2>
            <p className="text-beyond-on-surface-variant text-lg max-w-3xl leading-relaxed mb-16">
              AI has hit an inflection point. Frontline workers and customer
              experiences are being transformed &mdash; and organisations need
              partners who can operate at this new speed.
            </p>
          </FadeIn>

          <FadeIn stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-beyond-surface-low rounded-2xl p-8">
                <p className="font-headline text-4xl md:text-5xl font-bold text-beyond-tertiary mb-4">
                  <CountUp end={30} suffix="M" />
                </p>
                <h3 className="font-headline text-lg font-semibold mb-2">
                  Retail &amp; Hospitality Workers
                </h3>
                <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                  Across North America and Europe &mdash; the frontline
                  battleground for AI-driven productivity, from grocery to
                  quick-service restaurants.
                </p>
              </div>

              <div className="bg-beyond-surface-low rounded-2xl p-8">
                <p className="font-headline text-4xl md:text-5xl font-bold text-beyond-tertiary mb-4">
                  <CountUp end={60} suffix="M" />
                </p>
                <h3 className="font-headline text-lg font-semibold mb-2">
                  Manufacturing &amp; Field Workers
                </h3>
                <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                  40M manufacturing jobs plus 20M service technicians needing
                  real-time diagnostics and guidance in complex environments.
                </p>
              </div>

              <div className="bg-beyond-surface-low rounded-2xl p-8">
                <p className="font-headline text-4xl md:text-5xl font-bold text-beyond-tertiary mb-4">
                  <CountUp prefix="$" end={16} suffix="B+" />
                </p>
                <h3 className="font-headline text-lg font-semibold mb-2">
                  AI Spend in CX &amp; Commerce
                </h3>
                <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                  Forecast spend on hyper-personalisation, agentic commerce,
                  and AI-powered marketing operations &mdash; and growing fast.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 6: Named Engagements ─── */}
      <section className="py-32 px-8 md:px-20 bg-beyond-surface-lowest">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-beyond-tertiary" />
              <span className="text-beyond-tertiary text-xs tracking-[0.2em] uppercase font-medium">
                How We Work
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-beyond-on-surface mb-4 leading-tight">
              Two ways to start.
            </h2>
            <p className="text-beyond-on-surface-variant text-lg max-w-2xl leading-relaxed mb-16">
              Whether you&apos;re exploring what&apos;s possible or ready to
              rebuild, we have a clear path to get you there.
            </p>
          </FadeIn>

          <FadeIn stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Origin */}
              <div className="bg-beyond-surface rounded-2xl p-10 border border-beyond-outline-variant/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-beyond-tertiary text-[#002022] text-xs font-mono font-bold tracking-wider px-4 py-2 rounded-bl-xl uppercase">
                  4 Weeks
                </div>
                <span className="material-symbols-outlined text-beyond-tertiary text-4xl mb-6 block">
                  auto_awesome
                </span>
                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-2">
                  Frontier Sprint
                </h3>
                <p className="text-beyond-tertiary text-sm font-semibold mb-4">
                  Origin &mdash; Innovate at the Frontier
                </p>
                <p className="text-beyond-on-surface-variant leading-relaxed mb-8">
                  We take your highest-impact opportunity from concept to
                  pilot-ready AI product in 4 weeks. Live innovation,
                  rapid prototyping, and real frontline testing &mdash; not
                  another strategy deck.
                </p>
                <ul className="space-y-3 text-sm text-beyond-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-beyond-tertiary text-[18px] mt-0.5">
                      check
                    </span>
                    AI opportunity assessment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-beyond-tertiary text-[18px] mt-0.5">
                      check
                    </span>
                    Working prototype with real users
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-beyond-tertiary text-[18px] mt-0.5">
                      check
                    </span>
                    Business case and pilot roadmap
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-beyond-tertiary text-[18px] mt-0.5">
                      check
                    </span>
                    Deployable IP you own
                  </li>
                </ul>
              </div>

              {/* Velocity */}
              <div className="bg-beyond-surface rounded-2xl p-10 border border-beyond-outline-variant/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-white text-black text-xs font-mono font-bold tracking-wider px-4 py-2 rounded-bl-xl uppercase">
                  Ongoing
                </div>
                <span className="material-symbols-outlined text-beyond-tertiary text-4xl mb-6 block">
                  bolt
                </span>
                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-2">
                  Velocity Programme
                </h3>
                <p className="text-beyond-tertiary text-sm font-semibold mb-4">
                  Velocity &mdash; Rebuild at Speed
                </p>
                <p className="text-beyond-on-surface-variant leading-relaxed mb-8">
                  We rebuild your frontline customer and staff tools into
                  AI-first architectures &mdash; driving down operating costs
                  up to 50% and increasing speed of change by over 100%.
                </p>
                <ul className="space-y-3 text-sm text-beyond-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-beyond-tertiary text-[18px] mt-0.5">
                      check
                    </span>
                    Full frontline platform rebuild
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-beyond-tertiary text-[18px] mt-0.5">
                      check
                    </span>
                    Up to 50% cost reduction
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-beyond-tertiary text-[18px] mt-0.5">
                      check
                    </span>
                    Outcome-linked commercial model
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-beyond-tertiary text-[18px] mt-0.5">
                      check
                    </span>
                    Continuous optimisation via the Infinity Engine
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 7: What We Build ─── */}
      <section className="py-32 px-8 md:px-20 bg-beyond-surface">
        <div className="max-w-7xl mx-auto">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-beyond-tertiary" />
                <span className="text-beyond-tertiary text-xs tracking-[0.2em] uppercase font-medium">
                  AI Assets
                </span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-beyond-on-surface leading-tight">
                Built for the
                <br />
                Frontline.
              </h2>
            </div>
            <p className="text-beyond-on-surface-variant text-sm max-w-xs mt-4 md:mt-0 leading-relaxed">
              Voice assistants, SuperApps, and AI-native commerce &mdash;
              designed for the people who interact with your customers every day.
            </p>
          </div>

          {/* Bento Grid */}
          <FadeIn stagger={0.1}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Card 1 — Voice AI */}
              <div className="md:col-span-2 relative min-h-[500px] rounded-2xl overflow-hidden monolith-border group">
                <Image
                  src="/images/beyond/metallic-hardware.jpg"
                  alt="Voice AI assistants"
                  fill
                  unoptimized
                  className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-beyond-surface via-beyond-surface/60 to-transparent" />
                <div className="relative z-10 flex flex-col justify-end h-full p-8">
                  <span className="text-beyond-tertiary text-xs tracking-[0.2em] uppercase font-medium mb-3">
                    Voice AI
                  </span>
                  <h3 className="font-headline text-3xl md:text-4xl font-bold text-beyond-on-surface mb-3">
                    Intelligent Assistants
                  </h3>
                  <p className="text-beyond-on-surface-variant text-sm max-w-md leading-relaxed">
                    AI voice assistants that guide store managers, field
                    engineers, and frontline staff through complex tasks &mdash;
                    from troubleshooting to training, in natural language.
                  </p>
                </div>
              </div>

              {/* Card 2 — SuperApps */}
              <div className="relative min-h-[500px] rounded-2xl overflow-hidden monolith-border bg-beyond-surface-low p-8 flex flex-col justify-between">
                <div>
                  <span className="text-beyond-tertiary text-xs tracking-[0.2em] uppercase font-medium mb-3 block">
                    Frontline Apps
                  </span>
                  <h3 className="font-headline text-3xl font-bold text-beyond-on-surface mb-3">
                    SuperApps
                  </h3>
                  <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                    Unified frontline platforms that replace fragmented tools
                    with a single AI-powered experience &mdash; operations,
                    comms, and intelligence in one place.
                  </p>
                </div>
                <div className="relative w-full h-48 rounded-xl overflow-hidden mt-6">
                  <Image
                    src="/images/beyond/circuitry.jpg"
                    alt="SuperApp interface"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 3 — Commerce */}
              <div className="relative min-h-[400px] rounded-2xl overflow-hidden monolith-border bg-beyond-surface-low p-8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-beyond-surface-container flex items-center justify-center mb-6">
                    <span
                      className="material-symbols-outlined text-beyond-tertiary text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      shopping_cart
                    </span>
                  </div>
                  <span className="text-beyond-tertiary text-xs tracking-[0.2em] uppercase font-medium mb-3 block">
                    Commerce
                  </span>
                  <h3 className="font-headline text-3xl font-bold text-beyond-on-surface mb-3">
                    AI-Native CX
                  </h3>
                  <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                    Omni-channel commerce and CRM built with AI at the core
                    &mdash; hyper-personalisation, agentic marketing, and
                    loyalty innovation that drives measurable growth.
                  </p>
                </div>
              </div>

              {/* Card 4 — CTA */}
              <div className="md:col-span-2 relative min-h-[400px] rounded-2xl overflow-hidden bg-beyond-tertiary-container p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-headline text-3xl md:text-4xl font-bold text-beyond-on-surface mb-3">
                      Ready for the
                      <br />
                      New Clock Speed?
                    </h3>
                    <p className="text-beyond-on-surface-variant text-sm max-w-sm leading-relaxed">
                      Your competitors are already exploring AI for their
                      frontline. Let&apos;s make sure you move first.
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-beyond-surface/20 flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-beyond-on-surface text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      rocket_launch
                    </span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-beyond-surface text-beyond-on-surface font-semibold text-sm tracking-wide uppercase transition-transform hover:scale-105"
                  >
                    Start a Conversation
                    <span className="material-symbols-outlined text-[20px]">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 8: Final CTA ─── */}
      <section className="py-40 px-8 text-center bg-beyond-surface-lowest">
        <FadeIn className="max-w-3xl mx-auto">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-beyond-outline-variant mb-10">
              <span className="text-beyond-on-surface-variant text-xs tracking-[0.15em] uppercase font-medium">
                Agency Agility
              </span>
              <span className="w-1 h-1 rounded-full bg-beyond-tertiary" />
              <span className="text-beyond-on-surface-variant text-xs tracking-[0.15em] uppercase font-medium">
                Software Economics
              </span>
              <span className="w-1 h-1 rounded-full bg-beyond-tertiary" />
              <span className="text-beyond-on-surface-variant text-xs tracking-[0.15em] uppercase font-medium">
                Frontline Focus
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-beyond-on-surface leading-tight mb-4">
              We Do in Weeks
              <br />
              <span className="text-beyond-secondary">
                What Others Do in Years.
              </span>
            </h2>

            <p className="text-beyond-on-surface-variant text-lg max-w-xl mx-auto leading-relaxed mb-12">
              An AI-native team with decades of frontline experience at the
              world&apos;s biggest brands. We don&apos;t just advise &mdash; we
              build, deploy, and optimise.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/contact"
                className="kinetic-gradient inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-sm tracking-wide uppercase transition-transform hover:scale-105"
              >
                Partner with Beyond
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/mission"
                className="inline-flex items-center gap-2 text-beyond-on-surface-variant font-semibold text-sm tracking-wide uppercase hover:text-beyond-on-surface transition-colors"
              >
                Our Mission
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
