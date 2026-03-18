"use client";

import Link from "next/link";
import FadeIn from "@/components/beyond/FadeIn";

export default function SolutionsPage() {
  return (
    <>
      {/* ─── Section 1: Hero ─── */}
      <section className="px-8 mb-32 relative pt-32">
        {/* Right-side gradient background */}
        <div className="absolute inset-0 right-0 opacity-50 bg-gradient-to-l from-beyond-tertiary/[0.03] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            {/* Badge with pulse dot */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-beyond-tertiary-container/20 text-beyond-tertiary text-sm tracking-wide mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-beyond-tertiary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-beyond-tertiary" />
              </span>
              Human Expertise + Agentic Speed
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter uppercase leading-[0.9] mb-8">
              Two Ways
              <br />
              <span className="text-beyond-tertiary">We Deliver.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="border-l border-beyond-outline-variant/30 pl-8 text-beyond-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
              We envision, create, adapt, and deploy AI assets to your frontline
              workers and customers &mdash; taking them to the frontier of
              what is possible.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 2: Origin & Velocity ─── */}
      <section className="bg-beyond-surface-low w-full py-24 px-8 border-y border-beyond-outline-variant/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Origin */}
          <FadeIn>
            <div className="monolith-border rounded-xl p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 flex items-center justify-center bg-beyond-tertiary text-[#002022] font-bold text-sm">
                  01
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
                  Origin
                </h2>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-beyond-tertiary">
                Innovate at the Frontier
              </h3>

              <p className="text-beyond-on-surface-variant leading-relaxed mb-8">
                We create new industry-leading AI assets at the frontier of AI
                capabilities with clients &mdash; bringing the concrete value
                from innovation forward and helping organisations accelerate
                their journey toward an AI-native frontline.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-beyond-tertiary text-[20px] mt-0.5">
                    check_circle
                  </span>
                  <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                    Live innovation labs with rapid prototyping agents
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-beyond-tertiary text-[20px] mt-0.5">
                    check_circle
                  </span>
                  <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                    Voice AI assistants and frontline SuperApps
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-beyond-tertiary text-[20px] mt-0.5">
                    check_circle
                  </span>
                  <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                    Weeks of engineering work compressed into hours
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-beyond-tertiary text-[20px] mt-0.5">
                    check_circle
                  </span>
                  <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                    Building deployable IP and expertise with every engagement
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Velocity */}
          <FadeIn delay={0.2}>
            <div className="monolith-border rounded-xl p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 flex items-center justify-center bg-white text-black font-bold text-sm">
                  02
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
                  Velocity
                </h2>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-beyond-tertiary">
                Rebuild at Speed
              </h3>

              <p className="text-beyond-on-surface-variant leading-relaxed mb-8">
                We rebuild frontline customer and staff tools into AI-first
                architectures &mdash; driving down costs up to 50% to operate
                frontline IT, whilst increasing the speed of change by over
                100% and delivering outcome-linked enhancements.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-beyond-tertiary text-[20px] mt-0.5">
                    check_circle
                  </span>
                  <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                    Up to 50% reduction in frontline IT operating costs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-beyond-tertiary text-[20px] mt-0.5">
                    check_circle
                  </span>
                  <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                    100%+ increase in speed of change and deployment
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-beyond-tertiary text-[20px] mt-0.5">
                    check_circle
                  </span>
                  <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                    Outcome-linked enhancements to grow top-line performance
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-beyond-tertiary text-[20px] mt-0.5">
                    check_circle
                  </span>
                  <p className="text-beyond-on-surface-variant text-sm leading-relaxed">
                    AI-first architecture that compounds value over time
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 3: How We Work ─── */}
      <section className="mb-32 px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 text-beyond-on-surface-variant text-sm tracking-widest uppercase mb-4">
              <span className="material-symbols-outlined text-[18px]">
                timeline
              </span>
              Our Process
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-16">
              From Insight to Impact
            </h2>
          </FadeIn>

          <FadeIn stagger={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-beyond-surface-container p-10 min-h-[400px] flex flex-col justify-between border-t-2 border-white">
                <div>
                  <p className="text-beyond-on-surface-variant text-xs tracking-widest uppercase mb-4">
                    Step 01
                  </p>
                  <h3 className="text-2xl font-bold mb-3">
                    Discovery &amp; Strategy
                  </h3>
                  <p className="text-beyond-on-surface-variant leading-relaxed">
                    Our Oracle agent codifies decades of industry expertise into
                    deep research &mdash; spotting opportunities, analysing your
                    frontline operations, and identifying where AI will create
                    the most value.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-beyond-tertiary">
                  <span className="material-symbols-outlined text-[20px]">
                    auto_awesome
                  </span>
                  <span className="text-sm font-medium">Powered by Oracle</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-beyond-surface-container p-10 min-h-[400px] flex flex-col justify-between border-t-2 border-beyond-tertiary">
                <div>
                  <p className="text-beyond-on-surface-variant text-xs tracking-widest uppercase mb-4">
                    Step 02
                  </p>
                  <h3 className="text-2xl font-bold mb-3">
                    Build &amp; Deploy
                  </h3>
                  <p className="text-beyond-on-surface-variant leading-relaxed">
                    Forge handles rapid prototyping. Prism creates AI-optimised
                    frontline UX. Echo iterates with synthetic users and human
                    SMEs to reach pilot-ready fast. Weeks of work compressed
                    into days.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-beyond-tertiary">
                  <span className="material-symbols-outlined text-[20px]">
                    precision_manufacturing
                  </span>
                  <span className="text-sm font-medium">
                    Powered by Forge + Prism + Echo
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-beyond-surface-container p-10 min-h-[400px] flex flex-col justify-between border-t-2 border-beyond-outline-variant">
                <div>
                  <p className="text-beyond-on-surface-variant text-xs tracking-widest uppercase mb-4">
                    Step 03
                  </p>
                  <h3 className="text-2xl font-bold mb-3">
                    Monitor &amp; Evolve
                  </h3>
                  <p className="text-beyond-on-surface-variant leading-relaxed">
                    Sentinel monitors quality and outcomes in production.
                    Catalyst drives adoption using proven methodologies in
                    complex frontline environments. The loop feeds back into
                    Oracle for continuous improvement.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-beyond-tertiary">
                  <span className="material-symbols-outlined text-[20px]">
                    security
                  </span>
                  <span className="text-sm font-medium">
                    Powered by Sentinel + Catalyst
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 4: The Beyond Difference ─── */}
      <section className="mb-32 px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="bg-beyond-surface-highest p-16 md:p-24 relative overflow-hidden">
              {/* Faded background icon */}
              <span className="material-symbols-outlined absolute top-0 right-0 opacity-10 text-[200px] pointer-events-none leading-none">
                compare_arrows
              </span>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left column */}
                <div>
                  <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-12">
                    Why Beyond
                    <br />
                    Is Different
                  </h2>

                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-beyond-tertiary text-[24px] mt-0.5">
                        check_circle
                      </span>
                      <p className="text-beyond-on-surface-variant leading-relaxed">
                        We <strong>build and deploy</strong>, not just advise.
                        Working products, not slide decks.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-beyond-tertiary text-[24px] mt-0.5">
                        check_circle
                      </span>
                      <p className="text-beyond-on-surface-variant leading-relaxed">
                        <strong>Outcome-linked</strong> commercial models. We
                        succeed when you succeed.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-beyond-tertiary text-[24px] mt-0.5">
                        check_circle
                      </span>
                      <p className="text-beyond-on-surface-variant leading-relaxed">
                        Enable <strong>workforce productivity</strong> without
                        headcount scaling.
                      </p>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-beyond-tertiary text-[24px] mt-0.5">
                        check_circle
                      </span>
                      <p className="text-beyond-on-surface-variant leading-relaxed">
                        <strong>Decades of frontline experience</strong> across
                        30+ global brands in retail, FMCG, defence, and
                        luxury.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Right column: comparison */}
                <div className="space-y-4">
                  <div className="bg-black/40 backdrop-blur-md p-6 border border-white/5">
                    <p className="text-beyond-on-surface-variant text-xs tracking-widest uppercase mb-3">
                      Traditional Consultancy
                    </p>
                    <p className="text-lg font-bold font-headline line-through opacity-50">
                      6&ndash;12 month discovery
                    </p>
                  </div>
                  <div className="bg-beyond-tertiary/10 backdrop-blur-md p-6 border border-beyond-tertiary/20">
                    <p className="text-beyond-tertiary text-xs tracking-widest uppercase mb-3">
                      Beyond
                    </p>
                    <p className="text-lg font-bold font-headline">
                      Pilot-ready in weeks
                    </p>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md p-6 border border-white/5">
                    <p className="text-beyond-on-surface-variant text-xs tracking-widest uppercase mb-3">
                      Traditional SaaS
                    </p>
                    <p className="text-lg font-bold font-headline line-through opacity-50">
                      Change your business to fit the software
                    </p>
                  </div>
                  <div className="bg-beyond-tertiary/10 backdrop-blur-md p-6 border border-beyond-tertiary/20">
                    <p className="text-beyond-tertiary text-xs tracking-widest uppercase mb-3">
                      Beyond
                    </p>
                    <p className="text-lg font-bold font-headline">
                      Software built around your frontline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Section 5: CTA ─── */}
      <section className="px-8 mt-48 mb-24">
        <div className="max-w-7xl mx-auto border-t-4 border-white pt-16">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left */}
            <div>
              <p className="text-beyond-tertiary text-sm tracking-widest uppercase font-medium mb-4">
                Let&apos;s Talk
              </p>
              <h3 className="text-5xl md:text-7xl font-black font-headline tracking-tight">
                Start a Conversation.
              </h3>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center max-w-md">
              <p className="text-beyond-on-surface-variant leading-relaxed mb-8">
                Tell us about your frontline challenge. We&apos;ll show you
                how AI can transform it &mdash; and how fast we can get there.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide uppercase transition-colors hover:bg-beyond-tertiary hover:text-[#002022]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
