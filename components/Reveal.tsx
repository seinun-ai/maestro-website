"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";

/**
 * Fade-rise on first entry, mirroring the app's `animate-fade-rise`. Elements
 * start visible for anyone without IntersectionObserver or with reduced motion.
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
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
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
          transform: shown ? "none" : "translateY(14px)",
          transition: "opacity .6s cubic-bezier(.2,.7,.3,1), transform .6s cubic-bezier(.2,.7,.3,1)",
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
