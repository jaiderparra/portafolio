"use client";
// app/components/SkillBar.tsx
import { useEffect, useRef, useState } from "react";
import type { Skill } from "@/types";

interface SkillBarProps extends Skill {
  delay?: number;
}

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="font-mono text-[12px] text-slate-400 tracking-wider">
          {name}
        </span>
        <span className="font-mono text-[11px] text-brand-cyan">{level}%</span>
      </div>
      <div className="h-[2px] bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #38bdf8, #818cf8)",
            width: animated ? `${level}%` : "0%",
            transition: `width 1s ease ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
