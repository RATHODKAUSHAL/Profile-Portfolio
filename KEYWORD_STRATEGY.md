# Keyword Strategy: kaushalrathod.com

**Prepared:** 2026-11-05 · **Status:** approved and implemented 2026-11-05 (see §8). Case studies for 48jobs, Trukky LMS and Zestify are waiting for your details.
**Name:** Kaushal Rathod · **Domain:** https://kaushalrathod.com · **Role:** Software Developer · **City:** Ahmedabad, Gujarat, India

> **About the difficulty ratings:** I had no keyword-volume tool for this plan, so every **Easy / Medium / Hard** rating is a judgment based on who currently ranks for that kind of query, not measured search volume. Verify the important ones in Google Search Console (Performance → Queries) once the site has been indexed for a few weeks, and in a tool like Ahrefs, Semrush or Google Keyword Planner.

---

## 1. Current state (analysis)

| Item | Finding |
|---|---|
| Framework | Next.js 16 App Router, React 19, TypeScript, Tailwind v4 |
| Rendering | All routes **static (SSG)**; blog posts via `generateStaticParams`; `/experience` revalidates daily |
| Where metadata lives | `export const metadata` / `generateMetadata` in each `app/**/page.tsx`; site-wide defaults and Person/WebSite JSON-LD in `app/layout.tsx`; shared values in `lib/site.ts` |
| Already in place (from the SEO audit) | Unique titles and descriptions, canonicals, generated 1200×630 OG images, Person + WebSite + page-level JSON-LD, Home FAQ with `FAQPage`, `/llms.txt` + `/llms-full.txt`, AI-friendly `robots.txt`, sitemap with lastmod, RSS |

### Pages today

| Route | Current title | Current H1 | What it targets now |
|---|---|---|---|
| `/` | Kaushal Rathod \| Full Stack & Mobile App Developer | Full Stack & Mobile App Developer | Name + "full stack developer" |
| `/about` | About Me: Full Stack & Mobile Developer \| Kaushal Rathod | About Kaushal Rathod, full stack & mobile app developer | Name + role, **same as home** |
| `/skills` | Skills: Next.js, React Native & Node.js \| Kaushal Rathod | Kaushal Rathod's tech stack: web, mobile & backend skills | Tech stack |
| `/projects` | Web & Mobile App Projects, Case Studies \| Kaushal Rathod | Projects by Kaushal Rathod: web & mobile case studies | Projects |
| `/fleetconnekt` | FleetConnekt: Logistics App Case Study \| Kaushal Rathod | FleetConnekt: logistics app for Indian highway transport | FleetConnekt |
| `/experience` | Experience: Full Stack Developer at Trukky \| Kaushal Rathod | Kaushal Rathod's experience: 3+ years in full stack development | Work history |
| `/blog` | Developer Blog: Next.js, Expo & Full Stack \| Kaushal Rathod | Kaushal Rathod's developer blog: Next.js, React Native & full stack notes | Blog |
| `/contact` | Hire a Full Stack & React Native Developer \| Kaushal Rathod | Hire Kaushal Rathod for your next web or mobile app | Hiring |
| `/blog/[slug]` × 6 | Per-post `seoTitle` | Post title | One topic each |

### Gaps

1. **No "Software Developer" anywhere.** That's the title you gave, but the site says "Full Stack & Mobile App Developer" everywhere.
2. **Home and About compete** for the same name + role phrase.
3. **No location page.** "Software developer in Ahmedabad" has no page that answers it.
4. **No services page or résumé page**, so "kaushal rathod resume" and service queries have nowhere to land.
5. **Only one of four projects has a case study** (FleetConnekt), and it sits outside `/projects/`.
6. **Image filenames are generic** (`profile.png`, `image1.jpg`, `Office.jpg`, `fleetconnet-1.jpeg` with a typo).
7. **The Person schema has no `alternateName`.**

---

## 2. Ground rules for this plan

