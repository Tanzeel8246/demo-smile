"use client";

import { useEffect, useRef, useState } from "react";

type CounterSpec = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

const COUNTERS: CounterSpec[] = [
  { value: 10000, suffix: "+", label: "Happy smiles created" },
  { value: 15, suffix: "+", label: "Years of gentle care" },
  { value: 12, suffix: "", label: "Specialist dentists" },
  { value: 4.9, decimals: 1, suffix: "", label: "Average patient rating" },
];

function AnimatedCounter({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              const current = value * eased;
              setDisplay(
                decimals > 0
                  ? current.toFixed(decimals)
                  : Math.round(current).toLocaleString("en-PK")
              );
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, decimals]);

  return (
    <div ref={ref} className="num">
      {display}
      <span className="suffix">{suffix}</span>
    </div>
  );
}

export default function Counters() {
  return (
    <section className="counters" aria-label="Clinic achievements">
      <div className="container counter-grid">
        {COUNTERS.map((c) => (
          <div key={c.label} className="counter">
            <AnimatedCounter value={c.value} decimals={c.decimals} suffix={c.suffix} />
            <div className="label">{c.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
