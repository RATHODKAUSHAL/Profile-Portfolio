# SEO, GEO & AEO Audit: kaushalrathod.com

**Audited:** 2026-11-05
**Scope:** every route in `Profile-Portfolio/` (Next.js App Router).
**Fixes applied:** 2026-11-05. Each table row's **Status** shows what was done. Rows marked ⏳ need information only you can provide (see §11).
**Method:** I read the source code, then ran `next build` + `next start` and parsed the HTML each route actually serves (titles, meta, headings, images, links and JSON-LD), so the findings reflect real output as well as the code.

> **Domain:** `lib/site.ts:1-10` takes the domain from `NEXT_PUBLIC_SITE_URL`, `VERCEL_PROJECT_PRODUCTION_URL` or `VERCEL_URL`, and falls back to `https://kaushalrathod.com`. Every URL in this report uses that fallback. **Set `NEXT_PUBLIC_SITE_URL=https://kaushalrathod.com` in Vercel production.** Without it, a preview deployment can emit `*.vercel.app` canonicals and sitemap URLs.

---

## 1. Summary

### Scores

Scores before fixes, with an estimate after the fixes in this pass. The estimate is a re-score of the same checks, not a measured ranking change.

| Area | Before | After (est.) | One-line verdict (before) |
|---|---:|---:|---|
| **SEO (on-page)** | **72 / 100** | **85 / 100** | Solid foundation: unique canonicals, one H1 per page, JSON-LD on most pages. Hurt by over-long and under-long titles, missing per-page social tags, and thin pages. |
| **GEO (AI engines)** | **61 / 100** | **82 / 100** | There is a Person entity, an `llms.txt` and FAQ content. But the page body is streamed into a `hidden` div, `llms.txt` serves a stale copy, and name/title/bio differ across pages. |
| **AEO (answer boxes)** | **58 / 100** | **78 / 100** | FAQ blocks exist on Home, Projects and one blog post. Answers are too short (15–25 words), there's no "How can I hire Kaushal?" question, and most pages lack question-style headings. |
| **Technical / Performance** | **64 / 100** | **86 / 100** | Static prerendering, `next/image` with WebP, and redirects are good. A render-blocking Google Fonts `@import`, two preloaded fonts that are never used, no security headers, a broken RSS link, no custom 404 page, and wrong OG image sizes pull it down. |

### Top 10 highest-impact fixes

| # | Fix | Why it matters | Where | Status |
|---|---|---|---|---|
| 1 | **Delete `app/loading.tsx`** | Every page's body is served as a "Loading content..." placeholder, with the real content in `<div hidden id="S:0">` at the end of the HTML. JavaScript then swaps it in. AI crawlers that don't run JavaScript (GPTBot, ClaudeBot, PerplexityBot) see the content hidden and out of order. All routes are static, so the loading state is never needed. | `app/loading.tsx:1-10` | ✅ Fixed |
| 2 | **Make the contact form actually send** | The `<form>` has no `action` or handler, so submitting just reloads `/contact?name=…`. Every lead is lost. The page also has no email, no `<main>` and no OG tags. | `app/contact/page.tsx:29` | ✅ Fixed (set `RESEND_API_KEY`) |
| 3 | **Delete `public/llms.txt`** | The static file takes priority over the dynamic `app/llms.txt/route.ts`, so AI tools get a stale March 2026 version. It says "Full Stack Developer" only (no mobile work) and lists no articles. | `public/llms.txt:1-25` | ✅ Fixed |
| 4 | **Fix the Open Graph images** | Blog OG images are portrait photos (675×1200, 736×1308) declared as 1200×630. The home OG image `profile.png` is 1122×1402 (portrait, 1.8 MB) but declared 1200×630. Shared links will crop badly. Generate real 1200×630 images with `opengraph-image.tsx`. | `app/page.tsx:25-31`, `app/blog/[slug]/page.tsx:45-52`, `app/blog/page.tsx:27-34` | ✅ Fixed |
| 5 | **Rewrite titles to 50–60 characters** | The 6 blog posts are 87–94 characters (`"… \| Developer Blog \| Kaushal Rathod"`). Blog is 77, Experience 74, Skills 72. About (22) and Contact (24) are too short. | `app/blog/[slug]/page.tsx:26`, page `metadata` objects | ✅ Fixed |
| 6 | **Fix font loading** | `globals.css:1` `@import`s Space Grotesk and Syne from Google, which blocks rendering. Meanwhile `layout.tsx:12-24` preloads Fira Code and Open Sans, which are only used by dead components. That's two wasted font downloads plus a third-party CSS round trip before first paint. | `app/globals.css:1`, `app/layout.tsx:12-24` | ✅ Fixed |
| 7 | **Use one name/title/bio everywhere** | The job title appears as "Full Stack & Mobile App Developer" (`site.ts:21`), "Full Stack Developer" (`Header.tsx:50`, `Footer.tsx:60`, `experience/page.tsx:107`) and "Full Stack & Frontend Developer" (`experience/page.tsx:5`). The footer bio talks about "Neo-Brutalist styling" instead of who you are. AI models need one stable description. | see GEO table | ✅ Fixed |
| 8 | **Complete the root `Person` schema** | It's missing `worksFor` (Trukky), `description`, `alumniOf`, `hasOccupation` and `knowsLanguage`. `worksFor` currently exists only on `/experience`, and three pages define conflicting `jobTitle`/`knowsAbout` for the same `@id`. | `app/layout.tsx:107-134` | 🟡 Partly fixed (`alumniOf` needs your input) |
| 9 | **Fix the projects data and add case-study pages** | The FleetConnekt card shows the 48jobs screenshot. `CreativeWork.url` points to `/contact` for 3 of the 4 projects. Only FleetConnekt has a detail page. Add `/projects/[slug]` case studies with `SoftwareApplication` schema. | `app/projects/page.tsx:64`, `:110` | 🟡 Partly fixed (case-study pages are long-term) |
| 10 | **Add the missing RSS feed, 404 page and security headers** | `/feed.xml` is advertised in `<head>` but returns 404. `app/_not-found.tsx` is ignored by Next.js (it must be named `not-found.tsx`). `next.config.ts` sets no headers and `X-Powered-By: Next.js` is exposed. | `app/layout.tsx:50-52`, `app/_not-found.tsx`, `next.config.ts` | ✅ Fixed |

---

## 2. Status legend

