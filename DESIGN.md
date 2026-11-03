---
name: Employee Roster
description: WordPress shift scheduling and staff rostering, all in one plugin.
colors:
  sea-glass-teal: "#3DBDA8"
  sea-glass-teal-deep: "#2A9D8A"
  sea-glass-teal-ink: "#1B6F61"
  sea-glass-teal-light: "#7FDCCB"
  sea-glass-teal-hover: "#64CDBB"
  deep-harbour-navy: "#1E2D3D"
  harbour-mist: "#EEF1F4"
  tide-line: "#D5E0E8"
  paper-white: "#FFFFFF"
  slate-muted: "#5b6e83"
  slate-muted-on-dark: "#9aabbd"
  status-green: "#15803d"
  status-red: "#dc2626"
  status-cross: "#9a4f4f"
  note-blue: "#2563EB"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.5px"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.2rem)"
    fontWeight: 800
    letterSpacing: "-0.3px"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "1px"
  mono:
    fontFamily: "'SFMono-Regular', Consolas, monospace"
    fontSize: "0.84em"
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "14px"
  pill: "20px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "52px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.sea-glass-teal}"
    textColor: "{colors.deep-harbour-navy}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.sea-glass-teal-hover}"
  button-outline-on-dark:
    textColor: "{colors.paper-white}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  button-plan:
    backgroundColor: "{colors.sea-glass-teal}"
    textColor: "{colors.deep-harbour-navy}"
    rounded: "{rounded.md}"
    padding: "12px"
  nav-cta:
    backgroundColor: "{colors.sea-glass-teal}"
    textColor: "{colors.deep-harbour-navy}"
    rounded: "{rounded.sm}"
    padding: "8px 18px"
  nav-bar:
    backgroundColor: "{colors.deep-harbour-navy}"
    textColor: "{colors.paper-white}"
    height: "60px"
    padding: "0 24px"
  feature-card:
    backgroundColor: "{colors.paper-white}"
    rounded: "{rounded.lg}"
    padding: "28px"
  pricing-card:
    backgroundColor: "{colors.paper-white}"
    rounded: "{rounded.xl}"
    padding: "32px 28px"
    width: "220px"
  plan-badge:
    backgroundColor: "rgba(61,189,168,.12)"
    textColor: "{colors.sea-glass-teal-ink}"
    rounded: "{rounded.pill}"
    padding: "3px 10px"
  docs-search:
    backgroundColor: "{colors.harbour-mist}"
    textColor: "{colors.deep-harbour-navy}"
    rounded: "{rounded.md}"
    padding: "7px 30px 7px 12px"
  table-header:
    backgroundColor: "{colors.deep-harbour-navy}"
    textColor: "{colors.paper-white}"
    padding: "14px 16px"
---

# Design System: Employee Roster

## Overview

**Creative North Star: "The Shift Board"**

The site looks like a well-run staff board: organised rows, calm colours, and one teal marker that points at what matters. Deep Harbour Navy frames every page top and bottom (nav bar and footer), cool Harbour Mist bands separate sections, and white cards and tables carry the content. Teal is the only accent, and it marks the things a visitor should act on or notice: buttons, active links, plan badges, ticks.

The feel is friendly and dependable. Corners are soft, motion is a gentle lift, and nothing shouts. It is aimed at small-business owners, not developers, so the system leans on familiar patterns (sticky nav, card grid, comparison table, three pricing cards) and keeps them tidy rather than inventing new ones. The same tokens are copied into all three surfaces: landing page, docs and blog.

**Key Characteristics:**
- Navy frame, mist bands, white content surfaces, one teal accent.
- System font stack throughout; weight (700–800) does the hierarchy work, not a display face.
- Soft 8–14px corners; pills for badges; circles for step numbers.
- Flat at rest; a soft teal glow and a 1–2px lift appear only on hover.
- Tables are a first-class component: navy header, mist zebra rows, green ticks and faded red crosses.

## Colors

