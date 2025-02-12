import { random } from "~/common/helpers/random";
import React from "react";

export interface Sparkle {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: React.CSSProperties;
}

type GenerateSparkle = (color?: string) => Sparkle;

const DEFAULT_COLOR = "oklch(0.879 0.169 84.429)"; // amber-300

export const generateSparkle: GenerateSparkle = (color = DEFAULT_COLOR) => ({
  id: String(random(10000, 99999)),
  createdAt: Date.now(),
  color,
  size: random(10, 20),
  style: {
    top: random(0, 100) + "%",
    left: random(0, 100) + "%",
  },
});
