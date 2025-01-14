import { personalConfig, contentConfig } from '@/config';
import { ThemeToggle } from "@/components/theme-toggle";


export default function Home() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
      {/* Radial gradient overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20">
          <h1 className="text-4xl font-bold">
            {personalConfig.name}
            <span className="block text-2xl font-normal mt-2 text-neutral-600 dark:text-neutral-400">
              {contentConfig.home.title}
            </span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl">
            {contentConfig.home.description}
          </p>
        </section>

        {/* Projects Section */}
        <section className="py-12">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {contentConfig.home.projects.map((project) => (
              <div key={project.title} className="border rounded-lg p-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
       <ThemeToggle />
    </div>
  );
}