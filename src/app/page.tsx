/**
 * Home Page Component
 *
 * Renders the main landing page of the portfolio website featuring:
 * - Personal introduction
 * - Featured projects grid
 * - Theme-aware styling
 */
import { content } from "@/config/content";
import { person } from "@/config/person";
import { ProjectCard } from "@/components/project-card";
import type { HomeContent } from "@/types";

export default function Home() {
  const homeContent: HomeContent = content.home; // Explicitly type the content

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
      {/* Gradient overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20">
          <h1 className="text-4xl font-bold">
            {person.name}
            <span className="block text-2xl font-normal mt-2 text-neutral-600 dark:text-neutral-400">
              {homeContent.title}
            </span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl">{homeContent.description}</p>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {homeContent.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
