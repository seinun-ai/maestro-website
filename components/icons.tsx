import * as React from "react";
import LayersIcon from "@mui/icons-material/LayersOutlined";
import WorkIcon from "@mui/icons-material/WorkOutlined";
import DifferenceIcon from "@mui/icons-material/DifferenceOutlined";
import TargetIcon from "@mui/icons-material/TrackChangesOutlined";
import SpeedIcon from "@mui/icons-material/SpeedOutlined";
import TemplateIcon from "@mui/icons-material/ViewQuiltOutlined";
import ExtensionIcon from "@mui/icons-material/ExtensionOutlined";
import HealthIcon from "@mui/icons-material/MonitorHeartOutlined";
import CodeIcon from "@mui/icons-material/CodeOutlined";
import LaptopIcon from "@mui/icons-material/LaptopMacOutlined";
import NoAccountIcon from "@mui/icons-material/PersonOffOutlined";
import FileIcon from "@mui/icons-material/DescriptionOutlined";
import type { CardIcon, OwnIcon, StepIcon } from "@/content/site";

/** Copy names an icon by role; this is the one place that picks the glyph. */
export const icons: Record<StepIcon | CardIcon | OwnIcon, React.ReactElement> = {
  record: <LayersIcon />,
  specialist: <WorkIcon />,
  match: <DifferenceIcon />,
  target: <TargetIcon />,
  score: <SpeedIcon />,
  diff: <DifferenceIcon />,
  template: <TemplateIcon />,
  companion: <ExtensionIcon />,
  health: <HealthIcon />,
  open: <CodeIcon />,
  local: <LaptopIcon />,
  account: <NoAccountIcon />,
  export: <FileIcon />,
};
