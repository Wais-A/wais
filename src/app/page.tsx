import { AdditionalExperience } from "@/components/pages/home/additional-experience";
import { EducationSkills } from "@/components/pages/home/education-skills";
import { ProfileRail } from "@/components/pages/home/profile-rail";
import { TechnicalExperience } from "@/components/pages/home/technical-experience";
import { person } from "@/config/person";
import { generateMetadata, viewport } from "@/lib/metadata";

export const metadata = generateMetadata(undefined, person.bio);
export { viewport };

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl pb-28">
      <div className="grid gap-10 py-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16 lg:py-0 xl:gap-20">
        <ProfileRail />

        <div className="min-w-0">
          <section aria-labelledby="profile-heading">
            <h2
              id="profile-heading"
              className="font-medium text-primary text-xs uppercase tracking-[0.17em]"
            >
              Profile
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-muted-foreground leading-7">
              {person.summary}
            </p>
          </section>

          <TechnicalExperience />
          <EducationSkills />
          <AdditionalExperience />
        </div>
      </div>
    </div>
  );
}