- **One primary keyword per page.** No two pages share one (see §3).
- **Only real content.** Keywords about **design / UI/UX / Figma / Behance / creative portfolio** are listed but **not targeted**, because nothing on the site shows design work. Ranking a page for work you don't show would bring visitors who leave straight away, and would put claims you can't back up into your entity profile. If you do offer design, send me examples and I'll add them.
- **Misspellings are not stuffed into pages.** Google already corrects "kausal rathod" and "kaushal rathod portfoliyo" to your name. Only `alternateName` in the schema ("Rathod Kaushal", "Kaushal") is added. **"Kaushal Rathore" is a different surname**, likely belonging to other real people, so I won't target it. Adding hidden or misspelled text would break the no-stuffing rule and risks a spam penalty.
- **Same-name competition:** "Kaushal Rathod" is not a unique name in Gujarat. Other people with the same name may appear on LinkedIn, Instagram and Facebook. The entity work (schema + identical profiles + backlinks) is what makes Google pick you.

---

## 3. Page plan (one primary keyword each)

| Page | Primary keyword | Planned title (chars) | Planned H1 |
|---|---|---|---|
| `/` | **kaushal rathod** | Kaushal Rathod \| Software Developer, Web & Mobile Apps (54) | Kaushal Rathod, Software Developer |
| `/about` | **kaushal rathod software developer** | About Kaushal Rathod: Software Developer from Ahmedabad (55) | About Kaushal Rathod, software developer |
| `/resume` *(new)* | **kaushal rathod resume** | Kaushal Rathod Resume: Software Developer CV & Skills (53) | Kaushal Rathod's resume |
| `/experience` | **kaushal rathod experience** | Experience: Full Stack Developer at Trukky \| Kaushal Rathod (59) | Kaushal Rathod's work experience |
| `/services` *(new)* | **software developer in ahmedabad** | Software Developer in Ahmedabad: Services \| Kaushal Rathod (58) | Software development services in Ahmedabad |
| `/skills` | **next.js and react native developer** | Next.js & React Native Developer Skills \| Kaushal Rathod (56) | Next.js & React Native developer: Kaushal Rathod's skills |
| `/projects` | **kaushal rathod projects** | Kaushal Rathod Projects: Web & Mobile App Case Studies (54) | Kaushal Rathod's projects |
| `/projects/fleetconnekt` *(moved, 301 from `/fleetconnekt`)* | **fleetconnekt app** | FleetConnekt App: Logistics Case Study \| Kaushal Rathod (55) | FleetConnekt: logistics app for Indian highway transport |
| `/projects/48jobs` *(new, needs your input)* | **logistics job portal development** | 48jobs.com: Logistics Job Portal Case Study \| Kaushal Rathod (59) | 48jobs.com: building a logistics job portal |
| `/projects/trukky-lms` *(new, needs your input)* | **learning management system for logistics** | Trukky LMS: Logistics Training Platform \| Kaushal Rathod (56) | Trukky LMS: a learning platform for logistics teams |
| `/projects/zestify` *(new, needs your input)* | **next.js e-commerce case study** | Zestify: Next.js E-commerce Case Study \| Kaushal Rathod (55) | Zestify: a Next.js storefront and admin suite |
| `/blog` | **kaushal rathod blog** | Kaushal Rathod Blog: Next.js & React Native Guides (50) | Kaushal Rathod's blog: Next.js & React Native guides |
| `/contact` | **hire kaushal rathod** | Hire Kaushal Rathod \| Contact a Software Developer (50) | Hire Kaushal Rathod for your web or mobile app |
| Blog posts | see §4.6 | keep current `seoTitle`s (54–59) | keep |

---

## 4. Keyword groups

### 4.1 Personal brand / name (highest priority, realistic #1)

