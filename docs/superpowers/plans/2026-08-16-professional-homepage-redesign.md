# Professional Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver the approved spacious profile-rail homepage with accurate Computer Science & Engineering identity, direct professional copy, a concise Summer 2026 research entry, and the current LinkedIn destination.

**Architecture:** Keep `/` as a static React Server Component composed from four focused server components under `src/components/pages/home/`. Store the approved identity, experience, education, and skill content in a simplified typed `person` configuration; remove the now-unused content/project model rather than retaining stale Featured Projects data. Implement the redesign entirely with existing semantic Tailwind tokens so the established grid background and dark/light themes remain intact.

**Tech Stack:** Next.js 16.3.1 App Router, React 19, TypeScript 7, Tailwind CSS 4.3.3, Node.js built-in test runner

## Global Constraints

- Keep Featured Projects, About, and Blog absent.
- Render Undergraduate Researcher with exactly two concise achievement details and no standalone research showcase.
- Display “Computer Science & Engineering Student”, Lewisburg, PA, and `wa003@bucknell.edu`.
- Display the direct profile paragraph: “I’m a Computer Science & Engineering student at Bucknell University with experience in software development, IT systems, and undergraduate research.”
- Do not display an oversized slogan or the “03 roles” decorative count.
- Describe the research as faculty-mentored keystroke-dynamics work using a new six-feature approach with promising initial results and future-study potential; omit participant counts and numerical comparison results.
- Do not display the résumé phone number.
- Preserve the existing grid background, glass styling, typography foundation, and dark/light theme tokens.
- Do not change `src/components/navigation/nav-dock.tsx`, `src/components/ui/dock.tsx`, `src/config/navigation.ts`, `src/lib/responsive.ts`, or `src/app/globals.css`.
- Change only `person.linkedin` to `https://www.linkedin.com/in/wais-al/`; do not change other dock links, icons, order, sizing, spacing, magnification, responsive behavior, theme toggle, or hide/reveal animation.
- Do not duplicate social links or theme controls in page content.
- Preserve at least 7rem of page-level bottom clearance in addition to the root layout's existing 80px clearance.
- Preserve the existing unrelated dirty worktree and stage only the exact implementation paths listed in this plan.

## Dock Baseline

The following SHA-256 values must be identical after implementation:

```text
49639a0fa74c589427ffcf6c2f5ccfd4ca89199266cea2beeb632f9f7e03ecc9  src/components/navigation/nav-dock.tsx
4345cfe31f97fb4ade846838760af7d9afafa1ea3a83c846e81391313e3405f2  src/components/ui/dock.tsx
8415c6178de849170b6d5373380ca8a79fba63ca294f80c2bab92dcdc700f65e  src/config/navigation.ts
2010b3b452f6d6cfc556ff572913e710312dde5bc92d6572b518d718dcb56748  src/lib/responsive.ts
b83c5d0dd57267a43fd1f8da04513820d72c65e764157afd120208a7b14c5913  src/app/globals.css
```

---

### Task 1: Establish the résumé and retired-route contract

**Files:**
- Modify: `tests/site-structure.test.mjs`

**Interfaces:**
- Consumes: A running site at `SITE_URL`, defaulting to `http://127.0.0.1:3000`
- Produces: Route-level assertions for the approved identity, résumé content, concise research treatment, unchanged dock output, and retired routes

- [ ] **Step 1: Start a dedicated development server for the route-test loop**

Run `pnpm exec next dev -p 3100` in a persistent terminal session and wait for the ready message. Keep its session ID so it can be stopped before the production build.

Expected: Next.js reports the site ready at `http://127.0.0.1:3100` without changing the user's existing port-3000 process.

- [ ] **Step 2: Replace the route test with the approved behavior contract**

