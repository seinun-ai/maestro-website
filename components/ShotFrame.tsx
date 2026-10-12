import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import LoopVideo from "./LoopVideo";
import { isVideo, mediaSize } from "@/lib/media";
import { accent as accentOf, c, type Accent } from "@/lib/tokens";

/**
 * A real capture in a rounded frame with a coloured top edge, the way the
 * hero GIF frames its resume pages. No fake browser chrome: the capture is the
 * app, and the edge says which part of the story it belongs to.
 */
export default function ShotFrame({
  src,
  alt,
  caption,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 1100px",
  accent = "blue",
  hero = false,
  aspect,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  accent?: Accent;
  hero?: boolean;
  /** Crop to this ratio from the top, so captures side by side line up. */
  aspect?: string;
}) {
  const dims = mediaSize[src] ?? { width: 1400, height: 800 };

  return (
    <Stack spacing={1.5}>
      <Box
        sx={{
          position: "relative",
          borderRadius: { xs: "12px", md: hero ? "20px" : "14px" },
          overflow: "hidden",
          border: `1px solid ${c.border}`,
          borderTop: `${hero ? 7 : 5}px solid ${accentOf(accent).solid}`,
          backgroundColor: c.card,
          boxShadow: hero ? c.shadowHero : c.shadowFrame,
        }}
      >
        {isVideo(src) ? (
          <LoopVideo src={src} label={alt} width={dims.width} height={dims.height} priority={priority} />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={dims.width}
            height={dims.height}
            sizes={sizes}
            loading={priority ? "eager" : "lazy"}
            // GIFs are already-encoded captures; re-encoding drops the animation.
            unoptimized={src.endsWith(".gif")}
            style={
              aspect
                ? { width: "100%", height: "auto", aspectRatio: aspect, objectFit: "cover", objectPosition: "top", display: "block" }
                : { width: "100%", height: "auto", display: "block" }
            }
          />
        )}
      </Box>
      {caption && (
        <Typography variant="body2" sx={{ color: c.muted, px: 0.5 }}>
          {caption}
        </Typography>
      )}
    </Stack>
  );
}
