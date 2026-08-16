import { person } from "@/config/person";

const technicalExperience = person.work.filter(
  (item) => item.category === "technical"
);

export function TechnicalExperience() {
  return (
    <section aria-labelledby="technical-experience" className="mt-16">
      <div className="flex items-end justify-between gap-4 border-border border-b pb-4">
        <h2
          id="technical-experience"
          className="m-0 text-base font-semibold uppercase tracking-[0.14em]"
        >
          Technical Experience
        </h2>
        <span className="text-muted-foreground text-xs">
          {technicalExperience.length.toString().padStart(2, "0")} roles
        </span>
      </div>

      <div className="divide-y divide-border">
        {technicalExperience.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="grid gap-4 py-8 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-8"
          >
            <p className="m-0 text-muted-foreground text-xs uppercase tracking-[0.1em]">
              {item.timeframe}
            </p>
            <div>
              <h3 className="m-0 text-xl font-semibold text-foreground">
                {item.role}
              </h3>
              <p className="mt-1 text-primary text-sm">
                {item.company}
                {item.location ? ` · ${item.location}` : ""}
              </p>
              {item.achievements.length > 0 ? (
                <ul className="mt-5 space-y-3 text-card-foreground text-sm leading-6">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span aria-hidden="true" className="text-primary">
                        •
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
