/**
 * Utility Functions Module
 * 
 * This module contains helper functions used throughout the application
 * to manage class names and other common utilities.
 */

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string,
 * intelligently merging Tailwind CSS classes to avoid conflicts.
 * 
 * @param inputs - An array of class values to be merged.
 * @returns A single string of merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}