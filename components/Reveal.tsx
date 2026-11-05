"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

/**
 * Fade-rise on first entry, mirroring the app's `animate-fade-rise`. Elements
 * render visible (so the server HTML, a first paint and a no-JS reader all see
 * the content), and only a block that starts below the fold is hidden after
 * mount, to rise in when it scrolls into view. Reduced motion never hides.
 * The animation is decoration, never the thing that makes content readable.
 */
export default function Reveal({
  children,
  delay = 0,
  sx,
}: {
  children: React.ReactNode;
  delay?: number;
  sx?: SxProps<Theme>;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = React.useState(true);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    // Already on screen at mount: it stays as painted, with no fade.
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom > 0) return;
    setShown(false);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={[
        {
          opacity: shown ? 1 : 0,
          transform: shown ? "none" : "translateY(8px)",
          transition:
            "opacity 400ms cubic-bezier(0.05, 0.7, 0.1, 1), transform 400ms cubic-bezier(0.05, 0.7, 0.1, 1)",
          transitionDelay: `${delay}ms`,
          "@media (prefers-reduced-motion: reduce)": { opacity: 1, transform: "none" },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
