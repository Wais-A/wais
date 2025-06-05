/**
 * Person Configuration Module
 */

import type { Person } from "@/types";

export const person: Person = {
  // Basic Information
  first: "Wais",
  last: "Almakaleh",
  name: "Wais Almakaleh",
  role: "Software Engineer",
  location: "Pottsville, PA",
  avatar: "/images/avatar.jpg",
  languages: ["English", "Arabic"],

  // Contact Information
  contact: {
    email: "",
    phone: "",
  },

  // Social Links
  github: "https://github.com/wais-a",
  linkedin: "https://www.linkedin.com/in/wais-almakaleh",
  bluesky: "https://bsky.app/profile/wais-a.bsky.social",

  // Projects
  projects: [
    {
      title: "Team Development",
      description:
        "Collaborated on multiple full-stack web applications using modern technologies and agile methodologies.",
      tags: ["iOS Dev", "Database Management", "Full-stack Web Dev"],
      link: "https://github.com/wais-a",
      image: "/images/project1.png",
    },
    {
      title: "IT Specialist",
      description:
        "Managed and resolved technical support tickets for staff and students at LCCC.",
      tags: [
        "IT Support",
        "Customer Service",
        "Hardware and Software Diagnostics",
      ],
      image: "/images/project2.png",
    },
    {
      title: "Database Management",
      description: "Experience with SQL, NoSQL, and Firebase implementations.",
      image: "/images/database-project.png",
      tags: ["SQL", "NoSQL", "Firebase"],
    },
    {
      title: "Frontend Development",
      description:
        "Created responsive and accessible user interfaces using modern frameworks.",
      image: "/images/frontend-project.png",
      tags: ["React", "Redux", "Angular", "CSS3"],
    },
  ],

  // Professional Experience
  work: [
    {
      company: "Lehigh Carbon Community College",
      location: "Schnecksville, PA",
      timeframe: "March 2023 – May 2025",
      role: "I.T. Student Employee",
      category: "technical",
      achievements: [
        "Efficiently respond and resolve support tickets and assist staff, professors, and students, enhancing campus productivity and reducing downtime",
        "Deliver prompt and courteous IT support via phone calls",
        "Provide on-demand, in-person IT support, resolving complex issues for users, thereby improving the overall user experience on campus",
      ],
    },
    {
      company: "Lambda School",
      location: "Los Angeles, CA",
      timeframe: "September 2019 – March 2022",
      role: "Software Engineer",
      category: "technical",
      achievements: [
        "Collaborated with teams with up to 10 members to build and complete websites on a responsive and functional deadline on both the front and back end",
        "Built over 15 experimental programs with teams that ranged from 3 to 10 individuals",
        "Designed functional and aesthetically pleasing websites to create an enjoyable customer experience",
        "Conducted industry research, gaining new skills to solve problems during development",
      ],
    },
    {
      company: "Clearly Clean Products",
      location: "Frackville, PA",
      timeframe: "August 2021 – March 2022",
      role: "Assembly Line Worker",
      category: "other",
      achievements: [],
    },
    {
      company: "Lowe's RDC",
      location: "Pottsville, PA",
      timeframe: "March 2018 – September 2019",
      role: "Machine Operator",
      category: "other",
      achievements: [],
    },
    {
      company: "Blue Line Wireless",
      location: "Brooklyn, NY",
      timeframe: "January 2014 – October 2017",
      role: "Electronic Sales Associate",
      category: "other",
      achievements: [],
    },
  ],

  // Education Background
  education: [
    {
      institution: "Lehigh Carbon Community College",
      location: "Schnecksville, PA",
      description: "Associate in Science: Computer Science",
      timeframe: "Expected Graduation: May 2025",
    },
    {
      institution: "Bucknell University",
      location: "Lewisburg, PA",
      description:
        "Bucknell University Community College Scholars Program - One of a few students from LCCC selected for a competitive, six-week academic program. Selected based on a GPA of 3.5 or higher, leadership abilities, problem-solving skills, and campus engagement.",
      timeframe: "June 2024 – July 2024",
    },
  ],

  // Brief bio/description
  bio: "Software-engineering student skilled in full-stack and mobile development with experience building applications and providing IT support.",

  // Technical Skills
  skills: {
    languages: ["TypeScript", "Python", "C", "SQL"],
    frameworks: ["React", "Redux", "Node.js", "Express", "Swift"],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "REST/GraphQL APIs",
      "SwiftData",
    ],
    tools: [
      "Jest",
      "Mocha",
      "CI/CD pipelines",
      "Docker",
      "Git",
      "Agile methodology",
      "Analytical troubleshooting",
      "Cross-functional collaboration",
    ],
    additional: [
      "Fluent in English and Arabic",
      "Microsoft Office Suite (Word, Excel, PowerPoint)",
    ],
  },
};
