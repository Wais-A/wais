import { person } from "@/config/person";

const additionalExperience = person.work.filter(
  (item) => item.category === "other"
);

export function AdditionalExperience() {
  return (
    <section aria-labelledby="additional-experience" className="mt-16">
      <h2
        id="additional-experience"
        className="m-0 border-border border-b pb-4 text-base font-semibold uppercase tracking-[0.14em]"
      >
        Additional Experience
      </h2>
      <div className="divide-y divide-border border-border border-b">
        {additionalExperience.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="m-0 text-base font-semibold">{item.role}</h3>
              <p className="mt-1 text-muted-foreground text-sm">
                {item.company}
              </p>
            </div>
            <span className="text-muted-foreground text-xs">
              {item.timeframe}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
