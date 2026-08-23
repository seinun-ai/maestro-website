"use client";

import * as React from "react";
import NextLink from "next/link";
import Button, { type ButtonProps } from "@mui/material/Button";
import Link, { type LinkProps } from "@mui/material/Link";

/**
 * A component reference cannot cross the server → client boundary, so
 * `component={NextLink}` written inside a server page throws at prerender.
 * These two wrappers own that binding once, and every page uses them for
 * internal navigation — external links keep plain `href` on Button/Link.
 */
export function LinkButton(props: ButtonProps<typeof NextLink>) {
  return <Button component={NextLink} {...props} />;
}

export function TextLink(props: LinkProps<typeof NextLink>) {
  return <Link component={NextLink} {...props} />;
}
