// src/types/theme.ts

// Available theme color options for primary color
export type ThemeColorOption =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

// Available theme hover effect options
export type ThemeHoverEffect = "scale" | "glow" | "none";

// Available theme background mode options
export type ThemeBackgroundMode = "dark" | "light";

export type ThemeColors = {
  primary: ThemeColorOption;
  accent: ThemeColorOption;
  background: ThemeBackgroundMode;
};

export type ThemeEffects = {
  gradient: boolean;
  hover: ThemeHoverEffect;
  opacity: number;
};

export type TransitionEffect = {
  themeSwitchDuration: number;
};

// Complete theme configuration
export type ThemeConfig = {
  colors: ThemeColors;
  effects: ThemeEffects;
  transitions: TransitionEffect;
};
