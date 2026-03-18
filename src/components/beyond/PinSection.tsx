"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PinSectionProps {
  children: React.ReactNode;
  className?: string;
  pinSpacing?: string;
}

export default function PinSection({
  children,
  className = "",
  pinSpacing = "100vh",
}: PinSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: `+=${pinSpacing}`,
      pin: true,
      pinSpacing: true,
    });

    return () => {
      trigger.kill();
    };
  }, [pinSpacing]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
