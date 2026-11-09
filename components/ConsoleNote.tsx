"use client";

import * as React from "react";

import { site } from "@/content/site";

/** One line for whoever opens the browser console: where the score is computed. Renders nothing. */
export default function ConsoleNote() {
  React.useEffect(() => {
    console.info(
      `%cHi, curious one.%c The Match score is fixed rules plus a small model, no AI service. Read it: ${site.repo}/tree/main/backend/app/services/ats`,
      "font-weight:700",
      "font-weight:400",
    );
  }, []);
  return null;
}