| Keyword | Type | Intent | Assigned page | Where it is placed | Difficulty |
|---|---|---|---|---|---|
| kaushal rathod | Primary | Navigational | `/` | Title, H1, first sentence, logo text, footer, Person schema, OG title | Easy–Medium (same-name competition) |
| rathod kaushal | Secondary | Navigational | `/` | `alternateName` in Person schema; "Rathod Kaushal" is not repeated in visible text | Easy |
| kaushal rathod portfolio | Secondary | Navigational | `/` | Meta description, WebSite `alternateName`, hero copy | Easy |
| kaushal rathod website | Secondary | Navigational | `/` | WebSite schema name/url; covered by the brand title | Easy |
| kaushal rathod software developer | Primary | Navigational | `/about` | Title, H1, bio paragraph, `jobTitle` | Easy |
| kaushal rathod developer | Secondary | Navigational | `/about` | Bio, H2 "What does Kaushal Rathod do?" | Easy |
| kaushal rathod ahmedabad | Secondary | Navigational | `/about` | Bio ("based in Ahmedabad"), `address` schema, H2 "Where is Kaushal Rathod based?" | Easy |
| kaushal rathod resume | Primary | Navigational | `/resume` *(new)* | Title, H1, slug, print-friendly CV | Easy |
| kaushal rathod experience | Primary | Navigational | `/experience` | Title, H1 | Easy |
| kaushal rathod projects | Primary | Navigational | `/projects` | Title, H1, home "All projects" anchor text | Easy |
| kaushal rathod blog | Primary | Navigational | `/blog` | Title, H1 | Easy |
| kaushal rathod contact / hire kaushal rathod | Primary | Transactional | `/contact` | Title, H1, FAQ "How can I hire Kaushal Rathod?", CTA anchors | Easy |
| kaushal rathod linkedin | Secondary | Navigational | Off-site (LinkedIn ranks itself) | `sameAs`, visible LinkedIn links with `rel="me"` | Easy (LinkedIn will rank, which is fine) |
| kaushal rathod github | Secondary | Navigational | Off-site (GitHub) | `sameAs`, GitHub README linking back | Easy |
| kaushal rathod designer | — | — | **Not targeted** | No design work on the site (see §2) | — |
| kausal rathod, kaushal rathod portfoliyo | Misspelling | Navigational | Handled by Google's spell correction | Nothing added to pages | — |
| kaushal rathore | — | — | **Not targeted** | Different surname, likely other people | — |

### 4.2 Role + location

| Keyword | Type | Intent | Assigned page | Where it is placed | Difficulty |
|---|---|---|---|---|---|
| software developer in ahmedabad | Primary | Commercial | `/services` *(new)* | Title, H1, first 100 words, LocalBusiness-free `Service` schema with `areaServed` | Medium (agencies and job boards dominate) |
| freelance software developer ahmedabad | Secondary | Commercial | `/services` | H2 "Hire a freelance software developer in Ahmedabad" | Medium |
| hire software developer india | Secondary | Transactional | `/contact` | Meta description, H2 | Hard (Upwork/Toptal/agencies) |
| freelance software developer india | Long-tail | Commercial | `/services` | Body copy, FAQ | Hard |
| react native developer ahmedabad | Long-tail | Commercial | `/services` (mobile section) | H3 under services | Medium |
| next.js developer ahmedabad | Long-tail | Commercial | `/services` (web section) | H3 under services | Medium |
| full stack developer ahmedabad | Long-tail | Commercial | `/about` + `/services` | About bio mention; services body | Medium |
| best software developer in gujarat | — | Commercial | **Not targeted as a claim** | "Best" claims can't be verified. Earn it with reviews on Google Business Profile instead | Hard |

### 4.3 Portfolio-related

These broad terms are **dominated by Wix, Squarespace, Behance, Dribbble, Canva, Webflow and large "50 best portfolio examples" lists**. A personal site will not rank for them through on-page changes alone. The realistic route is specific blog posts plus backlinks over 6–12+ months.

