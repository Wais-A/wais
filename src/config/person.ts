import type { Person } from "@/types";

export const person: Person = {
  first: "Wais",
  last: "Almakaleh",
  name: "Wais Almakaleh",
  role: "Computer Science & Engineering Student",
  location: "Lewisburg, PA",
  contact: {
    email: "wa003@bucknell.edu",
  },
  github: "https://github.com/wais-a",
  linkedin: "https://www.linkedin.com/in/wais-al/",
  x: "https://x.com/_Wais_a",
  bio: "Bucknell University student with experience in software development, IT systems, and undergraduate research.",
  summary:
    "I’m a Computer Science & Engineering student at Bucknell University with experience in software development, IT systems, and undergraduate research.",
  focus: ["Software development", "IT systems", "Undergraduate research"],
  work: [
    {
      company: "Bucknell University",
      location: "Lewisburg, PA",
      timeframe: "Summer 2026",
      role: "Undergraduate Researcher",
      category: "technical",
      achievements: [
        "Conducted faculty-mentored research in keystroke dynamics, developing a new feature-based approach to characterize individual typing behavior.",
        "Built six-feature profiles using speed, acceleration, and jerk; initial results were promising and identified directions for further study.",
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
      description: "BS in Computer Science & Engineering",
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
