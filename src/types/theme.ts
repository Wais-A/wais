/**
 * Theme type definitions for the application's styling system
 */

/**
 * Defines the color scheme configuration
 * @property primary - Primary brand color
 * @property accent - Secondary accent color
 * @property background - Theme mode setting
 */
export type ThemeColors = {
  primary: string;
  accent: string;
  background: "dark" | "light";
};

/**
 * Defines visual effects configuration
 * @property gradient - Whether gradient effects are enabled
 * @property hover - Type of hover animation to use
 * @property opacity - Global opacity level for translucent elements
 */
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
