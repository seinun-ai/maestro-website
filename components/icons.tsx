import * as React from "react";
import LayersIcon from "@mui/icons-material/LayersOutlined";
import WorkIcon from "@mui/icons-material/WorkOutlined";
import DifferenceIcon from "@mui/icons-material/DifferenceOutlined";
import SubmitIcon from "@mui/icons-material/AdsClickOutlined";
import SourceIcon from "@mui/icons-material/AccountTreeOutlined";
import YoursIcon from "@mui/icons-material/TouchAppOutlined";
import AddsIcon from "@mui/icons-material/TrendingUpOutlined";
import LimitIcon from "@mui/icons-material/InfoOutlined";
import type { BeliefIcon, StepIcon } from "@/content/site";

/** Copy names an icon by role; this is the one place that picks the glyph. */
export const icons: Record<StepIcon | BeliefIcon, React.ReactElement> = {
  record: <LayersIcon />,
  submit: <SubmitIcon />,
  source: <SourceIcon />,
  yours: <YoursIcon />,
  adds: <AddsIcon />,
  limit: <LimitIcon />,
  specialist: <WorkIcon />,
  match: <DifferenceIcon />,
};