A cool, low-saturation palette of navy and grey-blue with a single sea-glass teal accent.

### Primary
- **Sea Glass Teal** (`sea-glass-teal`): the one accent, used as a **fill or border only**. Primary and plan buttons, nav CTA, step-number circles and the "Most Popular" pill (all with navy text), the featured pricing card's border, the active sidebar link's left rule, callout left borders, focus-free decorative tints.
- **Sea Glass Teal, Ink** (`sea-glass-teal-ink`): teal **as text** on white or mist: section labels, plan badges, the active docs link, pricing ticks, list bullets, "Read more" links, the focus ring on light surfaces, and the end stop of the hero gradient.
- **Sea Glass Teal, Light** (`sea-glass-teal-light`): teal as text on navy or the hero gradient: the hero headline's highlighted words, hero badge, Starter column label, the focus ring on dark surfaces.
- **Sea Glass Teal, Hover** (`sea-glass-teal-hover`): hover fill for teal buttons (lighter, so navy text keeps its contrast).
- **Sea Glass Teal, Deep** (`sea-glass-teal-deep`): legacy mid teal, kept for reference; don't use it behind or as text.

### Neutral
- **Deep Harbour Navy** (`deep-harbour-navy`): nav bar, footer, table headers, all headings and strong text. The site's frame and its ink.
- **Harbour Mist** (`harbour-mist`): alternate section backgrounds (trust bar, how-it-works, pricing), table zebra rows, inline code and search field backgrounds.
- **Tide Line** (`tide-line`): every 1px border and divider: cards, table rows, sidebar groups, h2 underlines in docs.
- **Paper White** (`paper-white`): cards, pricing cards, docs reading surface, text on navy and teal.
- **Slate Muted** (`slate-muted`): secondary and body copy on white and mist (feature card text, doc paragraphs, captions, cell notes). 5.3:1 on white, 4.6:1 on mist.
- **Slate Muted on Dark** (`slate-muted-on-dark`): footer text and links on navy.

### Status
- **Status Green** (`status-green`): ✓ in comparison tables.
- **Status Cross** (`status-cross`): ✗ in comparison tables; a quiet brick red rather than a faded alert red.
- **Status Red** (`status-red`): the warning callout border and inline "red" examples.
- **Note Blue** (`note-blue`): the informational callout variant only.

### Named Rules
**The One Marker Rule.** Teal is the only accent colour. Plan buttons named navy, amber and purple in the CSS all render teal; keep it that way. A second accent would turn the board into noise.

**The Navy Frame Rule.** Every page opens with the navy nav bar and closes with the navy footer. Navy is also the colour of headings, so content always reads as part of the same frame.

**The Ink Rule.** Bright Sea Glass Teal never carries text and never sits behind white text; both fail contrast. Teal text uses Teal Ink on light surfaces and Teal Light on navy; teal fills carry navy text.

**The Tint, Don't Paint Rule.** Teal and status colours appear on large areas only as faint tints (6–18% alpha backgrounds, 25–35% alpha borders), as in callouts, plan badges and the hero badge. Solid teal is reserved for small action surfaces.

## Typography

**Display Font:** System UI stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
**Body Font:** Same stack
**Label/Mono Font:** `'SFMono-Regular', Consolas, monospace` for inline code and shortcodes

**Character:** One native sans in every role, so the site feels like the WordPress admin the buyer already uses. Hierarchy comes from heavy weights (800 for headings, 700 for titles) and slight negative tracking on large sizes.

