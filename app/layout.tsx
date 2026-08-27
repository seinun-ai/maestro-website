import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SkipLink from "@/components/SkipLink";
import { site } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
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
    "ATS score",
    "deterministic ATS",
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

export const viewport: Viewport = { themeColor: "#F7F8FA" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
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
