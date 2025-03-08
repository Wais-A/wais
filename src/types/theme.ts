/**
 * Theme type definitions for the application's styling system
 */


export type ThemeColors = {
  primary: string;
  accent: string;
  background: "dark" | "light";
};


export type ThemeEffects = {
  gradient: boolean;
  hover: "scale" | "glow" | "none";
  opacity: number;
};

export type TransitionEffect = {
  themeSwitchDuration: number;
};

/**
 * Complete theme configuration combining colors and effects
 */
export type ThemeConfig = {
  colors: ThemeColors;
  effects: ThemeEffects;
  transitions: TransitionEffect;
};
