"use client";

import Image from "next/image";
import FadeIn from "@/components/beyond/FadeIn";

const agents = [
  {
    id: "01",
    name: "Echo",
    icon: "graphic_eq",
    description:
      "Customer agent iterating new features with synthetic frontline users and human SMEs to reach pilot-ready fast.",
    status: "Synthesizing Feedback",
  },
  {
    id: "02",
    name: "Sentinel",
    icon: "security",
    description:
      "Agentic QA and outcome monitoring. Instant alerts on issues, opportunities, and optimisation insights in production.",
    status: "Monitoring Quality",
  },
  {
    id: "03",
    name: "Oracle",
    icon: "auto_awesome",
    description:
      "Decades of industry expertise codified into agentic systems. Deep research agents spotting opportunities and trends.",
    status: "Analysing Trends",
  },
  {
    id: "04",
    name: "Forge",
    icon: "precision_manufacturing",
    description:
      "Experimentation and rapid prototyping agents doing weeks of engineering work in hours. New assets and features at speed.",
    status: "Building Fast",
  },
  {
    id: "05",
    name: "Catalyst",
    icon: "bolt",
    description:
      "Change companion agent using proven methodologies to drive adoption and value in complex frontline environments.",
    status: "Driving Adoption",
  },
  {
    id: "06",
    name: "Prism",
    icon: "layers",
    description:
      "AI-optimised frontline UX design system and toolchain, adapting experiences to client brand and context at pace.",
    status: "Rendering UX",
  },
];

const blueprints = [
  {
    title: "QSR Drive-Through AI",
    image: "/images/beyond/blueprint-qsr.jpg",
    aspect: "aspect-[4/5]",
    colSpan: "",
  },
  {
    title: "Store Operations SuperApp",
    image: "/images/beyond/blueprint-clienteling.jpg",
    aspect: "aspect-[4/5]",
    colSpan: "",
  },
  {
    title: "Field Engineering Command",
    image: "/images/beyond/blueprint-ops.jpg",
    aspect: "aspect-[21/9]",
    colSpan: "col-span-2",
    badge: "Live Blueprint",
    cta: "Preview Framework",
  },
];