| Icon | Meaning |
|---|---|
| ✅ | **Good**: verified in code and output, no change needed |
| ⚠️ | **Needs Update**: exists but should be improved |
| ❌ | **Missing / Broken**: must be fixed |
| ➕ | **Add**: new recommendation that would improve ranking |
| ✅ Fixed | Fixed in this pass and verified in the production build |
| 🟡 Partly fixed | The code part is done; the rest needs content or a later redesign (see the row's note) |
| ⏳ Needs your input | Blocked on information or access only you have (keys, codes, real numbers) |
| 🔜 Deferred | Intentionally left for the long-term plan |

---

## 3. Project overview

| Item | Finding |
|---|---|
| Framework | **Next.js 16.1.0** (App Router, Turbopack), React 19.2.3, TypeScript, Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Rendering | **SSG**: every route is prerendered as static (`○`). Blog posts use `generateStaticParams` (`●`). `/llms.txt` is `force-static`. |
| Deployment | **Vercel** (inferred from `VERCEL_*` env vars in `lib/site.ts:2-4` and `.vercel` in `.gitignore:37`). No `vercel.json`. `next.config.ts` is empty. |
| Analytics | GA4 `G-779KQ6LCER` via `next/script` `afterInteractive` (`app/layout.tsx:158-170`) |
| Search Console | Meta-tag verification (`app/layout.tsx:97-99`). A stray `googlebddaeb0751f90d43.html` sits in the **project root**, not `public/`, so it is never served. |
| Global SEO files | `app/layout.tsx` (metadata + Person/WebSite JSON-LD), `lib/site.ts`, `lib/seo.ts`, `app/robots.ts`, `app/sitemap.ts`, `app/llms.txt/route.ts` + `public/llms.txt` (conflict), `app/favicon.ico`, `public/Images/user.png` (icon), `app/error.tsx`, `app/_not-found.tsx` (not active), `app/loading.tsx` |
| Missing global files | `manifest.webmanifest`, `opengraph-image`, `apple-icon` (180×180), `not-found.tsx`, `feed.xml`, `llms-full.txt`, security headers |
| Dead code | `components/{HeroSection,AboutSection,ProjectsSection,ArticlesSection,ContactSection,WorkExperienceSection,LoadingScreen,ClientLayoutAlwaysLoad}.tsx` and `components/ui/button.tsx` are imported by no route. They are the only users of the `Fira Code`/`Open Sans` fonts and the `cva`/`@radix-ui/react-slot` dependencies. |

### Route inventory (14 indexable URLs)

| Route | File | Type |
|---|---|---|
| `/` | `app/page.tsx` | Static |
| `/about` | `app/about/page.tsx` | Static |
| `/skills` | `app/skills/page.tsx` | Static |
| `/projects` | `app/projects/page.tsx` | Static |
| `/fleetconnekt` | `app/fleetconnekt/page.tsx` | Static (case study) |
| `/experience` | `app/experience/page.tsx` | Static |
| `/blog` | `app/blog/page.tsx` | Static |
| `/blog/[slug]` × 6 | `app/blog/[slug]/page.tsx` + `lib/blog.ts` | SSG |
| `/contact` | `app/contact/page.tsx` | Static |
| `/robots.txt`, `/sitemap.xml`, `/llms.txt` | `app/robots.ts`, `app/sitemap.ts`, `public/llms.txt` | Metadata routes |

Blog slugs: `today-i-learned-expo-react-native-push-notifications`, `full-stack-project-architecture-checklist-2026`, `nextjs-seo-geo-content-framework-for-portfolios`, `nextjs-performance-playbook-india`, `system-design-notes-for-geo-distributed-teams`, `frontend-writing-for-developer-communities`.

---

## 4. Page-by-page audit

> Word counts include the header and footer (~140 words). Subtract that to get the page's own content.
> **Checks that apply to every page**, listed once here instead of repeating them in each table:
> - ❌ The **Rendering** check fails on every page because of `app/loading.tsx` (Top fix #1).
> - ⚠️ The footer uses `<h4>` with no `<h2>`/`<h3>` parent (`components/Footer.tsx:70,83,94`). Change these to `<h2 className="…">` or `<p>`.
> - ⚠️ The header logo link's accessible name is "KRKaushal RathodFull Stack Developer" (`components/Header.tsx:44-53`). Add `aria-label="Kaushal Rathod — home"` and `aria-hidden` on the "KR" box.
> - ✅ `<html lang="en">`, charset and viewport are set (`app/layout.tsx:27-32,154`).

### 4.1 Home `/`

**Recommended**
- **Title** (50): `Kaushal Rathod | Full Stack & Mobile App Developer` *(keep)*
- **Meta description** (153): `Kaushal Rathod is a full stack and mobile app developer in Ahmedabad, India, building fast web and mobile products with Next.js, React, Node.js and Expo.`
- **H1:** `Full Stack & Mobile App Developer` *(keep. Adding "in Ahmedabad" is optional and helps local search.)*
- **Primary keyword:** Kaushal Rathod full stack developer · **Secondary:** mobile app developer Ahmedabad, Next.js developer India, React Native developer

| # | Check | Status | Current | Recommended | File & line | Priority |
|---|---|---|---|---|---|---|
| 1 | Title | ✅ | "Kaushal Rathod \| Full Stack & Mobile App Developer" (50) | Keep | `app/page.tsx:11-13` | — |
| 2 | Meta description | ✅ Fixed | 158 chars, includes name, location and stack | Optional: switch to the 153-char version above (third person reads better when quoted) → **Done:** New 153-char description | `app/page.tsx:14-15` | Low |
| 3 | Canonical | ✅ | `https://kaushalrathod.com` | Keep | `app/page.tsx:16-18` | — |
| 4 | Headings | ✅ Fixed | 1 H1, then H2 sections with H3 cards | Change the FAQ `<summary>` text to `<h3>` inside the summary so the questions are headings → **Done:** FAQ questions are now `<h3>` inside `<summary>` | `components/sections/HomeHero.tsx:32`, `HomeExpertise.tsx:111` | Low |
| 5 | Content | ⏳ Needs your input | ~280 words of page copy. Strong hero, but no number-backed outcomes. | Add one measurable result per project (e.g. "X transporters onboarded", "Y job posts"). Add a 2-sentence "Who I am" paragraph that AI tools can quote (see §6.3). → **Waiting:** FAQ answers expanded; project metrics still need real numbers from you | `components/sections/HomeFeaturedProjects.tsx:15-43` | Medium |
| 6 | Open Graph | ✅ Fixed | `og:type` missing (the page's `openGraph` replaces the root one). `og:image` = `/Images/profile.png` declared 1200×630 but **actually 1122×1402, 1.8 MB**. OG title/description differ from the page title. | Add `type: "website"`. Use a generated 1200×630 `app/opengraph-image.tsx` (§9.5). Reuse the page title and description. → **Done:** `og:type` added; generated 1200×630 `app/opengraph-image.tsx` | `app/page.tsx:19-32` | High |
| 7 | Twitter card | ✅ Fixed | Inherits root: `twitter:image` = `profileimage.jpeg` (4:3, not 1.91:1) | Add `twitter: { card, title, description }`. The image comes from `opengraph-image` automatically. → **Done:** Page-level `twitter` block | `app/page.tsx:10-33` | Medium |
| 8 | Images | 🔜 Deferred | Hero `profile.png` is a **1.8 MB PNG** source (`next/image` serves it as 19 KB WebP, so the impact is small). Alt text is descriptive. Project images are lazy. | Convert the source to WebP/AVIF (~150 KB) and rename it `kaushal-rathod-full-stack-developer.webp`. Alt: "Kaushal Rathod, full stack and mobile app developer in Ahmedabad". → **Later:** Source image conversion is in the long-term list | `components/sections/HomeHero.tsx:72-79` | Low |
| 9 | Internal links | ✅ Fixed | Links to /projects, /fleetconnekt, /contact. 48Jobs and Trukky cards link to generic `/projects`. **No link to /blog or /about from the page body.** | Add a "Latest articles" strip (3 posts) and an "About me →" link. Point 48Jobs/Trukky to future case-study URLs. → **Done:** Added "Latest articles" section + About link (`HomeLatestPosts.tsx`) | `components/sections/HomeFeaturedProjects.tsx:32,41` | Medium |
| 10 | External links | ✅ Fixed | GitHub/LinkedIn in footer with `rel="noopener noreferrer"` | Keep. Add `rel="me"` for identity verification (§6). → **Done:** `rel="me"` on footer profile links + `<link rel="me">` in `<head>` | `components/Footer.tsx:99-109` | Low |
| 11 | Structured data | ✅ Fixed | `Person`, `WebSite`, `ProfilePage`, `FAQPage` | Add `dateModified` to ProfilePage. Enrich `Person` (§9.1). → **Done:** `dateModified` added; Person enriched | `app/page.tsx:36-59` | Medium |
| 12 | URL | ✅ | `/` | — | — | — |
| 13 | Rendering | ✅ Fixed | Content sits inside `<div hidden id="S:0">` at byte 15,171. The H1 is at byte 16,941, after the footer (byte 10,960). | Delete `app/loading.tsx` → **Done:** `app/loading.tsx` deleted; content is inline | `app/loading.tsx` | High |
| 14 | Accessibility | ✅ | `<main>`, `<dl>` stats, focus-visible card outline, reduced-motion handling | — | `app/page.tsx:62` | — |

### 4.2 About `/about`

**Recommended**
- **Title** (56): `About Me: Full Stack & Mobile Developer | Kaushal Rathod` → `title: "About Me: Full Stack & Mobile Developer"`
- **Meta description** (155): `Meet Kaushal Rathod, an Ahmedabad-based full stack and mobile app developer with 3+ years building logistics, hiring and learning platforms for real teams.`
- **H1:** `About Kaushal Rathod, full stack & mobile app developer`
- **Primary keyword:** about Kaushal Rathod · **Secondary:** full stack developer Ahmedabad, React Native developer India

| # | Check | Status | Current | Recommended | File & line | Priority |
|---|---|---|---|---|---|---|
| 1 | Title | ✅ Fixed | "About \| Kaushal Rathod" (22): no keyword | See above | `app/about/page.tsx:7` | High |
| 2 | Meta description | ✅ Fixed | 126 chars, says "full stack developer" only | See above (155) | `app/about/page.tsx:8-9` | Medium |
| 3 | Canonical | ✅ | `/about` | — | `app/about/page.tsx:10-12` | — |
| 4 | Headings | ✅ Fixed | H1 "Full-stack and mobile developer building reliable products." H2 "Developer Bio", H3 "What I care about". The H1 doesn't include your name. | Put your name in the H1. Add H2s: "What does Kaushal Rathod do?", "Where has Kaushal worked?", "How I work", "Education". → **Done:** H1 includes name; question-style H2s added | `app/about/page.tsx:60-62,72,94` | High |
| 5 | Content | 🟡 Partly fixed | **~20 words of body copy** (161 words including nav/footer). **Thin.** The most important entity page on the site has the least content. | Expand to 500–800 words: story, employers and dates, education, 3 key projects with outcomes, working style, tools, languages spoken, availability. Start with the summary paragraph in §6.3. → **Done:** Expanded with verified facts (roles, projects, approach). Add education and your story to reach 500+ words | `app/about/page.tsx:56-110` | High |
| 6 | Open Graph | ✅ Fixed | type=profile ✅. Image `profileimage.jpeg` 1600×1200 (4:3), size declared correctly. | Use a 1200×630 crop. Add `profile: { firstName: "Kaushal", lastName: "Rathod" }`. → **Done:** Generated OG image + `profile` first/last name | `app/about/page.tsx:13-25` | Low |
| 7 | Twitter card | ✅ Fixed | Inherits the root title "Kaushal Rathod \| Full Stack & Mobile App Developer" | Add a page-level `twitter` block | `app/about/page.tsx:6-26` | Medium |
| 8 | Images | ✅ Fixed | **No images.** An About page without a photo weakens E-E-A-T and image search. | Add your portrait (`profileimage.jpeg`) with alt "Kaushal Rathod at work in Ahmedabad". Add an office or workspace photo if you have one. → **Done:** Portrait added with descriptive alt | `app/about/page.tsx` | Medium |
| 9 | Internal links | ✅ Fixed | Body copy has 0 links. Header and footer only. | Link to /experience, /projects, /fleetconnekt, /skills, /contact from the body text → **Done:** Body links to /skills, /experience, /projects, /fleetconnekt, /contact | `app/about/page.tsx:63-78` | Medium |
| 10 | External links | ✅ Fixed | Footer only | Add visible "Find me on GitHub / LinkedIn" links with `rel="me noopener"` → **Done:** LinkedIn/GitHub buttons with `rel="me"` | `app/about/page.tsx` | Low |
| 11 | Structured data | ✅ Fixed | `AboutPage` + `BreadcrumbList`, `mainEntity` → `#person` | Add `dateModified` → **Done:** `dateModified` added | `app/about/page.tsx:35-51` | Low |
| 12 | URL | ✅ | `/about` | — | — | — |
| 13 | Rendering | ✅ Fixed | Hidden-div streaming | Delete `app/loading.tsx` | — | High |
| 14 | Accessibility | ✅ Fixed | Stats cards: black 12px text on `#2f5dff` = **4.1:1 contrast (fails WCAG AA, needs 4.5:1)** | Use `text-white` on blue (5.1:1) or a lighter blue `#dbe7ff` → **Done:** Stats now black on `#dbe7ff` | `app/about/page.tsx:84-89` | Medium |

### 4.3 Skills `/skills`

**Recommended**
- **Title** (56): `Skills: Next.js, React Native & Node.js | Kaushal Rathod` → `title: "Skills: Next.js, React Native & Node.js"`
- **Meta description** (149): `Kaushal Rathod's tech stack: React, Next.js, TypeScript, React Native, Expo, Node.js, Laravel, PostgreSQL and MySQL, with what each tool is used for.`
- **H1:** `Kaushal Rathod's tech stack: web, mobile & backend skills`
- **Primary keyword:** Next.js React Native developer skills · **Secondary:** Kaushal Rathod tech stack, Expo developer, Laravel developer Ahmedabad

| # | Check | Status | Current | Recommended | File & line | Priority |
|---|---|---|---|---|---|---|
| 1 | Title | ✅ Fixed | "Technical Skills \| Web & Mobile Application Development \| Kaushal Rathod" (**72**) | See above | `app/skills/page.tsx:5` | Medium |
| 2 | Meta description | ✅ Fixed | 160 chars, keyword-rich | Optional: shorten to the 149-char version | `app/skills/page.tsx:6-7` | Low |
| 3 | Canonical | ✅ | `/skills` | — | `app/skills/page.tsx:12` | — |
| 4 | Headings | 🟡 Partly fixed | H1 "Tools, patterns, and systems I ship with." has no keyword. 20 H3s, one per tool, under a single H2. | Use the H1 above. Group the H3s under category H2s: "Frontend", "Mobile", "Backend", "Databases", "Tooling". → **Done:** H1 fixed; category H2 grouping deferred (needs timeline redesign) | `app/skills/page.tsx:253-255,291` | Medium |
| 5 | Content | ✅ | ~570 words, one description per skill | Add "years used" and "used in: [project]" per skill. Those are citable facts. | `app/skills/page.tsx:42-200` | Low |
| 6 | Open Graph | ✅ Fixed | Image `profileimage.jpeg` **declared 1200×630, actually 1600×1200** | Fix the dimensions or use the generated OG image → **Done:** Uses the generated 1200×630 image | `app/skills/page.tsx:25-32` | Medium |
| 7 | Twitter | ✅ | Page-level card with title, description and image | — | `app/skills/page.tsx:34-39` | — |
| 8 | Images | ✅ | 20 logos with `alt="X logo"`, width/height 44, lazy | Change alt to "" (decorative, because the H3 already names the tool) or keep as is. Rename `Node.js.png` to `nodejs.png` (avoid dots in filenames). | `app/skills/page.tsx:340` | Low |
| 9 | Internal links | ✅ Fixed | No body links | Link each skill to the project or blog post that uses it (React Native → /fleetconnekt, Expo → Expo blog post) → **Done:** Skill cards link to related projects/posts | `app/skills/page.tsx` | Medium |
| 10 | External links | — | None | Optional: link to official docs | — | Low |
| 11 | Structured data | ✅ Fixed | `ItemList` + `ProfilePage`. A second Person node redefines `knowsAbout`, which conflicts with the root Person. **No BreadcrumbList.** | Remove the duplicate Person fields and reference `{ "@id": personId }`. Add `breadcrumbSchema`. Use `serializeJsonLd` instead of raw `JSON.stringify` (`:242`). → **Done:** Person by `@id`; BreadcrumbList added; `JsonLd` component | `app/skills/page.tsx:211-247` | Medium |
| 12 | URL | ✅ | `/skills` | — | — | — |
| 13 | Rendering | ✅ Fixed | Hidden-div streaming | — | — | High |
| 14 | Accessibility | ✅ | `<main>`, alt text | — | — | — |

### 4.4 Projects `/projects`

**Recommended**
- **Title** (56): `Web & Mobile App Projects, Case Studies | Kaushal Rathod` → `title: "Web & Mobile App Projects, Case Studies"`
- **Meta description** (148): `Projects by Kaushal Rathod: FleetConnekt, 48jobs.com, Trukky LMS and Zestify. Web and mobile apps with the tech stack, problem and outcome for each.`
- **H1:** `Projects by Kaushal Rathod: web & mobile case studies`
- **Primary keyword:** Kaushal Rathod projects · **Secondary:** logistics app developer, Next.js project portfolio, React Native app case study

| # | Check | Status | Current | Recommended | File & line | Priority |
|---|---|---|---|---|---|---|
| 1 | Title | ✅ Fixed | "Full-Stack & Mobile App Projects \| Kaushal Rathod" (49) | Optional: the 56-char version above adds "case studies" | `app/projects/page.tsx:9` | Low |
| 2 | Meta description | ✅ Fixed | 127 chars, doesn't name the projects | See above | `app/projects/page.tsx:10-11` | Medium |
| 3 | Canonical | ✅ | `/projects` | — | `:12-14` | — |
| 4 | Headings | ✅ | 1 H1, an H2 per project, FAQ H2 with H3 questions | — | `:137,162,180` | — |
| 5 | Content | ⏳ Needs your input | ~190 words. Outcomes are qualitative ("Improved hiring flow automation"). | Add numbers: users, time saved, release date, platform (Android/iOS/Web), your role, team size, duration → **Waiting:** Needs real metrics (users, dates, role, team size) | `app/projects/page.tsx:31-74` | High |
| 6 | Open Graph | ✅ Fixed | No `og:type`. Image 48jobs.png 1902×941 (≈2:1, acceptable). | Add `type: "website"` and a 1200×630 image | `:15-28` | Low |
| 7 | Twitter | ✅ Fixed | Inherits the root title and image | Add a `twitter` block | `:8-29` | Medium |
| 8 | Images | ✅ Fixed | **FleetConnekt card uses `/Images/48jobs.png`** (wrong product). `image2.jpg` for Zestify has a generic filename. Alt text ends "screenshot". | Use `Assets/fleetconnekt/fleetconnekt-banner.png`. Rename files to `zestify-ecommerce-storefront.webp` etc. → **Done:** FleetConnekt uses its own banner; descriptive alt text. File renames deferred | `app/projects/page.tsx:64,54` | High |
| 9 | Internal links | 🟡 Partly fixed | 3 of 4 CTAs go to `/contact` ("Discuss Similar Project"). Only FleetConnekt has a case study. | Create `/projects/48jobs`, `/projects/trukky-lms`, `/projects/zestify`. Keep the "Discuss" CTA as a secondary link. → **Done:** CTAs fixed (case study / live site / contact); new case-study pages are long-term | `:40,50,60,172-174` | High |
| 10 | External links | ✅ Fixed | No live-site link for 48jobs.com | Link to `https://48jobs.com` (if public) with `rel="noopener"`, and to app store listings when available → **Done:** "Visit 48jobs.com" link added | `:31-41` | Medium |
| 11 | Structured data | ✅ Fixed | `CollectionPage` + `CreativeWork` × 4 + `FAQPage` + `BreadcrumbList`. **`CreativeWork.url` = `/contact` for 3 projects.** | Use `SoftwareApplication` (FleetConnekt) / `WebApplication` with `applicationCategory`, `operatingSystem`, and `url` pointing to the case study or the live site (§9.3) → **Done:** `WebApplication`/`SoftwareApplication`; `url` never `/contact` | `app/projects/page.tsx:103-112` | High |
| 12 | URL | ✅ | `/projects` | — | — | — |
| 13 | Rendering | ✅ Fixed | Hidden-div streaming | — | — | High |
| 14 | Accessibility | ✅ | `<main>`, alt text present | — | — | — |

### 4.5 FleetConnekt `/fleetconnekt`

**Recommended**
- **Title** (55): `FleetConnekt: Logistics App Case Study | Kaushal Rathod` → `title: "FleetConnekt: Logistics App Case Study"`
- **Meta description** (151): `FleetConnekt case study: a mobile logistics app for Indian highway transport with a verified transporter directory and digital lorry receipt workflows.`
- **H1:** `FleetConnekt: logistics app for Indian highway transport`
- **Primary keyword:** FleetConnekt app · **Secondary:** digital lorry receipt app, transporter directory app India, logistics app developer
- **URL:** consider moving to `/projects/fleetconnekt` with a 308 redirect from `/fleetconnekt` (§9.7)

| # | Check | Status | Current | Recommended | File & line | Priority |
|---|---|---|---|---|---|---|
| 1 | Title | ✅ Fixed | "FleetConnekt \| Kaushal Rathod" (29) | See above | `app/fleetconnekt/page.tsx:14` | Medium |
| 2 | Meta description | ✅ Fixed | 115 chars | See above | `:15-16` | Medium |
| 3 | Canonical | ✅ | `/fleetconnekt` | — | `:17` | — |
| 4 | Headings | ✅ Fixed | 1 H1, then H2s and H3s | Make the H1 descriptive (above) | `:51` | Low |
| 5 | Content | ⏳ Needs your input | ~240 words, describes features | Add: your role, tech stack, timeline, launch date, platform, screenshots with captions, challenges and solutions, metrics, app store link → **Waiting:** Needs your role, stack, timeline and metrics | `app/fleetconnekt/page.tsx:100-150` | High |
| 6 | Open Graph | ✅ Fixed | No `og:type`. Image 1536×1024 (3:2). | Add `type: "article"` and a 1200×630 crop → **Done:** `og:type: article` (banner size declared correctly) | `:18-24` | Low |
| 7 | Twitter | ✅ Fixed | Inherits the root title and profile image | Add a `twitter` block with the banner | `:13-25` | Medium |
| 8 | Images | ✅ Fixed | The banner is a 1.8 MB PNG source. **6 screens are rendered twice** (marquee loop) with alt "FleetConnekt app screen 1…6": 12 images with generic alt. The `fleetconnet-*.jpeg` filenames have a typo. | Use descriptive alt per screen ("FleetConnekt transporter directory search screen"). Set `alt=""` and `aria-hidden` on the duplicated loop copies. Rename to `fleetconnekt-*.webp`. → **Done:** Per-screen descriptive alt; loop copies `aria-hidden`. File renames deferred | `app/fleetconnekt/page.tsx:84-97` | Medium |
| 9 | Internal links | ✅ Fixed | Only `#about` | Link back to /projects, to /skills (React Native) and to /contact → **Done:** Links to /contact, /projects, /skills | `:62` | Medium |
| 10 | External links | ⏳ Needs your input | No Play Store / website link | Add the live app or website link → **Waiting:** Needs the Play Store or website URL | — | Medium |
| 11 | Structured data | ✅ Fixed | Only the global Person/WebSite | Add `SoftwareApplication` + `BreadcrumbList` (§9.3) → **Done:** `SoftwareApplication` + BreadcrumbList | `app/fleetconnekt/page.tsx:44` | High |
| 12 | URL | ✅ | Clean, but sits outside `/projects/` | See above | — | Low |
| 13 | Rendering | ✅ Fixed | Hidden-div streaming | — | — | High |
| 14 | Accessibility | ✅ Fixed | **No `<main>` landmark** (root element is `<div className="soft-grid-bg">`) | Change to `<main>` → **Done:** Root is `<main>` | `app/fleetconnekt/page.tsx:46` | Medium |

### 4.6 Experience `/experience`

**Recommended**
- **Title** (59): `Experience: Full Stack Developer at Trukky | Kaushal Rathod` → `title: "Experience: Full Stack Developer at Trukky"`
- **Meta description** (149): `Kaushal Rathod's work history: Full Stack Developer at Trukky since 2025 and Frontend Developer at Maze Technolabs, using Next.js, React and Node.js.`
- **H1:** `Kaushal Rathod's experience: 3+ years in full stack development`
- **Primary keyword:** Kaushal Rathod experience · **Secondary:** full stack developer Trukky, frontend developer Maze Technolabs

| # | Check | Status | Current | Recommended | File & line | Priority |
|---|---|---|---|---|---|---|
| 1 | Title | ✅ Fixed | "Professional Experience \| Full Stack & Frontend Developer \| Kaushal Rathod" (**74**) | See above | `app/experience/page.tsx:5` | Medium |
| 2 | Meta description | ✅ Fixed | 148 chars | Optional: use the version above (names employers) | `:6-7` | Low |
| 3 | Canonical | ✅ | `/experience` | — | `:12` | — |
| 4 | Headings | ✅ Fixed | The H3s contain only the role. The company name is in a decorative circle, not a heading. | `<h3>Full Stack Developer at Trukky</h3>` → **Done:** "Full Stack Developer at Trukky" in each H3 | `:220-222,249-251` | Medium |
| 5 | Content | 🟡 Partly fixed | ~190 words. Achievements have no numbers. **The duration "1 yr 5 mos" is hard-coded and already out of date** (Feb 2025 to Nov 2026 is 1 yr 10 mos). | Calculate the duration from dates. Add one metric per role. Add a "Download résumé (PDF)" link. → **Done:** Durations computed from dates (daily revalidate); metrics need your input | `:47,62,77` | Medium |
| 6 | Open Graph | ✅ Fixed | `profileimage.jpeg` **declared 1200×630, actually 1600×1200** | Fix | `:25-32` | Medium |
| 7 | Twitter | ✅ | Page-level | — | `:34-39` | — |
| 8 | Images | ➕ | None | Add company logos with alt "Trukky logo" | — | Low |
| 9 | Internal links | ✅ Fixed | None in the body | Link the Trukky role to /projects (48jobs, Trukky LMS, FleetConnekt) → **Done:** Links to /projects and /skills | `:42-88` | Medium |
| 10 | External links | ➕ | None | Link company names to their websites | — | Low |
| 11 | Structured data | ✅ Fixed | `ProfilePage` + a separate Person with `jobTitle: "Full Stack Developer"`, which conflicts with the root "Full Stack & Mobile App Developer". `BreadcrumbList` ✅. | Reference `{ "@id": personId }` only. Move `worksFor` to the root Person. Add `hasOccupation` with `OrganizationRole` + `startDate` (§9.1). → **Done:** Person by `@id`; `OrganizationRole` list with dates | `:97-117` | Medium |
| 12 | URL | ✅ | `/experience` | — | — | — |
| 13 | Rendering | ✅ Fixed | Hidden-div streaming | — | — | High |
| 14 | Accessibility | ✅ Fixed | 8–11px text in the timeline circles (`text-[8px]`, `text-[11px]`) | Minimum 12px → **Done:** Smallest timeline text raised from 8px to 10px; stat labels to 12px | `:249-253` | Low |

### 4.7 Blog index `/blog`

**Recommended**
- **Title** (59): `Developer Blog: Next.js, Expo & Full Stack | Kaushal Rathod` → `title: "Developer Blog: Next.js, Expo & Full Stack"`
- **Meta description** (148): `Practical articles by Kaushal Rathod on Next.js, React Native, Expo, full-stack architecture, performance and SEO, with code examples you can reuse.`
- **H1:** `Kaushal Rathod's developer blog: Next.js, React Native & full stack notes`
- **Primary keyword:** Next.js developer blog · **Secondary:** React Native Expo tutorials, full stack engineering articles

| # | Check | Status | Current | Recommended | File & line | Priority |
|---|---|---|---|---|---|---|
| 1 | Title | ✅ Fixed | **77 chars** | See above | `app/blog/page.tsx:10` | Medium |
| 2 | Meta description | ✅ Fixed | 165 chars. "India developers, Gujarat developers, and the Ahmedabad developer community" reads as **keyword stuffing**. | See above (148) | `:11-12` | Medium |
| 3 | Canonical | ✅ | `/blog` | — | `:17-19` | — |
| 4 | Headings | ✅ Fixed | H1, H2 "Latest articles", H3 per post | Make the H1 less location-stuffed | `:70-72` | Low |
| 5 | Content | ✅ Fixed | Geo-keyword repetition in the subtitle (`:73-77`) and `geoKeywords` in every post's `keywords` | Write for readers. Keep "Ahmedabad" once at most. → **Done:** Geo keywords removed from copy, tags and post keywords | `app/blog/page.tsx:73-77`, `lib/blog.ts:58-76` | Medium |
| 6 | Open Graph | ✅ Fixed | `image1.jpg` **declared 1200×630, actually 675×1200 (portrait)**. `siteName: "Kaushal Rathod Blog"` differs from the site's "Kaushal Rathod". | Generated OG image. Use the same `siteName` as the rest of the site. → **Done:** Generated OG image; `siteName` unified | `:21-35` | High |
| 7 | Twitter | ✅ | Page-level | Fix the image | `:36-41` | — |
| 8 | Images | 🟡 Partly fixed | Hero `Office.jpg` not lazy (fine, it's above the fold). Covers are generic stock-style photos reused across posts (image1 ×2, image3 ×2). | Unique cover per post (generated title card). Rename files. → **Done:** Each post now has a unique generated OG card; reused cover photos remain | `lib/blog.ts:103,286,374,455,537,610` | Medium |
| 9 | Internal links | ✅ Fixed | **"Join the newsletter" links to `/contact`**. There is no newsletter, so the link is misleading. | Remove it, or build a real signup → **Done:** Replaced with "Subscribe via RSS" | `app/blog/page.tsx:110-111` | Medium |
| 10 | External links | — | None | — | — | — |
| 11 | Structured data | ✅ Fixed | `CollectionPage` with `hasPart` BlogPosting. **No BreadcrumbList.** Author not linked by `@id`. | Use `Blog` + `blogPost[]`, author `{ "@id": personId }`, plus a BreadcrumbList → **Done:** `Blog` + `blogPost[]`, author `@id`, BreadcrumbList | `:44-61` | Medium |
| 12 | URL | ✅ | `/blog` | — | — | — |
| 13 | Rendering | ✅ Fixed | Hidden-div streaming | — | — | High |
| 14 | Accessibility | ✅ | `<main>`, alt text | — | — | — |

### 4.8 Blog posts `/blog/[slug]` (shared template + 6 posts)

**Shared template findings** (`app/blog/[slug]/page.tsx`)

| # | Check | Status | Current | Recommended | File & line | Priority |
|---|---|---|---|---|---|---|
| 1 | Title | ✅ Fixed | `${post.title} \| Developer Blog` + template → **87–94 chars** for every post | `title: { absolute: post.seoTitle ?? \`${post.title} \| Kaushal Rathod\` }`. Add an optional `seoTitle` to `BlogPost`. → **Done:** `seoTitle` per post, `title.absolute` | `app/blog/[slug]/page.tsx:26` | High |
| 2 | Meta description | ✅ Fixed | 106–158 chars. Four posts are under 140. | Use the per-post descriptions below → **Done:** New 147–154-char descriptions | `lib/blog.ts` (each `description`) | Medium |
| 3 | Canonical | ✅ | `/blog/${slug}` | — | `:36-38` | — |
| 4 | Headings | ✅ | 1 H1 (post title), H2 sections, FAQ H3s | — | `:236,89` | — |
| 5 | Content | 🔜 Deferred | The Expo post is ~1,050 words ✅. **The other 5 are ~300–390 words: thin.** | Expand each to 1,200+ words with code, diagrams, "Key takeaways", FAQ and sources (the Expo post is the model) → **Later:** Content expansion is long-term | `lib/blog.ts:266-656` | High |
| 6 | Open Graph | ✅ Fixed | `og:image` declared 1200×630, but the real covers are 675×1200, 736×1308, 735×1226 (portrait) | Generate `app/blog/[slug]/opengraph-image.tsx` (§9.5) → **Done:** `app/blog/[slug]/opengraph-image.tsx` | `:45-52` | High |
| 7 | Twitter | ✅ | Page-level card | — | `:59-64` | — |
| 8 | Images | ✅ No change needed | Cover alt = "{title} cover image" (generic). Not `priority` even though it's the LCP element. | Add `priority` to the cover image. Alt should describe the photo. → **Done:** Audit error: the cover already had `priority` | `app/blog/[slug]/page.tsx` cover `<Image>` | Medium |
| 9 | Internal links | ✅ | Breadcrumb, related posts, CTA | Add in-body contextual links (e.g. the Expo post → /fleetconnekt) | — | Low |
| 10 | External links | ✅ | Sources use `rel="noreferrer" target="_blank"` | — | — | — |
| 11 | Structured data | ✅ Fixed | `BlogPosting` + `BreadcrumbList` (+ `FAQPage` on the Expo post). **`dateModified` = `datePublished`** always. Author is a new Person node (not `@id`). `publisher` is a Person with no logo. | Add an `updated` field to `BlogPost` and use it for `dateModified` and the sitemap. Author/publisher → `{ "@id": personId }`. Add `inLanguage`, `keywords`, `image` as an `ImageObject` with dimensions. → **Done:** `dateModified` from `updated`, author/publisher `@id`, `ImageObject` | `:157-181` | Medium |
| 12 | URL | ✅ | Lowercase, hyphenated, descriptive slugs | — | — | — |
| 13 | Rendering | ✅ Fixed | Hidden-div streaming | — | — | High |
| 14 | Accessibility | ✅ | `<article>`, `<main>`, breadcrumb | — | — | — |

**Per-post recommended titles, descriptions and keywords**

| Post | Rec. title (chars) | Rec. description (chars) | Primary / secondary keyword | Status |
|---|---|---|---|---|
| `today-i-learned-expo-react-native-push-notifications` (1,199 words incl. chrome) | `Expo Push Notifications in React Native \| Kaushal Rathod` (56) | Keep current (158) ✅ | expo push notifications / expo-notifications android channel | ✅ Fixed |
| `full-stack-project-architecture-checklist-2026` (516) | `Full-Stack Architecture Checklist (2026) \| Kaushal Rathod` (57) | `A practical 2026 checklist for full-stack architecture: module boundaries, typed data contracts, performance budgets and observability for Next.js apps.` (152) | full stack architecture checklist / Next.js project structure | 🟡 Title & description fixed; content still thin |
| `nextjs-seo-geo-content-framework-for-portfolios` (495) | `Next.js SEO & GEO for Developer Portfolios \| Kaushal Rathod` (59) | `A repeatable Next.js content framework for developer portfolios: one intent per page, answer-first sections, and metadata paired with JSON-LD schema.` (149) | Next.js SEO portfolio / generative engine optimization | 🟡 Title & description fixed; content still thin |
| `nextjs-performance-playbook-india` (538) | `Next.js Performance Playbook for Fast Apps \| Kaushal Rathod` (58) | `A Next.js performance playbook: set performance budgets, cache at the edge with revalidation, and ship optimized images to improve Core Web Vitals.` (147) | Next.js performance optimization / Core Web Vitals Next.js | 🟡 Title & description fixed; content still thin |
| `system-design-notes-for-geo-distributed-teams` (460) | `API System Design for Distributed Teams \| Kaushal Rathod` (56) | `System design notes for distributed product teams: define service ownership early and use contract-first APIs so teams in many time zones avoid surprises.` (154) | contract-first API design / service ownership | 🟡 Title & description fixed; content still thin |
| `frontend-writing-for-developer-communities` (446) | `Technical Writing for Developer Blogs \| Kaushal Rathod` (54) | `How to write frontend and technical blog posts developers actually read: lead with outcomes, use concrete code examples, and end with a clear next step.` (152) | technical writing for developers / developer blog tips | 🟡 Title & description fixed; content still thin |

### 4.9 Contact `/contact`

**Recommended**
- **Title** (59): `Hire a Full Stack & React Native Developer | Kaushal Rathod` → `title: "Hire a Full Stack & React Native Developer"`
- **Meta description** (147): `Hire Kaushal Rathod for full stack web or React Native app development. Share your brief and timeline; remote work worldwide from Ahmedabad, India.`
- **H1:** `Hire Kaushal Rathod for your next web or mobile app`
- **Primary keyword:** hire full stack developer Ahmedabad · **Secondary:** hire React Native developer India, freelance Next.js developer

| # | Check | Status | Current | Recommended | File & line | Priority |
|---|---|---|---|---|---|---|
| 1 | Title | ✅ Fixed | "Contact \| Kaushal Rathod" (24) | See above | `app/contact/page.tsx:4` | High |
| 2 | Meta description | ✅ Fixed | 103 chars | See above | `:5-6` | Medium |
| 3 | Canonical | ✅ | `/contact` | — | `:7-9` | — |
| 4 | Headings | ✅ Fixed | Only an H1, "Let's build something meaningful." | Use the H1 above. Add H2s: "How can I hire Kaushal Rathod?", "What happens after I send a brief?", "Other ways to reach me". → **Done:** H1 + "How can I hire…" and "Other ways to reach me" H2s | `:19-21` | Medium |
| 5 | Content | ✅ Fixed | ~35 words. **The form has no `action`/`onSubmit`, so submissions go nowhere.** "I reply within 48 hours" is unverifiable. | Wire the form to a Server Action plus an email service (Resend), or Formspree. Show the email address, LinkedIn, response time, time zone (IST, UTC+5:30), engagement types and a typical budget/timeline. → **Done:** Server Action via Resend (`app/contact/actions.ts`) with name/company, email, mobile, project type, budget, timeline, reference link and project details; tested end to end. Add the env vars in Vercel for production | `:29-82` | **High** |
| 6 | Open Graph | ✅ Fixed | **None. Inherits the root, so `og:url` = the home URL** | Add an `openGraph` block with `url: absoluteUrl("/contact")` | `:3-10` | High |
| 7 | Twitter | ✅ Fixed | Inherits the root | Add one | `:3-10` | Medium |
| 8 | Images | — | None | Optional portrait (trust) | — | Low |
| 9 | Internal links | ✅ Fixed | None in the body | Link to /projects ("see my work first") → **Done:** "See my work first" → /projects | — | Low |
| 10 | External links | ✅ Fixed | No mailto or LinkedIn in the body | Add `mailto:` and LinkedIn → **Done:** mailto + LinkedIn | — | Medium |
| 11 | Structured data | ✅ Fixed | Only the global ones | Add `ContactPage` + `Person.contactPoint` + `BreadcrumbList` (§9.4) → **Done:** `ContactPage` + BreadcrumbList; `contactPoint` on Person | `app/contact/page.tsx` | High |
| 12 | URL | ✅ | `/contact` | — | — | — |
| 13 | Rendering | ✅ Fixed | Hidden-div streaming | — | — | High |
| 14 | Accessibility | ✅ Fixed | **No `<main>`** (root is `<div>`, `:14`). Inputs have labels ✅. No success or error message. | Use `<main>`. Add an `aria-live` status message. → **Done:** `<main>` + `aria-live` status | `:14` | Medium |

---

## 5. Technical SEO (site-wide)

| # | Check | Status | Current | Recommended | File & line | Priority |
|---|---|---|---|---|---|---|
| T1 | robots.txt | ✅ Fixed | `User-Agent: * / Allow: /`, Sitemap and Host lines ✅. No AI-crawler rules, and `/_next/` and `/api/` are not mentioned. | Explicit AI-bot groups (§9.2). `Host` is ignored by Google (harmless). → **Done:** Explicit search/AI bot group (`app/robots.ts`) | `app/robots.ts:4-15` | Medium |
| T2 | XML sitemap | ✅ Fixed | Auto-generated ✅. All 14 URLs ✅ (`/fleetconnekt` added). Image entries for posts ✅. **Static pages all share a hard-coded `lastmod` 2026-07-22.** Posts use `post.date`, not the modified date. | Use real per-page modified dates (§9.6) → **Done:** Per-route dates; posts use `updated ?? date` | `app/sitemap.ts:19,26` | Medium |
| T3 | Meta robots | ✅ | `index, follow` + `max-image-preview:large` on all pages. Default 404 sends `noindex`. | — | `app/layout.tsx:80-90` | — |
| T4 | 404 page | ✅ Fixed | `app/_not-found.tsx` is **not a Next.js convention, so it's ignored**. The default 404 renders with **two `<title>`s and two robots metas** ("404…" plus the root title, `noindex` plus `index, follow`). | Rename it to `app/not-found.tsx` and add links to Home, Projects and Blog (§9.8) → **Done:** `app/not-found.tsx` | `app/_not-found.tsx` | Medium |
| T5 | Trailing slash | ✅ | `/about/` → 308 → `/about` | — | Next default | — |
| T6 | Case sensitivity | ✅ | `/About` → 404 (no duplicate content) | — | — | — |
| T7 | www vs non-www / HTTPS | ⏳ Needs your input | Not in the repo (configured at the Vercel domain level) | In Vercel → Domains: set `kaushalrathod.com` as primary and 308-redirect `www`. HTTPS is automatic on Vercel. Set `NEXT_PUBLIC_SITE_URL`. → **Waiting:** Set in the Vercel dashboard | Vercel dashboard | Medium |
| T8 | `lang`, charset, viewport | ✅ | `lang="en"`, UTF-8, `width=device-width, initial-scale=1, maximum-scale=5` | Optional `lang="en-IN"` to match the audience | `app/layout.tsx:27-32,154` | Low |
| T9 | Favicon / icons | ✅ Fixed | `app/favicon.ico` ✅. `icon` and `apple` both = `/Images/user.png` (160×160). **Apple touch icon should be 180×180.** | Add `app/icon.png` (512×512) and `app/apple-icon.png` (180×180). Remove the `icons` block. → **Done:** `app/icon.tsx` (512) + `app/apple-icon.tsx` (180) | `app/layout.tsx:54-57` | Low |
| T10 | Web manifest | ✅ Fixed | None (`/manifest.webmanifest` → 404) | Add `app/manifest.ts` (§9.9) → **Done:** `app/manifest.ts` | — | Low |
| T11 | theme-color | ✅ | `#ffeb3b` | — | `app/layout.tsx:31` | — |
| T12 | RSS feed | ✅ Fixed | `<link rel="alternate" type="application/rss+xml" href="/feed.xml">` is declared, but **`/feed.xml` returns 404** | Add `app/feed.xml/route.ts` (§9.10) → **Done:** `app/feed.xml/route.ts` | `app/layout.tsx:50-52` | High |
| T13 | Render-blocking CSS / fonts | ✅ Fixed | `globals.css:1` `@import url(fonts.googleapis.com/…Space+Grotesk…Syne…)`, compiled into the main CSS (84 KB), adds a **blocking third-party request chain**. `layout.tsx:12-24` **preloads Fira Code and Open Sans, which are used only by dead components.** | Load Space Grotesk and Syne with `next/font/google` (self-hosted, preloaded, `font-display: swap`, size-adjusted fallback). Remove Fira Code and Open Sans. (§9.11) → **Done:** `next/font` Space Grotesk + Syne; `@import` and Fira Code/Open Sans removed | `app/globals.css:1`, `app/layout.tsx:2,12-24,156` | High |
| T14 | LCP | ✅ Fixed | The hero image is preloaded with `fetchpriority` ✅ and served as WebP ✅. But font blocking delays text LCP, and the hero `profile.png` source is 1.8 MB. **Estimated LCP impact: +300–700 ms on 4G from the font chain.** | T13 + convert the source images to WebP → **Done:** Font chain removed; source image conversion deferred | — | High |
| T15 | CLS | ✅ Fixed | Fonts swap from the system fallback to Space Grotesk/Syne with no size-adjusted fallback, which causes layout shift on headings. **Estimated CLS 0.05–0.12.** `next/image` `fill` boxes have aspect ratios ✅. | `next/font` creates `adjustFontFallback` automatically → **Done:** `next/font` size-adjusted fallbacks | — | Medium |
| T16 | INP | ✅ | Little client JS on pages (Header/Footer/ClientLayout are client components). GA loads `afterInteractive`. **INP risk: low.** | Optional: `@next/third-parties/google` `GoogleAnalytics` | `app/layout.tsx:158-170` | Low |
| T17 | Unused code / deps | ✅ Fixed | 8 unused components, `components/ui/button.tsx`, deps `class-variance-authority`, `@radix-ui/react-slot`. Both `tailwindcss-animate` and `tw-animate-css` are installed. `tailwind.config.ts` is not loaded by Tailwind v4 (no `@config`). | Delete the dead files and deps → **Done:** 8 dead components, `ui/button`, `tailwind.config.ts` and 3 unused deps removed | `components/*.tsx`, `package.json:11-21` | Low |
| T18 | Image source weight | 🔜 Deferred | `fleetconnekt-banner.png` 1.8 MB, `profile.png` 1.8 MB, `fleetconnet-1.jpeg` 1.2 MB. `next/image` handles delivery, but large sources slow the first optimization and the OG/social fetches, which use the raw files. | Pre-convert to WebP at ≤2× the display size → **Later:** Long-term list | `public/Images`, `Assets/fleetconnekt` | Low |
| T19 | Mobile | ✅ | Responsive grid with 16px gutters, verified at 390px. Tap targets ≥44px (`.soft-btn min-height: 44px`). | — | `app/globals.css` | — |
| T20 | Security headers | ✅ Fixed | **None.** `X-Powered-By: Next.js` exposed. No HSTS, CSP, `X-Content-Type-Options`, `Referrer-Policy` or `Permissions-Policy`. | Add `headers()` + `poweredByHeader: false` (§9.12) → **Done:** Headers + CSP (production) + `poweredByHeader: false` | `next.config.ts:3-5` | Medium |
| T21 | Analytics | ✅ | GA4 installed | Add consent mode if you target EU visitors | `app/layout.tsx:158-170` | Low |
| T22 | Search Console | ✅ Fixed | Meta verification ✅. `googlebddaeb0751f90d43.html` is in the **project root** (not served). | Delete the stray file (the meta tag is enough) or move it to `public/` → **Done:** Stray file deleted | `googlebddaeb0751f90d43.html` | Low |
| T23 | Bing Webmaster | ⏳ Needs your input | None. Bing powers ChatGPT search and Copilot. | Add `verification: { other: { "msvalidate.01": "…" } }` and submit the sitemap. Enable IndexNow. → **Waiting:** Needs your Bing verification code | `app/layout.tsx:97-99` | Medium |
| T24 | Root canonical inheritance | ✅ Fixed | The root sets `alternates.canonical: "/"`. Every current page overrides it ✅, but any **new** page without `alternates` will canonicalize to the home page. | Remove `canonical` from the root layout and set it per page → **Done:** Root `canonical` removed | `app/layout.tsx:48-49` | Medium |
| T25 | Keywords meta | ✅ Fixed | `keywords` on every page. Google ignores it, and the blog's stuffed geo-keywords may look spammy to other engines. | Keep a short list or remove → **Done:** Geo keyword lists removed | `lib/blog.ts:58-76` | Low |

---

## 6. GEO: Generative Engine Optimization

### 6.1 Findings

| # | Check | Status | Current | Recommended | File & line | Priority |
|---|---|---|---|---|---|---|
| G1 | Content visible without JS | ✅ Fixed | The body is streamed into `<div hidden id="S:0">` after the footer. Crawlers that don't execute JS get a "Loading content..." placeholder in position, with the real content hidden at the end. | **Delete `app/loading.tsx`** | `app/loading.tsx` | **High** |
| G2 | AI crawler rules | ✅ Fixed | Allowed by the `*` wildcard (OK), with no explicit groups | Explicitly allow GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Bingbot. Decide on CCBot (§9.2). | `app/robots.ts` | Medium |
| G3 | `llms.txt` | ✅ Fixed | `public/llms.txt` (stale, 2026-03-01, "Full Stack Developer" only, no articles) **shadows** `app/llms.txt/route.ts` (dynamic, better) | Delete `public/llms.txt`. Expand the route with the content in §9.13. → **Done:** `public/llms.txt` deleted; route rewritten from `lib/llms.ts` | `public/llms.txt`, `app/llms.txt/route.ts:14-40` | High |
| G4 | `llms-full.txt` | ✅ Fixed | 404 | Add `app/llms-full.txt/route.ts` with the full About, Experience, project and FAQ text in plain Markdown → **Done:** `app/llms-full.txt/route.ts` | — | Medium |
| G5 | Entity: name | ✅ | "Kaushal Rathod" is consistent | — | `lib/site.ts:13` | — |
| G6 | Entity: job title | ✅ Fixed | Four variants: "Full Stack & Mobile App Developer" (`site.ts:21`), "Full Stack Developer" (`Header.tsx:50`, `Footer.tsx:60`, `experience/page.tsx:107`, `public/llms.txt:3`), "Full Stack & Frontend Developer" (`experience/page.tsx:5`), "Full Stack & Mobile Application Developer" (`llms.txt/route.ts:37`) | Use **"Full Stack & Mobile App Developer"** everywhere, driven from `siteConfig.author.role` → **Done:** "Full Stack & Mobile App Developer" everywhere | listed | High |
| G7 | Entity: location | ✅ Fixed | "Ahmedabad, Gujarat, India" (schema, hero) vs footer "Remote / Worldwide" with no city | Footer: "Ahmedabad, India · Remote worldwide" | `components/Footer.tsx:88` | Medium |
| G8 | Entity: bio | ✅ Fixed | Footer bio: "Building friendly, bold web experiences with soft Neo-Brutalist styling…" describes the site's style, not you. It appears on every page, so it's the most-repeated sentence about you. | Replace it with the canonical bio (§6.3, short version) | `components/Footer.tsx:63-66` | High |
| G9 | Person schema completeness | 🟡 Partly fixed | Has name, jobTitle, url, image, email, sameAs (2), address, knowsAbout. **Missing:** `worksFor`, `description`, `alumniOf`, `hasOccupation`, `knowsLanguage`, `nationality`, `givenName`/`familyName`, `contactPoint`. | §9.1 → **Done:** Added `worksFor`, `description`, `hasOccupation`, `contactPoint`, names. `alumniOf` and `knowsLanguage` need your input | `app/layout.tsx:107-134` | High |
| G10 | `sameAs` coverage | ⏳ Needs your input | GitHub + LinkedIn only | Add every profile you control: X/Twitter, Dev.to, Hashnode, Medium, Stack Overflow, Google Play developer page, npm, Peerlist, Wellfound. Also link back to the site from each profile. → **Waiting:** Add your other profiles to `lib/site.ts` `sameAs` | `lib/site.ts:30-33` | Medium |
| G11 | Citable facts | ⏳ Needs your input | Dates exist on Experience. Projects have qualitative outcomes only. Stats ("10+ shipped", "25+ systems") have no backing list. | Add numbers, dates and the platform to each project (e.g. "FleetConnekt, launched {{YEAR}}, Android, {{N}} transporters"). List the 10+ products. → **Waiting:** Needs real project numbers and dates | `app/projects/page.tsx:31-74`, `app/about/page.tsx:28-32` | High |
| G12 | Extractable structure | 🔜 Deferred | The Expo post has "What you need to know" (takeaways), FAQ and sources: an excellent model. The other pages are short paragraphs with no summaries. | Add a 2–3 sentence **TL;DR** box at the top of About, Projects, Experience and each post. Use `<table>` for the skills matrix and experience. | `app/blog/[slug]/page.tsx:265-280` (model) | Medium |
| G13 | Freshness | 🟡 Partly fixed | No visible "Last updated" on any page. `dateModified` = `datePublished`. Hard-coded sitemap dates. Stale "1 yr 5 mos". | Show "Updated {date}" on About, Projects and posts. Add `dateModified`. Compute durations. → **Done:** `dateModified`, sitemap dates and computed durations done; visible "Last updated" labels pending | — | Medium |
| G14 | Duplicate Person definitions | ✅ Fixed | `/skills` and `/experience` re-declare Person fields with the same `@id` but a different `jobTitle`/`knowsAbout` | Reference by `@id` only. Keep one source of truth in the layout. | `app/skills/page.tsx:225-232`, `app/experience/page.tsx:103-116` | Medium |
| G15 | Identity links | ✅ Fixed | None | Add `<link rel="me" href="https://github.com/RATHODKAUSHAL">` and the same for LinkedIn | `app/layout.tsx` `<head>` (§9.1) | Low |

### 6.2 AI-crawler recommendation

| Bot | Purpose | Recommendation |
|---|---|---|
| GPTBot | OpenAI training | **Allow** (being in training data helps ChatGPT know who you are) |
| OAI-SearchBot | ChatGPT search index | **Allow** |
| ChatGPT-User | Live fetch when a user asks | **Allow** |
| ClaudeBot | Anthropic training | **Allow** |
| Claude-SearchBot / Claude-User | Claude search and live fetch | **Allow** |
| PerplexityBot / Perplexity-User | Perplexity index and live fetch | **Allow** |
| Google-Extended | Gemini / AI Overviews grounding | **Allow** |
| Applebot-Extended | Apple Intelligence | **Allow** |
| Bingbot | Bing + Copilot + ChatGPT search | **Allow** |
| CCBot | Common Crawl (used by many LLMs) | **Allow.** For a portfolio, maximum visibility is the goal. |

### 6.3 Canonical "About me" summary (for AI quoting)

Put this in the About page's first paragraph, `Person.description`, `llms.txt` and LinkedIn "About":

> **Kaushal Rathod is a full stack and mobile app developer based in Ahmedabad, Gujarat, India.** Since 2023 he has built production web and mobile products with Next.js, React, TypeScript, Node.js, React Native, Expo, Laravel and PostgreSQL. He is currently a Full Stack Developer at Trukky (since February 2025), where he builds logistics products such as FleetConnekt, 48jobs.com and the Trukky learning management system. He previously worked as a Frontend Developer at Maze Technolabs. Kaushal works with teams worldwide on full-stack web applications, React Native mobile apps, and performance and SEO improvements.

**Short version (footer, 25 words):** Kaushal Rathod is a full stack and mobile app developer in Ahmedabad, India, building web and mobile products with Next.js, React, Node.js and React Native.

> ⚠️ This summary says FleetConnekt and 48jobs were built at Trukky. I inferred that from `/experience` + `/projects`, so **confirm it before publishing**.

---

## 7. AEO: Answer Engine Optimization

| # | Check | Status | Current | Recommended | File & line | Priority |
|---|---|---|---|---|---|---|
| A1 | Question-style headings | ✅ Fixed | Only in FAQ blocks (Home ×3, Projects ×3, Expo post ×3) | Add question H2s on About ("What does Kaushal Rathod do?"), Contact ("How can I hire Kaushal Rathod?"), Skills ("What technologies does Kaushal Rathod use?") and Experience ("Where has Kaushal Rathod worked?") → **Done:** Home FAQ, About ("What does…", "Where has…"), Contact ("How can I hire…") | — | High |
| A2 | 40–60 word answers | ✅ Fixed | Home FAQ answers are 19–25 words (`HomeExpertise.tsx:31-43`). Projects FAQ answers are ~20 words. | Rewrite to 40–60 words (§7.1) → **Done:** Home and Projects answers rewritten to 40–60 words | `components/sections/HomeExpertise.tsx:28-44`, `app/projects/page.tsx:76-92` | High |
| A3 | FAQ section + `FAQPage` | ✅ | Home, Projects, Expo post | Add FAQs to About, Contact and every post. (Google shows FAQ rich results only for gov/health sites since 2023, but AI engines still read FAQPage markup.) | — | Medium |
| A4 | Missing key question | ✅ Fixed | No "How can I hire Kaushal?" / "Is Kaushal available for freelance?" / "What does it cost?" | Add to Home + Contact FAQ → **Done:** Added to Home FAQ and Contact | — | High |
| A5 | `WebSite` schema | ✅ | Present with `@id`, publisher | Add `potentialAction` SearchAction only if you add site search (don't add it otherwise) | `app/layout.tsx:136-151` | — |
| A6 | `Person` schema | ✅ Fixed | See G9 | §9.1 | — | High |
| A7 | `ProfilePage` | ✅ Fixed | Home, Skills, Experience | Add `dateCreated`/`dateModified` (Google ProfilePage guideline) → **Done:** `dateModified` on Home and About | `app/page.tsx:39-47` | Low |
| A8 | `BreadcrumbList` | ✅ Fixed | About, Projects, Experience, posts. **Missing:** Skills, Blog, FleetConnekt, Contact. | Use the `breadcrumbSchema()` helper (`lib/seo.ts:9-22`) → **Done:** Skills, Blog, FleetConnekt, Contact | — | Medium |
| A9 | Project schema | ✅ Fixed | `CreativeWork` with wrong `url` | `SoftwareApplication` (§9.3) | `app/projects/page.tsx:103-112` | High |
| A10 | `BlogPosting` | ✅ Fixed | Per post, with `wordCount`, `articleSection` | Add `dateModified`, an author `@id` and an `ImageObject` | `app/blog/[slug]/page.tsx:157-181` | Medium |
| A11 | `ContactPoint` | ✅ Fixed | None | §9.4 | — | Medium |
| A12 | Voice-search phrasing | ➕ | None | Add natural phrasing, e.g. "Who is the best React Native developer in Ahmedabad for logistics apps?" answered in the FAQ with facts, not superlatives | — | Low |

### 7.1 Draft FAQ (based on your actual content)

Use on **Home** (replace the 3 current items in `components/sections/HomeExpertise.tsx:28-44`) and reuse a subset on About and Contact. Each answer is 40–60 words.

1. **Who is Kaushal Rathod?**
   Kaushal Rathod is a full stack and mobile app developer based in Ahmedabad, Gujarat, India. He has built production software since 2023 and currently works as a Full Stack Developer at Trukky, building logistics web and mobile products with Next.js, React, TypeScript, Node.js, React Native, Expo and PostgreSQL. *(49 words)*

2. **What does Kaushal Rathod build?**
   Kaushal builds full-stack web applications, cross-platform mobile apps, and internal tools for operations teams. His work includes FleetConnekt, a highway logistics app with a verified transporter directory and digital lorry receipts; 48jobs.com, a logistics hiring platform; and Trukky LMS, a learning platform with progress tracking and analytics. *(50 words)*

3. **Which technologies does Kaushal Rathod work with?**
   His core stack is Next.js, React and TypeScript on the frontend; Node.js, Express, Laravel and REST APIs on the backend; PostgreSQL, MySQL, Prisma and Supabase for data; and React Native with Expo for Android and iOS apps. He also handles performance tuning, accessibility and technical SEO. *(48 words)*

4. **How can I hire Kaushal Rathod?**
   Send a short brief with your goals, timeline and budget through the contact form at kaushalrathod.com/contact, or email rathodkaushal2001@gmail.com. Kaushal works remotely with teams worldwide from Ahmedabad (IST, UTC+5:30) and will follow up with a proposed scope, plan and next steps for your web or mobile project. *(51 words)*

5. **Where is Kaushal Rathod based, and does he work remotely?**
   Kaushal is based in Ahmedabad, Gujarat, India, and works remotely with clients and teams worldwide. He collaborates across time zones using clear written scopes, regular demos and Git-based workflows, and he is comfortable joining existing product teams or owning a project end to end from API to app store release. *(51 words)*

6. **How much experience does Kaushal Rathod have?**
   Kaushal has more than three years of professional experience. He started as a Junior Developer Intern at Maze Technolabs in June 2023, became a Frontend Developer there in March 2024, and has been a Full Stack Developer at Trukky since February 2025, working across React interfaces, Node.js APIs and PostgreSQL data. *(52 words)*

7. **Can Kaushal Rathod build both the website and the mobile app?**
   Yes. Kaushal delivers end-to-end products: a Next.js web app or admin panel, a Node.js or Laravel API, a PostgreSQL or MySQL database, and a React Native/Expo mobile app that shares the same backend. That keeps one developer accountable for data contracts, authentication and push notifications across platforms. *(49 words)*

> ⚠️ #5 and #7 describe how you work, which I inferred from the site copy. Edit them so they match how you actually work. Nowhere in the code does it say whether you're available for freelance work. If you are, add it to #4.

---

## 8. Missing opportunities

| # | Opportunity | Why | Effort |
|---|---|---|---|
| M1 | **Case-study pages** `/projects/[slug]` for 48jobs, Trukky LMS and Zestify, using the FleetConnekt page as the template: problem → role → stack → architecture → screenshots → results → lessons | Long-tail ranking ("logistics job portal Next.js"), citable facts, internal links | Medium |
| M2 | **HTML résumé page** `/resume` + downloadable PDF, with an `ItemList` of roles and education | Recruiters search "Kaushal Rathod resume"; strong E-E-A-T | Low |
| M3 | **Testimonials** from Trukky/Maze colleagues or clients, with name, role and LinkedIn link | Trust and E-E-A-T. Add `Review` markup only for real third-party reviews. | Low |
| M4 | **Education section** (`alumniOf`): there is no education anywhere in the code | Entity completeness. AI answers often include education. | Low |
| M5 | **Expand the 5 thin posts** to 1,200+ words (model: Expo post) and publish 2 posts/month | Topical authority | Ongoing |
| M6 | **Content plan** (long-tail, ties to your real work): "Building a digital lorry receipt (LR) app with React Native", "Expo push notifications with a Node.js backend: receipts and retries", "Next.js + Laravel API: authentication patterns", "PostgreSQL schema for a transporter directory", "Offline-first React Native for highway connectivity", "Next.js 16 metadata API: complete SEO setup", "How I structured a job portal with role-based access", "Shipping an Expo app to the Play Store: checklist" | Matches the queries your target clients search | Ongoing |
| M7 | **Local SEO**: Google Business Profile (service-area business, Ahmedabad, "Software developer"), consistent name/location on LinkedIn, Clutch, GoodFirms, Upwork | "Full stack developer Ahmedabad" has local intent | Low |
| M8 | **Backlinks and profiles**: link the site from GitHub profile README and pinned repos, LinkedIn Featured, Dev.to/Hashnode cross-posts with canonical URLs, Peerlist, Product Hunt (FleetConnekt), Play Store developer page, Trukky's team page | Authority + `sameAs` | Low |
| M9 | **GitHub repos as `SoftwareSourceCode`**, if any project is open source | Developer-specific rich data | Low |
| M10 | **IndexNow** (Bing, Yandex, Seznam) on deploy | Faster indexing in Bing/Copilot/ChatGPT search | Low |
| M11 | **Uses page** `/uses` (hardware, editor, stack) | A popular developer-portfolio query that earns links | Low |
| M12 | **Hreflang**: not needed (English only). Revisit if you add Hindi or Gujarati pages. | — | — |
| M13 | **Dark mode**: `ThemeProvider enableSystem` is on but the landing page has no dark styles | UX consistency (indirect) | Medium |
| M14 | **Real newsletter** (e.g. Buttondown) to replace the fake "Join the newsletter" link | Returning visitors and brand searches | Low |

---

## 9. Ready-to-use code (Next.js 16 App Router, your file structure)

### 9.1 Enriched root `Person` + `WebSite` (`app/layout.tsx`)

First add the canonical bio to `lib/site.ts`:

```ts
// lib/site.ts — inside siteConfig.author
  author: {
    name: "Kaushal Rathod",
    givenName: "Kaushal",
    familyName: "Rathod",
    role: "Full Stack & Mobile App Developer",
    bio: "Kaushal Rathod is a full stack and mobile app developer in Ahmedabad, India, building web and mobile products with Next.js, React, Node.js and React Native.",
    email: "rathodkaushal2001@gmail.com",
    image: "/Images/profileimage.jpeg",
    employer: { name: "Trukky", url: "https://www.trukky.com", since: "2025-02" }, // confirm URL
    location: { city: "Ahmedabad", region: "Gujarat", country: "India", countryCode: "IN" },
    sameAs: [
      "https://github.com/RATHODKAUSHAL",
      "https://www.linkedin.com/in/kaushal-rathod-dev/",
      // add: X, Dev.to, Hashnode, Stack Overflow, Play Store developer page …
    ],
  },
```

Then replace `personSchema` in `app/layout.tsx:107-134`:

```tsx
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: siteConfig.author.name,
  givenName: siteConfig.author.givenName,
  familyName: siteConfig.author.familyName,
  jobTitle: siteConfig.author.role,
  description: siteConfig.author.bio,
  url: siteConfig.siteUrl,
  mainEntityOfPage: absoluteUrl("/about"),
  image: {
    "@type": "ImageObject",
    url: absoluteUrl(siteConfig.author.image),
    width: 1600,
    height: 1200,
  },
  email: `mailto:${siteConfig.author.email}`,
  sameAs: siteConfig.author.sameAs,
  nationality: { "@type": "Country", name: "India" },
  knowsLanguage: ["en", "hi", "gu"], // confirm
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.author.location.city,
    addressRegion: siteConfig.author.location.region,
    addressCountry: siteConfig.author.location.countryCode,
  },
  worksFor: {
    "@type": "Organization",
    name: siteConfig.author.employer.name,
    url: siteConfig.author.employer.url,
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationLocation: { "@type": "City", name: "Ahmedabad" },
    skills: "Next.js, React, TypeScript, Node.js, React Native, Expo, Laravel, PostgreSQL, MySQL",
  },
  // alumniOf: { "@type": "CollegeOrUniversity", name: "{{UNIVERSITY}}", url: "{{UNIVERSITY_URL}}" },
  knowsAbout: [
    "Full-stack web development", "Mobile app development",
    "Next.js", "React", "TypeScript", "Node.js", "Express", "Laravel", "PHP",
    "React Native", "Expo", "Android", "PostgreSQL", "MySQL", "Prisma", "Supabase",
    "REST APIs", "Logistics software", "Technical SEO", "Web performance",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "project enquiries",
    email: siteConfig.author.email,
    url: absoluteUrl("/contact"),
    availableLanguage: ["English", "Hindi", "Gujarati"],
    areaServed: "Worldwide",
  },
}
```

Also in `app/layout.tsx` metadata: remove `canonical: "/"` (line 49), and add:

```ts
  verification: {
    google: "GianrNYJnwhD4DHgw_SMpVb-c5zT7GFtPq_vKJs98do",
    other: { "msvalidate.01": "{{BING_VERIFICATION_CODE}}" },
  },
```

For identity links, render them in the `<head>` of `app/layout.tsx`. `metadata.other` would output `<meta>` tags, not `<link>` tags:

```tsx
<html lang="en" suppressHydrationWarning>
  <head>
    {siteConfig.author.sameAs.map((href) => (
      <link key={href} rel="me" href={href} />
    ))}
  </head>
  <body …>
```

In `app/skills/page.tsx:225-232` and `app/experience/page.tsx:103-116`, replace the inline Person with `mainEntity: { "@id": personId }`.

### 9.2 `app/robots.ts`

```ts
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const aiAndSearchBots = [
  "Googlebot", "Bingbot", "Applebot", "DuckDuckBot",
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended", "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: aiAndSearchBots, allow: "/", disallow: ["/api/"] },
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
```

### 9.3 Project schema: `SoftwareApplication` (`app/fleetconnekt/page.tsx` + `app/projects/page.tsx`)

```tsx
// app/fleetconnekt/page.tsx — inside the component, before return
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, personId } from "@/lib/seo";

const fleetSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${absoluteUrl("/fleetconnekt")}#app`,
      name: "FleetConnekt",
      description:
        "Mobile logistics platform for Indian highway transport with a verified transporter directory, digital lorry receipt generation and route information.",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Logistics",
      operatingSystem: "Android", // confirm; add "iOS" if applicable
      url: absoluteUrl("/fleetconnekt"),
      // installUrl: "https://play.google.com/store/apps/details?id={{PACKAGE_ID}}",
      image: absoluteUrl(banner.src),
      screenshot: appScreens.map((s) => absoluteUrl(s.src)),
      creator: { "@id": personId },
      countriesSupported: "IN",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }, // confirm business model
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: "FleetConnekt", path: "/fleetconnekt" },
    ]),
  ],
};
// in JSX, first child of <main>:  <JsonLd data={fleetSchema} />
```

In `app/projects/page.tsx:103-112`, change each `hasPart` entry to:

```ts
{
  "@type": project.platform === "mobile" ? "SoftwareApplication" : "WebApplication",
  "@id": `${absoluteUrl(project.caseStudy)}#app`,
  name: project.title,
  description: project.description,
  applicationCategory: "BusinessApplication",
  operatingSystem: project.platform === "mobile" ? "Android" : "Web",
  url: project.liveUrl ?? absoluteUrl(project.caseStudy),   // never /contact
  image: absoluteUrl(project.image),
  creator: { "@id": personId },
  keywords: project.technologies.join(", "),
}
```

### 9.4 Contact page metadata + schema (`app/contact/page.tsx`)

```tsx
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { breadcrumbSchema, personId } from "@/lib/seo";

