export interface WorkExperience {
  company: string;
  timeframe: string;
  role: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  description: string;
  timeframe: string;
}

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
}
