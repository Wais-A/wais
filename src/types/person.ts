/**
 * Types and interfaces for managing person-related data
 */

import type { Project } from "./content";

/**
 * Represents a single work experience entry
 * @property company - Name of the employer
 * @property timeframe - Duration of employment (e.g., "2020-2022")
 * @property role - Job title or position held
 * @property achievements - List of key accomplishments during tenure
 */
export interface WorkExperience {
  company: string;
  timeframe: string;
  role: string;
  achievements: string[];
}

/**
 * Represents an educational background entry
 * @property institution - Name of the school/university
 * @property description - Degree or program description
 * @property timeframe - Duration of education (e.g., "2016-2020")
 */
export interface Education {
  institution: string;
  description: string;
  timeframe: string;
}

/**
 * Comprehensive person profile interface containing all personal and professional information
 * @property first - First name
 * @property last - Last name
 * @property name - Full name
 * @property role - Professional title/role
 * @property location - Geographic location (timezone format)
 * @property avatar - Path to profile image
 * @property languages - List of spoken languages
 * @property email - Contact email address
 * @property github - GitHub profile URL
 * @property linkedin - LinkedIn profile URL
 * @property bluesky - Bluesky social profile URL
 * @property work - Array of work experiences
 * @property education - Array of educational background
 * @property bio - Brief professional biography
 * @property projects - Array of featured projects
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
}
