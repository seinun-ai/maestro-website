/** Intrinsic sizes of the shipped captures, so the layout reserves space and
 *  never shifts while a screenshot or video decodes. Keep every entry in step
 *  with a file in public/media/, and every file with a use on the site. */
export const mediaSize: Record<string, { width: number; height: number }> = {
  "/media/hero.mp4": { width: 1512, height: 850 },
  // TODO(capture): the v0.10.1 recaptures in maestro-marketing/site-media/
  // replace these five 2026-08 stills. Copy each in with its real size.
  "/media/base-resume.png": { width: 1400, height: 800 },
  "/media/job-overview.png": { width: 1400, height: 800 },
  "/media/templates.png": { width: 1400, height: 767 },
  "/media/health-report.png": { width: 1400, height: 767 },
  "/media/extension.gif": { width: 1000, height: 548 },
  // TODO(capture): stand-in for the diff card until a capture of a tailored
  // resume's review (each change with Undo) lands.
  "/media/kb-import.png": { width: 1400, height: 800 },
  // TODO(capture): stand-in for the Your AI teaser until connected-agents.png
  // (Settings › Connected agents) lands; then point agentsTeaser.image at it.
  "/media/applications.png": { width: 1400, height: 766 },
};

/** Poster frames for video sources, keyed by the video path. */
export const videoPoster: Record<string, string> = {
  "/media/hero.mp4": "/media/hero-poster.jpg",
};

export const isVideo = (src: string) => src.endsWith(".mp4") || src.endsWith(".webm");
