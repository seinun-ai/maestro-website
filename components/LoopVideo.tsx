"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { videoPoster } from "@/lib/media";

/**
 * A muted, looping product clip: the reading experience of a GIF at a
 * fraction of the weight. With reduced motion the clip does not start on its
 * own; it shows its poster and the native controls, so playing it is a choice.
 */
export default function LoopVideo({
  src,
  label,
  width,
  height,
  priority,
}: {
  src: string;
  label: string;
  width: number;
  height: number;
  priority: boolean;
}) {
  const ref = React.useRef<HTMLVideoElement | null>(null);
  const [still, setStill] = React.useState(false);

  React.useEffect(() => {
    const v = ref.current;
    if (!v || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.pause();
    v.currentTime = 0;
    setStill(true);
  }, []);

  return (
    <Box
      component="video"
      ref={ref}
      // A looping clip is decoration with a caption, not content a screen
      // reader should be asked to sit through.
      aria-label={label}
      autoPlay
      muted
      loop
      playsInline
      controls={still}
      preload={priority ? "auto" : "none"}
      poster={videoPoster[src]}
      width={width}
      height={height}
      sx={{ width: "100%", height: "auto", display: "block" }}
    >
      <source src={src} type="video/mp4" />
    </Box>
  );
}
