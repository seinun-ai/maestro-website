"use client";

import * as React from "react";

export const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** A number that rolls from `start` to `target`; reduced motion lands in one frame. */
export function useRoll(target: number, duration = 900, start = 0) {
  const [value, setValue] = React.useState(start);
  const from = React.useRef(start);
  React.useEffect(() => {
    const d = reduced() ? 0 : duration;
    const begin = from.current;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const k = d ? Math.min(1, (now - t0) / d) : 1;
      setValue(begin + (target - begin) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) raf = requestAnimationFrame(tick);
      else from.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

/**
 * Steps 0 to `last`, played once when the element scrolls into view. Step 0 must read on
 * its own, because it is what shows before scripts run. Reduced motion jumps to the end.
 */
export function useStepsOnView(last: number, ms = 650) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timers: number[] = [];
    if (reduced()) {
      timers.push(window.setTimeout(() => setStep(last), 0));
      return () => timers.forEach((id) => window.clearTimeout(id));
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        for (let i = 1; i <= last; i++) timers.push(window.setTimeout(() => setStep(i), i * ms));
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [last, ms]);
  return { ref, step };
}
