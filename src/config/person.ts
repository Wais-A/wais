import type { Person } from "@/types";

export const person: Person = {
  first: "Wais",
  last: "Almakaleh",
  name: "Wais Almakaleh",
  role: "Computer Science & Engineering + Physics Student",
  location: "Lewisburg, PA",
  contact: {
    email: "wa003@bucknell.edu",
  },
  github: "https://github.com/wais-a",
  linkedin: "https://www.linkedin.com/in/wais-almakaleh",
  x: "https://x.com/_Wais_a",
  bio: "Bucknell student building software, supporting technical systems, and studying human typing behavior.",
  summary:
    "I build software, support technical systems, and explore how people interact with technology through behavioral data.",
  focus: ["Software engineering", "IT systems", "Human-centered research"],
  work: [
    {
      company: "Bucknell University",
      location: "Lewisburg, PA",
      timeframe: "Summer 2026",
      role: "Undergraduate Researcher",
      category: "technical",
      achievements: [
        "Analyzed 225 fixed-text recordings from 75 users across three sessions to evaluate user-specific typing patterns.",
        "Built six-feature profiles from speed, acceleration, and jerk; same-user recordings had a 4.08-fold lower median distance than different-user recordings.",
      ],
    },
    {
      company: "Cardinal Systems, Inc.",
      location: "Schuylkill Haven, PA",
      timeframe: "May 2025 - August 2025",
      role: "IT Intern",
      category: "technical",
      achievements: [
        "Assisted with network infrastructure upgrades and troubleshooting.",
        "Resolved hardware diagnostics, software installation, and user access management issues.",
        "Collaborated with senior IT staff on security protocol deployment to improve data security and system efficiency.",
      ],
    },
    {
      company: "Lehigh Carbon Community College",
      location: "Schnecksville, PA",
      timeframe: "March 2023 - May 2025",
      role: "I.T. Student Employee",
      category: "technical",
      achievements: [
        "Provided technical support for faculty and students by triaging hardware and software issues, managing accounts, and minimizing campus downtime.",
      ],
    },
    {
      company: "Lowe's RDC",
      timeframe: "2018 - 2019",
      role: "Machine Operator",
      category: "other",
      achievements: [],
    },
    {
      company: "Home Depot",
      timeframe: "2018",
      role: "Logistics",
      category: "other",
      achievements: [],
    },
  ],
  education: [
    {
      institution: "Bucknell University",
      location: "Lewisburg, PA",
      description: "BS in Computer Science & Engineering and Physics",
      timeframe: "Expected May 2028",
      recognition: "Bucknell Community College Scholar",
    },
    {
      institution: "Lehigh Carbon Community College",
      location: "Schnecksville, PA",
      description: "AS in Computer Science",
      timeframe: "May 2025",
    },
    {
      institution: "Lambda School (BloomTech)",
      location: "Remote",
      description: "Full-Stack Web Development & Computer Science",
      timeframe: "2019 - 2021",
    },
  ],
  skills: {
    languages: [
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL",
      "Swift",
      "Java",
    ],
    webData: [
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "RESTful APIs",
      "SQLite",
      "Jupyter",
    ],
    tools: [
      "Git/GitHub",
      "Docker",
      "VS Code",
      "Unix/Linux CLI",
      "JavaFX",
      "Gradle",
    ],
  },
};
