/**
 * Types and interfaces for managing person-related data
 */

import type { Project } from "./content";

/**
 * Represents technical skills grouped by category
 *  languages - Programming languages
 *  frameworks - Development frameworks and libraries
 *  databases - Database technologies
 *  tools - Development tools and utilities
 */
export interface Skills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
}

/**
 * Represents a single work experience entry
 *  company - Name of the employer
 *  timeframe - Duration of employment (e.g., "2020-2022")
 *  role - Job title or position held
 *  achievements - List of key accomplishments during tenure
 */
export interface WorkExperience {
  company: string;
  timeframe: string;
  role: string;
  achievements: string[];
}

/**
 * Represents an educational background entry
 *  institution - Name of the school/university
 *  description - Degree or program description
 *  timeframe - Duration of education (e.g., "2016-2020")
 */
export interface Education {
  institution: string;
  description: string;
  timeframe: string;
}

/**
 * Comprehensive person profile interface containing all personal and professional information
 *  first - First name
 *  last - Last name
 *  name - Full name
 *  role - Professional title/role
 *  location - Geographic location (timezone format)
 *  avatar - Path to profile image
 *  languages - List of spoken languages
 *  email - Contact email address
 *  github - GitHub profile URL
 *  linkedin - LinkedIn profile URL
 *  bluesky - Bluesky social profile URL
 *  work - Array of work experiences
 *  education - Array of educational background
 *  bio - Brief professional biography
 *  projects - Array of featured projects
 */
export interface Person {
  first: string;
  last: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  languages: string[];
  email: string;
  github: string;
  linkedin: string;
  bluesky: string;
  work: WorkExperience[];
  education: Education[];
  bio: string;
  projects: Project[];
  skills: Skills;
}
