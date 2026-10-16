import type { Metadata, Viewport } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SkipLink from "@/components/SkipLink";
import { site } from "@/content/site";
import "./globals.css";

// The owner's "Lavender Dusk" typeface, for headlines and body alike. It is a
// variable font (300 to 900), so no weight list: headlines sit at 350.
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

// Code and command blocks, overlines and the filename chips only.
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.short}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.author }],
  keywords: [
    "resume tailoring",
    "match score",
    "deterministic match score",
    "applicant tracking system",
    "job application tracker",
    "local-first",
    "MCP server",
    "LaTeX resume",
    "Typst resume",
    "open source",
  ],
  openGraph: {
    type: "website",
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    images: [{ url: "/brand/social-preview.png", width: 1280, height: 640, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    images: ["/brand/social-preview.png"],
  },
  icons: {
    icon: [
      { url: "/brand/maestro_mark_small.svg", type: "image/svg+xml" },
      // Fallback for clients that don't take SVG favicons. Lives in public/,
      // so /favicon.ico resolves even for crawlers that request it blindly.
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F7" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} ${mono.variable}`}>
      <body>
        <ThemeRegistry>
          <SkipLink />
          <SiteHeader />
          <Box component="main" id="main">
            {children}
          </Box>
          <SiteFooter />
        </ThemeRegistry>
      </body>
    </html>
  );
}
