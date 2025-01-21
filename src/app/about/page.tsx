import Card from "@/components/card";
import { List, Tags } from "@/components/tagAndList";
import { content } from "@/config/content";
import { person } from "@/config/person";

import { generateMetadata, viewport } from "@/lib/metadata";

export { viewport };
export const metadata = generateMetadata(
  "About - Wais Almakaleh",
  content.about?.description || "Learn more about me and my work."
);

export default function About() {
  return (
    <main>
      <section className="relative">
        <h1>About Me</h1>
        <h5>{person.bio}</h5>
      </section>
      {/* Skills Section */}
      <Card className="mb-16 rounded-xl p-8">
        <h2>Technical Skills</h2>
        <Tags key="skills-section" items={person.skills} />
      </Card>
      {/* Experience Timeline */}
      <section className="mb-16">
        <h2>Experience</h2>
        <List items={person.work} />
      </section>
      {/* Education Section */}
      <section>
        <h2>Education</h2>
        <List items={person.education} />
      </section>
    </main>
  );
}
