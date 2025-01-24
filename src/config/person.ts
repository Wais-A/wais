/**
 * Person Configuration Module
 *
 * Implements personal and professional information including biography,
 * work experience, education, and skills. Uses the Person interface
 * to ensure type safety and consistent structure.
 *
 * @see {@link Person} in types/person.ts for type definitions
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
  email: "mailto:walmakaleh@mymail.lccc.edu",

  // Social Links
  github: "https://github.com/wais-a",
  linkedin: "https://www.linkedin.com/in/wais-almakaleh",
  bluesky: "https://bsky.app/profile/wais-a.bsky.social",

  // Projects
  projects: [
    {
      title: "Team Development Projects",
      description:
        "Collaborated on multiple full-stack web applications using modern technologies and agile methodologies.",
      tags: ["React", "Node.js", "JavaScript", "TypeScript"],
      link: "https://github.com/wais-a",
      image: "/images/project1.png",
    },
    {
      title: "IT Support Systems",
      description:
        "Managed and resolved technical support tickets for staff and students at LCCC.",
      tags: ["Technical Support", "Problem Solving", "Customer Service"],
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
      timeframe: "March 2023 - Present",
      role: "I.T. Student Employee",
      achievements: [
        "Efficiently respond and resolve support tickets and assist staff, professors, and students, enhancing campus productivity and reducing downtime",
        "Deliver prompt and courteous IT support via phone calls",
        "Provide on-demand, in-person IT support, resolving complex issues for users",
      ],
    },
    {
      company: "Lambda School",
      timeframe: "September 2019 – March 2022",
      role: "Software Engineer",
      achievements: [
        "Collaborated with teams with up to 10 members to build and complete websites",
        "Built over 15 experimental programs with teams that ranged from 3 to 10 individuals",
        "Designed functional and aesthetically pleasing websites",
        "Conducted industry research, gaining new skills to solve problems during development",
      ],
    },
    {
      company: "Clearly Clean Products",
      timeframe: "August 2021 – March 2022",
      role: "Assembly Line Worker",
      achievements: [],
    },
    {
      company: "Lowe's RDC",
      timeframe: "March 2018 – September 2019",
      role: "Machine Operator",
      achievements: [],
    },
    {
      company: "Blue Line Wireless",
      timeframe: "January 2014 – October 2017",
      role: "Electronic Sales Associate",
      achievements: [],
    },
  ],

  // Education Background
  education: [
    {
      institution: "Lehigh Carbon Community College",
      description: "Associate in Science: Computer Science",
      timeframe: "Expected Graduation: May 2025",
    },
    {
      institution: "Bucknell University",
      description:
        "Bucknell University Community College Scholars Program - Selected based on GPA of 3.5 or higher, leadership abilities, and problem-solving skills",
      timeframe: "June 2024 – July 2024",
    },
  ],

  // Brief bio/description
  bio: "A proficient, dedicated, bilingual software engineer experienced working on teams of diverse individuals with unique perspectives. Skilled in JavaScript, Python, React, Node.js, and various database technologies.",

  // Technical Skills
  skills: {
    languages: ["JavaScript", "Python", "C", "HTML", "CSS3", "TypeScript"],
    frameworks: ["React", "Node.js", "Angular", "Redux"],
    databases: ["SQL", "NoSQL", "Firebase"],
    tools: ["Git", "REST APIs", "Unit Testing", "Ajax"],
  },
};
