import Card from "@/components/custom-ui/card";
import { List, Tags } from "@/components/custom-ui/tagAndList";
import { TextAnimate } from "@/components/ui/text-animate";
import { content } from "@/config/content";
import { person } from "@/config/person";
import { generateMetadata, viewport } from "@/lib/metadata";
import { Mail, Phone } from "lucide-react";

export { viewport };
export const metadata = generateMetadata(
  "About",
  content.about?.description || "Learn more about me and my work."
);

export default function About() {
  // Filter experience by category
  const techExperience = person.work.filter(
    (job) => job.category === "technical"
  );
  const previousExperience = person.work.filter(
    (job) => job.category === "other"
  );

  return (
    <main className="container mx-auto px-4 max-w-4xl">
      {/* Bio Section with Contact Info */}
      <section className="relative mb-12">
       /** <h1>
         * <TextAnimate animation="blurInUp" by="word">
         *   About Me
         * </TextAnimate>
        </h1> */
        <Card className="p-6">
          <h5 className="text-lg text-card-foreground mb-4">{person.bio}</h5>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-muted-foreground mt-4">
            <div className="flex items-center gap-2">
              <span>📍 {person.location}</span>
            </div>
            {/*{person.contact.phone && (
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a
                  href={`tel:${person.contact.phone}`}
                  className="hover:underline"
                >
                  {person.contact.phone}
                </a>
              </div>
            )}*/}
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <a
                href={`mailto:${person.contact.email}`}
                className="hover:underline"
              >
                {person.contact.email}
              </a>
            </div>
          </div>
        </Card>
      </section>

      {/* Skills Card: Displays technical skills as interactive tags */}
      <section className="mb-12">
        <h2>Technical Skills</h2>
        <Card className="p-6">
          {/* Technical skills are already configured */}
          <Tags
            key="skills-section"
            items={{
              languages: person.skills.languages,
              frameworks: person.skills.frameworks,
              databases: person.skills.databases,
              tools: person.skills.tools,
            }}
          />

          {/* Additional Skills */}
          {person.skills.additional && person.skills.additional.length > 0 && (
            <div className="mt-6 pt-6 border-t border-muted">
              <h3 className="text-lg font-semibold mb-4">Additional Skills</h3>
              <ul className="space-y-2">
                {person.skills.additional.map((skill) => (
                  <li key={skill} className="flex items-start">
                    <span className="text-primary mr-3 mt-0.5">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      </section>

      {/* Education History: Academic background and achievements */}
      <section className="mb-12">
        <h2>Education</h2>
        <List
          items={person.education}
          renderItem={(item) => (
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">{item.institution}</h3>
                {item.location && (
                  <p className="text-primary">{item.location}</p>
                )}
                <p className="text-card-foreground mt-1">{item.description}</p>
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

      {/* Tech Experience Timeline: Focused on relevant technical roles */}
      <section className="mb-12">
        <h2>Technical Experience</h2>
        <List
          items={techExperience}
          renderItem={(item) => (
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">{item.role}</h3>
                  <p className="text-primary">
                    {item.company}
                    {item.location && `, ${item.location}`}
                  </p>
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
                      <li
                        key={`${item.company}-${achievement}`}
                        className="flex items-start"
                      >
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

      {/* Previous Experience Timeline: Other professional history */}
      <section>
        <h2>Additional Experience</h2>
        <List
          items={previousExperience}
          renderItem={(item) => (
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">{item.role}</h3>
                  <p className="text-primary">
                    {item.company}
                    {item.location && `, ${item.location}`}
                  </p>
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
                      <li
                        key={`${item.company}-${achievement}`}
                        className="flex items-start"
                      >
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
    </main>
  );
}
