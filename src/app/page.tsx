import Card from "@/components/custom-ui/card";
import { Tags } from "@/components/custom-ui/tagAndList";
import { content } from "@/config/content";
import { person } from "@/config/person";
import { generateMetadata } from "@/lib/metadata";
import { viewport } from "@/lib/metadata";

export const metadata = generateMetadata(
  "Wais Almakaleh",
  "Personal portfolio and blog"
);
export { viewport };

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <section>
        <h1>
          {person.name}
          <span className="block text-2xl font-normal mt-2 text-foreground">
            {content.home.title}
          </span>
        </h1>
        <p>{content.home.description}</p>
      </section>

      {/* Featured Projects Section */}
      <section>
        <h2>Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {content.home.projects.map((project) => (
            <Card key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
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
