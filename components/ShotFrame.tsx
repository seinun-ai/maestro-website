"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { alpha } from "@mui/material/styles";
import { isVideo, mediaSize, videoPoster } from "@/lib/media";

/**
 * A product capture inside a restrained window chrome. The frame exists to say
 * "this is the real app", so it stays quiet: three dots, a hairline, no gloss.
 *
 * Video sources render as a muted, looping, inline <video>: the same reading
 * experience as a GIF at a fraction of the weight and several times the
 * resolution. `preload="none"` on non-priority clips keeps them off the
 * critical path until the reader scrolls near them.
 */
export default function ShotFrame({
  src,
  alt,
  caption,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 1100px",
  glow = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  glow?: boolean;
}) {
  const dims = mediaSize[src] ?? { width: 1400, height: 800 };
  const video = isVideo(src);

  return (
    <Stack spacing={1.5}>
      <Box
        sx={(t) => ({
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          border: 1,
          borderColor: "divider",
          backgroundColor: "background.paper",
          boxShadow: glow
            ? `0 2px 6px ${alpha(t.palette.common.black, 0.07)},
               0 40px 90px -40px ${alpha(t.palette.primary.main, 0.45)}`
            : `0 1px 2px ${alpha(t.palette.common.black, 0.05)},
               0 18px 44px -22px ${alpha(t.palette.common.black, 0.22)}`,
        })}
      >
        <Stack
          direction="row"
          spacing={0.75}
          sx={{ alignItems: "center", px: 1.75, py: 1.25, borderBottom: 1, borderColor: "divider" }}
        >
          {["#ED6A5E", "#F4BF4F", "#61C554"].map((c) => (
            <Box key={c} sx={{ width: 9, height: 9, borderRadius: "50%", backgroundColor: c, opacity: 0.85 }} />
          ))}
        </Stack>

        {video ? (
          <Box
            component="video"
            // A looping product clip is decoration with a caption, not content
            // a screen reader should be asked to sit through.
            aria-label={alt}
            autoPlay
            muted
            loop
            playsInline
            preload={priority ? "auto" : "none"}
            poster={videoPoster[src]}
            width={dims.width}
            height={dims.height}
            sx={{ width: "100%", height: "auto", display: "block" }}
          >
            <source src={src} type="video/mp4" />
          </Box>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={dims.width}
            height={dims.height}
            sizes={sizes}
            priority={priority}
            // GIFs are already-encoded captures; re-encoding drops the animation.
            unoptimized={src.endsWith(".gif")}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        )}
      </Box>
      {caption && (
        <Typography variant="body2" sx={{ color: "text.secondary", px: 0.5 }}>
          {caption}
        </Typography>
      )}
    </Stack>
  );
}
