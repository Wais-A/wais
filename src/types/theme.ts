/**
 * Theme type definitions for the application's styling system
 */

/**
 * Defines the color scheme configuration
 *  primary - Primary brand color
 *  accent - Secondary accent color
 *  background - Theme mode setting
 */
export type ThemeColors = {
  primary: string;
  accent: string;
  background: "dark" | "light";
};

/**
 * Defines visual effects configuration
 *  gradient - Whether gradient effects are enabled
 *  hover - Type of hover animation to use
 *  opacity - Global opacity level for translucent elements
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
