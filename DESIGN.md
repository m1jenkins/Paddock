---
name: Provenance Auto Advisory
description: Buyer-side vehicle acquisition — cream paper, charcoal ink, official press photography.
colors:
  paper: "#F3F0EA"
  paper-2: "#E7E2D8"
  ink: "#161513"
  ink-soft: "#3D3933"
  muted: "#5C574F"
  rule: "rgba(22, 21, 19, 0.14)"
  rule-strong: "rgba(22, 21, 19, 0.28)"
typography:
  display:
    fontFamily: "Libre Caslon Text, Iowan Old Style, Palatino, serif"
    fontSize: "clamp(3rem, 8.2vw, 5.85rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  heading:
    fontFamily: "Libre Caslon Text, Iowan Old Style, Palatino, serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Schibsted Grotesk, Avenir Next, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Schibsted Grotesk, Avenir Next, Segoe UI, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.22em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  section: "clamp(4.5rem, 10vw, 8.5rem)"
  measure: "40rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.4rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "#2C2A26"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.4rem"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.95rem 0.2rem"
---

## Overview

Provenance is a buyer’s representative, not a dealership. The site is cream paper and charcoal ink: editorial, sparse, photographic. Official Porsche 911 Dakar (Moab / Shade Green / Rallye Design) and BMW launch stills carry the atmosphere. Press cars are never inventory. Type is Caslon for headlines (title-and-paper) and Schibsted Grotesk for UI. Hairline rules instead of cards. One primary action: Start an acquisition.

## Colors

Paper `#F3F0EA` is the page. Ink `#161513` is type, rules, and primary buttons. A slightly warmer sheet `#E7E2D8` is used only for the about band. Footer inverts to ink with paper type. No accent color. Selection inverts ink/paper.

## Typography

Libre Caslon Text, 400 and italic, for display and section titles. Never a kicker above a heading. Schibsted Grotesk for nav, body, buttons, credits. Body measure stays near 40rem. Tracking on display sits around `-0.03em`. Photo credits are 0.68rem Grotesk, muted.

## Layout

Full-bleed first viewport (100svh), copy bottom-left, credit bottom-right. Then a short position statement, two photography columns with captions underneath, a three-column complex-deal band, a three-up gallery, a cinematic Dakar break, service rows as type (not icon tiles), about on the warmer sheet, inquiry form, ink footer. Gutter `clamp(1.25rem, 4vw, 3.5rem)`. Section space `clamp(4.5rem, 10vw, 8.5rem)`. Max content width ~90rem. City and service pages inherit the same nav, type, paper, and footer; their heroes are type-on-paper, not a second full-bleed.

## Elevation & Depth

No drop shadows on content. Separation is a 1px rule at `rgba(22, 21, 19, 0.14)`. Photography is the only depth. Hero and break use a dark scrim so type holds. Do not add glass, glow, or ghost cards.

## Shapes

Square corners. Buttons, inputs, and photos are unrounded. Inputs are a bottom rule only. Pills are not part of this system.

## Components

**Nav.** Fixed. Transparent paper type over the homepage hero; solid paper + ink after scroll and on inner pages. Wordmark is tracked Grotesk. One CTA: Start an acquisition. Mobile: two-line toggle, full-sheet menu with Caslon links.

**Buttons.** Ink fill, paper type, 0.81rem Grotesk. On the hero, invert to paper fill. Ghost buttons keep a hairline and fill ink on hover.

**Service rows.** Title | body | text link, divided by rules. No numerals, no icons.

**Forms.** Visible labels, underline fields, native select. Submit is the primary button.

**Footer.** Ink ground, three columns (mark + blurb, services, compact Texas links), then a photography credit that names Porsche AG and BMW AG and states press vehicles are not inventory.

## Do's and Don'ts

**Do** lead with acquisition and messy paper (titles in transit, not in seller’s name, salvage/crash/damage).

**Do** use the Dakar and BMW press set already in `images/` and `images/press/`. Credit discreetly.

**Do** keep city/service/blog pages on the shared paper system.

**Don't** use Unsplash or generic stock in place of the press set.

**Don't** present press cars as Provenance inventory, publish a rate card, invent testimonials, or add a WhatsApp `wa.me` URL.

**Don't** restore icon-card grids, city-link sprawl on the homepage, kickers, or a second accent color.