| Keyword | Type | Intent | Assigned page | Where it is placed | Difficulty |
|---|---|---|---|---|---|
| software developer portfolio | Secondary | Informational/nav | `/` | Meta description, WebSite `alternateName` "Kaushal Rathod Portfolio" | Hard |
| web developer portfolio | Long-tail | Informational | Blog post B1 *(new)* | Post title/H2s; your site itself is the example | Hard |
| developer portfolio website next.js | Long-tail | Informational | Blog post B1 *(new)* | Title, H1 | Medium |
| personal portfolio website | Long-tail | Informational | Blog post B1 | H2 | Hard |
| what should a developer portfolio include | Question | Informational | Blog post B2 *(new)* | H1 + FAQ | Medium |
| how much does a portfolio website cost in india | Question | Commercial | Blog post B3 *(new)* | H1, price table | Medium |
| portfolio website design / creative portfolio / UI/UX portfolio / modern portfolio design / portfolio website ideas / portfolio website examples | — | — | **Not targeted now** | No design portfolio content. Revisit if you add design case studies | Hard |

### 4.4 Skills and services (only what the site shows)

| Keyword | Type | Intent | Assigned page | Where it is placed | Difficulty |
|---|---|---|---|---|---|
| next.js and react native developer | Primary | Commercial | `/skills` | Title, H1, first paragraph | Medium |
| next.js developer | Secondary | Commercial | `/skills` (Next.js card) → `/services` | Card H3, link anchor "Next.js development services" | Hard |
| react native developer / expo developer | Secondary | Commercial | `/skills` → `/services` | Card H3s, anchors | Hard |
| node.js api development | Long-tail | Commercial | `/services` | H3 "APIs and backends" | Medium |
| laravel developer | Long-tail | Commercial | `/skills` | Card H3 | Medium |
| full-stack web application development | Secondary | Commercial | `/services` | H2 | Medium |
| mobile app development (android/ios) | Secondary | Commercial | `/services` | H2 | Hard |
| website performance optimization / core web vitals | Long-tail | Commercial | `/services` + performance post | H3 + internal link | Medium |
| technical seo for next.js | Long-tail | Commercial | `/services` + SEO post | H3 + internal link | Medium |
| figma designer / landing page design / website redesign | — | — | **Not targeted** | No design work shown | — |

### 4.5 Projects

| Keyword | Type | Intent | Assigned page | Where it is placed | Difficulty |
|---|---|---|---|---|---|
| fleetconnekt app | Primary | Navigational | `/projects/fleetconnekt` | Title, H1, `SoftwareApplication` schema | Easy (your own product name) |
| digital lorry receipt app | Secondary | Commercial | `/projects/fleetconnekt` | H3 "Digital lorry receipt generation" | Medium |
| transporter directory app india | Long-tail | Commercial | `/projects/fleetconnekt` | H3 "Transporter directory" | Medium |
| logistics job portal development | Primary | Commercial | `/projects/48jobs` | Title, H1 | Medium |
| 48jobs case study | Secondary | Navigational | `/projects/48jobs` | Title | Easy |
| learning management system for logistics | Primary | Commercial | `/projects/trukky-lms` | Title, H1 | Medium |
| next.js e-commerce case study | Primary | Informational | `/projects/zestify` | Title, H1 | Medium |

### 4.6 Long-tail, question and blog keywords (AEO)

| Keyword | Type | Intent | Assigned page | Where it is placed | Difficulty |
|---|---|---|---|---|---|
| who is kaushal rathod | Question | Informational | `/` (FAQ) + `/about` | FAQ H3 + 40–60-word answer, bio | Easy |
| what does kaushal rathod do | Question | Informational | `/about` | H2 + answer | Easy |
| where is kaushal rathod based | Question | Informational | `/about` (FAQ) | FAQ | Easy |
| how can i hire kaushal rathod | Question | Transactional | `/contact` + `/` FAQ | H2 + numbered steps | Easy |
| what tools does kaushal rathod use | Question | Informational | `/skills` + `/` FAQ | FAQ answer linking to /skills | Easy |
| expo push notifications | Primary | Informational | existing Expo post | Already in title/H1 | Medium |
| full stack architecture checklist | Primary | Informational | existing architecture post | Already in title | Medium |
| next.js seo checklist | Primary | Informational | existing SEO post (to be rewritten as a case study) | Title/H1 | Hard |
| next.js performance optimization | Primary | Informational | existing performance post | Title/H1 | Hard |
| contract-first api design | Primary | Informational | existing system design post | Title/H2 | Medium |
| technical writing for developers | Primary | Informational | existing writing post | Title | Medium |
| how to build a developer portfolio with next.js | Question | Informational | B1 *(new)* | Title/H1 | Medium |
| what should a developer portfolio include | Question | Informational | B2 *(new)* | Title/H1 | Medium |
| how much does a portfolio website cost in india | Question | Commercial | B3 *(new)* | Title/H1 | Medium |
| how much does it cost to build a mobile app in india | Question | Commercial | B4 *(new)* | Title/H1 | Hard |
| react native vs flutter for startups | Question | Informational | B5 *(new)* | Title/H1 | Hard |
| how to hire a freelance developer in india | Question | Commercial | B6 *(new)* | Title/H1 | Medium |