const title = "Hire a Full Stack & React Native Developer";
const description =
  "Hire Kaushal Rathod for full stack web or React Native app development. Share your brief and timeline; remote work worldwide from Ahmedabad, India.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { type: "website", title, description, url: absoluteUrl("/contact") },
  twitter: { card: "summary_large_image", title, description },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${absoluteUrl("/contact")}#page`,
      name: `Contact ${siteConfig.author.name}`,
      url: absoluteUrl("/contact"),
      description,
      mainEntity: { "@id": personId },
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  ],
};

// Replace the root <div className="soft-grid-bg"> with <main className="soft-grid-bg">,
// render <JsonLd data={contactSchema} />, show a visible mailto link, and give the
// <form> a Server Action, e.g. <form action={sendEnquiry}> (app/contact/actions.ts using Resend).
```

### 9.5 Generated OG images (fixes every wrong-size image)

`app/opengraph-image.tsx` (site default; also used by Twitter):

```tsx
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.author.name}, ${siteConfig.author.role}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: 80, background: "#ffffff", border: "16px solid #000" }}>
        <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase" }}>
          {siteConfig.author.location.city}, India
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1, marginTop: 24 }}>
          {siteConfig.author.name}
        </div>
        <div style={{ fontSize: 44, marginTop: 24, background: "#ffeb3b", padding: "8px 20px", alignSelf: "flex-start" }}>
          {siteConfig.author.role}
        </div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#333" }}>
          Next.js · React · Node.js · React Native · Expo
        </div>
      </div>
    ),
    size,
  );
}
```

`app/blog/[slug]/opengraph-image.tsx`:

```tsx
import { ImageResponse } from "next/og";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "space-between", padding: 72, background: "#fff6c0", border: "16px solid #000" }}>
        <div style={{ fontSize: 26, fontWeight: 700, textTransform: "uppercase", letterSpacing: 3 }}>
          {post?.category} · {post?.readTime}
        </div>
        <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05 }}>{post?.title}</div>
        <div style={{ fontSize: 30 }}>{siteConfig.author.name} · kaushalrathod.com</div>
      </div>
    ),
    size,
  );
}
```

Then **remove** the `images` arrays from `app/page.tsx:25-31`, `app/blog/page.tsx:27-34,40`, `app/blog/[slug]/page.tsx:45-52,63`, `app/skills/page.tsx:25-32,38` and `app/experience/page.tsx:25-32,38`, plus the root `openGraph.images`/`twitter.images` (`app/layout.tsx:65-78`). Next.js wires the generated files in automatically, with correct dimensions.

### 9.6 `app/sitemap.ts` with real dates

```ts
import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

