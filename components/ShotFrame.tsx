"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { alpha } from "@mui/material/styles";
import { mediaSize } from "@/lib/media";

/**
 * A product capture inside a restrained window chrome. The frame exists to say
 * "this is the real app", so it stays quiet: three dots, a hairline, no gloss.
 */
export default function ShotFrame({
  src,
  alt,
  caption,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 1100px",
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const dims = mediaSize[src] ?? { width: 1400, height: 800 };
  const isAnimated = src.endsWith(".gif");

  return (
    <Stack spacing={1.5}>
      <Box
        sx={(t) => ({
          borderRadius: 3,
          overflow: "hidden",
          border: 1,
          borderColor: "divider",
          backgroundColor: "background.paper",
          boxShadow: `0 1px 2px ${alpha(t.palette.common.black, t.palette.mode === "dark" ? 0.5 : 0.05)},
                      0 18px 44px -22px ${alpha(t.palette.common.black, t.palette.mode === "dark" ? 0.8 : 0.22)}`,
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
        <Image
          src={src}
          alt={alt}
          width={dims.width}
          height={dims.height}
          sizes={sizes}
          priority={priority}
          // GIFs are already optimised captures; re-encoding them would drop
          // the animation the section is there to show.
          unoptimized={isAnimated}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>
      {caption && (
        <Typography variant="body2" sx={{ color: "text.secondary", px: 0.5 }}>
          {caption}
        </Typography>
      )}
    </Stack>
  );
}