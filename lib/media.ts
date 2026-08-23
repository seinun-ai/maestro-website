/** Intrinsic pixel sizes of the shipped captures, so next/image can reserve
 *  layout space and never shift the page while a screenshot decodes. */
export const mediaSize: Record<string, { width: number; height: number }> = {
  "/media/analytics.png": { width: 1400, height: 767 },
  "/media/applications.png": { width: 1400, height: 766 },
  "/media/base-resume.png": { width: 1400, height: 800 },
  "/media/health-report.png": { width: 1400, height: 767 },
  "/media/hunt-digest.png": { width: 1400, height: 992 },
  "/media/job-overview.png": { width: 1400, height: 800 },
  "/media/kb-import.png": { width: 1400, height: 800 },
  "/media/kb-onboarding.png": { width: 1400, height: 768 },
  "/media/mcp-dashboard.png": { width: 1400, height: 992 },
  "/media/templates.png": { width: 1400, height: 767 },
  "/media/extension.gif": { width: 1000, height: 548 },
  "/media/hero.gif": { width: 1000, height: 546 },
};
