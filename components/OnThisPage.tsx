"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { site } from "@/content/site";

type Item = { id: string; text: string };

/** The rail needs about 200px of margin beside a 1200px container, which only
 *  exists past this width. Narrower screens get the same list inline. */
const RAIL = "@media (min-width: 1760px)";

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);

/**
 * Wayfinding for the two pages that are reference rather than argument.
 *
 * Section titles are h2, so the list is built from those alone. Pulling in h3
 * as well would run to forty-five entries on /guide and stop being a summary.
 * Ids are assigned here rather than at each call site because the headings are
 * rendered from content in .map() loops, and a heading with no id cannot be
 * linked to, which is the actual gap this closes.
 */
export default function OnThisPage() {
  const [items, setItems] = React.useState<Item[]>([]);
  const [active, setActive] = React.useState<string>("");

  React.useEffect(() => {
    const main = document.getElementById("main");
    if (!main) return;

    let cleanup: (() => void) | undefined;

    // Deferred a frame so the scan reads settled layout, and so the state
    // update is a callback rather than a synchronous effect body.
    const raf = requestAnimationFrame(() => {
      const found: Item[] = [];
      const seen = new Set<string>();

      for (const h of Array.from(main.querySelectorAll("h2"))) {
        // Page furniture (the maker note, the closing band) opts out: it is
        // not a section of the document.
        if (h.closest('[data-toc="skip"]')) continue;
        const text = (h.textContent ?? "").trim();
        if (!text) continue;

        let id = h.id || slug(text);
        let n = 2;
        while (seen.has(id)) id = `${slug(text)}-${n++}`;
        seen.add(id);
        if (!h.id) h.id = id;

        found.push({ id, text });
      }
      setItems(found);

      // Ids did not exist during SSR, so a deep link landing on a cold page
      // could not resolve until now.
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (hash && found.some((i) => i.id === hash)) {
        document.getElementById(hash)?.scrollIntoView();
      }

      const onScroll = () => {
        let current = "";
        for (const i of found) {
          const el = document.getElementById(i.id);
          if (el && el.getBoundingClientRect().top <= 140) current = i.id;
        }
        setActive(current);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanup = () => window.removeEventListener("scroll", onScroll);
    });

    return () => {
      cancelAnimationFrame(raf);
      cleanup?.();
    };
  }, []);

  if (items.length < 3) return null;

  return (
    <Box
      component="nav"
      aria-label="On this page"
      data-toc="skip"
      sx={{
        mb: { xs: 4, md: 5 },
        p: 2.5,
        borderRadius: 3,
        border: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
        [RAIL]: {
          position: "fixed",
          top: 132,
          left: "calc(50% + 628px)",
          width: 208,
          maxHeight: "calc(100vh - 200px)",
          overflowY: "auto",
          m: 0,
          p: 0,
          pl: 2.5,
          border: 0,
          borderLeft: 1,
          borderColor: "divider",
          borderRadius: 0,
          backgroundColor: "transparent",
          zIndex: 1,
        },
        "@media print": { display: "none" },
      }}
    >
      <Typography variant="overline" component="p" sx={{ color: "text.secondary", mb: 1.25, display: "block" }}>
        On this page
      </Typography>

      <Stack component="ol" spacing={0.25} sx={{ listStyle: "none", m: 0, p: 0 }}>
        {items.map((i) => (
          <Box component="li" key={i.id}>
            <Link
              href={`#${i.id}`}
              underline="none"
              sx={(t) => ({
                display: "block",
                py: 0.5,
                fontSize: "0.875rem",
                lineHeight: 1.4,
                color: active === i.id ? "primary.main" : "text.secondary",
                fontWeight: active === i.id ? 600 : 400,
                "&:hover": { color: "primary.main" },
                [RAIL]: {
                  borderLeft: 2,
                  ml: "-22px",
                  pl: "20px",
                  borderColor: active === i.id ? t.palette.primary.main : "transparent",
                },
              })}
            >
              {i.text}
            </Link>
          </Box>
        ))}
      </Stack>

      <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: "divider" }}>
        <Link
          href={`${site.siteRepo}/blob/main/content/site.ts`}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{ fontSize: "0.8125rem", color: "text.secondary", "&:hover": { color: "primary.main" } }}
        >
          Edit this page on GitHub
        </Link>
      </Box>
    </Box>
  );
}
