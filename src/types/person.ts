/**
 * Types and interfaces for managing person-related data
 */

import type { Project } from "./content";

/**
 * Represents technical skills grouped by category
 */
export interface Skills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
  additional: string[]; // Added for additional skills like languages, office software
}

/**
 * Represents a single work experience entry
 */
export interface WorkExperience {
  company: string;
  location?: string; // Added for city/state
  timeframe: string;
  role: string;
  achievements: string[];
  category?: "technical" | "other"; // Added to categorize experience
}

/**
 * Represents an educational background entry
 */
export interface Education {
  institution: string;
  location?: string; // Added for city/state
  description: string;
  timeframe: string;
}

/**
 * Contact information
 */
export interface ContactInfo {
  email: string;
  phone?: string; // Added phone number
}

/**
 * Comprehensive person profile interface
 */
export interface Person {
  first: string;
  last: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  languages: string[];
  contact: ContactInfo; // Changed to structured contact info
  github: string;
  linkedin: string;
  bluesky: string;
  work: WorkExperience[];
  education: Education[];
  bio: string;
  projects: Project[];
  skills: Skills;
}
