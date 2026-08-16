# Home and About Page Merge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `/` the single portfolio content page, with the résumé content formerly at `/about`, no Featured Projects section, and no public `/about` route.

**Architecture:** Keep the root page as a React Server Component and render the existing static `person` data with the existing `Card`, `Tags`, and `List` components. Remove the About route through Next.js file-system routing and remove its navigation item from the shared dock configuration.

**Tech Stack:** Next.js 16.3.1 App Router, React 19, TypeScript 7, Tailwind CSS 4.3.3, Node.js built-in test runner

## Global Constraints

- Preserve the animated name, professional title, bio, location, and contact link at the top of `/`.
- Render Technical Skills, Education, Technical Experience, and Additional Experience below the introduction, in that order.
- Do not duplicate the About bio/contact card.
- Remove Featured Projects completely from the rendered home page.
- Remove About and the now-redundant Home icon from the dock/navigation.
- Remove the orphaned page-navigation divider from the dock.
- Replace the BlueSky social entry with an X icon linked to `https://x.com/_Wais_a`.
- Delete `/about`; do not redirect it.
- Preserve responsive layouts and dark-mode styling.

---

### Task 1: Add a failing route-level regression test

**Files:**
- Create: `tests/site-structure.test.mjs`

**Interfaces:**
- Consumes: A running site at `SITE_URL`, defaulting to `http://127.0.0.1:3000`
- Produces: Route-level assertions for the merged home page and retired About route

- [ ] **Step 1: Write the failing test**

```js
import assert from "node:assert/strict";
import { test } from "node:test";

const siteUrl = process.env.SITE_URL ?? "http://127.0.0.1:3000";

async function request(pathname) {
  const response = await fetch(new URL(pathname, siteUrl));
  return { response, html: await response.text() };
}

test("the home page presents the complete portfolio without retired sections", async () => {
  const { response, html } = await request("/");

  assert.equal(response.status, 200);
  for (const heading of [
    "Technical Skills",
    "Education",
    "Technical Experience",
    "Additional Experience",
  ]) {
    assert.match(html, new RegExp(heading));
  }
  assert.doesNotMatch(html, /Featured Projects/);
  assert.doesNotMatch(html, /aria-label="About"/);
  assert.doesNotMatch(html, /aria-label="Home"/);
  assert.match(html, /aria-label="X"/);
  assert.match(html, /href="https:\/\/x\.com\/_Wais_a"/);
  assert.doesNotMatch(html, /BlueSky/);
  assert.doesNotMatch(html, /bsky\.app/);
});

test("the retired About route returns not found", async () => {
  const { response } = await request("/about");
  assert.equal(response.status, 404);
});
```

- [ ] **Step 2: Run the test and verify RED**

Run: `node --test tests/site-structure.test.mjs`

Expected: FAIL because `/` still renders Featured Projects and lacks the four résumé headings; `/about` also returns 200.

---

### Task 2: Merge About content into Home and retire the old route

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/config/navigation.ts`
- Modify: `src/components/navigation/nav-dock.tsx`
- Modify: `src/components/custom-ui/icons.tsx`
- Modify: `src/config/person.ts`
- Modify: `src/config/site.ts`
- Modify: `src/types/person.ts`
- Delete: `src/app/about/page.tsx`

**Interfaces:**
- Consumes: `person.work`, `person.education`, `person.skills`, existing `Card`, `Tags`, and `List` components
- Produces: A single statically rendered portfolio page at `/` and no registered `/about` page

- [ ] **Step 1: Implement the minimal home-page merge**

Replace `src/app/page.tsx` with:

```tsx
import { Mail } from "lucide-react";
import Card from "@/components/custom-ui/card";
import { List, Tags } from "@/components/custom-ui/tagAndList";
import { TextAnimate } from "@/components/ui/text-animate";
import { content } from "@/config/content";
import { person } from "@/config/person";
import { generateMetadata, viewport } from "@/lib/metadata";

export const metadata = generateMetadata(undefined, "Personal portfolio");
export { viewport };