### Hierarchy
- **Display** (800, `clamp(2rem, 5vw, 3.2rem)`, 1.15): hero headline only, white on the gradient, with key words in teal.
- **Headline** (800, `clamp(1.6rem, 3vw, 2.2rem)`): landing-page section titles. Docs article h1 is 800 at 1.75rem; blog post h1 is 800 at `clamp(1.8rem, 4vw, 2.5rem)`.
- **Title** (700, 1–1.1rem): card titles, pricing tier names, docs h2 (1.1rem with a Tide Line underline), step titles.
- **Body** (400, 0.88–1.05rem, 1.6; 1.8 in docs, 1.85 in blog): Slate Muted for running copy, Deep Harbour Navy for `strong`. Docs and blog cap the reading column at 760–780px.
- **Label** (700, 0.72–0.8rem, 0.4–1px tracking, often uppercase): section eyebrows in teal, sidebar group toggles in navy, plan badges, the "Most Popular" pill.

### Named Rules
**The Weight Does the Work Rule.** Never add a second typeface for emphasis. Step up the weight (700 → 800) or the size; colour headings navy.

## Layout

- **Containers:** landing sections are centred at `max-width: 1000px` with 80px vertical and 24px horizontal padding. Docs articles are 780px wide with 48px/40px padding; blog posts 760px.
- **Rhythm:** sections alternate white and Harbour Mist, separated by Tide Line borders. Section intro copy sits ~52px above its content.
- **Grids:** feature cards use `repeat(auto-fit, minmax(280px, 1fr))` with 24px gaps; how-it-works steps use `minmax(200px, 1fr)` with thin vertical dividers between steps. Pricing cards are a wrapping flex row of fixed 220px cards with 20px gaps.
- **Docs:** a 260px sticky white sidebar (collapsible groups, search on top) beside a white reading column, below the 60px sticky nav.
- **Responsive:** at ≤768px the docs sidebar becomes an off-canvas drawer opened by a full-width menu button; at ≤600px nav links hide (brand only), step dividers drop, and pricing cards go full width up to 320px. Wide tables scroll horizontally inside `.table-wrap`.

## Elevation & Depth

Flat at rest. Depth comes from the navy/mist/white tonal layering and 1px Tide Line borders. Shadows are used sparingly and are teal-tinted, not grey, except on the nav bar and mobile drawer.

### Shadow Vocabulary
- **Teal glow** (`box-shadow: 0 4px 24px rgba(61,189,168,.15)`): feature-card hover.
- **Featured glow** (`box-shadow: 0 4px 28px rgba(61,189,168,.2)`): the featured pricing card, always on.
- **Nav lift** (`box-shadow: 0 2px 12px rgba(0,0,0,.2)`): sticky nav bar.
- **Drawer** (`box-shadow: 4px 0 20px rgba(0,0,0,.15)`): mobile docs sidebar.

### Named Rules
**The Lift on Touch Rule.** Surfaces only rise in response to the pointer: buttons move up 1px, cards up 2px with the teal glow. The featured pricing card is the single exception that glows at rest.

## Shapes

Soft, friendly corners scaled to the element: 4px for inline code, 6px for nav links and the nav CTA, 8px for buttons, inputs and table header corners, 12px for feature cards, 14px for pricing cards. Badges and the "Most Popular" tag are full pills (20px); step numbers are circles. Callouts square off their left edge (`0 8px 8px 0`) so the 3px coloured rule reads as a straight marker.

## Components

### Buttons
Friendly and dependable: solid, rounded and clearly clickable.
- **Shape:** gently rounded (8px).
- **Primary:** Sea Glass Teal fill, navy 700-weight text (6.0:1), 14px × 32px padding.
- **Hover:** fills to the lighter Sea Glass Teal Hover and lifts 1px (`transition: background .15s, transform .1s`); no lift under reduced motion.
- **Focus:** 2px outline at 2px offset in Teal Ink (Teal Light on navy and the hero), shared by every link, button and input.
- **Outline (on dark):** transparent with a 2px white border at 40% opacity; border goes solid white on hover. Used beside the primary button in the hero.
- **Plan button:** full-width teal block at the foot of each pricing card (12px padding, 0.9rem); hover drops opacity to 85%. The outline variant uses a 2px Tide Line border with navy text.
- **Nav CTA:** smaller teal pill-ish button (6px radius, 8px × 18px) in the nav bar.

