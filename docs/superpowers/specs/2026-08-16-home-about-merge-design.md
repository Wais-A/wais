# Home and About Page Merge

## Goal

Turn the home page into the site's single content page by removing the Featured Projects section, incorporating all useful About page content, and removing the standalone About route.

## Approved Page Structure

The home page will retain its current introductory content at the top:

- Animated name
- Professional title
- Bio
- Location
- Contact link

The following sections from the About page will appear below the introduction, in their current order:

1. Technical Skills
2. Education
3. Technical Experience
4. Additional Experience

The About page's separate bio/contact card will not be copied because the home introduction already presents that information.

## Removals

- Remove the complete Featured Projects section from the home page.
- Remove the About and Home destinations from the dock/navigation because a page-navigation icon is redundant on a single-page site.
- Remove the now-unused page-navigation divider from the dock.
- Replace the BlueSky dock link with an X icon linking to `https://x.com/_Wais_a`.
- Delete the `/about` route rather than redirecting it, so the removed page returns the standard not-found response.

## Data and Components

The merged sections will continue to use the existing `person` configuration and the existing `Card`, `Tags`, and `List` components. No content model changes are required for this merge.

## Responsive and Visual Behavior

The existing responsive layouts from the About page will be retained. The merged page will use one consistent outer width and spacing rhythm so the introduction and résumé sections read as a single page on desktop and mobile.

## Verification

- Confirm `/` contains the introduction and all four About sections.
- Confirm Featured Projects is absent.
- Confirm the dock has no About or Home item and no leading divider.
- Confirm the X icon opens `https://x.com/_Wais_a` and no BlueSky link remains.
- Confirm `/about` returns the standard not-found page.
- Run static checks and a production build.
- Inspect the result at desktop and mobile viewport sizes, including dark mode and the dock interaction.
