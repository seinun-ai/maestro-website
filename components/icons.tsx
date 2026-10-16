import * as React from "react";
import LayersIcon from "@mui/icons-material/LayersOutlined";
import WorkIcon from "@mui/icons-material/WorkOutlined";
import DifferenceIcon from "@mui/icons-material/DifferenceOutlined";
import TargetIcon from "@mui/icons-material/TrackChangesOutlined";
import SpeedIcon from "@mui/icons-material/SpeedOutlined";
import TemplateIcon from "@mui/icons-material/ViewQuiltOutlined";
import ExtensionIcon from "@mui/icons-material/ExtensionOutlined";
import ExtractIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import MaintainIcon from "@mui/icons-material/EditNoteOutlined";
import HuntIcon from "@mui/icons-material/TravelExploreOutlined";
import ApplyIcon from "@mui/icons-material/SendOutlined";
import type { CardIcon, StepIcon, VerbIcon } from "@/content/site";

/** Copy names an icon by role; this is the one place that picks the glyph. */
export const icons: Record<StepIcon | CardIcon | VerbIcon, React.ReactElement> = {
  record: <LayersIcon />,
  specialist: <WorkIcon />,
  match: <DifferenceIcon />,
  target: <TargetIcon />,
  score: <SpeedIcon />,
  diff: <DifferenceIcon />,
  template: <TemplateIcon />,
  companion: <ExtensionIcon />,
  extract: <ExtractIcon />,
  maintain: <MaintainIcon />,
  hunt: <HuntIcon />,
  apply: <ApplyIcon />,
};