// Update a date whenever that page's content changes.
const routes = [
  { path: "", updated: "2026-11-05", priority: 1, changeFrequency: "weekly" },
  { path: "/about", updated: "2026-07-22", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects", updated: "2026-07-22", priority: 0.9, changeFrequency: "monthly" },
  { path: "/fleetconnekt", updated: "2026-07-22", priority: 0.8, changeFrequency: "monthly" },
  { path: "/skills", updated: "2026-07-22", priority: 0.7, changeFrequency: "monthly" },
  { path: "/experience", updated: "2026-07-22", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", updated: "2026-07-22", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", updated: "2026-07-22", priority: 0.6, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts();
  const latestPost = posts.map((p) => p.updated ?? p.date).sort().at(-1);

  return [
    ...routes.map((r) => ({
      url: `${siteConfig.siteUrl}${r.path}`,
      lastModified: new Date(r.path === "/blog" && latestPost ? latestPost : r.updated),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [`${siteConfig.siteUrl}/blog/${post.slug}/opengraph-image`],
    })),
  ];
}
```

Add `updated?: string` to `BlogPost` in `lib/blog.ts:30-57` and use it for `dateModified` in `app/blog/[slug]/page.tsx:166`.

### 9.7 Blog title fix + optional case-study redirect

```ts
// app/blog/[slug]/page.tsx:26
const title = post.seoTitle ?? `${post.title} | ${siteConfig.name}`;
// and in the returned metadata:
title: { absolute: title },
```

```ts
// next.config.ts — only if you move FleetConnekt under /projects
async redirects() {
  return [{ source: "/fleetconnekt", destination: "/projects/fleetconnekt", permanent: true }];
},
```

### 9.8 `app/not-found.tsx` (rename `app/_not-found.tsx`)

```tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center gap-5 px-4 pt-24">
      <h1 className="display-font text-4xl">404: this page doesn&apos;t exist</h1>
      <p className="text-black/70">Try one of these instead:</p>
      <nav className="flex flex-wrap gap-3" aria-label="Helpful links">
        <Link className="soft-btn soft-btn-accent" href="/">Home</Link>
        <Link className="soft-btn" href="/projects">Projects</Link>
        <Link className="soft-btn" href="/blog">Blog</Link>
        <Link className="soft-btn" href="/contact">Contact</Link>
      </nav>
    </main>
  );
}
```

### 9.9 `app/manifest.ts`

```ts
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.author.name}: ${siteConfig.author.role}`,
    short_name: "Kaushal Rathod",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffeb3b",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
```

