/** Intrinsic sizes of the shipped captures, so the layout reserves space and
 *  never shifts while a screenshot or video decodes. */
export const mediaSize: Record<string, { width: number; height: number }> = {
  // TODO(captures): the two new captures replace mcp-dashboard.png and
  // hunt-digest.png. Set their real pixel sizes when the files land; until then
  // ShotFrame's 1400x800 fallback reserves the space.
  "/media/agent-inbox.png": { width: 1400, height: 800 },
  "/media/connected-agents.png": { width: 1400, height: 800 },
  "/media/analytics.png": { width: 1400, height: 767 },
  "/media/applications.png": { width: 1400, height: 766 },
  "/media/base-resume.png": { width: 1400, height: 800 },
  "/media/health-report.png": { width: 1400, height: 767 },
  "/media/job-overview.png": { width: 1400, height: 800 },
  "/media/kb-import.png": { width: 1400, height: 800 },
  "/media/kb-onboarding.png": { width: 1400, height: 768 },
  "/media/templates.png": { width: 1400, height: 767 },
  "/media/extension.gif": { width: 1000, height: 548 },
  "/media/hero.mp4": { width: 1512, height: 850 },
};

/** Poster frames for video sources, keyed by the video path. */
export const videoPoster: Record<string, string> = {
  "/media/hero.mp4": "/media/hero-poster.jpg",
};

export const isVideo = (src: string) => src.endsWith(".mp4") || src.endsWith(".webm");
