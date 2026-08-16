export interface Skills {
  languages: string[];
  webData: string[];
  tools: string[];
}

export interface WorkExperience {
  company: string;
  location?: string;
  timeframe: string;
  role: string;
  achievements: string[];
  category: "technical" | "other";
}

export interface Education {
  institution: string;
  location?: string;
  description: string;
  timeframe: string;
  recognition?: string;
}

export interface ContactInfo {
  email: string;
}

export interface Person {
  first: string;
  last: string;
  name: string;
  role: string;
  location: string;
  contact: ContactInfo;
  github: string;
  linkedin: string;
  x: string;
  bio: string;
  summary: string;
  focus: string[];
  work: WorkExperience[];
  education: Education[];
  skills: Skills;
}
