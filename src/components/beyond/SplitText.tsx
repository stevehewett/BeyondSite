"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

export default function SplitText({ children, className = "", as: Tag = "h1" }: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const words = el.querySelectorAll(".split-word");
    gsap.set(words, { opacity: 0, y: 40 });

    const tween = gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.kill();
    };
  }, [children]);

  const words = children.split(" ").map((word, i) => (
    <span key={i} className="split-word inline-block mr-[0.3em]">
      {word}
    </span>
  ));

  return (
    // @ts-expect-error - dynamic tag element ref typing
    <Tag ref={ref} className={className}>
      {words}
    </Tag>
  );
}
