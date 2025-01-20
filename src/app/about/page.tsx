import { HeroHighlight } from "@/components/ui/hero-highlight";
// src/app/about/page.tsx
import { content } from "@/config/content";
import { person } from "@/config/person";
import { generateMetadata, viewport } from "@/lib/metadata";

export { viewport };
export const metadata = generateMetadata(
  "About - Wais Almakaleh",
  content.about?.description || "Learn more about me and my work."
);

export default function About() {
  // Group skills by category
  const skills = {
    languages: ["JavaScript", "Python", "C", "HTML", "CSS3", "TypeScript"],
    frameworks: ["React", "Node.js", "Angular", "Redux"],
    databases: ["SQL", "NoSQL", "Firebase"],
    tools: ["Git", "REST APIs", "Unit Testing", "Ajax"],
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section with Animation */}
      <div className="relative">
        <HeroHighlight>
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
            {person.bio}
          </p>
        </HeroHighlight>
      </div>

      {/* Skills Section */}
      <section className="mb-16 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-xl p-8 border">
        <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {person.work.map((exp) => (
            <div
              key={exp.company}
              className="relative bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-xl p-6 border transition-all hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">
                  {exp.timeframe}
                </p>
              </div>
              {exp.achievements.length > 0 && (
                <ul className="list-disc list-inside space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={`${exp.company}-${achievement.slice(0, 20)}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Education</h2>
        <div className="grid gap-8">
          {person.education.map((edu) => (
            <div
              key={edu.institution}
              className="bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-xl p-6 border transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                {edu.timeframe}
              </p>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
