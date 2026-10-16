import type { NextConfig } from "next";

/**
 * The site was seven pages until the 2026-10 launch refresh; it is now Home,
 * Get started and Privacy. The old pages are linked from posts, the README and
 * search results, so each one lands on the home section that replaced it.
 */
const retired: Record<string, string> = {
  "/why": "/#premise",
  "/features": "/#features",
  "/guide": "/#how-it-works",
  "/models": "/#numbers",
  "/agents": "/#use-cases",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(retired).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
