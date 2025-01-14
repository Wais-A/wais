// personal.ts
// Central configuration file for all personal information
// This serves as a single source of truth for personal details

export const person = {
  // Basic Information
  first: "Wais",
  last: "LastName",
  name: "Wais LastName",
  role: "Full-stack Developer",
  location: "America/New_York",
  avatar: "/images/avatar.jpg",
  languages: ["English", "Other"],

  // Contact Information
  email: "mailto:95wais@gmail.com",

  // Social Links - Each property provides direct access to the link
  github: "https://github.com/wais-a",
  linkedin: "https://www.linkedin.com/in/wais-almakaleh",
  bluesky: "https://bsky.app/profile/wais-a.bsky.social",

  // Professional Experience
  work: [
    {
      company: "Company Name",
      timeframe: "2022 - Present",
      role: "Full-stack Developer",
      achievements: ["Achievement 1", "Achievement 2"],
    },
  ],

  // Education Background
  education: [
    {
      institution: "University Name",
      description: "Computer Science Degree",
      timeframe: "2018-2022",
    },
  ],

  // Brief bio/description
  bio: "I create performant and accessible web applications using React, Next.js, and TypeScript.",
};

export type Person = typeof person;
