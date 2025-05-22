import type { LucideIcon } from "lucide-react";

export type LucideTechIcon = {
  type: "lucide";
  name: string;
  icon: LucideIcon;
};

export interface TechnologyIcon {
  type: "svg";
  name: string;
  icon: string;
}

export type Technology = {
  name: string;
  icon: TechnologyIcon;
};
