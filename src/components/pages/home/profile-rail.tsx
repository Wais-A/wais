import { Mail, MapPin } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { person } from "@/config/person";

export function ProfileRail() {
  return (
    <aside className="self-start lg:sticky lg:top-24">
      <div className="rounded-2xl border bg-card/30 p-6 backdrop-blur-md sm:p-8">
        <div
          aria-hidden="true"
          className="flex size-12 items-center justify-center rounded-xl border bg-background/50 font-semibold text-sm text-foreground"
        >
          {person.first[0]}
          {person.last[0]}
        </div>

        <h1 className="mt-7 text-4xl font-semibold tracking-tight text-foreground">
          <TextAnimate
            as="span"
            animation="blurInUp"
            by="word"
            startOnView={false}
          >
            {person.name}
          </TextAnimate>
        </h1>
        <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground">
          {person.role}
        </p>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          {person.bio}
        </p>

        <div className="mt-7 space-y-3 border-border border-t pt-6 text-sm">
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin aria-hidden="true" className="size-4 text-primary" />
            <span>{person.location}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail aria-hidden="true" className="size-4 text-primary" />
            <a
              href={`mailto:${person.contact.email}`}
              className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {person.contact.email}
            </a>
          </div>
        </div>

        <div className="mt-7 border-border border-t pt-6">
          <p className="font-medium text-muted-foreground text-xs uppercase tracking-[0.16em]">
            Current focus
          </p>
          <ul className="mt-4 space-y-2 text-sm text-card-foreground">
            {person.focus.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