### Chips / Badges
- **Plan badge:** pill with a faint teal tint and Teal Ink 700-weight text at 0.72rem (`Starter+` 12% tint, `Professional+` 18% tint). Sits above the first paragraph of a docs article.
- **Hero / article badge:** uppercase pill with a teal tint, teal text and a 1px teal border at ~30% alpha.

### Cards / Containers
- **Corner Style:** 12px (feature cards), 14px (pricing cards).
- **Background:** Paper White on white or Harbour Mist sections.
- **Shadow Strategy:** none at rest; teal glow and 2px lift on hover (feature cards). See Elevation & Depth.
- **Border:** 1px Tide Line; the featured pricing card swaps to a teal border.
- **Internal Padding:** 28px (feature), 32px × 28px (pricing).

### Inputs / Fields
- **Style:** docs search field on a Harbour Mist background with a 1px Tide Line border and 8px radius; a clear (×) button appears inside on the right when there's text.
- **Focus:** border turns Sea Glass Teal (outline removed).

### Navigation
- **Top nav:** 60px sticky Deep Harbour Navy bar (`.site-nav`). Brand (32px logo + 700-weight name) on the left; links at 0.9rem in 80% white, going full white on hover; current page link in teal; Download Free on the far right.
- **Mobile nav (≤600px):** links collapse behind a 44px menu button (SVG three-line icon, swaps to an X). Open, they drop down as a full-width navy panel of 1rem links with 12px padding. Closes on link tap, outside tap or Escape; the button reports `aria-expanded`.
- **Skip link:** "Skip to content" sits above the nav, hidden until focused.
- **Docs sidebar:** white, 260px, collapsible groups with uppercase 0.78rem navy toggles and a rotating ▼. Links are Slate Muted, indented, with a transparent 2px left border; hover gives a mist background; the active link turns teal with a teal left border and a 6% teal tint.

### Comparison Table (signature)
The core proof surface on both the landing page and docs. Navy header row with white 600-weight text and 8px rounded top corners; Harbour Mist zebra rows; 1px Tide Line row dividers; green ✓ and brick-red ✗ (Status Cross) centred in plan columns; small Slate Muted `cell-note` lines under values for caveats.

### Callouts (signature, docs)
Flex row with an emoji icon and body text in navy at 0.9rem. Default: 7% teal tint, teal 3px left rule. Note: 5% blue tint, Note Blue rule. Warn: 5% red tint, Status Red rule.

## Do's and Don'ts

### Do:
- **Do** use Sea Glass Teal for every action and highlight, and Sea Glass Teal Deep for its hover.
- **Do** alternate white and Harbour Mist sections, separated by 1px Tide Line borders.
- **Do** colour headings and `strong` text Deep Harbour Navy and running copy Slate Muted.
- **Do** keep comparison data in the navy-header table with ✓ / ✗ and `cell-note` caveats.
- **Do** copy the shared `:root` token block exactly when adding a page; landing, docs and blog all use the same values.
- **Do** keep hover motion small: 1px lift for buttons, 2px plus teal glow for cards, and drop the lift under `prefers-reduced-motion`.
- **Do** put navy text on teal fills, Teal Ink for teal text on light surfaces, and Teal Light for teal text on navy.
- **Do** copy the shared accessibility block (focus ring, selection colour, skip link, mobile nav, reduced motion) into any new page.

### Don't:
- **Don't** introduce a second accent colour; tier buttons stay teal regardless of their class names.
- **Don't** add a display or web font; the system stack is part of the WordPress-native feel.
- **Don't** use grey drop shadows on content surfaces; content shadows are teal-tinted and appear on hover only.
- **Don't** paint large areas solid teal; use tints (6–18% alpha) for backgrounds and borders.
- **Don't** use sharp 0px corners on cards or buttons.
- **Don't** put white text on any teal, or use bright Sea Glass Teal as a text colour.
- **Don't** hide navigation on small screens without a menu button to reach it.
