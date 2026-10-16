/** Intrinsic sizes of the shipped captures, so the layout reserves space and
 *  never shifts while a screenshot or video decodes. Keep every entry in step
 *  with a file in public/media/, and every file with a use on the site.
 *  The stills and the Companion GIF are 0.11.0 captures of the fictional
 *  Jordan Ellis persona (maestro-marketing/site-media-1016/MANIFEST.md says
 *  what each one shows). The hero loop is still built from v0.10.1 captures. */
export const mediaSize: Record<string, { width: number; height: number }> = {
  "/media/hero.mp4": { width: 1512, height: 850 },
  "/media/base-gallery.png": { width: 1400, height: 788 },
  "/media/job-score.png": { width: 1400, height: 788 },
  "/media/base-resume.png": { width: 1400, height: 788 },
  "/media/health-report.png": { width: 1400, height: 788 },
  "/media/agent-inbox.png": { width: 1400, height: 788 },
  "/media/extension.gif": { width: 1000, height: 562 },
  "/media/companion.png": { width: 1400, height: 788 },
  "/media/tailor-review.png": { width: 1400, height: 788 },
};

/** Poster frames for video sources, keyed by the video path. */
export const videoPoster: Record<string, string> = {
  "/media/hero.mp4": "/media/hero-poster.jpg",
};

/** A still for each animated GIF, shown instead when the reader prefers reduced motion. */
export const gifStill: Record<string, string> = {
  "/media/extension.gif": "/media/companion.png",
};

export const isVideo = (src: string) => src.endsWith(".mp4") || src.endsWith(".webm");
