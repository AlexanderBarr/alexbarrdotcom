import type { LucideIcon } from "lucide-react";

export type LucideTechIcon = {
  type: "lucide";
  name: string;
  icon: LucideIcon;
};

export type SvgTechIcon = {
  type: "svg";
  name: string;
  icon: string;
};

export type TechnologyIcon = LucideTechIcon | SvgTechIcon;

export type Technology = {
  name: string;
  icon: TechnologyIcon;
};