export default function InfinityEnginePage() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="px-8 mb-32 pt-32">
        <div className="mx-auto max-w-7xl grid grid-cols-12 gap-8">
          {/* Left */}
          <div className="col-span-12 lg:col-span-8">
            <FadeIn>
              <h1 className="font-headline text-[3.5rem] leading-[0.95] font-black tracking-tighter uppercase text-beyond-on-surface">
                The Infinity Engine: our reinforcement loop of Human + Agentic
                Collaboration.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 border-l-2 border-beyond-tertiary pl-6 text-beyond-on-surface-variant text-lg max-w-2xl">
                A closed-loop system where human expertise and AI agents
                continuously reinforce each other &mdash; from insight to
                testing, to delivery, monitoring, and back round. We do in
                weeks what others do in years.
              </p>
            </FadeIn>
          </div>

          {/* Right */}
          <div className="col-span-12 lg:col-span-4 flex flex-col items-end justify-start gap-4">
            <FadeIn delay={0.3}>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-beyond-on-surface-variant mb-2">
                  System Status
                </p>
                <div className="h-px w-full bg-beyond-tertiary mb-3" />
                <div className="flex items-center justify-end gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-sm font-medium text-beyond-on-surface">
                    Operational
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Section 2: Core Visualization ── */}
      <FadeIn>
        <section className="w-full bg-beyond-surface-lowest py-24 relative overflow-hidden">
          {/* Radial gradient bg */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(94,234,212,0.4) 0%, transparent 70%)",
            }}
          />

          <div className="relative mx-auto max-w-5xl px-8">
            {/* Infinity loop image */}
            <div className="relative aspect-[21/9] w-full">
              <Image
                src="/images/beyond/infinity-loop.jpg"
                alt="Infinity Engine loop visualization"
                fill
                unoptimized
                className="object-cover mix-blend-screen opacity-80"
              />

              {/* Left label */}
              <div className="absolute left-[15%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="bg-beyond-surface-container px-4 py-2 text-sm font-medium text-beyond-on-surface">
                  Originate
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-beyond-on-surface-variant">
                  Insight &amp; Innovation
                </span>
              </div>

              {/* Right label */}
              <div className="absolute right-[15%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="bg-beyond-surface-container px-4 py-2 text-sm font-medium text-beyond-on-surface">
                  Adapt
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-beyond-on-surface-variant">
                  Build &amp; Deploy
                </span>
              </div>
            </div>

            {/* Below label */}
            <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-beyond-on-surface-variant">
              The continuous reinforcement loop
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── Section 3: Agentic Architecture ── */}
      <section className="py-32 px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-16">
              <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-beyond-on-surface">
                Six Agents. One System.
              </h2>
              <p className="text-beyond-on-surface-variant text-lg mt-4 max-w-2xl">
                Each agent handles a specialised role in the delivery loop,
                working autonomously and in concert with human experts.
              </p>
              <div className="mt-4 h-px w-16 bg-white" />
            </div>
          </FadeIn>

          <FadeIn stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-beyond-outline-variant/20 border border-beyond-outline-variant/20">
              {agents.map((agent) => (
                <div
                  key={agent.id}
                  className="bg-beyond-surface p-10 hover:bg-beyond-surface-low transition-colors duration-300"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-beyond-on-surface-variant mb-4">
                    Agent {agent.id}
                  </p>
                  <span
                    className="material-symbols-outlined text-3xl text-beyond-tertiary mb-4 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {agent.icon}
                  </span>
                  <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-beyond-on-surface mb-3">
                    {agent.name}
                  </h3>
                  <p className="text-sm text-beyond-on-surface-variant leading-relaxed mb-6">
                    {agent.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-[11px] uppercase tracking-[0.1em] text-beyond-on-surface-variant">
                      {agent.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 4: Blueprint Library ── */}
      <section className="py-32 bg-beyond-surface-low px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl grid grid-cols-12 gap-8">
          {/* Left — sticky sidebar */}
          <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-40 self-start">
            <FadeIn>
              <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-beyond-on-surface mb-6">
                Blueprint Library
              </h2>
              <p className="text-sm text-beyond-on-surface-variant leading-relaxed mb-8">
                Production-grade blueprints built from real frontline
                engagement data. Each template encodes patterns refined
                from our team&apos;s work across global retail, hospitality,
                and field engineering.
              </p>
              <ol className="space-y-4 text-sm">
                <li className="flex items-baseline gap-3">
                  <span className="text-beyond-tertiary font-mono text-xs">
                    01
                  </span>
                  <span className="text-beyond-on-surface">
                    Retail &amp; QSR
                  </span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="text-beyond-tertiary font-mono text-xs">
                    02
                  </span>
                  <span className="text-beyond-on-surface">
                    Store Operations
                  </span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="text-beyond-tertiary font-mono text-xs">
                    03
                  </span>
                  <span className="text-beyond-on-surface">
                    Field Engineering
                  </span>
                </li>
              </ol>
            </FadeIn>
          </div>

          {/* Right — blueprint cards */}
          <div className="col-span-12 lg:col-span-8">
            <FadeIn stagger={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {blueprints.map((bp) => (
                  <div
                    key={bp.title}
                    className={`group relative overflow-hidden ${bp.colSpan} ${bp.aspect}`}
                  >
                    <Image
                      src={bp.image}
                      alt={bp.title}
                      fill
                      unoptimized
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      {bp.badge && (
                        <span className="inline-block mb-2 px-2 py-0.5 text-[10px] uppercase tracking-[0.15em] bg-beyond-tertiary/20 text-teal-300 border border-teal-400/30 rounded-sm">
                          {bp.badge}
                        </span>
                      )}
                      <h3 className="font-headline text-lg font-bold text-white">
                        {bp.title}
                      </h3>
                      {bp.cta && (
                        <button className="mt-3 px-4 py-2 text-xs uppercase tracking-[0.1em] border border-white/30 text-white hover:bg-white/10 transition-colors">
                          {bp.cta}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Section 5: CTA ── */}
      <section className="py-40 px-8 text-center bg-beyond-surface">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.2em] text-teal-400 mb-4">
            See It in Action
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter text-beyond-on-surface mb-6">
            Ready to start your first loop?
          </h2>
          <p className="text-beyond-on-surface-variant text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Let us show you how the Infinity Engine can transform your frontline
            operations &mdash; from first insight to production deployment.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-black text-sm uppercase tracking-[0.1em] font-medium hover:bg-white/90 transition-colors"
            >
              Request a Briefing
            </a>
            <a
              href="/solutions"
              className="px-8 py-3 border border-beyond-outline-variant text-beyond-on-surface text-sm uppercase tracking-[0.1em] font-medium hover:bg-beyond-surface-low transition-colors"
            >
              See Our Solutions
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
