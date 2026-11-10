import * as React from "react";
import Box from "@mui/material/Box";
import { c, stage } from "@/lib/tokens";

/**
 * The key phrase of a headline. On the stage it is the marigold signal as text; on a
 * light section it is ink on a marigold band, because marigold text on light fails contrast.
 */
const keySx = {
  color: c.signalInk,
  backgroundColor: c.signalTint,
  borderRadius: "0.12em",
  px: "0.12em",
  mx: "-0.04em",
  boxDecorationBreak: "clone",
  WebkitBoxDecorationBreak: "clone",
} as const;
const keyOnDarkSx = { color: stage.signal } as const;

/**
 * Renders headline copy from content/site.ts. `[phrase]` becomes the
 * highlighted key phrase and `\n` a line break on wide screens only, so a
 * phone wraps the line where it fits.
 */
export default function Highlight({ text, onDark = false }: { text: string; onDark?: boolean }) {
  return (
    <>
      {text.split("\n").map((line, li) => (
        <React.Fragment key={li}>
          {li > 0 && (
            <>
              {" "}
              <Box component="br" sx={{ display: { xs: "none", md: "inline" } }} />
            </>
          )}
          {line.split(/(\[[^\]]+\])/).map((part, i) =>
            part.startsWith("[") && part.endsWith("]") ? (
              <Box component="span" key={i} sx={onDark ? keyOnDarkSx : keySx}>
                {part.slice(1, -1)}
              </Box>
            ) : (
              part
            ),
          )}
        </React.Fragment>
      ))}
    </>
  );
}

/** The same copy without its markup, for metadata and accessible names. */
export const plain = (text: string) => text.replace(/[[\]]/g, "").replace(/\n/g, " ");