```js
import assert from "node:assert/strict";
import { test } from "node:test";

const siteUrl = process.env.SITE_URL ?? "http://127.0.0.1:3000";

async function request(pathname) {
  const response = await fetch(new URL(pathname, siteUrl));
  return { response, html: await response.text() };
}

test("the home page presents the current resume and concise research profile", async () => {
  const { response, html } = await request("/");

  assert.equal(response.status, 200);
  for (const content of [
    "Computer Science &amp; Engineering Student",
    "I’m a Computer Science &amp; Engineering student at Bucknell University with experience in software development, IT systems, and undergraduate research.",
    "Lewisburg, PA",
    "mailto:wa003@bucknell.edu",
    "Undergraduate Researcher",
    "Cardinal Systems, Inc.",
    "I.T. Student Employee",
    "BS in Computer Science &amp; Engineering",
    "AS in Computer Science",
    "Lambda School (BloomTech)",
    "JavaScript (ES6+)",
    "RESTful APIs",
    "Unix/Linux CLI",
    "Home Depot",
  ]) {
    assert.match(html, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(html, /faculty-mentored research in keystroke dynamics/);
  assert.match(html, /six-feature profiles using speed, acceleration, and jerk/);
  assert.match(html, /initial results were promising/);
  assert.match(html, /Lowe(?:'|&#x27;|&#39;)s RDC/);
  assert.doesNotMatch(html, /AUC 0\.899|EER 17\.8%|Research Results/);
  assert.doesNotMatch(html, /Physics|225 fixed-text|4\.08-fold/);
  assert.doesNotMatch(html, /Technical work with a human focus|03 roles/);

  assert.doesNotMatch(html, /Featured Projects/);
  assert.doesNotMatch(html, /Pottsville, PA/);
  assert.doesNotMatch(html, /Clearly Clean Products|Blue Line Wireless/);
  assert.doesNotMatch(html, /aria-label="About"|aria-label="Home"/);
  assert.doesNotMatch(html, /BlueSky|bsky\.app/);

  const githubIndex = html.indexOf('aria-label="GitHub"');
  const xIndex = html.indexOf('aria-label="X"');
  const linkedinIndex = html.indexOf('aria-label="LinkedIn"');
  assert.ok(githubIndex >= 0 && githubIndex < xIndex);
  assert.ok(xIndex < linkedinIndex);
  assert.match(html, /href="https:\/\/x\.com\/_Wais_a"/);
  assert.match(
    html,
    /href="https:\/\/www\.linkedin\.com\/in\/wais-al\/"/
  );
});

test("retired routes return not found", async () => {
  for (const pathname of ["/about", "/blog", "/blog/first-post"]) {
    const { response } = await request(pathname);
    assert.equal(response.status, 404, pathname);
  }
});
```

- [ ] **Step 3: Run the route test and verify RED**

Run: `SITE_URL=http://127.0.0.1:3100 node --test tests/site-structure.test.mjs`

Expected: FAIL because the current page still contains the old title, location, education, experience, and skill data.

---

### Task 2: Replace stale portfolio data with the approved profile model

**Files:**
- Modify: `src/types/person.ts`
- Modify: `src/config/person.ts`
- Modify: `src/types/site.ts`
- Modify: `src/config/site.ts`
- Modify: `src/types/index.ts`
- Modify: `src/config/index.ts`
- Delete: `src/types/content.ts`
- Delete: `src/config/content.ts`

**Interfaces:**
- Produces: `person: Person`, where `Person` exposes `role`, `bio`, `summary`, `focus`, typed work and education arrays, and three résumé-aligned skill groups
- Consumes: No runtime data source; all values are local static configuration

- [ ] **Step 1: Replace the person types with the reduced profile model**

Use this complete `src/types/person.ts`:

```ts
export interface Skills {
  languages: string[];
  webData: string[];
  tools: string[];
}

export interface WorkExperience {
  company: string;
  location?: string;
  timeframe: string;
  role: string;
  achievements: string[];
  category: "technical" | "other";
}

export interface Education {
  institution: string;
  location?: string;
  description: string;
  timeframe: string;
  recognition?: string;
}

export interface ContactInfo {
  email: string;
}

export interface Person {
  first: string;
  last: string;
  name: string;
  role: string;
  location: string;
  contact: ContactInfo;
  github: string;
  linkedin: string;
  x: string;
  bio: string;
  summary: string;
  focus: string[];
  work: WorkExperience[];
  education: Education[];
  skills: Skills;
}
```

- [ ] **Step 2: Replace the person configuration with résumé-backed data**

Use this complete `src/config/person.ts`:

```ts
import type { Person } from "@/types";

export const person: Person = {
  first: "Wais",
  last: "Almakaleh",
  name: "Wais Almakaleh",
  role: "Computer Science & Engineering Student",
  location: "Lewisburg, PA",
  contact: {
    email: "wa003@bucknell.edu",
  },
  github: "https://github.com/wais-a",
  linkedin: "https://www.linkedin.com/in/wais-al/",
  x: "https://x.com/_Wais_a",
  bio: "Bucknell University student with experience in software development, IT systems, and undergraduate research.",
  summary:
    "I’m a Computer Science & Engineering student at Bucknell University with experience in software development, IT systems, and undergraduate research.",
  focus: ["Software development", "IT systems", "Undergraduate research"],
  work: [
    {
      company: "Bucknell University",
      location: "Lewisburg, PA",
      timeframe: "Summer 2026",
      role: "Undergraduate Researcher",
      category: "technical",
      achievements: [
        "Conducted faculty-mentored research in keystroke dynamics, developing a new feature-based approach to characterize individual typing behavior.",
        "Built six-feature profiles using speed, acceleration, and jerk; initial results were promising and identified directions for further study.",
      ],
    },
    {
      company: "Cardinal Systems, Inc.",
      location: "Schuylkill Haven, PA",
      timeframe: "May 2025 - August 2025",
      role: "IT Intern",
      category: "technical",
      achievements: [
        "Assisted with network infrastructure upgrades and troubleshooting.",
        "Resolved hardware diagnostics, software installation, and user access management issues.",
        "Collaborated with senior IT staff on security protocol deployment to improve data security and system efficiency.",
      ],
    },
    {
      company: "Lehigh Carbon Community College",
      location: "Schnecksville, PA",
      timeframe: "March 2023 - May 2025",
      role: "I.T. Student Employee",
      category: "technical",
      achievements: [
        "Provided technical support for faculty and students by triaging hardware and software issues, managing accounts, and minimizing campus downtime.",
      ],
    },
    {
      company: "Lowe's RDC",
      timeframe: "2018 - 2019",
      role: "Machine Operator",
      category: "other",
      achievements: [],
    },
    {
      company: "Home Depot",
      timeframe: "2018",
      role: "Logistics",
      category: "other",
      achievements: [],
    },
  ],
  education: [
    {
      institution: "Bucknell University",
      location: "Lewisburg, PA",
      description: "BS in Computer Science & Engineering",
      timeframe: "Expected May 2028",
      recognition: "Bucknell Community College Scholar",
    },
    {
      institution: "Lehigh Carbon Community College",
      location: "Schnecksville, PA",
      description: "AS in Computer Science",
      timeframe: "May 2025",
    },
    {
      institution: "Lambda School (BloomTech)",
      location: "Remote",
      description: "Full-Stack Web Development & Computer Science",
      timeframe: "2019 - 2021",
    },
  ],
  skills: {
    languages: [
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL",
      "Swift",
      "Java",
    ],
    webData: [
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "RESTful APIs",
      "SQLite",
      "Jupyter",
    ],
    tools: [
      "Git/GitHub",
      "Docker",
      "VS Code",
      "Unix/Linux CLI",
      "JavaFX",
      "Gradle",
    ],
  },
};
```

- [ ] **Step 3: Remove the unused content/project model**

Delete `src/types/content.ts` and `src/config/content.ts`. Remove these exports:

```diff
- export * from "./content";
```

from both `src/types/index.ts` and `src/config/index.ts`.

In `src/types/site.ts`, remove:

```diff
- import type { Project } from "./content";
```

and remove the `projects: Project[]` property from `SiteConfig` plus project-specific comments.

- [ ] **Step 4: Update SEO configuration for the new profile fields**

Replace `src/config/site.ts` with:

```ts
import type { SiteConfig } from "@/types";
import { person } from "./person";
import { themeConfig } from "./theme";

export const siteConfig: SiteConfig = {
  meta: {
    title: `${person.name} - ${person.role}`,
    description: person.bio,
    baseURL: "wais.me",
    ogImage: "/images/og-image.png",
    lang: "en",
    locale: "en-US",
    keywords: [
      person.role,
      "computer science",
      "software engineering",
      "IT systems",
      "undergraduate research",
      ...person.skills.languages,
      ...person.skills.webData,
    ],
    authors: [{ name: person.name, url: person.github }],
    twitterHandle: "@_Wais_a",
    alternateLocales: { "en-US": "/" },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  },
  theme: {
    defaultMode: themeConfig.colors.background,
    transitionDuration: 50,
  },
};
```

---

### Task 3: Build the approved floating-profile-rail homepage

**Files:**
- Create: `src/components/pages/home/profile-rail.tsx`
- Create: `src/components/pages/home/technical-experience.tsx`
- Create: `src/components/pages/home/education-skills.tsx`
- Create: `src/components/pages/home/additional-experience.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: The typed `person` object from Task 2
- Produces: `ProfileRail`, `TechnicalExperience`, `EducationSkills`, and `AdditionalExperience` server components composed by `/`

- [ ] **Step 1: Create the profile rail**

Create `src/components/pages/home/profile-rail.tsx`:

```tsx
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
          <a
            href={`mailto:${person.contact.email}`}
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mail aria-hidden="true" className="size-4 text-primary" />
            <span>{person.contact.email}</span>
          </a>
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
```

- [ ] **Step 2: Create the technical experience timeline**

Create `src/components/pages/home/technical-experience.tsx`:

```tsx
import { person } from "@/config/person";

const technicalExperience = person.work.filter(
  (item) => item.category === "technical"
);