const techExperience = person.work.filter(
  (job) => job.category === "technical"
);
const previousExperience = person.work.filter(
  (job) => job.category === "other"
);

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl">
      <section className="mb-12 mt-8">
        <h1>
          <TextAnimate
            animation="blurInUp"
            by="character"
            startOnView={false}
            className="text-4xl text-foreground"
          >
            {person.name}
          </TextAnimate>
        </h1>
        <span className="mt-2 block text-2xl font-normal text-foreground">
          {content.home.title}
        </span>

        <Card className="mt-4 p-6">
          <h5 className="mb-4 text-lg text-card-foreground">
            {content.about.description}
          </h5>
          <div className="flex flex-col gap-3 text-muted-foreground sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <span>📍 {person.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <a
                href={`mailto:${person.contact.email}`}
                className="hover:underline"
              >
                Contact
              </a>
            </div>
          </div>
        </Card>
      </section>

      <section className="mb-12">
        <h2>Technical Skills</h2>
        <Card className="p-6">
          <Tags
            items={{
              languages: person.skills.languages,
              frameworks: person.skills.frameworks,
              databases: person.skills.databases,
              tools: person.skills.tools,
            }}
          />
          {person.skills.additional && person.skills.additional.length > 0 ? (
            <div className="mt-6 border-muted border-t pt-6">
              <h3 className="mb-4 text-lg font-semibold">Additional Skills</h3>
              <ul className="space-y-2">
                {person.skills.additional.map((skill) => (
                  <li key={skill} className="flex items-start">
                    <span className="mt-0.5 mr-3 text-primary">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Card>
      </section>

      <section className="mb-12">
        <h2>Education</h2>
        <List
          items={person.education}
          renderItem={(item) => (
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">{item.institution}</h3>
                {item.location ? (
                  <p className="text-primary">{item.location}</p>
                ) : null}
                <p className="mt-1 text-card-foreground">{item.description}</p>
              </div>
              <div className="whitespace-nowrap md:text-right">
                <h6 className="text-muted-foreground text-sm">
                  {item.timeframe}
                </h6>
              </div>
            </div>
          )}
        />
      </section>

      <section className="mb-12">
        <h2>Technical Experience</h2>
        <List
          items={techExperience}
          renderItem={(item) => (
            <div className="space-y-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">{item.role}</h3>
                  <p className="text-primary">
                    {item.company}
                    {item.location ? `, ${item.location}` : null}
                  </p>
                </div>
                <div className="whitespace-nowrap md:text-right">
                  <h6 className="text-muted-foreground text-sm">
                    {item.timeframe}
                  </h6>
                </div>
              </div>
              {item.achievements.length > 0 ? (
                <ul className="space-y-2">
                  {item.achievements.map((achievement) => (
                    <li
                      key={`${item.company}-${achievement}`}
                      className="flex items-start"
                    >
                      <span className="mt-0.5 mr-3 text-primary">•</span>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          )}
        />
      </section>

      <section className="mb-16">
        <h2>Additional Experience</h2>
        <List
          items={previousExperience}
          renderItem={(item) => (
            <div className="space-y-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">{item.role}</h3>
                  <p className="text-primary">
                    {item.company}
                    {item.location ? `, ${item.location}` : null}
                  </p>
                </div>
                <div className="whitespace-nowrap md:text-right">
                  <h6 className="text-muted-foreground text-sm">
                    {item.timeframe}
                  </h6>
                </div>
              </div>
              {item.achievements.length > 0 ? (
                <ul className="space-y-2">
                  {item.achievements.map((achievement) => (
                    <li
                      key={`${item.company}-${achievement}`}
                      className="flex items-start"
                    >
                      <span className="mt-0.5 mr-3 text-primary">•</span>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          )}
        />
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Remove redundant page-navigation entries from the dock**

Change `navigation.navbar` in `src/config/navigation.ts` to:

```ts
navbar: [],
```

Remove the `navigation.navbar.map(...)` block and the divider immediately after it from `src/components/navigation/nav-dock.tsx`. The social links become the first dock group.

Replace the BlueSky social entry with label `X`, `person.x`, and `Icons.x`. Define `person.x` as `https://x.com/_Wais_a`, rename the corresponding `Person` field, update the metadata handle, and replace the BlueSky SVG with the X logo SVG.

- [ ] **Step 3: Delete the About route file**

Delete `src/app/about/page.tsx`. Under the Next.js App Router file conventions, the absent `page.tsx` means `/about` is no longer a public route.

- [ ] **Step 4: Run the regression test and verify GREEN**

Run: `node --test tests/site-structure.test.mjs`

Expected: 2 tests pass with no warnings.

- [ ] **Step 5: Run static verification**

Run: `pnpm types && pnpm exec biome check src tests`

Expected: Both commands exit 0 with no diagnostics.

- [ ] **Step 6: Run a production build**

Run: `pnpm exec next build --webpack`

Expected: Build succeeds and the route table contains `/` but not `/about`.

- [ ] **Step 7: Inspect desktop, mobile, and dark mode**

At `/`, verify the hero and all four résumé headings are visible, Featured Projects and both page-navigation icons are absent, there is no leading divider, the X icon points to `https://x.com/_Wais_a`, the dock still hides and reveals smoothly, and the page remains readable at desktop and mobile widths in dark mode. At `/about`, verify the standard not-found page appears.

- [ ] **Step 8: Commit the implementation**

```bash
git add tests/site-structure.test.mjs src/app/page.tsx src/config/navigation.ts src/components/navigation/nav-dock.tsx src/app/about/page.tsx
git commit -m "feat: merge about content into home"
```
