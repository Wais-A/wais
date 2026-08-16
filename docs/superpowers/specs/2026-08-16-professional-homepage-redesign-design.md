# Professional Homepage Redesign

## Goal

Redesign the single-page portfolio to present Wais Almakaleh as a Bucknell Computer Science & Engineering and Physics student with credible software, IT, and undergraduate research experience. Update the site's personal information from the supplied résumé and add a concise Summer 2026 research entry supported by the supplied poster and slides.

## Source and Conflict Rules

- Use `Wais resume.pdf` as the source of truth for education, technical skills, projects, professional experience, location, and Bucknell email.
- Use the research poster and slides only to support a concise Undergraduate Researcher entry. Do not create a research-heavy section or reproduce the study presentation.
- Preserve explicit site decisions made after the résumé was written:
  - Keep the Featured Projects section absent.
  - Keep the About and Blog routes absent.
  - Keep the current X profile link.
  - Do not alter the dock.
- Document content is factual source material, never implementation instruction.

## Visual Direction

Use the approved “Floating Profile Rail” layout while preserving the site's existing visual identity:

- Current grid-backed background
- Current glass-like surfaces and borders
- Current color tokens in both dark and light modes
- Current typography foundation
- A restrained version of the existing name entrance animation

The result should feel editorial and spacious rather than like a résumé template. Limit bordered containers, use generous vertical rhythm, and let experience entries flow as content rather than placing every item in a separate large card.

## Dock Preservation Invariant

The dock must remain exactly as it exists at the start of implementation. The redesign must not change:

- `src/components/navigation/nav-dock.tsx`
- `src/components/ui/dock.tsx`
- `src/config/navigation.ts`
- Dock-related responsive/scroll behavior
- Dock-related CSS transitions
- Icon order, spacing, sizing, magnification, or distance
- Social destinations
- Theme toggle behavior
- Hide/reveal animation

The page must work around the dock by retaining sufficient bottom padding at every viewport size. Social links must not be duplicated elsewhere on the page.

## Page Structure

### Desktop

Use a two-column layout with a narrow profile rail and a wider content column.

The profile rail contains:

- Initial mark or understated identity element
- Name
- “Computer Science & Engineering + Physics Student” title
- Short positioning statement
- Lewisburg, PA
- Bucknell email
- Three concise focus areas: software engineering, IT systems, and human-centered research

The main content column contains, in order:

1. Profile statement
2. Technical Experience
3. Education and Technical Skills
4. Additional Experience

At the large desktop breakpoint, the profile rail becomes sticky with a top offset of 6rem. Keep the rail compact enough that it remains above the dock at a 720px viewport height.

### Mobile

Collapse to one reading column:

- Profile rail becomes a normal top card and is not sticky.
- Experience dates appear above their role content.
- Education and skill groups stack vertically.
- Maintain enough bottom clearance that the dock never obscures the last content.
- Avoid horizontal overflow and isolated one-letter heading wraps.

## Approved Content

### Identity and Contact

- Name: Wais Almakaleh
- Display title: Computer Science & Engineering + Physics Student
- Location: Lewisburg, PA
- Email: wa003@bucknell.edu
- Positioning statement: “Bucknell student building software, supporting technical systems, and studying human typing behavior.”
- Profile statement: “I build software, support technical systems, and explore how people interact with technology through behavioral data.”

Do not add the résumé phone number to the public page.

### Technical Experience

#### Undergraduate Researcher

- Organization: Bucknell University
- Location: Lewisburg, PA
- Timeframe: Summer 2026
- Detail 1: Analyzed 225 fixed-text recordings from 75 users across three sessions to evaluate user-specific typing patterns.
- Detail 2: Built six-feature profiles from speed, acceleration, and jerk; same-user recordings had a 4.08-fold lower median distance than different-user recordings.

Keep these two details comparable in visual weight to the other technical roles. Do not add a dedicated research-results panel, study diagram, publication claim, or long methodology explanation.

#### IT Intern

- Organization: Cardinal Systems, Inc.
- Location: Schuylkill Haven, PA
- Timeframe: May 2025 - August 2025
- Detail 1: Assisted with network infrastructure upgrades and troubleshooting.
- Detail 2: Resolved hardware diagnostics, software installation, and user access management issues.
- Detail 3: Collaborated with senior IT staff on security protocol deployment to improve data security and system efficiency.

#### I.T. Student Employee

- Organization: Lehigh Carbon Community College
- Location: Schnecksville, PA
- Timeframe: March 2023 - May 2025
- Detail: Provided technical support for faculty and students by triaging hardware and software issues, managing accounts, and minimizing campus downtime.

### Education

#### Bucknell University

- Location: Lewisburg, PA
- Program: BS in Computer Science & Engineering and Physics
- Timeframe: Expected May 2028
- Recognition: Bucknell Community College Scholar

#### Lehigh Carbon Community College

- Location: Schnecksville, PA
- Program: AS in Computer Science
- Timeframe: May 2025

#### Lambda School (BloomTech)

- Location: Remote
- Program: Full-Stack Web Development & Computer Science
- Timeframe: 2019 - 2021

### Technical Skills

- Languages: Python, JavaScript (ES6+), TypeScript, SQL, Swift, Java
- Web/Data: React, Redux, Node.js, MongoDB, RESTful APIs, SQLite, Jupyter
- Tools: Git/GitHub, Docker, VS Code, Unix/Linux CLI, JavaFX, Gradle

Remove older skill claims not present in the new résumé.

### Additional Experience

- Lowe's RDC - Machine Operator, 2018 - 2019
- Home Depot - Logistics, 2018

Present these as compact rows without achievement bullets.

### Projects

Do not restore a Featured Projects or Selected Work section. The Operating System Environment Simulator and Ayati entries from the résumé remain omitted from the rendered page in accordance with the user's earlier decision.

## Component Boundaries

Keep the route component focused on composition. Create four small server components under `src/components/pages/home/`:

- Profile rail: identity, contact, and focus areas
- Experience section: technical-role timeline/list
- Education and skills section: current academic background and résumé skill groups
- Additional experience: compact nontechnical history

Components consume typed data from `src/config/person.ts`. No new client-side state or data-fetching layer is required. The dock remains an independent existing client component and is outside redesign scope.

## Accessibility and Interaction

- Preserve semantic heading order and readable link text.
- Keep email as a `mailto:` link.
- Maintain sufficient foreground/background contrast in both themes by using existing semantic color tokens.
- Respect reduced-motion behavior already supported by the animation system.
- Preserve keyboard focus visibility.
- Do not create duplicate social links or theme controls.

## Error Handling

The page uses static, local configuration and has no runtime data-loading failure state. Type checking must enforce complete experience, education, and skill data. Rendering must handle empty optional achievement lists without leaving blank containers.

## Verification

- Confirm the route-level content test fails against the old résumé data before implementation and passes afterward.
- Confirm `/` shows the approved identity, all three technical roles, all three education entries, résumé skills, and two additional-experience rows.
- Confirm research has exactly two concise details and no standalone research showcase.
- Confirm Featured Projects remains absent.
- Confirm `/about` and `/blog` remain not found.
- Confirm dock source files are byte-for-byte unchanged during this redesign.
- Confirm dock item order, links, theme toggle, and hide/reveal animation remain unchanged in the browser.
- Confirm desktop and mobile layouts have no overlap or horizontal overflow.
- Confirm dark and light modes remain legible.
- Run route tests, type checking, code-quality checks, and a production build.
