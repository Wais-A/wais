import { person } from "@/config/person";

const skillGroups = [
  { label: "Languages", items: person.skills.languages },
  { label: "Web/Data", items: person.skills.webData },
  { label: "Tools", items: person.skills.tools },
];

export function EducationSkills() {
  return (
    <section aria-labelledby="education-skills" className="mt-16">
      <h2
        id="education-skills"
        className="m-0 border-border border-b pb-4 text-base font-semibold uppercase tracking-[0.14em]"
      >
        Education & Technical Skills
      </h2>

      <div className="mt-6 grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-2xl border bg-card/30 p-6 backdrop-blur-md">
          <h3 className="m-0 text-lg font-semibold">Education</h3>
          <div className="mt-5 divide-y divide-border">
            {person.education.map((item) => (
              <article
                key={item.institution}
                className="py-5 first:pt-0 last:pb-0"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="font-semibold text-card-foreground">
                      {item.institution}
                    </h4>
                    <p className="mt-1 text-primary text-sm">{item.location}</p>
                  </div>
                  <span className="text-muted-foreground text-xs">
                    {item.timeframe}
                  </span>
                </div>
                <p className="mt-3 text-card-foreground text-sm leading-6">
                  {item.description}
                </p>
                {item.recognition ? (
                  <p className="mt-2 text-muted-foreground text-sm">
                    {item.recognition}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-card/30 p-6 backdrop-blur-md">
          <h3 className="m-0 text-lg font-semibold">Technical Skills</h3>
          <div className="mt-5 space-y-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h4 className="font-medium text-muted-foreground text-xs uppercase tracking-[0.12em]">
                  {group.label}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-muted px-3 py-1.5 text-xs text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