### 4.7 Entity / GEO phrases (what AI tools should say)

Use these exact sentences in the Home bio, About intro, Person `description`, `llms.txt`, LinkedIn "About" and GitHub bio:

- **Short (≈25 words):** *Kaushal Rathod is a software developer based in Ahmedabad, India, who builds full-stack web applications and React Native mobile apps with Next.js, React and Node.js.*
- **Long (≈60 words):** *Kaushal Rathod is a software developer based in Ahmedabad, Gujarat, India. Since 2023 he has built production web and mobile products with Next.js, React, TypeScript, Node.js, React Native, Expo, Laravel and PostgreSQL. He works as a Full Stack Developer at Trukky, building logistics products such as FleetConnekt, and works remotely with teams worldwide.*
- **Facts AI tools should repeat:** name; "software developer"; Ahmedabad, Gujarat, India; Full Stack Developer at Trukky since February 2025; Frontend Developer at Maze Technolabs (March 2024 – January 2025); core stack; projects FleetConnekt, 48jobs.com, Trukky LMS; contact page URL.

---

## 5. Content gaps and new pages

| New page | Purpose | Needs from you |
|---|---|---|
| `/services` | Lands "software developer in Ahmedabad" and the service keywords: web apps, mobile apps, APIs, performance & SEO, plus engagement model and FAQ | Confirm the services list and whether you take freelance work |
| `/resume` | HTML résumé (summary, experience, skills, projects, contact) with a print stylesheet, `ProfilePage` + `Person` schema | Education, certifications, and an optional PDF to link |
| `/projects/fleetconnekt` | Moved from `/fleetconnekt` with a permanent 308/301 redirect | Your role, stack, timeline, Play Store link |
| `/projects/48jobs`, `/projects/trukky-lms`, `/projects/zestify` | Case studies (problem → process → tools → result) | **Real details for each.** Without them these pages would be thin. I'll only create them once you send them, or create them with `noindex` until filled |

### Blog outlines (B1–B6)

1. **B1: How I built my developer portfolio with Next.js 16 (and got it SEO-ready)**
   - Stack, structure and static rendering.
   - The SEO/GEO audit with real before/after numbers from `SEO_GEO_AEO_AUDIT.md`.
   - Lessons: the `loading.tsx` hidden-content trap, the `llms.txt` conflict, generated OG images.
   - FAQ.
2. **B2: What should a developer portfolio include? A checklist from a hiring perspective**
   - About, projects with outcomes, case studies, contact, résumé, blog.
   - What to skip.
   - A checklist table and FAQ.
3. **B3: How much does a portfolio website cost in India? (2026 price guide)**
   - DIY builders vs freelancer vs agency, with a ₹ price-range table.
   - Hidden costs: domain, hosting, maintenance.
   - Uses your budget bands from the contact form.
4. **B4: How much does it cost to build a mobile app in India?**
   - Cost drivers, React Native vs native, MVP scope.
   - Timeline table, FAQ, CTA to /contact.
5. **B5: React Native vs Flutter for startups: a practical comparison**
   - Comparison table, when to choose each.
   - Expo's place in it, using FleetConnekt as the real example.