(Add `app/icon.png` 512×512 and `app/apple-icon.png` 180×180, and delete the `icons` block in `app/layout.tsx:54-57`.)

### 9.10 `app/feed.xml/route.ts` (fixes the 404 RSS link)

```ts
import { getBlogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const items = getBlogPosts()
    .map((post) => {
      const url = `${siteConfig.siteUrl}/blog/${post.slug}`;
      return `<item>
  <title>${esc(post.title)}</title>
  <link>${url}</link>
  <guid isPermaLink="true">${url}</guid>
  <description>${esc(post.description)}</description>
  <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  <category>${esc(post.category)}</category>
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${esc(siteConfig.name)}: Developer Blog</title>
  <link>${siteConfig.siteUrl}/blog</link>
  <description>${esc(siteConfig.description)}</description>
  <language>en</language>
  <atom:link href="${siteConfig.siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
```

### 9.11 Font loading (`app/layout.tsx` + `app/globals.css`)

```tsx
// app/layout.tsx — replace lines 2 and 11-24
import { Space_Grotesk, Syne } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
})

// <body className={`${spaceGrotesk.variable} ${syne.variable} antialiased`}>
```

```css
/* app/globals.css — delete line 1 (@import url(...googleapis...)) and update: */
body { font-family: var(--font-body), system-ui, sans-serif; }
.display-font { font-family: var(--font-display), var(--font-body), sans-serif; }
.project-card-number { font-family: var(--font-display), sans-serif; } /* if still used */
```

### 9.12 `next.config.ts` with security headers

```ts
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
      "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com",
      "img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "frame-ancestors 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
