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
    "Computer Science &amp; Engineering + Physics Student",
    "Lewisburg, PA",
    "mailto:wa003@bucknell.edu",
    "Undergraduate Researcher",
    "Cardinal Systems, Inc.",
    "I.T. Student Employee",
    "BS in Computer Science &amp; Engineering and Physics",
    "AS in Computer Science",
    "Lambda School (BloomTech)",
    "JavaScript (ES6+)",
    "RESTful APIs",
    "Unix/Linux CLI",
    "Home Depot",
  ]) {
    assert.match(html, new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(html, /<a[^>]+href="mailto:wa003@bucknell\.edu"[^>]*>[^<]*wa003@bucknell\.edu[^<]*<\/a>/);

  const sectionHeadings = [...html.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map((match) =>
    match[1].replace(/<[^>]+>/g, "").replace(/<!--.*?-->/g, "").replace(/&amp;/g, "&").trim(),
  );
  assert.deepEqual(sectionHeadings, [
    "Profile",
    "Technical Experience",
    "Education & Technical Skills",
    "Additional Experience",
  ]);

  const researchEntry = html.match(/Undergraduate Researcher[\s\S]*?(?=<h3\b|<h2\b|$)/)?.[0];
  assert.ok(researchEntry, "the research experience entry is present");
  assert.match(researchEntry, /225 fixed-text recordings from 75 users/);
  assert.match(researchEntry, /4\.08-fold lower median distance/);
  assert.equal(
    (researchEntry.match(/(?:225 fixed-text recordings from 75 users|4\.08-fold lower median distance)/g) ?? []).length,
    2,
  );
  assert.equal((researchEntry.match(/<li\b/g) ?? []).length, 2);
  assert.match(html, /Lowe(?:'|&#x27;|&#39;)s RDC/);
  assert.doesNotMatch(html, /AUC 0\.899|EER 17\.8%|Research Results/);

  assert.doesNotMatch(html, /Featured Projects/);
  assert.doesNotMatch(html, />\s*(?:About|Blog)\s*</i);
  assert.doesNotMatch(html, /(?:aria-label|href)="(?:About|Blog)"/i);
  assert.doesNotMatch(html, /Pottsville, PA/);
  assert.doesNotMatch(html, /Clearly Clean Products|Blue Line Wireless/);
  assert.doesNotMatch(html, /tel:/i);
  assert.doesNotMatch(html, /(?:phone|telephone)\s*:/i);
  assert.doesNotMatch(html, /(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/);
  assert.doesNotMatch(html, /BlueSky|bsky\.app/);

  const dockStart = html.indexOf("dock-transition");
  assert.ok(dockStart >= 0, "the navigation dock is present");
  const bodyStart = html.indexOf("<body");
  const pageContent = html.slice(bodyStart, dockStart);
  const dockContent = html.slice(dockStart);
  for (const label of ["GitHub", "X", "LinkedIn"]) {
    assert.equal((dockContent.match(new RegExp(`aria-label="${label}"`, "g")) ?? []).length, 1);
    assert.doesNotMatch(pageContent, new RegExp(`aria-label="${label}"`));
  }
  const githubIndex = dockContent.indexOf('aria-label="GitHub"');
  const xIndex = dockContent.indexOf('aria-label="X"');
  const linkedinIndex = dockContent.indexOf('aria-label="LinkedIn"');
  assert.ok(githubIndex < xIndex && xIndex < linkedinIndex);
  assert.equal((dockContent.match(/target="_blank"/g) ?? []).length, 3);
  for (const url of [
    "https://github.com/wais-a",
    "https://x.com/_Wais_a",
    "https://www.linkedin.com/in/wais-almakaleh",
  ]) {
    assert.equal((dockContent.match(new RegExp(`href="${url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`, "g")) ?? []).length, 1);
    assert.doesNotMatch(pageContent, new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.doesNotMatch(pageContent, /aria-label="Switch to (?:light|dark) mode"/);
});

test("retired routes return not found", async () => {
  for (const pathname of ["/about", "/blog", "/blog/first-post"]) {
    const { response } = await request(pathname);
    assert.equal(response.status, 404, pathname);
  }
});