6. **B6: How to hire a freelance developer in India (without getting burned)**
   - Brief template, red flags, contracts, milestones, budget bands.
   - Links to /services and /contact.

Also from the blog review (audit §12): rewrite the SEO post as the case study (or merge it into B1), and expand or merge the two thin posts.

---

## 6. Files I plan to change

| File | Change |
|---|---|
| `lib/site.ts` | `role: "Software Developer"`, new short/long bio, `alternateName`, placeholders for extra `sameAs` profiles |
| `app/layout.tsx` | Person: `alternateName`, `jobTitle` "Software Developer", new description; WebSite `name: "Kaushal Rathod"` |
| `app/page.tsx`, `components/sections/HomeHero.tsx`, `components/sections/HomeExpertise.tsx` | Title/description, H1 "Kaushal Rathod, Software Developer", bio, FAQ (add "Where is Kaushal Rathod based?" and "What tools does Kaushal Rathod use?") |
| `app/about/page.tsx` | Title/description/H1, `ProfilePage` (with AboutPage), FAQ + `FAQPage` |
| `app/skills/page.tsx`, `app/projects/page.tsx`, `app/experience/page.tsx`, `app/blog/page.tsx`, `app/contact/page.tsx` | Titles, descriptions, H1s, first-100-words keyword, anchor text |
| `app/fleetconnekt/page.tsx` → `app/projects/fleetconnekt/page.tsx` | Move; update links in Home, Projects, Skills, About, `lib/llms.ts`, sitemap |
| `next.config.ts` | `redirects()`: `/fleetconnekt` → `/projects/fleetconnekt`, and old image paths → new image paths |
| **New:** `app/services/page.tsx`, `app/resume/page.tsx` | New pages with schema and breadcrumbs |
| `components/Header.tsx`, `components/Footer.tsx` | Role text "Software Developer"; add Services link |
| `lib/llms.ts`, `app/sitemap.ts`, `app/robots.ts` | New pages and URLs; robots already allows all the listed bots (verify only) |
| `public/Images/*`, `Assets/fleetconnekt/*` | Rename + convert to WebP, e.g. `kaushal-rathod-software-developer.webp`, `48jobs-logistics-job-portal.webp`, `trukky-lms-dashboard.webp`, `fleetconnekt-transporter-directory.webp` (fixing the `fleetconnet` typo); update all references |
| `lib/blog.ts`, `app/blog/[slug]/page.tsx` | Author role text; anchor text to new pages |
| `SEO_GEO_AEO_AUDIT.md` | Note the changes |

Layout and visual design stay the same. Only text, metadata, schema, file names and two new pages that reuse the existing components and styles.

---

## 7. Off-site checklist

- [ ] **Identical identity everywhere:** name "Kaushal Rathod", title "Software Developer", link `https://kaushalrathod.com`, and the short bio from §4.7 on LinkedIn, GitHub, X, Instagram (and Behance/Dribbble if you create them).
- [ ] **LinkedIn:** headline "Software Developer · Next.js, React Native, Node.js · Ahmedabad". Add the website under Contact info and in Featured. Set the custom URL to `/in/kaushal-rathod-dev/` (already).
- [ ] **GitHub:** profile name, bio and website field; a profile README (`RATHODKAUSHAL/RATHODKAUSHAL`) with the bio and a link; pin your best repos.
- [ ] **Google Search Console:** verify (meta tag already present), submit `https://kaushalrathod.com/sitemap.xml`, use URL Inspection → *Request indexing* for `/`, `/about`, `/services`, `/resume`.
- [ ] **Bing Webmaster Tools:** import from Search Console, submit the sitemap, send me the verification code. Bing powers ChatGPT search and Copilot.
- [ ] **Google Business Profile:** only if you serve local clients. Use a service-area business (Ahmedabad), category "Software company" or "Website designer", and ask happy clients for reviews.
- [ ] **Vercel:** set `NEXT_PUBLIC_SITE_URL=https://kaushalrathod.com` and the Resend variables; make the apex domain primary with www → apex redirect.
- [ ] **Backlinks:**
  - Link the site from every profile.
  - Cross-post blog articles to Dev.to/Hashnode with a canonical URL back to your site.
  - List yourself on Peerlist, Wellfound and Clutch.
  - Ask Trukky to link to you from an "our team" page or credits.
  - Answer questions on Stack Overflow and Reddit with links where genuinely useful.
  - Write guest posts for Indian dev communities.