```

> Test the CSP on a Vercel preview before production. `font-src 'self'` assumes you made the §9.11 font change.

### 9.13 `llms.txt` (replace `app/llms.txt/route.ts` content, then delete `public/llms.txt`)

```ts
// app/llms.txt/route.ts — replace the `content` template string
const content = `# Kaushal Rathod

> Kaushal Rathod is a full stack and mobile app developer based in Ahmedabad, Gujarat, India. He builds production web and mobile products with Next.js, React, TypeScript, Node.js, React Native, Expo, Laravel and PostgreSQL, and works remotely with teams worldwide.

## Key facts

- Full name: Kaushal Rathod
- Role: ${siteConfig.author.role}
- Location: Ahmedabad, Gujarat, India (IST, UTC+5:30). Works remotely worldwide.
- Current position: Full Stack Developer at Trukky (February 2025 – present)
- Previous: Frontend Developer, Maze Technolabs (March 2024 – January 2025); Junior Developer Intern, Maze Technolabs (June 2023 – March 2024)
- Experience: 3+ years of professional software development (since June 2023)
- Core stack: Next.js, React, TypeScript, JavaScript, Tailwind CSS, Node.js, Express, Laravel, PHP, REST APIs, PostgreSQL, MySQL, Prisma, Supabase, React Native, Expo, Android
- Services: full-stack web applications, React Native / Expo mobile apps, performance and technical SEO
- Contact: ${siteConfig.author.email} · ${siteConfig.siteUrl}/contact
- GitHub: ${siteConfig.author.sameAs[0]}
- LinkedIn: ${siteConfig.author.sameAs[1]}

## Projects

- [FleetConnekt](${siteConfig.siteUrl}/fleetconnekt): Mobile-first logistics platform for Indian highway transport, with a verified transporter directory and digital lorry receipt generation.
- [48jobs.com](${siteConfig.siteUrl}/projects): Logistics hiring platform with candidate onboarding, role-based access and verification workflows (Next.js, Node.js, PostgreSQL).
- [Trukky LMS](${siteConfig.siteUrl}/projects): Internal learning management system with progress tracking, content management and analytics (Laravel, React, TypeScript, MySQL).
- [Zestify](${siteConfig.siteUrl}/projects): E-commerce storefront and admin suite (Next.js, Prisma, PostgreSQL, Tailwind CSS).

## Pages

- [Home](${siteConfig.siteUrl}/): Overview, featured work and FAQ
- [About](${siteConfig.siteUrl}/about): Background and approach
- [Experience](${siteConfig.siteUrl}/experience): Roles, dates, responsibilities and technologies
- [Skills](${siteConfig.siteUrl}/skills): Technologies and how each is used
- [Projects](${siteConfig.siteUrl}/projects): Project summaries with stack and outcomes
- [Blog](${siteConfig.siteUrl}/blog): Engineering articles
- [Contact](${siteConfig.siteUrl}/contact): Hiring and project enquiries

## Articles

${posts}

## Optional

- [Full text for LLMs](${siteConfig.siteUrl}/llms-full.txt)
- [Sitemap](${siteConfig.siteUrl}/sitemap.xml)
- [RSS](${siteConfig.siteUrl}/feed.xml)
`;
```

### 9.14 Remove streaming placeholder

```bash
rm app/loading.tsx
```

All routes are statically prerendered, so the loading state never helps users. Removing it puts the content inline, in order, in the initial HTML.

---

## 10. Action plan

### Quick wins (under 1 hour each)

- [x] Delete `app/loading.tsx` (content goes back inline in the HTML for AI crawlers)
- [x] Delete `public/llms.txt` so the dynamic `app/llms.txt/route.ts` is served, then paste in the §9.13 content
- [x] Rename `app/_not-found.tsx` → `app/not-found.tsx` and add helpful links (§9.8)
- [x] Fix the blog post title template (`app/blog/[slug]/page.tsx:26`, §9.7)
- [x] Update the titles and descriptions for About, Contact, Skills, Experience, Blog and FleetConnekt (exact text in §4)
- [x] Add `openGraph` + `twitter` to `app/contact/page.tsx` (§9.4)
- [x] Add `type` to `openGraph` on `app/page.tsx`, `app/projects/page.tsx` and `app/fleetconnekt/page.tsx`
- [x] Change `<div>` → `<main>` in `app/contact/page.tsx:14` and `app/fleetconnekt/page.tsx:46`
- [x] Fix the FleetConnekt image on `/projects` (`app/projects/page.tsx:64`) and the `CreativeWork.url` (`:110`)
- [x] Unify the job title: `components/Header.tsx:50`, `components/Footer.tsx:60`, `app/experience/page.tsx:5,107`
- [x] Replace the footer bio (`components/Footer.tsx:63-66`) and location (`:88`) with the §6.3 short bio
- [x] Remove the fake "Join the newsletter" link (`app/blog/page.tsx:110-111`)
- [x] Add explicit AI-crawler rules to `app/robots.ts` (§9.2)
- [x] Remove `canonical: "/"` from the root layout (`app/layout.tsx:49`)
- [x] Fix the About stats contrast (`app/about/page.tsx:84`)
- [x] Delete the stray `googlebddaeb0751f90d43.html` from the project root
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel production and confirm the www → apex redirect — ⏳ needs your Vercel access

### This week

- [x] Wire the contact form to a Server Action + email service, and show the email and response expectations (`app/contact/page.tsx:29-82`) — done and tested locally; copy the 3 variables from `.env.local` into Vercel
- [x] Switch fonts to `next/font` (Space Grotesk + Syne), delete the `@import` and Fira Code/Open Sans (§9.11)
- [x] Add `app/opengraph-image.tsx` and `app/blog/[slug]/opengraph-image.tsx`, and delete the wrong-size `images` arrays (§9.5)
- [x] Enrich the root Person schema, then remove duplicate Person nodes on Skills and Experience (§9.1)
- [x] Add `SoftwareApplication` + breadcrumbs to FleetConnekt, and breadcrumbs to Skills, Blog and Contact (§9.3, §9.4)
- [x] Add `app/feed.xml/route.ts` (§9.10) and `app/manifest.ts` + icons (§9.9)
- [x] Add security headers and `poweredByHeader: false` (§9.12)
- [x] Rewrite the Home FAQ with the 40–60-word answers in §7.1, and add the "How can I hire Kaushal?" question
- [ ] Expand the About page to 500–800 words with a photo, employers, education and internal links — 🟡 expanded with verified facts, photo, employers and links; education and personal story need your input
- [ ] Add numbers (users, dates, platform, role) to every project and stat — ⏳ needs real figures from you
- [x] Calculate the experience durations from dates (`app/experience/page.tsx:47,62,77`)
- [x] Add `updated` dates to posts and the sitemap (§9.6) — done; set `updated: "YYYY-MM-DD"` on a post when you edit it
- [ ] Verify the site in Bing Webmaster Tools, submit the sitemap and enable IndexNow — ⏳ needs your Bing account; then add the code to `verification.other` in `app/layout.tsx`
- [x] Delete the unused components and dependencies (`components/HeroSection.tsx` etc., `cva`, `@radix-ui/react-slot`)

### Long term

- [ ] Build `/projects/[slug]` case studies for 48jobs, Trukky LMS and Zestify (move FleetConnekt under it with a 308)
- [ ] Expand the 5 thin posts to 1,200+ words each with TL;DR, FAQ and sources
- [ ] Publish 2 posts per month from the §8 M6 content plan
- [ ] Add a `/resume` HTML page + PDF and an education section (`alumniOf`)
- [ ] Collect 3–5 testimonials with name, role and LinkedIn link
- [x] Add `llms-full.txt` with the full About, Experience, projects and FAQ text — done (`app/llms-full.txt/route.ts`)
- [ ] Create a Google Business Profile (service-area, Ahmedabad) and matching Clutch/Upwork/Peerlist profiles
- [ ] Add every external profile to `sameAs` and link each one back to the site — ⏳ send me your other profile URLs
- [ ] Convert large source images to WebP/AVIF and rename them descriptively (`fleetconnekt-*.webp`, `kaushal-rathod-*.webp`)
- [ ] Add visible "Last updated" dates on key pages and review the facts quarterly

---

## 11. Fix log (2026-11-05)

Verified with `tsc --noEmit`, `eslint`, `next build` (32 static routes) and the served HTML of every page.

### Results in the served HTML

| Check | Before | After |
|---|---|---|
| Page body streamed into `<div hidden>` | All pages | None. Content is inline and the H1 comes before the footer |
| Titles within 50–60 chars | 1 of 14 | 14 of 14 (50–59) |
| Meta descriptions within 140–160 chars | 5 of 14 | 14 of 14 (147–158) |
| Pages with a correct 1200×630 `og:image` | 0 | All (generated cards; FleetConnekt keeps its 1536×1024 banner) |
| Page-specific `twitter:title` | Home, About, Projects, FleetConnekt and Contact showed the site-wide title | Every page has its own |
| `/feed.xml`, `/manifest.webmanifest`, `/llms-full.txt`, `/icon`, `/apple-icon` | 404 | 200 |
| `/llms.txt` | Stale static file | Generated from site data |
| Security headers | None, `X-Powered-By` exposed | HSTS, CSP (prod), nosniff, frame, referrer, permissions; header removed |
| Third-party render-blocking CSS | Google Fonts `@import` | None (self-hosted via `next/font`) |

### Files

- **Added:** `app/not-found.tsx`, `app/opengraph-image.tsx`, `app/blog/[slug]/opengraph-image.tsx`, `app/icon.tsx`, `app/apple-icon.tsx`, `app/manifest.ts`, `app/feed.xml/route.ts`, `app/llms-full.txt/route.ts`, `app/contact/actions.ts`, `app/contact/ContactForm.tsx`, `components/sections/HomeLatestPosts.tsx`, `lib/og.tsx`, `lib/llms.ts`
- **Changed:** `app/layout.tsx`, `app/globals.css`, `app/page.tsx`, `app/about/page.tsx`, `app/skills/page.tsx`, `app/projects/page.tsx`, `app/fleetconnekt/page.tsx`, `app/experience/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/contact/page.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/llms.txt/route.ts`, `components/Header.tsx`, `components/Footer.tsx`, `components/ClientLayout.tsx`, `components/sections/HomeExpertise.tsx`, `lib/site.ts`, `lib/blog.ts`, `next.config.ts`, `package.json`
- **Deleted (recoverable from git):** `app/loading.tsx`, `app/_not-found.tsx`, `public/llms.txt`, `googlebddaeb0751f90d43.html`, `tailwind.config.ts`, `components/{HeroSection,AboutSection,ProjectsSection,ArticlesSection,ContactSection,WorkExperienceSection,LoadingScreen,ClientLayoutAlwaysLoad}.tsx`, `components/ui/button.tsx`
- **Dependencies removed:** `class-variance-authority`, `@radix-ui/react-slot`, `tailwindcss-animate`

### Waiting on you

| Item | What I need | Where it goes |
|---|---|---|
| Contact form delivery | Works locally (key in git-ignored `.env.local`, tested end to end). For production, add `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` from `.env.local` in Vercel. To send from your own address instead of `onboarding@resend.dev`, verify a domain in Resend. | Vercel → Project → Environment Variables |
| Canonical domain | `NEXT_PUBLIC_SITE_URL=https://kaushalrathod.com` + www → apex redirect | Vercel |
| Bing / Copilot / ChatGPT search | Bing Webmaster verification code | `app/layout.tsx` → `verification.other["msvalidate.01"]` |
| Education (`alumniOf`) | University name and URL | Person schema in `app/layout.tsx`; About page |
| Languages (`knowsLanguage`) | Languages you work in | Person schema |
| More `sameAs` profiles | X, Dev.to, Stack Overflow, Play Store developer page, etc. | `lib/site.ts` → `author.sameAs` |
| Project metrics | Users, launch dates, platform, your role and team size per project | `app/projects/page.tsx`, `app/fleetconnekt/page.tsx` |
| FleetConnekt store link | Play Store / website URL (and whether it ships on iOS) | `app/fleetconnekt/page.tsx` (`operatingSystem`, `installUrl`) |
| Trukky URL | I used `https://www.trukky.com` (`trukky.com` redirects there). Confirm this is the right company site. | `lib/site.ts` → `author.employer.url` |

