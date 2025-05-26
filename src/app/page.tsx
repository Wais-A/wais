import Card from "@/components/custom-ui/card";
import { Tags } from "@/components/custom-ui/tagAndList";
import { TextAnimate } from "@/components/ui/text-animate";
import { content } from "@/config/content";
import { person } from "@/config/person";
import { getAllBlogPosts } from "@/lib/blog";
import { generateMetadata } from "@/lib/metadata";
import { viewport } from "@/lib/metadata";
import { format, parseISO } from "date-fns";
import { ArrowRight, Calendar, Clock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = generateMetadata(
  undefined,
  "Personal portfolio and blog"
);
export { viewport };

export default async function Home() {
  // Fetch the latest blog post
  const allPosts = await getAllBlogPosts();
  const latestPost = allPosts.length > 0 ? allPosts[0] : null;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section: Personal introduction with role and description */}
      <section>
        <h1>
          <TextAnimate
            animation="blurInUp"
            by="character"
            startOnView={false}
            className="text-4xl text-foreground"
          >
            {person.name}
          </TextAnimate>
        </h1>
        <span className="block text-2xl font-normal mt-2 text-foreground">
          {content.home.title}
        </span>

        <Card className="p-6 mt-4">
          <h5 className="text-lg text-card-foreground mb-4">
            {content.about.description}
          </h5>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>📍 {person.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <a
                href={`mailto:${person.contact.email}`}
                className="hover:underline"
              >
                Contact
              </a>
            </div>
          </div>
        </Card>
      </section>

      {/* Projects Grid: Responsive layout with project cards */}
      <section className="mb-16">
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

      {/* Latest Blog Post */}
      {latestPost && (
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2>Latest from the Blog</h2>
            <Link
              href="/blog"
              className="text-primary flex items-center hover:underline"
            >
              View all posts
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <Card className="overflow-hidden">
            <Link href={`/blog/${latestPost.slug}`} className="group">
              {latestPost.metadata.image && (
                <div className="mb-4 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={latestPost.metadata.image}
                    alt={latestPost.metadata.title}
                    width={800}
                    height={450}
                    className="object-cover w-full h-full transition-transform group-hover:scale-[1.01]"
                  />
                </div>
              )}

              <div className="space-y-3">
                <h3 className="group-hover:text-primary transition-colors">
                  {latestPost.metadata.title}
                </h3>

                <p className="text-card-foreground line-clamp-2">
                  {latestPost.metadata.description}
                </p>

                <div className="flex items-center text-xs sm:text-sm text-muted-foreground pt-2">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <time dateTime={latestPost.metadata.date}>
                      {format(
                        parseISO(latestPost.metadata.date),
                        "MMM dd, yyyy"
                      )}
                    </time>
                  </div>

                  {latestPost.metadata.readingTime && (
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{latestPost.metadata.readingTime}</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </Card>
        </section>
      )}
    </div>
  );
}
