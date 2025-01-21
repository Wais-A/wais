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
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="">
        <h1 className="text-4xl font-bold">
          {person.name}
          <span className="block text-2xl font-normal mt-2 text-neutral-600 dark:text-neutral-400">
            {content.home.title}
          </span>
        </h1>
        <p className="mt-6 text-lg max-w-2xl">{content.home.description}</p>
      </section>

      {/* Featured Projects Section */}
      <section className="">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {content.home.projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-lg p-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-xl">{project.title}</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <div className="flex gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