export function TechnicalExperience() {
  return (
    <section aria-labelledby="technical-experience" className="mt-16">
      <h2
        id="technical-experience"
        className="m-0 border-border border-b pb-4 text-base font-semibold uppercase tracking-[0.14em]"
      >
        Technical Experience
      </h2>

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
```

- [ ] **Step 3: Create the education and skill groups**

Create `src/components/pages/home/education-skills.tsx`:

```tsx
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
              <article key={item.institution} className="py-5 first:pt-0 last:pb-0">
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
```

- [ ] **Step 4: Create compact additional experience rows**

Create `src/components/pages/home/additional-experience.tsx`:

```tsx
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
```

- [ ] **Step 5: Compose the redesigned route without nesting another `<main>`**

Replace `src/app/page.tsx` with:

```tsx
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
      <div className="grid gap-10 py-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16 lg:py-12 xl:gap-20">
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
```

- [ ] **Step 6: Run the route test and verify GREEN**

Run: `SITE_URL=http://127.0.0.1:3100 node --test tests/site-structure.test.mjs`

Expected: 2 tests pass with no warnings.

- [ ] **Step 7: Format the touched code, then run type and code-quality checks**

Run: `pnpm exec biome check --write src tests && pnpm types && pnpm exec biome check src tests`

Expected: Formatting completes, then TypeScript and the non-mutating Biome check exit 0 with no diagnostics.

- [ ] **Step 8: Verify the dock baseline is unchanged**

Run:

```bash
shasum -a 256 \
  src/components/navigation/nav-dock.tsx \
  src/components/ui/dock.tsx \
  src/config/navigation.ts \
  src/lib/responsive.ts \
  src/app/globals.css
```

Expected: All five hashes exactly match the Dock Baseline section.

- [ ] **Step 9: Commit the implementation**

```bash
git add \
  tests/site-structure.test.mjs \
  src/types/person.ts \
  src/config/person.ts \
  src/types/site.ts \
  src/config/site.ts \
  src/types/index.ts \
  src/config/index.ts \
  src/types/content.ts \
  src/config/content.ts \
  src/components/pages/home \
  src/app/page.tsx
git commit -m "feat: redesign professional homepage"
```

---

### Task 4: Production and browser verification

**Files:**
- Verify only; no planned source changes

**Interfaces:**
- Consumes: Completed static homepage and unchanged dock
- Produces: Evidence that the production build, responsive layout, themes, and dock behavior meet the specification

- [ ] **Step 1: Stop the dedicated development server**

Send Ctrl-C to the persistent port-3100 development-server session from Task 1 and wait for it to exit.

Expected: Port 3100 is free before Next.js writes a production `.next` build.

- [ ] **Step 2: Run the production build**

Run: `pnpm exec next build --webpack`

Expected: Build succeeds and the route table contains only `/` plus `/_not-found`.

- [ ] **Step 3: Start the production server**

Run `pnpm exec next start -p 3100` in a persistent terminal session and wait for the ready message.

Expected: The production site is available at `http://127.0.0.1:3100`.

- [ ] **Step 4: Re-run the route contract against the production build**

Run: `SITE_URL=http://127.0.0.1:3100 node --test tests/site-structure.test.mjs`

Expected: 2 tests pass.

- [ ] **Step 5: Inspect the desktop layout in dark mode**

At 1280×720, verify:

- Profile rail and content column are visibly distinct and spacious.
- The profile rail remains above the dock when sticky.
- All three technical roles, education, skills, and additional experience are readable.
- The Profile section contains only the plain section heading and approved direct paragraph; no oversized slogan appears.
- Technical Experience has no decorative role count.
- No Featured Projects or duplicate social links appear.
- No Next.js error overlay appears.

- [ ] **Step 6: Inspect the mobile layout in dark mode**

At 390×844, verify:

- The profile card precedes the content column in normal flow.
- Dates stack above experience content.
- Education and skills stack vertically.
- `document.documentElement.scrollWidth <= window.innerWidth`.
- The final additional-experience row remains clear of the dock.

- [ ] **Step 7: Verify light mode and restore the original theme**

Click the existing theme toggle, confirm the page remains legible in light mode, then return it to dark mode. Do not change theme-control code.

- [ ] **Step 8: Verify dock behavior without modifying it**

Confirm the dock contains GitHub, X, LinkedIn, one divider, and the theme toggle in that order. Confirm LinkedIn opens `https://www.linkedin.com/in/wais-al/` while the GitHub and X destinations remain unchanged. Scroll down and up and verify its bottom edge moves below the viewport and returns, with the existing 300ms transition intact.

- [ ] **Step 9: Recheck retired routes**

Open `/about`, `/blog`, and `/blog/first-post`; each must show the standard 404 page.

- [ ] **Step 10: Run final automated checks and recheck the dock hashes**

Run:

```bash
SITE_URL=http://127.0.0.1:3100 node --test tests/site-structure.test.mjs && \
pnpm types && \
pnpm exec biome check src tests && \
shasum -a 256 \
  src/components/navigation/nav-dock.tsx \
  src/components/ui/dock.tsx \
  src/config/navigation.ts \
  src/lib/responsive.ts \
  src/app/globals.css
```

Expected: 2 tests pass, TypeScript and Biome report no diagnostics, and all five hashes exactly match the Dock Baseline. The successful production build from Step 2 remains the build evidence.

- [ ] **Step 11: Stop the production server**

Send Ctrl-C to the persistent port-3100 production-server session and wait for it to exit.

Expected: The dedicated verification server exits cleanly without affecting any server the user already had running on port 3000.
