// components/project-card.tsx
import { type siteConfig, Project } from "@/config/site";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <Image 
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap">
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
    </div>
  );
}