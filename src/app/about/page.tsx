import Card from "@/components/custom-ui/card";
import { List, Tags } from "@/components/custom-ui/tagAndList";
import { content } from "@/config/content";
import { person } from "@/config/person";
import { generateMetadata, viewport } from "@/lib/metadata";

export { viewport };
export const metadata = generateMetadata(
  "About",
  content.about?.description || "Learn more about me and my work."
);

/**
 * About Page Component
 *
 * Displays professional information in a structured layout:
 * 1. Bio section with personal introduction
 * 2. Technical skills displayed as interactive tags
 * 3. Work experience timeline
 * 4. Educational background
 *
 * Data is pulled from centralized person configuration
 * for consistent information across the site.
 */
export default function About() {
  return (
    <main className="container mx-auto px-4">
      {/* Bio Section */}
      <section className="relative">
        <h1>About Me</h1>
        <h5>{person.bio}</h5>
      </section>

      {/* Skills Card: Displays technical skills as interactive tags */}
      <Card className="mb-16 rounded-xl p-8">
        <h2>Technical Skills</h2>
        <Tags key="skills-section" items={person.skills} />
      </Card>

      {/* Experience Timeline: Chronological work history */}
      <section className="mb-16">
        <h2>Experience</h2>
        <List items={person.work} />
      </section>

      {/* Education History: Academic background and achievements */}
      <section>
        <h2>Education</h2>
        <List items={person.education} />
      </section>
    </main>
  );
}
