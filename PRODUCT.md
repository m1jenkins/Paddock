# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (incumbent). No framework rewrite.

## Users

Texas buyers and principals acquiring high-value and mid-market vehicles (Porsche, BMW, and similar). Primary job: get the car bought when the title, ownership, or condition would stall a typical buyer or dealer. Secondary: source harder-to-find or classic/exotic cars without sitting across from a salesperson.

## Product Purpose

Provenance Auto Advisory is a buyer’s representative and acquisition specialist—not a dealership. It sources, negotiates, and closes vehicle purchases on the client’s behalf, with a growing center of gravity on complex, messy deals.

Success: a visitor understands within seconds that Provenance (1) acquires Porsche/BMW-class cars and (2) handles titles in transit, cars not in the seller’s name, salvage/crash/damage, and other paperwork problems—then starts an acquisition inquiry.

## Positioning

Buyer-side acquisition specialist for valuable cars *and* the deals other people walk away from. Neighboring dealers represent the seller. Lifestyle “luxury consultants” sell atmosphere. Provenance sells closed transactions on imperfect paper.

## Operating Context

Private consultation (complimentary to start), then search, inspection, negotiation, title/ownership work, logistics, and delivery. Contact: mason@provenance-auto.com, Signal, WhatsApp mention, inquiry form posting to an existing Google Sheets web app. Headquartered in Austin; serves all of Texas. Fee structures are tailored; not published as a rate card.

## Capabilities and Constraints

- Keep the brand name Provenance Auto Advisory.
- Static site; preserve inquiry.html and working contact / Signal / mailto / form → success.html flows.
- City landing pages and service pages must inherit the shared visual system.
- Do not fabricate testimonials, case studies, client names, savings figures, or a real phone number (schema currently uses a placeholder).
- WhatsApp is named in the UI without a confirmed wa.me URL; do not invent one.
- Leave `.paddock-*` and `.cursor-redesign-refs` untracked.

## Brand Commitments

- Name: Provenance Auto Advisory / Provenance. Do not rename.
- Identity: discreet, high-end, not a dealership.
- Binding visual constraints from the redesign brief: premium editorial; generous whitespace; refined serif headlines + clean sans body; minimal nav with one primary CTA (start an acquisition / schedule consultation); full-bleed photography with restrained overlays; cream/off-white + charcoal/black, at most one subtle accent; streamlining city-link sprawl.
- Layout inspiration (patterns only, never names/logos): Kobu, Studio Freight, Analogue, Craft, Selfridges, Intercom services grid, Yllw photography cards.

## Evidence on Hand

Marketing copy and local SEO city/service/blog pages in this repo. Live site: https://provenance-auto.com.

### Photography (required media direction)
Use **official Porsche and BMW launch press photography** as primary website media — not generic stock.

Already downloaded into `images/press/` from Porsche Newsroom (911 Dakar launch / Moab):
- `images/press/dakar-01.jpg` … `dakar-07.jpg` (and `Dune-Dakar_highres.jpg`)
- Wired as starters: `images/hero-porsche.jpg`, `images/card-porsche.jpg`

Prefer 911 Dakar Moab / Shade Green / Rallye Design Package shots for Porsche heroes and cards. For BMW, use official BMW PressClub launch stills (M / 3 / 5 / X-series class vehicles that match mid/high-value acquisition). Keep `images/card-bmw.jpg` as BMW press (replace if a stronger launch still is available).

Credit discreetly in footer or image captions if required by press terms (e.g. “Image: Porsche AG” / “Image: BMW AG”). Do not present press cars as Provenance inventory.


## Product Principles

1. Lead with acquisition skill and complex-deal problem solving, not lifestyle brochure copy.
2. Stay buyer-sided: represent the client, never the seller.
3. Stay specific: Porsche/BMW-class and messy titles beat generic “exotic luxury.”
4. Stay discreet: premium, calm, few competing claims above the fold.
5. Do not invent proof. If it is not in the product record, it does not appear as a claim.
