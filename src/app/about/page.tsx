import Card from "@/components/custom-ui/card";
import { List, Tags } from "@/components/custom-ui/tagAndList";
import { TextAnimate } from "@/components/ui/text-animate";
import { content } from "@/config/content";
import { person } from "@/config/person";
import { generateMetadata, viewport } from "@/lib/metadata";

export { viewport };
export const metadata = generateMetadata(
  "About",
  content.about?.description || "Learn more about me and my work."
);

export default function About() {
  return (
    <main className="container mx-auto px-4 max-w-4xl">
      {/* Bio Section */}
      <section className="relative mb-12">
        <h1>
          <TextAnimate animation="blurInUp" by="word">
            About Me
          </TextAnimate>
        </h1>
        <Card className="p-6">
          <h5 className="text-lg text-card-foreground mb-4">{person.bio}</h5>
          <div className="flex items-center text-muted-foreground mt-2">
            <span>📍 {person.location}</span>
          </div>
        </Card>
      </section>

      {/* Skills Card: Displays technical skills as interactive tags */}
      <section className="mb-12">
        <h2>Technical Skills</h2>
        <Card className="p-6">
          <Tags key="skills-section" items={person.skills} />
        </Card>
      </section>

      {/* Experience Timeline: Chronological work history */}
      <section className="mb-12">
        <h2>Experience</h2>
        <List
          items={person.work}
          renderItem={(item) => (
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">{item.role}</h3>
                  <p className="text-primary">{item.company}</p>
                </div>
                <div className="md:text-right whitespace-nowrap">
                  <h6 className="text-muted-foreground text-sm">
                    {item.timeframe}
                  </h6>
                </div>
              </div>

              {"achievements" in item && item.achievements.length > 0 && (
                <div className="mt-2">
                  <ul className="space-y-2">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start">
                        <span className="text-primary mr-3 mt-0.5">•</span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        />
      </section>

      {/* Education History: Academic background and achievements */}
      <section>
        <h2>Education</h2>
        <List
          items={person.education}
          renderItem={(item) => (
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">{item.institution}</h3>
                <p className="text-card-foreground">{item.description}</p>
              </div>
              <div className="md:text-right whitespace-nowrap">
                <h6 className="text-muted-foreground text-sm">
                  {item.timeframe}
                </h6>
              </div>
            </div>
          )}
        />
      </section>
    </main>
  );
}
