# Provenance Auto SEO research brief (2026-09-18)

## Live / technical findings
1. **Broken www sitemap**: `https://www.provenance-auto.com/sitemap.xml` returns HTML (~24KB), while `https://provenance-auto.com/sitemap.xml` returns XML. `robots.txt` points at the www URL → crawlers may fail to discover URLs.
2. **City meta descriptions destroyed**: 29 city pages have `meta description` equal to the city name only (e.g. "Houston"). Useless for SERP CTR.
3. **Placeholder phone in JSON-LD**: `+15120000000` on ~29 pages. Fake NAP harms trust/local SEO — remove telephone or omit until real.
4. **Sitemap incompleteness risk**: verify all city, service, and blog URLs are listed; keep lastmod current.
5. **Canonical/host consistency**: standardize on `https://www.provenance-auto.com` OR apex everywhere (canonicals, sitemap, og:url, schema @id). Prefer 301 the other host.
6. Homepage already has decent ProfessionalService + FAQ schema and on-message copy for complex deals.

## Market / keyword opportunity
Competitors (txcarconcierge, gocarconcierge, cahpow, ilusso, rafamotors) own generic “car buying service Texas” / exotic dealer inventory. Almost none publish durable content about:
- title in transit / title delay purchases
- buying a car not in the seller’s name (estate, company, skipped transfer)
- salvage / rebuilt / crash exotic or Porsche/BMW acquisition
- buyer-side exotic sourcing (Ferrari, Aston, Porsche) without inventory

Own those problem-aware queries + city modifiers.

## Priority keyword clusters (implement content + internal links)
1. **Complex transaction**: title in transit Texas, buy car title in transit, car not in seller’s name Texas, estate sale car title Texas
2. **Salvage/damage**: buy salvage Porsche Texas, rebuilt title BMW buyer agent, flood damaged exotic purchase
3. **Buyer agent**: car buying consultant Austin/Houston/Dallas, exotic car broker Texas (buyer’s rep positioning)
4. **Marques**: Porsche buyer agent Texas, BMW M car sourcing, Ferrari F430 for sale buyer help / pre-owned Ferrari sourcing, Ferrari 296 allocation/sourcing, Aston Martin sourcing Texas
5. **Pre-owned exotics**: pre-owned exotic car sourcing Texas, used Ferrari broker Texas (buyer-side)

## Implementation series (do in order on branch redesign/premium-acquisition)
A. **Technical SEO fix pack**
   - Fix host: vercel.json redirects so one canonical host; make `/sitemap.xml` valid XML on the canonical host; update robots.txt Sitemap line.
   - Regenerate complete sitemap including all cities, services, blog posts; accurate lastmod.
   - Rewrite all city meta descriptions (150–160 chars, unique, include city + acquisition/complex-deal intent).
   - Fix unique titles on city/service pages if thin or duplicated.
   - Remove placeholder telephone from schema; keep PostalAddress Austin + areaServed Texas.
   - Add/repair canonical on success.html and any orphans.
   - Ensure og:image absolute URLs exist for key templates.
   - Add `Organization`/`ProfessionalService` consistency; BreadcrumbList on city + service pages; keep FAQ where relevant.

B. **On-page & IA**
   - Homepage: explicitly include Ferrari, Aston Martin, and pre-owned exotic sourcing (with 296 launch + F430 press imagery if present under images/press or images/).
   - Strengthen internal linking: homepage → complex-deal anchors → service pages → city pages → blog guides.
   - Service pages: dedicated or expanded sections for complex title work and pre-owned exotic sourcing with clear H2s matching search language (no stuffing).
   - Add FAQ blocks on top city pages (Houston, Dallas, Austin, San Antonio) targeting local+service queries.

C. **Content expansion for traffic (new pages)**
   Create high-quality guides (not thin doorway pages), linked from homepage/services/blog index:
   1. `/blog/buying-a-car-with-title-in-transit-texas.html`
   2. `/blog/buying-a-car-not-in-the-sellers-name-texas.html`
   3. `/blog/buying-salvage-or-rebuilt-title-porsche-bmw-texas.html`
   4. `/blog/pre-owned-exotic-car-sourcing-texas.html` (Ferrari/Aston/Porsche used market; use F430 press image)
   5. `/blog/ferrari-296-sourcing-texas.html` (use 296 launch press image)
   Update blog index + sitemap.

D. **Unslop**
   - Read and apply `.cursor/skills/unslop/SKILL.md` to all new/edited marketing copy so it doesn’t read AI-generated.

E. **Ship**
   - Commit, push branch, update PR #3 description with SEO series notes (or open SEO follow-up commits on same PR).

## Success criteria
- www and apex agree on a single canonical host; sitemap XML returns application/xml on that host
- No city meta description shorter than ~110 characters
- No placeholder phone in schema
- ≥5 new intent-rich blog guides live and linked
- Homepage states Ferrari/Aston/pre-owned exotic sourcing
- PR updated
