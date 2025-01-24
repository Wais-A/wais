import Card from "@/components/custom-ui/card";
import { Tags } from "@/components/custom-ui/tagAndList";
import { content } from "@/config/content";
import { person } from "@/config/person";
import { generateMetadata } from "@/lib/metadata";
import { viewport } from "@/lib/metadata";

/**
 * Generate page-specific metadata
 * Overrides default metadata with home page specific title and description
 */
export const metadata = generateMetadata(
  "Wais Almakaleh",
  "Personal portfolio and blog"
);
export { viewport };

/**
 * Home Page Component
 *
 * Implements a two-section layout:
 * 1. Hero section with personal introduction
 * 2. Featured projects grid with responsive layout
 *
 * Uses centralized content configuration for consistent messaging
 * and person configuration for personal details
 */
export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section: Personal introduction with role and description */}
      <section>
        <h1>
          {person.name}
          <span className="block text-2xl font-normal mt-2 text-foreground">
            {content.home.title}
          </span>
        </h1>
        <p>{content.home.description}</p>
      </section>

      {/* Projects Grid: Responsive layout with project cards */}
      <section>
        <h2>Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {content.home.projects.map((project) => (
            <Card key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* Technology tags with consistent styling */}
              <div className="flex gap-2 mt-4">
                <Tags items={project.tags} />
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
