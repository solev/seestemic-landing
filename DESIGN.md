---
name: Seestemic
description: "White ground, near-black Geist, warm gray cards and black pills, with example product UI floating on painted landscapes and a speech-bubble helper whose eyes follow you."
colors:
  ink: "#0b0b0b"
  ink-hover: "#2b2b2a"
  brand: "#0c79d8"
  brand-strong: "#0a6bc2"
  brand-soft: "#cde4fa"
  brand-ring: "#b9d5f2"
  ok: "#157a48"
  ok-soft: "#eaf5ee"
  danger: "#a1301b"
  danger-mark: "#c2452d"
  helper-quotes: "#F07C3A"
  helper-inbox: "#2FB39A"
  helper-front-desk: "#7A5CFA"
  helper-invoices: "#E9558B"
  helper-bookkeeping: "#6BAF4B"
  helper-questions: "#2E9EFF"
  helper-report: "#E8B22F"
  helper-handbook: "#4A5BD4"
  tool-sheets: "#3E9E62"
  tool-files: "#D99A1E"
  bg: "#ffffff"
  ink-2: "#5d5d5a"
  ink-3: "#6b6b67"
  card: "#f6f5f3"
  card-strong: "#efeeeb"
  card-hover: "#e7e6e2"
  line: "#e8e7e3"
  line-strong: "#dddcd7"
  line-connector: "#d3d1cb"
  chrome: "#fafaf9"
  avatar-person: "#e6dfd3"
  art-dawn: "#d8c6b5"
  art-vignette: "#cbbfae"
  art-field: "#c9c4a6"
  art-harvest: "#bdaa8a"
  shadow: "#000000"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3.6vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 1.55rem + 1.3vw, 2.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.022em"
  booking-title:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.375rem, 1.25rem + 0.5vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.3125rem, 1.2rem + 0.35vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.012em"
  question:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.012em"
  wordmark:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.0625rem, 0.98rem + 0.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    letterSpacing: "-0.01em"
  label-sm:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
  small:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
  ui:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
  tag:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.4
  numeric:
    fontFamily: "Geist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontFeature: "tnum"
rounded:
  device: "54px"
  device-screen: "44px"
  xl: "32px"
  lg: "24px"
  composer: "22px"
  panel: "20px"
  bubble: "18px"
  md: "16px"
  inset: "14px"
  sm: "12px"
  xs: "10px"
  2xs: "8px"
  tail: "6px"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  section: "clamp(5rem, 10vw, 8.5rem)"
  head-gap: "clamp(2rem, 4vw, 3rem)"
  card-pad: "2rem"
  grid-gap: "1.25rem"
  cta-gap: "0.75rem"
  shell: "1200px"
  shell-wide: "1320px"
  header: "68px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.375rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
  button-secondary:
    backgroundColor: "{colors.card-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.375rem"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.card-hover}"
  button-small:
    typography: "{typography.label-sm}"
    padding: "0 1rem"
    height: "38px"
  pill-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "0 0.8125rem"
    height: "30px"
  pill-light:
    backgroundColor: "{colors.card-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 0.8125rem"
    height: "30px"
  example-tag:
    backgroundColor: "{colors.card-strong}"
    textColor: "{colors.ink-2}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: "0.1875rem 0.5625rem"
  chip:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.pill}"
    padding: "0 0.875rem 0 0.375rem"
    height: "44px"
  chip-hover:
    backgroundColor: "{colors.card-strong}"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.875rem"
  nav-link-hover:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
  card-section:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card-pad}"
  painted-stage:
    rounded: "{rounded.xl}"
  app-window:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.panel}"
  job-card:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-pad}"
  bubble-you:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.panel}"
    padding: "0.625rem 1.0625rem"
  bubble-reply:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "0.5rem 1rem"
  bubble-founder:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "0.75rem 1.125rem"
  founder-photo:
    backgroundColor: "{colors.card-strong}"
    rounded: "{rounded.circle}"
    size: "48px"
  helper:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  step-number:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.circle}"
    size: "36px"
  faq-toggle:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.circle}"
    size: "34px"
  faq-toggle-open:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
---

# Design System: Seestemic

## Overview

**Creative North Star: "The Painted Showroom"**

Seestemic's page is a quiet white showroom. Near-black Geist, warm gray cards and black pills hold still so that two things can perform: example software floating on impressionist landscapes, and the helper, a speech-bubble character whose eyes follow the visitor around the page. The brief pins the world to xAI's Grok Bot product page. Every asset in it is Seestemic's own: an original mascot, original generated paintings and the Seestemic logo.

Density is low at page level and high inside the product UI. Sections breathe, and type stays compact because the paintings and the giant helpers carry the scale. The helpers break card edges and run off the viewport. Inside the floating windows the system turns dense and exact, with small UI text, 1px hairline rings and spacing tuned pixel by pixel. Motion is soft and decelerating, on one ease-out curve, and most of it belongs to the helper.

Honesty is part of the look. Everything that depicts work is labelled "Example". The page has no logo walls, ratings or metric bands, because there is no approved proof to fill them. The one trust signal is a real person: Martin introduces himself in a short chat, using only facts he has approved. Colour is earned: the interface is ink on white and warm gray, and saturated hue appears only in the paintings, in each helper's own colour and in the tool icons.