- [ ] **Consistency check every quarter:** search "Kaushal Rathod" in a private window; note which profiles rank; fix mismatched titles or photos.

---

## 8. Implementation log (2026-11-05)

**Decisions:**
- Job title is "Software Developer" everywhere.
- The 48jobs, Trukky LMS and Zestify case studies wait for your details.
- FleetConnekt moved to `/projects/fleetconnekt`, and the images were renamed.
- `sameAs` lists GitHub + LinkedIn only.

Verified with `tsc`, `eslint`, `next build` (34 routes) and the HTML each page serves.

| Page | Old title | New title | Primary keyword |
|---|---|---|---|
| `/` | Kaushal Rathod \| Full Stack & Mobile App Developer | Kaushal Rathod \| Software Developer, Web & Mobile Apps | kaushal rathod |
| `/about` | About Me: Full Stack & Mobile Developer \| Kaushal Rathod | About Kaushal Rathod: Software Developer from Ahmedabad | kaushal rathod software developer |
| `/services` *(new)* | — | Software Developer in Ahmedabad: Services \| Kaushal Rathod | software developer in ahmedabad |
| `/resume` *(new)* | — | Kaushal Rathod Resume: Software Developer CV & Skills | kaushal rathod resume |
| `/skills` | Skills: Next.js, React Native & Node.js \| Kaushal Rathod | Next.js & React Native Developer Skills \| Kaushal Rathod | next.js and react native developer |
| `/projects` | Web & Mobile App Projects, Case Studies \| Kaushal Rathod | Kaushal Rathod Projects: Web & Mobile App Case Studies | kaushal rathod projects |
| `/projects/fleetconnekt` (was `/fleetconnekt`, 308 redirect) | FleetConnekt: Logistics App Case Study \| Kaushal Rathod | FleetConnekt App: Logistics Case Study \| Kaushal Rathod | fleetconnekt app |
| `/experience` | Experience: Full Stack Developer at Trukky \| Kaushal Rathod | *(unchanged)*; H1 → "Kaushal Rathod's work experience" | kaushal rathod experience |
| `/blog` | Developer Blog: Next.js, Expo & Full Stack \| Kaushal Rathod | Kaushal Rathod Blog: Next.js & React Native Guides | kaushal rathod blog |
| `/contact` | Hire a Full Stack & React Native Developer \| Kaushal Rathod | Hire Kaushal Rathod \| Contact a Software Developer | hire kaushal rathod |

**Also done:**
- **Schema and entity text:**
  - Person schema gets `alternateName` ["Rathod Kaushal", "Kaushal"], `jobTitle` "Software Developer" and the long bio as `description`.
  - About is now `AboutPage` + `ProfilePage`.
  - The Home FAQ answers all five name questions with `FAQPage`, and Services has its own FAQ.
  - `llms.txt`/`llms-full.txt` use the new bio and list Services and Resume.
  - The sitemap includes `/services`, `/resume` and the new FleetConnekt URL.
- **Images:** 15 images converted to WebP with descriptive names (8.5 MB → 1.3 MB). Old `/Images/*` paths 308-redirect to the new files.
- **Navigation and links:** Services added to the header, and Services + Resume to the footer. Descriptive anchor text on internal links, e.g. "Next.js and React Native skills", "Kaushal Rathod's projects", "software development services".

**Waiting on you:**
- Details for the three case studies.
- A real Zestify screenshot. The current image is a stock café photo, and its alt text says it's a placeholder.
- Education for `/resume`.
- Any extra profile URLs.
- The off-site checklist in §7.