---

## 12. Blog review (2026-11-05)

### Fixed in the post template and data

| Fix | Why it matters for ranking |
|---|---|
| Read time is computed from the content (`lib/blog.ts` → `withReadTime`) | Posts claimed 6–9 min for 96–186 words. A promise the page doesn't keep raises bounce rate. |
| Location keyword stuffing removed from 3 post bodies, tags and keywords ("full-stack developers India squads", "JavaScript developers India"…) | Google's spam and helpful-content systems demote text written for keywords rather than readers |
| Outdated metric corrected in the performance post (TBT → INP, with INP < 200 ms) | INP replaced FID as a Core Web Vital in March 2024; stale facts hurt trust |
| Author box with photo, role, bio and links to /about, LinkedIn, GitHub (`rel="author"` / `rel="me"`) | First-hand authorship is a core E-E-A-T signal for articles |
| Visible "Updated" date when `updated` is set; byline links to /about | Freshness and authorship visible to readers, not only in schema |
| Table of contents with heading anchors on posts with 4+ sections | Google can show "Jump to" links in results; better scanning |
| Visible Home → Blog → Category breadcrumb (`<nav aria-label="Breadcrumb">`) | Matches the BreadcrumbList schema |
| Related posts: 3 by category, then newest (was all 5) | Stronger, more relevant internal links |
| Inline `code` rendered as `<code>`; code blocks labelled with their language | Cleaner snippets and accessibility |
| CTA and related-section copy rewritten without location stuffing; CTA heading `h3` → `h2` | Valid heading order |