**Key Characteristics:**
- White ground, near-black ink, warm gray cards, 1px hairline rules.
- One typeface, Geist, at medium weight, with negative tracking that tightens as it grows.
- A black pill for the one action and a warm gray pill for the alternative.
- Example product UI floating on painted impressionist landscapes.
- The helper, a speech-bubble squircle whose eyes follow the pointer. It appears as a word in the headline, as a coloured avatar, and as a giant that breaks its frame.
- Flat gray cards. Shadows belong only to white UI lifted off a painting.
- Every demo visual is labelled "Example".

## Colors

An ink-on-white interface with warm, faintly yellowed grays. Hue lives in the paintings and the helpers, never in the chrome.

### Primary
- **Near-Black Ink** (#0b0b0b): text, headings, primary pills, the owner's "you" bubbles, the solid helper, selected chips, step numbers and the open FAQ toggle. It is the colour of action and of the owner's voice.
- **Soft Black** (#2b2b2a): the hover state of primary pills, and nothing else.

### Secondary
- **Seestemic Blue** (#0c79d8): the 2px focus ring and the back chevron in the depicted phone.
- **Deep Signal Blue** (#0a6bc2): unread counts and the "New" badge inside product UI. It is the only filled blue.
- **Selection Wash** (#cde4fa) and **New Ring** (#b9d5f2): pale brand tints. Selection Wash is the text-selection highlight, and New Ring is the 1.5px inset ring on a memory row the helper has just learned. Neither fills a control.
- **Done Green** (#157a48) on **Done Wash** (#eaf5ee): completion. It covers step checks, "Sent", "Ready", switched-on toggles, system confirmations, the check beside the hero note, the checks on the Partner card's points and the lock beside the closing data note.
- **Error Brick** (#a1301b) and **Error Ember** (#c2452d): the booking panel's failure state, brick for the status text and ember for its 8px dot. They appear nowhere else.

### Tertiary
- **Helper identity hues.** Each helper owns one hue: Quotes Orange (#F07C3A), Inbox Teal (#2FB39A), Front Desk Violet (#7A5CFA), Invoices Pink (#E9558B), Bookkeeping Green (#6BAF4B), Questions Blue (#2E9EFF), Report Yellow (#E8B22F) and Handbook Indigo (#4A5BD4). The hue fills that helper's avatar body wherever the helper appears: sidebar rows, job chips, the job card, the phone header, the approval panel and handoff rows.
- **Tool icons.** In the tools vignette, six app glyphs sit on white tiles over the coast painting, each in its own hue. Email, Calendar, Accounting and Website chat borrow Questions Blue, Quotes Orange, Inbox Teal and Front Desk Violet. Two hues exist only here: **Sheets Green** (#3E9E62) for Spreadsheets and **Files Amber** (#D99A1E) for Shared files.

### Neutral
- **Gallery White** (#ffffff): the page ground, every product UI surface, the rows on quiet cards and Martin's bubbles in the founder chat.
- **Warm Graphite** (#5d5d5a): leads, descriptions, nav links and secondary text inside UI.
- **Pebble** (#6b6b67): metadata such as timestamps, captions, placeholders and footer fine print.
- **Linen** (#f6f5f3): section cards, helper bubbles inside UI, chips at rest and nav hover.
- **Stone** (#efeeeb): secondary pills, tags, the Example pill, the menu button and the founder photo's placeholder.
- **Pressed Stone** (#e7e6e2): the hover state for stone controls.
- **Hairline** (#e8e7e3): every 1px rule and ring, including FAQ dividers, footer rules, window dividers and ring shadows.
- **Strong Hairline** (#dddcd7): one step darker, for small marks that must read on white or chrome: the window's three title-bar dots, the dashed rule under the doc card's metadata, the track of a pending step's spinner and the booking status spinner.
- **Connector** (#d3d1cb): the darkest line step, used only for the 2px connector that joins consecutive hand-off rows.
- **App Chrome** (#fafaf9): the title bar and sidebar of the depicted app window.
- **Oat** (#e6dfd3): the avatar disc of a person in the demo, such as the example customer. People stay neutral, and only helpers wear a hue.
- **Shadow Black** (#000000): the base of every shadow and edge in Elevation & Depth, always at 0.04–0.45 alpha and never opaque.

Each painted frame also carries a flat load-in fill in its own painting's mean tone, so a frame never flashes white while the image loads: **Dawn Sand** (#d8c6b5) behind the hero, **Vignette Putty** (#cbbfae) behind both showcase paintings **Field Sage** (#c9c4a6) behind the job stage and **Harvest Straw** (#bdaa8a) behind the pilot band. These tones belong to their paintings and never appear as interface colour.

### Named Rules
**The Ink-on-Paper Rule.** The interface itself is achromatic: ink, warm grays and white. Saturation enters only through the paintings, the helper avatars and the tool icons, and status colour stays small and local: blue for new, green for done and brick for a failed load. Buttons, headings and section backgrounds never take a hue.

**The Blue Is a Signal Rule.** Brand blue appears only in the focus ring, the phone's back chevron, text selection and marks of something new: unread counts, the "New" badge and the New Ring. It never fills a button, colours a heading or styles a link. Links are ink with a 1px warm gray underline that darkens on hover.

**The One Hue per Helper Rule.** A helper keeps its hue everywhere, and the hue appears only as its avatar body. Any helper larger than an avatar is ink. A tool icon may borrow a helper's hue, always as a glyph on a white tile and never as a body.

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Geist (same stack)
**Label/Mono Font:** none. Numerals use Geist with tabular figures.

**Character:** One neutral grotesque does every job. It stays at medium weight and tightens as it grows, so headings read as calm statements, not shouts.

### Hierarchy
- **Display** (500, clamp(2.5rem, 1.5rem + 3.6vw, 4rem), 1.06): the hero line only. It is centred, and the solid helper sits in it as a word at 0.98em.
- **Headline** (500, clamp(2rem, 1.55rem + 1.3vw, 2.5rem), 1.1): every section title, including the closing question.
- **Booking Title** (500, clamp(1.375rem, 1.25rem + 0.5vw, 1.75rem), 1.15): the booking panel head only.
- **Title** (500, clamp(1.3125rem, 1.2rem + 0.35vw, 1.5rem), 1.2): step cards and the job card.
- **Small Title** (600, 1.125rem, 1.3): showcase card titles.
- **Question** (500, clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem), 1.3): FAQ questions.
- **Wordmark** (600, 1.1875rem, 1): the "Seestemic" logotype beside the mark, in the header and the footer.
- **Lead** (400, clamp(1.0625rem, 0.98rem + 0.4vw, 1.25rem), 1.5): the paragraph under each headline, in warm graphite, held to 36rem. The hero lead runs to 46rem and is balanced.
- **Body** (400, 1.0625rem, 1.55): running text. FAQ answers are held to 60ch. Paragraphs wrap "pretty" and headings wrap "balance".
- **Label** (500, 1rem): button text. **Small Label** (500, 0.9375rem) covers small buttons, nav links and chips.
- **Small** (400, 0.875rem, 1.45): the app window's base text, the stage caption and the booking status line. Short heads at this size step up to 600: the doc title, the phone's status bar and the footer column heads.
- **UI** (400, 0.8125rem, 1.4): text inside depicted product UI, including mini pills (at 500), the sidebar preview, the thread subtitle and doc row values. Names inside UI step up to weight 600.
- **Tag** (500, 0.72rem, 1.4): the Example pill, tool pills, status pills and the smallest metadata: timestamps, unread badges, row meta, the phone's day divider and compact tool-tile labels.

### Named Rules
**The One Family Rule.** Geist is the only typeface. Geist Mono was removed on purpose, so times, prices and IDs use Geist with tabular figures. The world pins Geist, so the detector's "overused font" flag on it is expected and is not a defect.

**The Medium Voice Rule.** Display, headline, titles and questions are weight 500. Weight 600 is reserved for the wordmark and for small labels at 1.125rem and below: names in UI, card titles and step numbers. Nothing at heading size is bold.

**The Tighten-with-Size Rule.** Tracking is only ever negative, and it grows with size: −0.01em on buttons, −0.012em on small titles and questions, −0.02em on titles, −0.022em on headlines and −0.028em on display. The wordmark is a logotype outside this scale, at −0.035em. Everything is set in sentence case. Headings take no trailing period, though a question keeps its question mark.

## Layout

The page runs in a single centred column: a 1200px content shell, and a wider 1320px shell for the hero stage, with fluid gutters on both sides. The 68px header is sticky, and anchor jumps clear it by 16px.

- **Vertical rhythm.** Each section opens with clamp(5rem, 10vw, 8.5rem) of space above it, and the closing gets more (clamp(6rem, 12vw, 10rem)). Section heads are capped at 44rem and sit clamp(2rem, 4vw, 3rem) above their content. Heads that argue a point are left-aligned, and heads that introduce a picker, the steps or the founder chat are centred.
- **Hero.** The composition is centred: the display line, the lead, a CTA row and a small checked note. Below it the painted stage spans the wide shell, with the app window (up to 1180px) floating inside and a centred pebble caption underneath.
- **Grids.** The showcase is 2×2 and the process is three equal columns, both with 1.25rem gaps. The Partner card under the steps reuses the same three columns. The FAQ splits 5fr/7fr with a sticky intro, and the footer splits 2fr/1fr/1fr.
- **Inner spacing.** Inside product UI, spacing is tuned by eye in single-pixel steps (5, 6, 7, 9, 10, 12 and 14px). There is no coarse scale to snap to. The durable rhythm lives at section and card level.
- **Responsive.**
  - At 1180px and below, the app window's sidebar collapses to a 72px avatar rail.
  - At 1024px and below, the teammate card stacks. The giant helper shrinks to clamp(340px, 86vw, 500px) and sits below the copy, still breaking out to the right.
  - Between 761 and 1279px, the chips form a four-column grid.
  - At 900px and below, the showcase, process (capped at 560px), pilot band, Partner card and FAQ go single-column. The pilot band stacks its card under a strip of painting, and its helper peeks over the card. The window stacks: its sidebar becomes horizontal pill tabs and the thread reorders. The phone shortens and drops below the job card.
  - At 860px and below, the header nav collapses into a round menu button.
  - At 760px and below, frames step down one radius, chips scroll edge to edge and the window dots hide.
  - At 480px and below, tool pills drop out of demo steps, the founder chat's photos shrink to 36px and its quick replies stack full width, and the footer becomes one column.

### Named Rules
**The One Crop Rule.** A giant helper is cropped by exactly one edge. The teammate helper rises through its card's top edge and runs off the right of the viewport, and only the card's bottom edge cuts it. The pilot helper rises from the pilot band's bottom edge; when the band stacks, it peeks over the white card instead, and the card's top edge cuts it. The closing outline helper is cut at the waist by the footer's top rule. Never box a giant helper inside its container.

## Elevation & Depth

The system is a hybrid. The page itself is flat and tonal, built from white ground, warm gray cards and hairlines. Depth appears only when white product UI lifts off a painting or off another surface inside the UI. Shadows are soft, wide, negatively spread and built on Shadow Black at low alpha, never opaque. They are never hard, offset or coloured.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 2px 4px rgb(0 0 0 / 0.04), 0 30px 70px -26px rgb(0 0 0 / 0.45)`): white product UI on a painting, namely the app window, the approval panel, the job card and the phone.
- **Lift** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.05), 0 14px 30px -14px rgb(0 0 0 / 0.3)`): small white objects, namely the tool tiles on the coast painting and the white "On it." reply on the teammate card.
- **Contact** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.04)`): the white bubbles of the founder chat on linen. It gives white just enough edge to part from linen without lifting a whole thread off the card.
- **Hairline Ring** (`box-shadow: 0 0 0 1px var(--line)`): the edge of a white object inside UI, such as the selected sidebar row, attachments, the composer and the booking frame. Use rings, not borders.
- **Ring and Soft Drop** (`box-shadow: 0 0 0 1px var(--line), 0 10px 30px -14px rgb(0 0 0 / 0.18)`): a white card resting inside UI, such as the doc card. Phone cards and the composer use smaller versions.
- **Window Edge** (`box-shadow: 0 0 0 1px rgb(0 0 0 / 0.05)`): paired with Float on the app window, and with a soft drop on the mobile menu panel.
- **Scrolled Header** (`box-shadow: 0 1px 0 rgb(0 0 0 / 0.07)`): appears after 8px of scroll, over white at 84% with `backdrop-filter: saturate(1.8) blur(18px)`.

### Named Rules
**The Flat Gray, Floating White Rule.** Warm gray cards never cast shadows and never carry borders. Shadows belong to white UI, and Float-level shadows appear only where UI sits on a painting.

## Shapes

The form language is soft, generous and concentric. Frames, cards and panels are rounded rectangles, every control is a full pill, and avatars, toggles and step numbers are circles. Rules and rings are 1px hairlines. Small marks inside UI, such as spinner tracks, the hand-off connector and dashed or inset rings, go to 1.5–2px, and the outline helper keeps its own line.

### Named Rules
**The Speech-Bubble Corner Rule.** The house silhouette is a rounded rectangle with one tighter corner. The helper's body is a continuous-curvature squircle with three wide corners and a tighter bottom-right tail (48, 48, 20 and 48 units on a 100-unit body). Every chat bubble is an 18–20px rounded rectangle with a single 6px corner pointing at whoever is speaking. When one speaker sends a run of bubbles beside a single photo, as Martin does in the founder chat, only the first bubble takes the corner.

**The Woven Mark Rule.** The logo mark is a six-lobed rosette woven from a single ribbon, drawn in ink (`currentColor`) with no fill colour of its own. It comes in two cuts that share one silhouette. The original three-band cut (`src/assets/brand/seestemic-mark.svg`) is for 64px and above. The two-band small cut (`seestemic-mark-small.svg`) is for the header, the footer and anything at 48px or below. On a dark ground the mark turns white and its gaps stay open. The 16px favicon frame swaps to a solid silhouette, because the ribbon gaps close up at that size.

**The Nested Corners Rule.** Radii step down as you go inward: a 32px frame, a 20px window or panel, 16px cards, 12–14px rows, 10px fields and mini rows, 8px attachment chips and focus rings, then pills. A child never has a larger radius than its parent. At 760px and below the outer frames step down a notch: frames to 24px, and the window and tool tiles to 14px. Two shapes keep their own geometry: the composer is 22px, so a one-line reply reads as a pill and a wrapped reply stays a soft rectangle, and the depicted phone is a 54px frame around a 44px screen, concentric across its 10px bezel.

**The Bleed-Off-the-Bottom Rule.** Insets inside warm gray cards are open at the bottom. They have rounded top corners (20px for paintings, 18px for mini UI) and square bottom corners, and the card's own edge crops them. Copy sits on top and the inset runs out of the card.

## Components

### Buttons
Pills you can't misread: one black, one gray.
- **Shape:** full pill (999px).
- **Primary:** an ink pill with a white label at 48px tall and 1.375rem side padding.
- **Hover / Focus:** hover softens to Soft Black over 0.2s, and a press scales to 0.97. Focus shows the global 2px brand-blue outline at a 3px offset. Hovering or focusing any primary call to action turns the visible helpers' eyes into happy arcs and lifts them slightly.
- **Secondary:** a stone pill with an ink label that turns Pressed Stone on hover.
- **Small:** 38px tall with 1rem side padding, in the header and booking panel.
- **Mini pills:** inside product UI, 30px tall at UI size (0.8125rem) and weight 500. Dark (ink) marks the action, light (stone) the alternative, and ghost (graphite text, no fill) the dismissal.
- **Pairing:** a CTA row pairs one primary with one secondary, centred and 0.75rem apart. A short graphite note may sit 1rem below a CTA row with a small Done Green glyph, such as "No tech skills needed." in the hero and the EU data note at the close. The glyph stays inline, so it travels with the first word when the note wraps.

**The One Black Choice Rule.** In any set of choices exactly one element is black: the primary action or the current selection. This covers CTA rows, Approve / Edit / Not now, the job tabs and the picked row in a list. Everything else is stone, linen or ghost.

### Chips
- **Job tabs:** 44px pills, linen at rest, with Small Label text and a 32px avatar helper tucked 6px from the left edge. Hover turns them stone, and the selected tab is ink with white text. At 760px and below they scroll horizontally edge to edge with the scrollbar hidden.
- **Small pills:** tool pills (linen, Tag size), status pills (stone, turning to Done Wash when sent) and the "Start here" and "Ready" mini badges.

### Example Tag
- **Style:** a Tag-size pill in stone with graphite text. It sits at the right of the app window's title bar. On paintings and quiet stages it pins to the top-left corner, 0.875rem in, in white at 90% when it sits on art.

**The Example Pill Rule.** Every visual that depicts work carries an "Example" pill. That covers the app window, the approval panel, the memory and handoff lists, and the job stage with its phone. Example content is never presented as a customer, a result or a measurement.

### Cards / Containers
- **Corner Style:** 32px, stepping down to 24px at 760px and below.
- **Background:** linen, flat (see Elevation & Depth).
- **Border:** none.
- **Internal Padding:** clamp(1.5rem, 3vw, 2.25rem) on showcase cards and 2rem on step cards.
- **Showcase (2×2):** copy sits on top as a small title and graphite text. Two cards end in painted insets that bleed off the bottom, at least 360px tall. The two quiet cards hold white 14px rows on linen, up to 420px wide and centred. A pending row gets a dashed hairline outline, and a 2px Connector line joins consecutive rows.
- **Step cards:** a 36px ink circle with a white numeral, a title and graphite text, then the step's price, then a white mini UI rising from the card bottom. The price sits under a Strong Hairline rule: the figure at 1.5rem, weight 500 and tabular figures, with "from" and "a month" in graphite at 0.9375rem, over a short graphite label. Care's figure is followed by "after the pilot, optional" ("after setup, optional" once the pilot closes), kept whole so it wraps as one piece, and its label says what it includes: up to 4 hours of Seestemic's time and a check-in each month. While the founding-client pilot is open, step 2 carries a white 36px "First 5 clients" pill level with its numeral, its figure reads "€500 one-time" with "€1,500" struck through in pebble at 1.0625rem, and its label says the pilot covers one small helper for one task. "One-time" sits where Care says "a month", so the pilot never reads as a monthly price. The mini UI has 18px top corners, a soft upward shadow and a minimum height of 184px. In three columns the cards share the grid's five rows through subgrid, so the price rules and mini UIs line up whatever wraps above them.
- **Pilot band:** while founding places remain (`founding` in `src/data/offer.ts`), a painted stage on the harvest painting sits 1.25rem under the steps, at least 440px tall. A white 20px card with Float holds the heading "Be one of our first 5 clients", the graphite terms (a one-time founding price, a short written case study after 6 to 8 weeks), the price ("€500 one-time", "€1,500" struck, labelled "One small helper, set up for one task"), five 22px seat circles with a 1.5px dashed outline that fill ink as places are taken, the graphite line "Book a free AI review to claim one of 5 places." and a black "Book a free AI review" pill that opens the booking panel. It is black because it is the page's one action, not an alternative to it. A 300px giant ink helper rises from the band's bottom edge on the right, saying "I could be your first helper." in a white reply bubble with Lift. The band and the step 2 flag disappear once every place is taken.
- **Partner card:** a linen 32px card 1.25rem under the steps (under the pilot band while it shows) that borrows their three columns, each padded like a step card. The question "Want AI across your whole company?" and a graphite line sit under step 1. Three graphite points with Done Green checks sit under step 2. The price ("from €1,200 a month", labelled "Partner") sits under step 3, level with the question, so it reads beside Care's price. At 900px and below it stacks to 560px, and the price takes its Strong Hairline rule back.
- **Fine print:** three centred pebble lines at 0.9375rem, held to 40rem and set 2rem under the Partner card. One sentence group per line: everything built is the client's to keep and AI costs are separate; no VAT is added; larger setups of €4,000 or more may qualify for EIS co-funding. "EIS co-funding" links to the funding answer in the FAQ.
- **Teammate card:** a linen card that holds the headline, the lead and three black "you" bubbles on the left, with the giant solid helper and its "On it." reply on the right.

### Painted Stage
The signature frame: a 32px-radius frame filled edge to edge with an original impressionist landscape in dabbed brushwork, aerial perspective and broken colour. The five paintings are dawn, coast, meadow, field and harvest, and each appears on one stage only. White product UI floats on the painting with Float. The hero stage pads its window in from the sides and bottom. The jobs stage is 640px tall and crops the phone at its bottom bezel.

**The Words on White Rule.** No running text sits bare on a painting. Every word over art sits on white: the window, a panel, a tile label or the Example pill. Paintings are never scrimmed, tinted or blurred for legibility.

### App Window
- **Frame:** white with a 20px radius (14px at 760px and below), carrying Window Edge plus Float. It enters with a 1.1s rise from 56px below.
- **Title bar:** 44px of app chrome over a hairline. It holds three Strong Hairline dots, a centred UI-size title at weight 600 in graphite, and the Example tag and Replay control on the right.
- **Sidebar:** 248px of app chrome. It has a slightly darker 10px search field and 12px rows with 32px avatar helpers. The selected row turns white with a Hairline Ring, and unread counts sit in Deep Signal Blue.
- **Thread:** incoming messages sit in linen 16px cards. The helper replies in linen bubbles with the tight corner at its avatar, and the owner speaks in ink bubbles on the right. Progress steps turn from a spinner (Strong Hairline track, ink head) into a green check on Done Wash. The result arrives as a white 16px doc card with Ring and Soft Drop, a dashed Strong Hairline rule under its metadata and tabular figures.
- **Choreography:** parts reveal by fading up 6px over 0.45s on the shared ease-out curve.

### Inputs / Fields
- **Style:** no live form fields ship. Booking happens in an embedded Cal.com calendar inside a white 24px frame with a Hairline Ring under a status row. While the calendar loads the status row spins a Strong Hairline ring with an ink head, and if it fails the text turns Error Brick beside an Error Ember dot. The depicted composer is the field language: a white 22px field with a Hairline Ring and a small drop that reads as a pill on one line, with its placeholder in pebble.
- **Focus:** the global 2px brand-blue outline at a 3px offset.
- **Send state:** the composer's 32px circular send button turns from stone to ink once there is text, and presses to 0.84.

### Navigation
- **Header:** a sticky 68px three-column grid with the logo on the left, the nav centred and the actions on the right. It is transparent at rest and frosts after 8px of scroll (see Elevation & Depth).
- **Links:** Small Label pills in graphite that take a linen fill and ink text on hover. The actions are a small secondary "Email us" and a small primary "Free AI review".
- **Mobile (860px and below):** links and email hide. A 38px stone circle with two 1.5px ink lines that cross into an × opens a white 20px menu panel with 12px rows. Escape and outside clicks close it.
- **Footer:** a hairline top rule over a brand column with an underlined ink mail link. Graphite links turn ink on hover, and the bottom row sits under a second hairline in pebble at 0.8125rem.

### Speech Bubbles
- **You:** ink bubbles with white 1rem text and a 20px radius whose bottom-left corner tightens to 6px. They stack left-aligned 0.5rem apart. In the app window and phone they shrink to 18px, align right and put the tight corner at the bottom-right.
- **Helper reply:** on linen, a white bubble with Lift ("On it.", weight 500) whose tight corner faces the helper. Inside UI the helper speaks in linen or stone, with the tight corner at its avatar.
- **Typing:** three 6px dots bounce in a linen bubble.

### Founder Chat
"Who's behind Seestemic" introduces Martin as a short chat thread instead of a bio, so the founder, and every client's first contact, speaks in the page's own conversation grammar. His last answer brings in the team that builds with him.
- **Card:** a flat linen card (32px, and 24px at 760px and below) padded clamp(2rem, 6vw, 4.5rem) by clamp(1rem, 5vw, 4rem). The thread is centred and held to 640px, with 1.25rem between turns.
- **Martin:** a 48px circular photo (36px at 480px and below) on a stone placeholder. Beside it, a Small line names him, "Martin Solev" at 600 in ink and his role in graphite, above white bubbles with Contact. The bubbles are set at the Question size but weight 400 with a 1.45 line height, padded 0.75rem 1.125rem and held to 30em. The first bubble of each turn tightens its top-left corner to 6px toward his photo.
- **Owner:** one ink "you" bubble on the right at the same size, held to 24em, with its 6px corner at the bottom-right and no shadow.
- **Quick replies:** the last turn ends in a CTA row 0.625rem apart. The primary "Book a free AI review" opens the booking panel. Beside it is a white secondary "LinkedIn" pill with an external icon, which turns stone on hover. It is white instead of stone because stone barely parts from linen. At 480px and below both stretch full width.
- **Screen readers:** the photos are decorative, and hidden "You:" and "Martin:" prefixes name the speakers.
- **Motion:** the thread plays once when it scrolls into view. Photo, name, bubbles and replies fade up 12px, 650ms apart, with opacity over 0.5s and movement over 0.6s on the shared ease-out, so the last beat lands about 3.3s in. Without JavaScript or with reduced motion, the whole chat is simply shown.

### The Helper
The signature character: a speech-bubble squircle with two white pill eyes, tilted −7° by default (−9° on the teammate card and −6° at the close).
- **Solid:** ink body with white eyes. It appears as a word in the hero line (0.98em, dropped 0.17em below the baseline), as the 112px hub of the tools diagram with a soft drop shadow, and as the giant on the teammate card (clamp(680px, 62vw, 800px)).
- **Outline:** ink hairline body and eyes with no fill. It is the closing giant (clamp(600px, 76vw, 980px)), shown to 58.5% of its height.
- **Avatar:** the helper's own hue with white eyes, still and unblinking, at 24–44px.
- **Motion:** the eyes follow the pointer within 6–8 viewBox units over 0.45s. Each helper blinks every 6.5s, staggered so no two blink together. After 3.5s without pointer movement, or on touch screens, the eyes glance around on their own. The closing outline draws itself once when it scrolls into view: the body over 2.2s, then the eyes over 1s starting at 1.5s, on cubic-bezier(0.65, 0, 0.35, 1).
- **Reduced motion:** no following, no blinking and no drawing, with the outline shown complete. All other transitions collapse.

### FAQ Accordion
- **Style:** a hairline-ruled list of questions in 500 weight with 1.375rem vertical padding. Each question has a 34px linen circle holding a plus, which turns stone on hover.
- **Open:** the plus rotates 45° into an × and the circle fills ink with a white icon. The answer appears in graphite at up to 60ch, and its height animates over 0.4s where the browser supports it. Only one question is open at a time.
- **Links:** an answer may end in an underlined ink link to an outside source, such as the EIS grant conditions, which opens in a new tab. An answer can also be a link target (the funding answer is `#funding`). Following a link to it opens that answer and closes the others.

### Share Video
The hero in miniature, sized for a link preview: the promise stays on white while one example job runs start to finish in the window. The source is `prototypes/og-video/a-one-job.html`, rendered by `prototypes/og-video/render.mjs`. It is the user's provisional pick and is not yet wired into the site's share tags.
- **Format:** a muted 1280×720 (16:9) loop of 10s at 30fps. It is H.264 High in yuv420p (CRF 21, a keyframe every 2s) with faststart and no audio track, encoded from frames captured at 2× and downscaled, at about 1MB.
- **Loop:** every beat runs on one seekable 10s clock, so the last frame hands straight back to frame 0. Any periodic motion divides the loop: the step spinner turns once every 0.83s, a twelfth of it.
- **Frame 0:** a finished card on its own, because most platforms show only the still. It holds the logo, the hero line and the dawn band with the window peeking. Frame 0 is the poster, and cropped to y 24–696 and scaled to 1200×630 it is the og:image, so at frame 0 nothing that matters sits in the top or bottom 24px. In play, the quote's action row comes to rest 18px above the bottom edge.
- **Centre clearance:** platforms draw a play button over the poster, about 64px wide at a 400px preview and so about 205px at 1280. At frame 0 the centre of the frame is painting, and the button covers only the dawn and the window's title bar, whose title is chrome. No story line sits under it.
- **Layout:** the logo (28px, the woven mark at 1.47em) and the hero line sit centred on white, the logo 46px from the top and 14px above the line. The line is Display at 80px with the solid helper as a word, as in the hero. Below them the hero's Painted Stage becomes a band on the dawn painting: 40px in from the sides, its 32px top corners at y 232, cropped by the frame's bottom edge. The painting is only positioned and cropped, with its ridge above the window's peek edge, and Dawn Sand is its load-in fill. The App Window floats in the band 64px in from its sides and also runs off the bottom.
- **The window at share scale:** the App Window keeps its chrome at a larger size: a 24px radius and a 52px title bar with three 14px Strong Hairline dots, a 19px title and the Example tag on the right. The sidebar takes its narrow form, an 88px avatar rail with 42px avatars on 64px rows and Quotes selected. The pane opens on a 48px Quotes avatar, the helper's name and its line. The thread holds one request: a linen card for the example customer with an Oat initial disc and a white "4 photos" attachment, then four progress steps, then the doc card with a larger Ring and Soft Drop. The doc card carries the quote number, a status badge, the total in tabular figures and the action row. Tool pills and the Replay control stay out at share size.
- **Type floors:** set by the Read Where It Plays Rule below. The story lines are the steps (40px, 500), the names "Quotes", "Dental clinic" and "Quote" (40px, 600) and the total (46px, 600). The supporting labels are the lines beside the names (the pane line, "New customer" and Q-1042) and the attachment at 26px, the status badge at 24px, and "Total", the pill labels and "Sent to the clinic" at 30px on 64px pills and rows. Only the window chrome sits below the floor: the 19px title and the Example pill.
- **Motion:** the site's grammar on the loop's clock, on the shared ease-out unless noted.
  - *Window:* it rests 148px below its working position, its top edge at y 400. At 1.0s it rises over the site's 1.1s. At 7.7s it sinks below the frame over 0.6s on an accelerating ease-in, cubic-bezier(0.55, 0, 0.75, 0.2). The stage stays painting-only for 0.6s, then the next request rises back to the peek, arriving on the loop's last frame.
  - *Steps:* each step fades up 6px over 0.45s with a spinner (Strong Hairline track, ink head). Its check pops from 0.4 over 0.35s onto a Done Wash disc, and its text turns from graphite to ink over 0.3s. The steps check in at 2.15, 2.7, 3.25 and 4.4s, and the last one waits on the quote. At 3.45s the stream scrolls once over 0.6s (ease-in-out), so the last step and the quote share the view under the pane header's soft 22px fade.
  - *Quote:* the doc card fades up at 3.65s under a stone "Drafting…" badge, which crossfades to "Ready for you" at 4.4s and to a Done Wash "Sent" at 5.45s.
  - *The one ink action:* "Approve & send" (ink) and "Edit" (stone) fade in only with "Ready for you", the way the live demo's after-step parts wait for their step. The ink pill presses to 0.94 at 5.15s, and the row gives way to a Done Wash "Sent to the clinic" confirmation that fades up 6px.
  - *Headline helper:* its eyes look down at the window (6–8 viewBox units), glance right as the quote readies, look straight out while the stage is empty and drop back as the next request rises. When the quote is sent its eyes turn to happy arcs from 5.55s to 7.35s, with the site's happy lift (−3%, −2°) held until 7.25s and settled by 7.7s. That beat is what reads at embed size. It blinks twice a loop, at 0.4s and 8.75s. The avatars in the rail and the pane never blink or smile.
- **Copy:** every word is verbatim site copy, so the video is re-rendered whenever that copy changes. The hero line comes from the homepage and the window title from the demo window. The helper's line and the job's request, steps, amounts and confirmation come from the site's example data (`src/data/helpers.ts`), and the badge words from the live demo (`src/scripts/demo.ts`). The window keeps its Example pill, and nothing is added beyond the site's words: no claims, metrics or call to action.

**The Read Where It Plays Rule.** A share video is read muted at chat size, about 400px wide, where 40px on the 1280px frame reads as about 12.5px. Its story lines are set at 40px or more and its supporting labels at 24–30px, whatever size the same words take on the site.

## Do's and Don'ts

### Do:
- **Do** keep the page ground white and the interface achromatic: ink text, graphite leads, linen and stone surfaces, and hairline rules.
- **Do** pair one black primary pill with one stone secondary pill in every CTA row (48px tall, 0.75rem apart).
- **Do** float example product UI on a painted landscape inside a 32px frame with the Float shadow, and pin an "Example" pill to it.
- **Do** set headings in Geist 500, tracked tighter as they grow (−0.028em display, −0.022em headline, −0.02em title), in sentence case and without a trailing period.
- **Do** set times, prices and IDs in Geist with tabular figures.
- **Do** let insets bleed off the bottom of warm gray cards, with rounded top corners and square bottom corners cropped by the card.
- **Do** step radii down as you go inward (32, 20, 16, 12, 10px, then pills for controls), and give every chat bubble one 6px corner pointing at its speaker.
- **Do** give each helper its one fixed hue as an avatar, and draw any helper larger than an avatar in ink.
- **Do** let a giant helper break out of its frame, cropped by exactly one edge.
- **Do** honour reduced motion: still eyes, no blinking, and the outline helper shown fully drawn.
- **Do** make frame 0 of a share video a finished still, because it is also the poster and the og:image: nothing that matters in its top or bottom 24px, and no story line under the centre play button.

### Don't:
- **Don't** add a second typeface. Geist Mono was removed on purpose, and the system has no serif or display face.
- **Don't** use brand blue on buttons, headings, links or large surfaces. It is for the logo, the focus ring, text selection and marks of something new.
- **Don't** put shadows or borders on warm gray cards. Depth belongs to white UI lifted off a painting.
- **Don't** set running text bare on a painting, and don't scrim, tint or blur the art to make it legible. Put the words on white.
- **Don't** set headings bold. Weight 600 is for labels at 1.125rem and below.
- **Don't** put a small label above a section heading. A section opens with its heading and lead.
- **Don't** build testimonial cards, client-logo strips, star ratings or metric bands, and don't ship a demo visual without its Example pill. There is no approved proof to show.
- **Don't** use hard offset shadows, coloured shadows or heavy strokes. Rules and rings are 1px hairlines, small marks inside UI go no heavier than 2px, and the outline helper keeps its own line.
- **Don't** reuse xAI or Grok assets, marks or mascots, and don't swap the paintings for stock photos or flat vector scenes. The world is rebuilt from Seestemic's own helper, logo and generated paintings.
- **Don't** carry the site's UI type sizes into a share video. Its story lines stay at 40px or more on the 1280px frame and its supporting labels at 24px or more, and tool pills stay out of it.