### Per-post verdict

| Post | Body words | Verdict | What it needs to rank |
|---|---:|---|---|
| Expo push notifications | ~685 | ✅ **Keep. Strongest post.** Specific, accurate, has takeaways, FAQ and sources. | Grow to 1,200+ words: a Node.js server example that checks receipts and removes dead tokens, iOS/APNs setup, troubleshooting ("token is null", "no notification on Android 13"). Real screenshots instead of the stock cover. |
| Next.js SEO & GEO for portfolios | ~148 | ⚠️ **Rewrite as a case study.** You now have real data from this site's audit (14/14 titles fixed, hidden-content streaming bug, llms.txt conflict). | Turn §11 of this file into "How I audited and fixed my Next.js portfolio's SEO". Original findings with before/after numbers rank and earn links. |
| Full-stack architecture checklist | ~178 | ⚠️ **Expand.** Generic advice, no examples from your work. | 1,200+ words with a real folder structure, the contract pattern you use at Trukky, a downloadable checklist, FAQ. |
| Next.js performance playbook | ~186 | ⚠️ **Expand.** Heavily competed topic, currently too shallow to compete. | Before/after Lighthouse numbers from a real project, `next/font` and `next/image` examples, the font `@import` lesson from this site. |
| API system design for distributed teams | ~119 | ❌ **Thin. Merge or expand.** | Expand with a real ownership table and an OpenAPI example, or merge into the architecture checklist and 301 the URL. |
| Technical writing for developer blogs | ~96 | ❌ **Thin. Merge, expand or noindex.** Off-topic for a developer-for-hire site. | Lowest priority. Expand it into a real guide, or add `robots: { index: false }` until it's rewritten. |

> Thin pages can drag down how Google rates the whole site. Expand or merge the ❌ posts first, then the ⚠️ ones. Every post also still uses a generic stock photo as its cover. Replace each with a real screenshot or diagram, which also helps image search.

> **Update 2026-11-05 (keyword strategy):** the job title is now "Software Developer" (replacing "Full Stack & Mobile App Developer" in row G6). FleetConnekt moved to `/projects/fleetconnekt`, images were renamed to WebP, and `/services` and `/resume` were added. See `KEYWORD_STRATEGY.md` §8.
